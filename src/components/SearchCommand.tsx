
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "@/components/ui/command";
import { recipes } from '@/data/recipes';
import { Search } from 'lucide-react';

interface SearchCommandProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchCommand: React.FC<SearchCommandProps> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

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

  const handleSelectRecipe = (recipeSlug: string) => {
    setOpen(false);
    navigate(`/recipe/${recipeSlug}`);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setOpen(false);
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search recipes..." 
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No recipes found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {filteredRecipes.slice(0, 5).map((recipe) => (
            <CommandItem 
              key={recipe.id} 
              onSelect={() => handleSelectRecipe(recipe.slug)}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded overflow-hidden">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                </div>
                <span>{recipe.title}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        {searchQuery && (
          <CommandGroup>
            <CommandItem onSelect={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              <span>Search for "{searchQuery}"</span>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommand;
