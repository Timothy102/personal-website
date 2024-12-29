'use client';

// components/MDXComponents.tsx
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import MDXImage from './MDXImage';

// Create a wrapper component for img that handles HTML img props
const ImgComponent = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return <MDXImage src={props.src || ''} alt={props.alt || ''} />;
};

export const MDXComponents = {
  img: ImgComponent,
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