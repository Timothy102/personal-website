'use client';

// components/MDXImage.tsx
import Image from 'next/image';
import type { FC } from 'react';

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const MDXImage: FC<MDXImageProps> = ({ 
  src, 
  alt,
  width = 800,
  height = 400 
}) => {
  // Clean up the path
  const imagePath = src.startsWith('/') ? src.slice(1) : src;
  
  return (
    <div className="my-8">
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

// Also add a default export
export default MDXImage;