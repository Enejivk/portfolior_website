import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false 
}) => {
  return (
    <div 
      className={`
        bg-gray-900 border border-gray-800 rounded-lg overflow-hidden
        ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${className}`}
      />
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-5 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-bold text-white mb-2 ${className}`}>{children}</h3>;
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return <p className={`text-gray-400 ${className}`}>{children}</p>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`px-5 py-4 border-t border-gray-800 ${className}`}>{children}</div>;
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export default Card;