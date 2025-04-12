
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const currentPage = parseInt(queryParams.get('page') || '1', 10);
  
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  
  const ITEMS_PER_PAGE = 5;
  
  // Filter recipes based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (recipe.content && recipe.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [searchQuery]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  // Handle page change
  const handlePageChange = (newPage: number) => {
    // Preserve search query when changing pages
    const params = new URLSearchParams(location.search);
    params.set('page', newPage.toString());
    navigate({ search: params.toString() });
    // Scroll to top when changing page
    window.scrollTo(0, 0);
  };
  
  // Get recent recipes (5 most recent)
  const recentRecipes = [...recipes].sort((a, b) => {
    const idA = typeof a.id === 'number' ? a.id : parseInt(a.id, 10);
    const idB = typeof b.id === 'number' ? b.id : parseInt(b.id, 10);
    return idB - idA;
  }).slice(0, 3);

  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Image background */}
          <div className="w-full h-96 md:h-[500px] relative">
            <img 
              className="absolute inset-0 w-full h-full object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20241213/pngtree-colorful-donuts-with-sprinkles-on-a-pastel-background-appealing-for-dessert-image_16783699.jpg" 
              alt="Colorful donuts with sprinkles on pastel background"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">eazyrecipes</h1>
              <div className="flex justify-center mb-4">
                <span role="img" aria-label="chef" className="text-5xl animate-float text-shadow-sm">👨‍🍳</span>
              </div>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 text-center text-shadow-sm">
                Welcome to our simple cooking blog! Discover delicious recipes that are easy to make.
              </p>
            </div>
          </div>
        </div>
        
        {/* Recent Posts Section */}
        {!searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <Clock className="mr-2 h-6 w-6 text-primary" />
              Recent Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recentRecipes.map((recipe) => (
                <RecipeCard key={`recent-${recipe.id}`} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
        
        {/* Search Results Heading */}
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-gray-600">
              Found {filteredRecipes.length} matching recipes
            </p>
          </div>
        )}
        
        {/* All Recipes / Search Results */}
        <div className="mb-8">
          {!searchQuery && <h2 className="text-2xl font-bold mb-6 text-gray-800">All Recipes</h2>}
          {paginatedRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No recipes found. Try a different search term.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => navigate('/')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
