import React from 'react';
import Link from 'next/link';
import Navbar from "../../../components/Navbar";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/app/writing/content');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data
    };
  } catch (e) {
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

        <header className="mb-12">
          <time className="text-[#00000080] dark:text-[#ffffff80] text-sm italic block mb-2">
            {post.date}
          </time>
        </header>

        <article className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)[0].length;
              const text = paragraph.replace(/^#+\s/, '');
              const Tag = `h${level}` as keyof JSX.IntrinsicElements;
              return (
                <Tag 
                  key={index} 
                  className={`
                    ${level === 1 ? 'text-5xl' : level === 2 ? 'text-4xl' : 'text-3xl'}
                    font-voyager-thin 
                    text-[var(--foreground)] 
                    mt-16 
                    mb-8 
                    leading-tight
                    tracking-tight
                  `}
                >
                  {text}
                </Tag>
              );
            } else if (paragraph.startsWith('-')) {
              return (
                <li 
                  key={index} 
                  className="text-[#00000099] dark:text-[#ffffff99] text-lg leading-relaxed mb-4"
                >
                  {paragraph.slice(2)}
                </li>
              );
            } else if (paragraph.trim()) {
              return (
                <p 
                  key={index} 
                  className="text-[#000000cc] dark:text-[#ffffffcc] text-lg leading-relaxed mb-8 font-aeonik-regular"
                >
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </article>
      </main>
    </div>
  );
}