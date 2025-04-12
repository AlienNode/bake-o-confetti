
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Utensils, Users, UserRound } from 'lucide-react';

export interface Recipe {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  difficulty: string;
  content?: string;
  ingredients?: string[];
  instructions?: string[];
  galleryImages?: string[];
  author?: string;
  servings?: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="block transform hover:-translate-y-1 transition-all duration-300">
      <Card className="h-full overflow-hidden border-2 hover:border-primary hover:shadow-md">
        <div className="h-48 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <CardContent className="pt-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
          
          {recipe.author && (
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <UserRound className="h-3 w-3 mr-1" />
              <span>By {recipe.author || "Julian Nwadinobi"}</span>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between text-sm text-gray-500 pt-0">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Utensils className="h-4 w-4" />
            <span>{recipe.difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Serves {recipe.servings || 4}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
