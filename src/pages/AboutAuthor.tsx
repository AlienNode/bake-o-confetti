
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { UserRound, Heart, BookOpen, Github, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutAuthor = () => {
  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 bg-baking-pink rounded-full flex items-center justify-center mb-4">
                <UserRound className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">About The Author</h1>
              <p className="text-gray-600 mt-2">Passionate home cook and recipe developer</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Hi there! I'm the creator behind eazyrecipes, a passionate cook who believes that delicious food doesn't have to be complicated. 
                My culinary journey started in my grandmother's kitchen, where I learned that the best dishes are made with love and simple ingredients.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                After years of experimenting with recipes and sharing them with friends and family, I decided to create this blog to reach a wider audience. 
                My mission is to make cooking accessible to everyone, regardless of their skill level or experience in the kitchen.
              </p>
              
              <div className="bg-baking-blue bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" /> My Cooking Philosophy
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Simple ingredients yield extraordinary results</li>
                  <li>Cooking should be fun, not stressful</li>
                  <li>Anyone can cook with the right guidance</li>
                  <li>There's always room for experimentation</li>
                  <li>Food brings people together</li>
                </ul>
              </div>
              
              <div className="bg-baking-yellow bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-2" /> My Culinary Background
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  While I don't have formal culinary training, I've spent countless hours perfecting recipes, attending workshops, and learning from both successes and failures. 
                  I believe that cooking is as much about heart as it is about technique, and I'm excited to share my journey with you.
                </p>
              </div>
              
              <div className="flex justify-center gap-4 mt-8">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://github.com/wackydawg', '_blank')}
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
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
