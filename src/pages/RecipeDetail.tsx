
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeGallery from '@/components/RecipeGallery';
import { recipes } from '@/data/recipes';
import { Clock, Utensils, ChevronLeft, Users, Sparkles, Star, UserRound, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import RecipeCard from '@/components/RecipeCard';
import Newsletter from '@/components/Newsletter';
import { Separator } from "@/components/ui/separator";
import SEO from '@/components/SEO';

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
      <SEO 
        title={recipe.title}
        description={recipe.description || `Learn how to make ${recipe.title} with this easy recipe. ${recipe.prepTime} prep time, ${recipe.difficulty} difficulty.`}
        keywords={`${recipe.title}, recipe, cooking, ${recipe.categories?.join(', ') || ''}, homemade, easy recipes`}
        ogImage={recipe.image}
        ogType="article"
      />
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
                  <span>Serves {recipe.servings || 4}</span>
                </div>
              </div>
            </div>
            
            {/* Author info */}
            <div className="flex items-center mb-6 bg-gray-50 p-3 rounded-lg">
              <div className="flex-shrink-0 mr-3">
                <div className="w-12 h-12 bg-baking-pink rounded-full flex items-center justify-center">
                  <UserRound className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  By {recipe.author || "Julian Nwadinobi"}
                </p>
                <p className="text-sm text-gray-500">Food Scientist & Culinary Innovator</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{recipe.content}</p>
            
            {/* Recipe Ratings */}
            <div className="mb-8 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="h-5 w-5" 
                      fill={star <= 5 ? "#FFD700" : "none"} 
                      stroke={star <= 5 ? "#FFD700" : "#CBD5E0"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0 (32 reviews)</span>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Save Recipe</span>
              </Button>
            </div>
            
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
            
            {/* Nutrition Info */}
            <div className="mt-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Nutrition Information</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary">320</p>
                  <p className="text-sm text-gray-600">Calories</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary">12g</p>
                  <p className="text-sm text-gray-600">Protein</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary">42g</p>
                  <p className="text-sm text-gray-600">Carbs</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary">14g</p>
                  <p className="text-sm text-gray-600">Fat</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *Nutrition values are estimated and may vary based on ingredients and serving size.
              </p>
            </div>
            
            <Separator className="my-8" />
            
            {/* Chef's Tips */}
            <div className="mt-8 mb-8 bg-baking-blue bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                Chef's Tips
              </h2>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  For best results, bring all refrigerated ingredients to room temperature before starting.
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Don't overmix the batter, as this can lead to a dense texture.
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  This recipe can be prepared up to 24 hours in advance and stored in the refrigerator.
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  For a gluten-free version, substitute regular flour with a 1:1 gluten-free flour blend.
                </li>
              </ul>
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
        
        {/* Newsletter */}
        <div className="max-w-4xl mx-auto mb-12">
          <Newsletter />
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
