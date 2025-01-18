"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { CardSpotlight } from "../components/ui/card-spotlight";

const experiences = [
    {
    company: "Sync Labs",
    role: "Founding Infra Engineer",
    year: "2024 →",
    color: "yellow",
    icon: "sync"
    },
    {
    company: "NU",
    role: "Data Scientist",
    year: "2023 - 2024",
    color: "blue",
    icon: "nu"
    },
    {
    company: "Rywave",
    role: "Co-Founder & CEO",
    year: "2022 - 2023",
    color: "yellow",
    icon: "rywave"
    },
    {
    company: "Inferex",
    role: "ML Engineer",
    year: "2022 - 2023",
    color: "white",
    icon: "inferex"
    }
  ];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.warn('Video autoplay was prevented:', error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  const blur = 5;
  const videoSource = "home/static.mp4";
  
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="z-[-1] w-full h-full bg-[var(--background)] flex items-center justify-center absolute top-0">
          {isMounted && (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover opacity-50 dark:opacity-100"
              style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
              autoPlay
              loop
              muted
              playsInline
              id="video-id"
              ref={videoRef}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
  
        <div className="flex flex-col w-full max-w-[600px] mx-auto mt-14 md:mt-0 lg:pt-0 p-4 md:p-0 lg:p-0 justify-center gap-y-20">
        {/* Intro Section */}
        <div className="flex flex-row w-full space-x-1 mt-24">
          <div className="self-start mt-3">
            <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
          </div>
          <div className="flex flex-col w-full align-center justify-center space-y-6 md:space-y-6 items-start">
            <div className="flex flex-row w-full mb-3 items-center">
              <h1 className="tracking-tight font-voyager-thin text-[38px] md:text-[32px] lg:text-[32px]">Hey, I'm Tim.</h1>
            </div>
            <div className="w-full font-aeonik-regular space-y-6 leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px]">
              <p>I'm a 21 y/o ml engineer building AI-1st businesses.</p>
              <p>I spent the last 4 years building early-stage ai companies(inferex, rywave, nu, sync.labs).</p>
              <p>my hypothesis: vertical AI agents will be the greatest value unlock ever, esp for protocol-driven workflows in old-fashioned industries, like healthcare, finance, ops. These are the next $100B companies.</p>
              <p>that's why we're building nexus - a holding company of AI businesses</p>
              <p>you can reach me via <Link className="italic border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://twitter.com/cvetko_tim">twitter</Link> or email at <Link href="mailto:tim@timcvetko.com" className="border-b italic hover:text-blue-500 transition-all duration-400 hover:border-blue-500">tim@timcvetko.com</Link>.</p>
            </div>
          </div>
        </div>
  
          {/* Experience Section */}
          <div className="flex flex-col space-y-4 px-5">
            <h1 className="tracking-tight font-voyager-thin text-[20px] mb-3">Experience</h1>
            {experiences.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-[#00000033] dark:border-[#ffffff1a] py-4">
                <div className="flex items-center space-x-4">
                  <div className={`${
                    item.company === "Inferex" 
                      ? "bg-white dark:bg-black" 
                      : `bg-${item.color}`
                    } w-10 h-10 rounded-full flex items-center justify-center`}>
                    <img src={`/icons/${item.icon}.png`} alt={item.company} className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-aeonik-regular">{item.company}</h2>
                    <p className="text-[#00000080] dark:text-[#ffffff80] text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-[#00000080] dark:text-[#ffffff80] text-sm">{item.year}</p>
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className="flex flex-col space-y-4 px-5">
            <h1 className="tracking-tight font-voyager-thin text-[21px]">Products</h1>
            <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex flex-row space-x-4 w-full">
              <CardSpotlight 
                  href="https://arcadia.timcvetko.com/"
                  className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#00000033] dark:border-[#ffffff33] p-4 space-y-2 bg-[var(--background)]"
                >
                  <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img src="/logos/arcadia.png" alt="Arcadia logo" className="w-6 h-6" /> 
                      <p className="font-aeonik-medium text-[18px]">arcadia</p>
                    </div>
                    <Image
                      priority
                      src="/home/iconArrowUprightWhite.png"
                      height={100}
                      width={100}
                      alt="White arrow icon"
                      className="w-3 h-3 transition-opacity duration-200 opacity-100"
                    />
                  </div>
                  <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                    host any ml model and get paid per inference call.
                    <br/><br/>
                  </p>
                </CardSpotlight>
                <CardSpotlight 
                  href="https://videochat.timcvetko.com"
                  className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#00000033] dark:border-[#ffffff33] p-4 space-y-2 bg-[var(--background)]"
                >
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="font-aeonik-medium text-[18px] flex items-center space-x-2">
                      <img src="/logos/videochat.png" alt="Videochat icon" className="inline w-4 h-4 align-middle mb-50" /> 
                      <span>videochat</span>
                    </p>
                    <Image
                      priority
                      src="/home/iconArrowUprightWhite.png"
                      height={100}
                      width={100}
                      alt="White arrow icon"
                      className="w-3 h-3 transition-opacity duration-200 opacity-100"
                    />
                  </div>
                  <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                    learn 10x by chatting with any yt video
                    <br/><br/>
                  </p>
                </CardSpotlight>
              </div>
            </div>
          </div>
  
          {/* Investing & Advising Section */}
          <div className="flex flex-col space-y-6 px-5">
            <h1 className="text-[20px] font-aeonik-medium">Investing & Advising</h1>
            <div className="flex flex-col space-y-4">
              <p className="text-[16px]">
                • <Link href="https://atomlimbs.com" className="underline">Atom Limbs</Link> - the first artificial human arm [angel]
              </p>
              <p className="text-[16px]">
                • <Link href="https://movenscapital.com/" className="underline">Movens VC</Link> - $100M AI VC fund in CEE [advisor]
              </p>
              <p className="text-[16px]">
                • <Link href="https://e2.vc" className="underline">e2.vc</Link> - VC fund building tomorrow's emerging Europe [advisor]
              </p>
            </div>
          </div>
  
          {/* Signature */}
          <div className="flex flex-col items-center space-y-4 w-full px-5 pt-10">
            <p className="font-aeonik-regular text-sm opacity-70">@timcvetko 2025</p>
            <p className="font-voyager-thin text-3xl tracking-wide">timc</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;