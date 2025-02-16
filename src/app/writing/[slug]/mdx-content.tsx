// app/writing/[slug]/mdx-content.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';
import type { ImgHTMLAttributes, DetailedHTMLProps } from 'react';
import MDXImage from '../../../components/MDXImage';

interface MDXContentProps {
  source: string;
}

// Create proper type for img component props
type ImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const components: MDXComponents = {
  MDXImage: MDXImage,
  img: ({ src, alt, width, height, className, ...props }: ImgProps) => {
    if (!src) return null;
    
    return (
      <MDXImage
        src={src}
        alt={alt || ''}
        width={typeof width === 'number' ? width : 800}
        height={typeof height === 'number' ? height : 400}
        className={className}
        {...props}
      />
    );
  }
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={components}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            development: process.env.NODE_ENV === 'development'
          }
        }}
      />
    </article>
  );
}