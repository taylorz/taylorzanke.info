import React from 'react';
import './PageContainer.scss';

const PageContainer = ({ children, className }) => (
  <div className={`page-container ${className}`}>
    {children}
  </div>
);

export default PageContainer;