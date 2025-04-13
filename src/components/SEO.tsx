
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const SEO = ({
  title,
  description = "Discover delicious and easy recipes that anyone can make at home.",
  canonicalUrl,
  keywords = "recipes, cooking, food, easy recipes, homemade, cooking tips",
  ogImage = "/og-image.png",
  ogType = "website"
}: SEOProps) => {
  const siteTitle = "Eazy Recipes";
  const fullTitle = `${title} | ${siteTitle}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
