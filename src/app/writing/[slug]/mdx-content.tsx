'use client';

// app/writing/[slug]/mdx-content.tsx
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import { MDXComponents } from '../../../components/MDXComponents';

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const renderMDX = async () => {
      const mdx = await serialize(source, {
        parseFrontmatter: true,
      });
      setMdxSource(mdx);
    };
    
    renderMDX();
  }, [source]);

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...mdxSource} components={MDXComponents} />;
}