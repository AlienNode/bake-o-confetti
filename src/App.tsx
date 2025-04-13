
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutAuthor from "./pages/AboutAuthor";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import LegalPage from "./pages/LegalPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/recipe/:slug" element={<RecipeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-author" element={<AboutAuthor />} />
            
            {/* Category Routes */}
            <Route path="/category/:category" element={<CategoryPage />} />
            
            {/* Legal Routes */}
            <Route path="/legal/:pageType" element={<LegalPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
