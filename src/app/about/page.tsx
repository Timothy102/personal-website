import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from "../../components/Navbar"
import { TracingBeam } from "../../components/ui/tracing-beam";
import InteractiveLink from './InteractiveLink';

const awards = [
    {
        name: "Silver Medal at RIS - Slovenian National Machine Learning Competition",
        desc: "2nd place in predicting COVID extensiveness from 3D CT scans.",
        year: "2021",
    },
    {
        name: "Science Jam Finalists: Medlink",
        desc: "Accelerator for the brightest high-school innovators.",
        year: "2021",
    }
];

const education = [
  {
    name: "University of Amsterdam",
    desc: "Bachelor of Science - BS, Artificial Intelligence.",
    year: "2022 - 2025",
  },
  {
    name: "Imperial College Business School",
    desc: "Executive Venture Capital Programme:  Master Startup Funding and Investment Strategies, VC.",
    year: "2023",
  },
];

const experiences = [
    {
        number: "01",
        position: "MLOPS ENGINEER",
        year: "2024",
        companyName: "sync.labs (YC W24)",
        link: "https://sync.labs",
        imageName: "/icons/sync.png",
        roleDescription: "Building generative models to modify + synthesize humans in video."
    },
    {
        number: "02",
        position: "DATA SCIENTIST",
        year: "2023",
        companyName: "NU",
        link: "https://nu.ai",
        imageName: "/icons/nu.png",
        roleDescription: "Longevity startup. Worked on epigenetic age clocks, bioinformatic pipelines, and meal planning."
    },
    {
        number: "03",
        position: "ENGINEER",
        year: "2022",
        companyName: "Inferex",
        link: "https://inferex.com",
        imageName: "/icons/inferex.png",
        roleDescription: "Compute infrastructure for ML/AI pipeline inference."
    },
    {
        number: "04",
        position: "CO-FOUNDER & CEO",
        year: "2022",
        companyName: "Rywave",
        link: "https://rywave.com",
        imageName: "/icons/rywave.png",
        roleDescription: "At Rywave, our mission was to enable artists to create and sell their collectibles seamlessly to their truest fans in seconds."
    }
];

const About = () => {
    const groupedExperiences = [];
    for (let i = 0; i < experiences.length; i += 2) {
      groupedExperiences.push(experiences.slice(i, i + 2));
    }
    return (
      <>
        <Navbar />
        <div className="flex w-full flex-col pt-32 items-start">
          <div className="flex flex-col w-full px-8 md:px-22 lg:px-20 items-start justify-center text-6xl gap-y-4">
            <TracingBeam className="px-0 md:px-2">
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-start">
                <Link href="/" className="w-full font-aeonik-regular tracking-regular space-y-3 text-sm mb-4 text-[#00000099] dark:text-[#ffffff99]">
                  <p>← BACK TO HOME </p>
                </Link>
                <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                  <p className="w-full font-aeonik-regular tracking-tight text-center leading-[100%] text-[21px] mb-3">ABOUT </p>
                  <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">Hey, I'm Tim.</h1>
                  <div className="w-full md:w-2/3 font-aeonik-regular tracking-[0.015em] space-y-10 items-center align-center justify-center text-[21px] md:text-[21px]">
                    {/* Main content paragraphs */}
                    <p className="leading-[150%]">Glad to meet you.</p>
                    
                    <p className="leading-[150%]">For as long as I can remember, I've been relentlessly driven. First it was football, then coding. Now, I focus on building early-stage AI-1st businesses.</p>
                    
                    <p className="leading-[150%]">I currently work as mlops @ sync.labs (yc w24), a research company where we're building generative models to modify and synthesize humans in video.</p>
                    
                    <p className="leading-[150%]">I like to work intensely on hard problems that improve the way we work, live, and create, preferably with people smarter than me. I tend to be direct, inquisitive and I read a lot. Find my favourite books here.</p>
                    
                    <p className="leading-[150%]">I genuinely enjoy sports(tennis recently), 60's jazz, and authentic people with fire in their eyes. Also a Gemini, ENFJ-a, 80% Dynamo(ideas), 20% Steel(systems).</p>
                    
                    <p className="leading-[150%]">Talk to me about:</p>
                    
                    <ul className="pl-12 space-y-2">
                      <li>1. building tech businesses</li>
                      <li>2. vertical AI (biotech / finance / ops)</li>
                      <li>3. what you learned</li>
                    </ul>
                    
                    <p className="leading-[150%]">My kindest,<br/>Tim</p>
                  </div>
                </div>
              </div>
    
              <div className="flex flex-col w-full py-20">
                <p className="font-aeonik-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">EXPERIENCE</p>
                {groupedExperiences.map((group, index) => (
                  <div key={index} className="flex flex-col md:flex-row w-full justify-between md:space-x-10 border-b pb-10 border-gray-800">
                    {group.map((exp, idx) => (
                      <div key={idx} className="w-full py-10 font-aeonik-regular">
                        <InteractiveLink 
                          href={exp.link as string}
                          event={'aboutExperienceClicked'}
                        >
                          <div className="flex flex-row items-start align-start">
                            <div className="flex flex-col w-1/6">
                              <p className="text-sm pb-5 text-[#00000099] dark:text-[#ffffff99]">{exp.number}</p>
                              <Image
                                priority
                                src={exp.imageName}
                                height={118}
                                width={118}
                                alt="Descriptive Text"
                              />
                            </div>
                            <div className="ml-10 w-9/12 items-start">
                              <p className="text-sm pb-5 text-[#00000099] dark:text-[#ffffff99]">{exp.position}</p>
                              <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{exp.companyName}</p>
                              <p className="text-[18px] mt-4 leading-[150%] text-[#00000099] dark:text-[#ffffff99]">{exp.roleDescription}</p>
                            </div>
                            <div className="flex flex-col w-1/12 items-end">
                              <p className="text-sm pb-5 text-[#00000099] dark:text-[#ffffff99]">{exp.year}</p>
                            </div>
                          </div>
                        </InteractiveLink>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
    
              <div className="w-full py-20">
                <p className="font-aeonik-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">EDUCATION</p>
                {education.map((education) => (
                  <div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-gray-800 pt-10">
                    <div>
                      <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{education.name}</p>
                      <p className="font-aeonik-regular tracking-tight text-[18px] md:text-[21px] mb-3 text-[#00000099] dark:text-[#ffffff99]">{education.desc}</p>
                    </div>
                    <p className="font-aeonik-regular tracking-tight text-[18px] md:text-[21px] mb-3 text-[#00000099] dark:text-[#ffffff99]">{education.year}</p>
                  </div>
                ))}
              </div>
    
              <div className="w-full py-20">
                <p className="font-aeonik-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">AWARDS</p>
                {awards.map((award) => (
                  <div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-gray-800 pt-10">
                    <div>
                      <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{award.name}</p>
                      <p className="font-aeonik-regular tracking-tight text-[18px] md:text-[21px] mb-3 text-[#00000099] dark:text-[#ffffff99]">{award.desc}</p>
                    </div>
                    <p className="font-aeonik-regular tracking-tight text-[18px] md:text-[21px] mb-3 text-[#00000099] dark:text-[#ffffff99]">{award.year}</p>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </>
    );
}

export default About;