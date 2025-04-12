
import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '@/data/recipes';
import { Star, Calendar, Award, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RecipeOfMonth = () => {
  // For demo purposes, we'll pick a specific recipe as recipe of the month
  // In a real app, this would come from an API or be managed by admins
  const recipeOfTheMonth = recipes[0]; // Using the first recipe as featured
  
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-12 border-2 border-primary">
      <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-lg z-10 flex items-center">
        <Award className="mr-1 h-4 w-4" />
        <span className="font-bold">Recipe of the Month</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-auto">
          <img 
            src={recipeOfTheMonth.image} 
            alt={recipeOfTheMonth.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">April 2025</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{recipeOfTheMonth.title}</h3>
          
          <p className="text-gray-600 mb-4">{recipeOfTheMonth.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <span>Editor's Choice</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-1" />
              <span>Serves 4</span>
            </div>
          </div>
          
          <div className="mt-4">
            <Link to={`/recipe/${recipeOfTheMonth.slug}`}>
              <Button>View Recipe</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfMonth;
