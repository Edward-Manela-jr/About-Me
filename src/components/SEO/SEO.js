import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, path }) => {
  const baseTitle = 'Elijah Chileshe - Software Engineer';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Elijah Chileshe's portfolio showcasing projects, publications, and professional experience in software engineering and AI/ML."} />
      <meta name="keywords" content="Elijah Chileshe, Software Engineer, AI/ML, Portfolio, Publications, Projects" />
      <meta name="author" content="Elijah Chileshe" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://elijahchileshe.com${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || "Elijah Chileshe's portfolio showcasing projects, publications, and professional experience in software engineering and AI/ML."} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://elijahchileshe.com${path}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || "Elijah Chileshe's portfolio showcasing projects, publications, and professional experience in software engineering and AI/ML."} />
    </Helmet>
  );
};

export default SEO;
