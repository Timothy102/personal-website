"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function Reading() {
  useEffect(() => {
    // Open Notion page in new tab
    window.open('https://timc9.notion.site/Books-b271d987c0f6405dbd3ba186ce705566', '_blank');
  }, []);

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
          <h1 className="text-4xl mb-4 font-voyager-thin">Reading</h1>
          <p className="text-[#00000099] dark:text-[#ffffff99] text-lg">
            You should be redirected to my reading list. If not, click{' '}
            <a 
              href="https://timc9.notion.site/Books-b271d987c0f6405dbd3ba186ce705566" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--foreground)]"
            >
              here
            </a>.
          </p>
        </div>
      </main>
    </div>
  );
}