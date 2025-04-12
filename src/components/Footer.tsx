
import React from 'react';
import { Heart, Github, Globe, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-sm py-12 border-t mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-primary text-lg mb-4">eazyrecipes</h3>
            <p className="text-gray-600 text-sm">Simple cooking for everyone since 2024</p>
            <p className="text-gray-500 text-xs mt-1">By Julian Nwadinobi</p>
            
            <div className="flex gap-3 mt-4">
              <Button 
                variant="outline" 
                size="icon" 
                aria-label="GitHub" 
                className="rounded-full hover:bg-baking-pink h-9 w-9"
                onClick={() => window.open('https://github.com/juliannwadinobi', '_blank')}
              >
                <Github className="h-4 w-4 text-gray-600" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                aria-label="Website" 
                className="rounded-full hover:bg-baking-blue h-9 w-9"
                onClick={() => window.open('https://juliannwadinobi.com', '_blank')}
              >
                <Globe className="h-4 w-4 text-gray-600" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                aria-label="Instagram" 
                className="rounded-full hover:bg-baking-pink h-9 w-9"
              >
                <Instagram className="h-4 w-4 text-gray-600" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                aria-label="Facebook" 
                className="rounded-full hover:bg-baking-blue h-9 w-9"
              >
                <Facebook className="h-4 w-4 text-gray-600" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                aria-label="Twitter" 
                className="rounded-full hover:bg-baking-yellow h-9 w-9"
              >
                <Twitter className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
              </li>
              <li>
                <Link to="/about-author" className="text-gray-600 hover:text-primary">Author</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Recipe Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Breakfast</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Lunch</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Dinner</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Desserts</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Snacks</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>and good ingredients</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} eazyrecipes. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
