
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchCommand from './SearchCommand';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [commandOpen, setCommandOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <nav className="bg-white bg-opacity-90 backdrop-blur-sm py-4 px-6 border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span role="img" aria-label="chef" className="text-2xl">👨‍🍳</span>
            <span className="text-2xl font-bold text-primary">eazyrecipes</span>
          </Link>
          
          <div className="w-full md:w-auto order-3 md:order-2">
            <div className="relative">
              <button 
                onClick={() => setCommandOpen(true)}
                className="w-full md:w-72 px-4 py-2 pr-10 border border-gray-300 rounded-full flex items-center justify-between text-left text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <span>Search recipes...</span>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs text-muted-foreground">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                  <Search className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
          
          <div className="flex gap-6 order-2 md:order-3">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link to="/about-author" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Author
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
      <SearchCommand open={commandOpen} setOpen={setCommandOpen} />
    </>
  );
};

export default Navbar;
