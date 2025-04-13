
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { UserRound, Heart, BookOpen, Github, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';

const AboutAuthor = () => {
  return (
    <div className="min-h-screen confetti-bg">
      <SEO 
        title="About Julian Nwadinobi"
        description="Learn more about Julian Nwadinobi, the food scientist and culinary innovator behind Eazy Recipes."
        keywords="Julian Nwadinobi, food scientist, chef, culinary innovator, recipe author, food blogger"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 bg-baking-pink rounded-full flex items-center justify-center mb-4">
                <UserRound className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">About The Author</h1>
              <p className="text-gray-600 mt-2">Culinary Innovator and Food Storyteller</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Hi there! I'm Julian Nwadinobi, the creative mind behind eazyrecipes. 
                My passion for cooking stems from a rich cultural heritage and a deep love for exploring culinary traditions from around the world.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With a background in food science and a lifetime of cooking experience, 
                I've dedicated myself to creating recipes that are not just meals, but experiences that bring people together.
              </p>
              
              <div className="bg-baking-blue bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" /> My Culinary Philosophy
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Food is a universal language of love and connection</li>
                  <li>Every recipe tells a story</li>
                  <li>Cooking is an art form that nourishes both body and soul</li>
                  <li>Innovation meets tradition in the kitchen</li>
                  <li>Sharing meals creates lasting memories</li>
                </ul>
              </div>
              
              <div className="bg-baking-yellow bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-2" /> Professional Background
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As a trained food scientist and passionate home cook, 
                  I've spent years exploring the intricate world of flavors, techniques, and culinary traditions. 
                  My approach combines scientific precision with creative passion, bringing unique and delightful recipes to life.
                </p>
              </div>
              
              <div className="flex justify-center gap-4 mt-8">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://github.com/juliannwadinobi', '_blank')}
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://juliannwadinobi.com', '_blank')}
                >
                  <Globe className="h-5 w-5" />
                  Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutAuthor;
