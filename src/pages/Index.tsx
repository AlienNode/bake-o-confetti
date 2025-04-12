import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RecipeOfMonth from '@/components/RecipeOfMonth';
import Newsletter from '@/components/Newsletter';
import Confetti from '@/components/Confetti';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const currentPage = parseInt(queryParams.get('page') || '1', 10);
  
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  
  const ITEMS_PER_PAGE = 5;
  
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
  
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(location.search);
    params.set('page', newPage.toString());
    navigate({ search: params.toString() });
    window.scrollTo(0, 0);
  };
  
  const recentRecipes = [...recipes].sort((a, b) => {
    const idA = typeof a.id === 'number' ? a.id : parseInt(a.id, 10);
    const idB = typeof b.id === 'number' ? b.id : parseInt(b.id, 10);
    return idB - idA;
  }).slice(0, 3);

  const enhancedRecipes = recentRecipes.map(recipe => ({
    ...recipe,
    author: "Julian Nwadinobi",
    servings: 4
  }));

  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      <Confetti />
      
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-12 rounded-xl overflow-hidden shadow-xl">
          <div className="w-full h-96 md:h-[500px] relative">
            <img 
              className="absolute inset-0 w-full h-full object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20241213/pngtree-colorful-donuts-with-sprinkles-on-a-pastel-background-appealing-for-dessert-image_16783699.jpg" 
              alt="Colorful donuts with sprinkles on pastel background"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
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
        
        {!searchQuery && (
          <div className="mb-12">
            <RecipeOfMonth />
          </div>
        )}
        
        {!searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <Clock className="mr-2 h-6 w-6 text-primary" />
              Recent Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {enhancedRecipes.map((recipe) => (
                <RecipeCard key={`recent-${recipe.id}`} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
        
        {!searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Recipe Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Breakfast', count: 12, path: '/category/breakfast', color: 'bg-baking-pink' },
                { name: 'Lunch', count: 8, path: '/category/lunch', color: 'bg-baking-blue' },
                { name: 'Dinner', count: 15, path: '/category/dinner', color: 'bg-baking-yellow' },
                { name: 'Desserts', count: 10, path: '/category/desserts', color: 'bg-primary bg-opacity-20' },
                { name: 'Snacks', count: 7, path: '/category/snacks', color: 'bg-lime-200' }
              ].map((category) => (
                <div 
                  key={category.name}
                  className={`${category.color} bg-opacity-70 rounded-lg p-6 text-center hover:bg-opacity-100 transition-all cursor-pointer`}
                  onClick={() => navigate(category.path)}
                >
                  <h3 className="font-bold text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.count} recipes</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
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
        
        <div className="mb-8">
          {!searchQuery && <h2 className="text-2xl font-bold mb-6 text-gray-800">All Recipes</h2>}
          {paginatedRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={{...recipe, author: "Julian Nwadinobi", servings: 4}} />
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
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 mb-12">
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
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
