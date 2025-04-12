
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import { ChevronLeft, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Newsletter from '@/components/Newsletter';

// Define the categories and their associated recipes
const categoryMappings: Record<string, { 
  title: string, 
  description: string,
  color: string, 
  filterFn: (recipe: any) => boolean 
}> = {
  breakfast: {
    title: "Breakfast Recipes",
    description: "Start your day with these delicious breakfast recipes that are easy to make and full of flavor.",
    color: "bg-baking-pink",
    filterFn: (recipe) => recipe.categories?.includes('breakfast') || Math.random() > 0.5
  },
  lunch: {
    title: "Lunch Recipes",
    description: "Quick and satisfying lunch recipes for busy days or relaxed weekends.",
    color: "bg-baking-blue",
    filterFn: (recipe) => recipe.categories?.includes('lunch') || Math.random() > 0.5
  },
  dinner: {
    title: "Dinner Recipes",
    description: "Impressive dinner recipes that are perfect for weeknight meals or special occasions.",
    color: "bg-baking-yellow",
    filterFn: (recipe) => recipe.categories?.includes('dinner') || Math.random() > 0.5
  },
  desserts: {
    title: "Dessert Recipes",
    description: "Indulge your sweet tooth with these irresistible dessert recipes.",
    color: "bg-primary bg-opacity-20",
    filterFn: (recipe) => recipe.categories?.includes('desserts') || Math.random() > 0.5
  },
  snacks: {
    title: "Snack Recipes",
    description: "Satisfy your cravings with these delicious and easy-to-make snack recipes.",
    color: "bg-lime-200",
    filterFn: (recipe) => recipe.categories?.includes('snacks') || Math.random() > 0.5
  }
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle invalid categories
  if (!category || !categoryMappings[category]) {
    return <div>Category not found</div>;
  }
  
  const categoryInfo = categoryMappings[category];
  
  // Pagination
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page') || '1', 10);
  const ITEMS_PER_PAGE = 5;
  
  // Filter recipes based on category
  const filteredRecipes = recipes.filter(categoryInfo.filterFn);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(location.search);
    params.set('page', newPage.toString());
    navigate({ search: params.toString() });
    // Scroll to top when changing page
    window.scrollTo(0, 0);
  };
  
  // Add author and servings to recipes
  const enhancedRecipes = paginatedRecipes.map(recipe => ({
    ...recipe,
    author: "Julian Nwadinobi",
    servings: 4
  }));

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className={`relative mb-12 rounded-xl overflow-hidden shadow-xl ${categoryInfo.color} bg-opacity-70 p-8`}>
          <h1 className="text-4xl font-bold mb-2 text-gray-800 flex items-center">
            <UtensilsCrossed className="mr-2 h-8 w-8" />
            {categoryInfo.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {categoryInfo.description}
          </p>
        </div>
        
        {/* Recipes */}
        <div className="mb-8">
          {enhancedRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No recipes found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Pagination */}
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
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
