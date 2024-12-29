'use client';

// components/MDXImage.tsx
import Image from 'next/image';
import { FC } from 'react';

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const MDXImage: FC<MDXImageProps> = ({ 
  src = '', 
  alt = '',
  width = 800,
  height = 400,
  className = ''
}) => {
  if (!src) return null;

  // Clean up the path
  const imagePath = src.startsWith('/') ? src.slice(1) : src;
  
  return (
    <div className={`my-8 ${className}`}>
      <Image
        src={`/${imagePath}`}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
        priority
      />
    </div>
  );
};

export default MDXImage;