import React from 'react';
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl mb-4 font-voyager-thin">Privacy Policy</h1>
          <p className="text-[#00000080] dark:text-[#ffffff80] text-lg">
            How we handle and protect your information.
          </p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Introduction</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80]">
              This Privacy Policy describes how we collect, use, and handle your personal information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Information We Collect</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80] mb-2">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-[#00000080] dark:text-[#ffffff80]">
              <li>Contact information (such as email address)</li>
              <li>Usage data and analytics</li>
              <li>Information about your device and browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">How We Use Your Information</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80] mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-[#00000080] dark:text-[#ffffff80]">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Communicate with you about updates and changes</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Cookies and Tracking</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80]">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Data Security</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80]">
              We implement appropriate security measures to protect your personal information. However, no method of transmission 
              over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Third-Party Services</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80]">
              We may use third-party services that collect, monitor, and analyze data to improve our service. These third parties 
              have their own privacy policies addressing how they use such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Changes to This Policy</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80]">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-voyager-thin mb-4">Contact Us</h2>
            <p className="text-[#00000080] dark:text-[#ffffff80]">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>

          <footer className="text-sm text-[#00000080] dark:text-[#ffffff80] mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </footer>
        </div>
      </main>
    </div>
  );
} 