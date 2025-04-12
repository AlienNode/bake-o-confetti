
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeGallery from '@/components/RecipeGallery';
import { recipes } from '@/data/recipes';
import { Clock, Utensils, ChevronLeft, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RecipeCard from '@/components/RecipeCard';

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.slug === slug);
  
  // Get 3 related recipes (excluding current one)
  const relatedRecipes = recipes
    .filter(r => r.slug !== slug)
    .slice(0, 3);
  
  useEffect(() => {
    if (!recipe) {
      navigate('/');
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [recipe, navigate]);
  
  if (!recipe) return null;
  
  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-1"
          onClick={() => navigate('/')}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to recipes
        </Button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto mb-12">
          <div className="h-72 sm:h-96 overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{recipe.title}</h1>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Utensils className="h-5 w-5" />
                  <span>{recipe.difficulty}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>Serves 4</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{recipe.content}</p>
            
            {/* Recipe Gallery */}
            {recipe.galleryImages && recipe.galleryImages.length > 0 && (
              <div className="mb-8">
                <RecipeGallery 
                  images={recipe.galleryImages} 
                  title={recipe.title}
                />
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions?.map((instruction, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="font-bold text-primary mr-2">{index + 1}.</span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            {/* Serving Suggestions */}
            <div className="mt-8 bg-baking-yellow bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                Serving Suggestions
              </h2>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Serve warm with a scoop of vanilla ice cream for a delightful dessert.
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Pair with a cup of hot coffee or tea for a cozy afternoon treat.
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Garnish with fresh mint leaves and a dusting of powdered sugar for an elegant presentation.
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  For a special touch, drizzle with chocolate or caramel sauce before serving.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* More Recipes Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">More Recipes You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRecipes.map((relatedRecipe) => (
              <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
