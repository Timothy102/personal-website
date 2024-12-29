'use client';

// components/MDXComponents.tsx
import { MDXImage } from './MDXImage';

export const MDXComponents = {
  MDXImage,
  img: MDXImage,
  // Add other custom components here
  h1: (props: any) => (
    <h1 
      className="text-5xl font-voyager-thin text-[var(--foreground)] mt-16 mb-8 leading-tight tracking-tight" 
      {...props} 
    />
  ),
  h2: (props: any) => (
    <h2 
      className="text-4xl font-voyager-thin text-[var(--foreground)] mt-16 mb-8 leading-tight tracking-tight" 
      {...props} 
    />
  ),
  p: (props: any) => (
    <p 
      className="text-[#000000cc] dark:text-[#ffffffcc] text-lg leading-relaxed mb-8 font-aeonik-regular" 
      {...props} 
    />
  ),
  li: (props: any) => (
    <li 
      className="text-[#00000099] dark:text-[#ffffff99] text-lg leading-relaxed mb-4" 
      {...props} 
    />
  ),
};

export default MDXComponents;