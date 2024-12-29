// app/writing/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from "../../../components/Navbar";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXContent } from './mdx-content';

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/app/writing/content');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Get the content after the frontmatter and first title
    const processedContent = content
      // Remove frontmatter if it somehow remains in content
      .replace(/^---[\s\S]*?---/, '')
      // Remove any title that starts with #
      .replace(/^#\s+.*\n/, '')
      // Remove empty lines at the start
      .trimStart();

    return {
      slug,
      content: processedContent,
      title: data.title,
      date: data.date,
      ...data
    };
  } catch (e) {
    console.error('Error reading MDX:', e);
    return null;
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-voyager-thin mb-4">Post not found</h1>
          <Link 
            href="/writing" 
            className="text-[#00000080] dark:text-[#ffffff80] hover:text-[var(--foreground)] transition-colors"
          >
            ← Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-16">
        <Link 
          href="/writing"
          className="text-[#00000080] dark:text-[#ffffff80] hover:text-[var(--foreground)] transition-colors mb-12 block"
        >
          ← Back to Writing
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl font-voyager-thin text-[var(--foreground)] mb-4 leading-tight tracking-tight">
            {post.title}
          </h1>
          <time className="text-[#00000080] dark:text-[#ffffff80] text-sm italic block">
            {post.date}
          </time>
        </header>

        <article className="prose prose-lg max-w-none dark:prose-invert prose-p:text-[var(--foreground)] dark:prose-p:text-[var(--foreground)] prose-headings:text-[var(--foreground)] dark:prose-headings:text-[var(--foreground)]">
          <MDXContent source={post.content} />
        </article>
      </main>
    </div>
  );
}