//this component sets up SEO meta tags for the application using react-helmet. SEO stands for Search Engine Optimization, which helps improve the visibility of the website on search engines by providing relevant metadata.
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, path }) => {
  const baseTitle = 'Edward Manela - Software/Telecoms Engineer';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet> 
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Edward Manela's portfolio showcasing projects, publications, and professional experience in software engineering and AI/ML."} />
      <meta name="keywords" content="Edward Manela, Software Engineer, AI/ML, Portfolio, Publications, Projects" />
      <meta name="author" content="Edward Manela" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://edwardmanela.com${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || "Edward Manela's portfolio showcasing projects, publications, and professional experience in software engineering and AI/ML."} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://edwardmanela.com${path}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || "Edward Manela's portfolio showcasing projects, publications, and professional experience in software engineering and AI/ML."} />
    </Helmet>
  );
};

export default SEO;
