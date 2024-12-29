import React from 'react';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/app/writing/content');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the frontmatter
    const { data } = matter(fileContents);

    // Return only the necessary data
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description || '', // Use description from frontmatter if available
    };
  });

  // Sort posts by date in descending order
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default async function Writing() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-16">
        <Link 
          href="/"
          className="text-[#00000080] dark:text-[#ffffff80] hover:text-[var(--foreground)] transition-colors mb-12 block"
        >
          ← Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl mb-4 font-voyager-thin">Writing</h1>
          <p className="text-[#00000080] dark:text-[#ffffff80] text-lg">
            Thoughts and reflections on various ideas.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <Link 
              href={`/writing/${post.slug}`}
              key={post.slug}
              className="block group"
            >
              <article className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h2 className="text-2xl font-voyager-thin group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-[#00000080] dark:text-[#ffffff80] text-sm italic">
                    {post.date}
                  </time>
                </div>
                {post.description && (
                  <p className="text-[#00000080] dark:text-[#ffffff80] text-base">
                    {post.description}
                  </p>
                )}
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}