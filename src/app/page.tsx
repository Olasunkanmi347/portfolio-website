"use client";
import { useState } from "react";
import React from 'react';
import Image from 'next/image';
import { Layout, Palette, Code2, ArrowUpRight, Mail } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: ProjectCardProps[] = [
  {
    title: 'Salon Website',
    description:
      'A professional salon booking and showcase platform with service listings, appointment scheduling, and staff profiles built with modern web technologies.',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Responsive'],
    link: 'https://github.com/Olasunkanmi347/salon-website',
  },
  {
    title: 'Volvo EX30 Showcase',
    description:
      'An interactive luxury vehicle showcase featuring sleek design, 3D visualizations, and immersive user experience for premium automotive presentation.',
    tags: ['React', 'Animation', 'UI/UX', 'Design'],
    link: 'https://volvo-ex-30-phi.vercel.app/',
  },
  {
    title: 'My Journey',
    description: 'A personal project showcasing travel logs, progress tracking, and interactive storytelling.',
    tags: ['Next.js', 'Vercel', 'Personal Project'],
    link: 'https://my-journey-eta-nine.vercel.app/',
  },
  {
    title: 'Dashboard Interface',
    description: 'A refined dashboard UI built for data clarity, user-friendly navigation, and elegant component layouts.',
    tags: ['UI Design', 'Accessibility', 'Performance'],
    link: '#',
  },
];

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#12161a] text-gray-100 font-sans relative overflow-hidden ...">
      {/* Background radial-gradients remain here */}

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#12161a]/70 border-b border-gray-800/50">
        <div className="max-w-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
            <span className="w-3 h-3 rounded-full bg-[#00cc99] animate-pulse" />
            Portfolio<span className="text-[#00cc99]">.</span>
          </div>

          {/* Desktop Navigation (Hidden on mobile, flexes on desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-gray-400">
            <a href="#home" className="hover:text-white text-xl transition-colors">Home</a>
            <a href="#services" className="hover:text-white text-xl transition-colors">Services</a>
            <a href="#projects" className="hover:text-white text-xl transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white text-xl transition-colors">Contact</a>
          </nav>

          {/* Action Button & Hamburger Toggle Container */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-block px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border border-gray-700 rounded-full hover:border-[#00cc99]"
            >
              Let's Talk
            </a>

            {/* Hamburger Button (Visible only on Mobile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  // "X" close icon shown when open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Three bars icon shown when closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu (Renders absolutely below the header when isOpen is true) */}
          {isOpen && (
            <div className="absolute top-20 left-0 w-full bg-[#12161a] border-b border-gray-800 flex flex-col p-6 gap-4 md:hidden z-40">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg transition-colors">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg transition-colors">Services</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg transition-colors">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg transition-colors">Contact</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 text-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border border-gray-700 rounded-full hover:border-[#00cc99]">
                Let's Talk
              </a>
            </div>
          )}

        </div>
      </header>

      {/* Your <main> section continues as normal below... */}



      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <section id="home" className="py-20 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/40 border border-gray-700/50 text-xs text-gray-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cc99] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00cc99]"></span>
              </span>
              Available for frontend opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hello, I&apos;m <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00cc99] to-emerald-400"> Olasunkanmi Fadayomi</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-300">Frontend Developer & Creative Interface Designer</h2>

            <p className="text-gray-400 text-base max-w-xl leading-relaxed">
              I build polished web interfaces with modern interactions, responsive layouts, and elegant visual systems. My focus is on frontend craftsmanship, clean component structure, and refined user experiences.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#00cc99] text-[#12161a] font-bold text-sm shadow-[0_0_20px_rgba(0,204,153,0.3)] hover:shadow-[0_0_30px_rgba(0,204,153,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Olasunkanmi347/olasunkanmi"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-gray-800 text-gray-200 font-semibold text-sm border border-gray-700 hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/olasunkanmi-fadayomi"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-gray-800 text-gray-200 font-semibold text-sm border border-gray-700 hover:bg-gray-900 transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="/Olasunkanmi_Fadayomi_Resume.pdf"
                  download
                  className="px-6 py-3 rounded-xl bg-gray-800 text-gray-200 font-semibold text-sm border border-gray-700 hover:bg-gray-900 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end rounded-xl border-4 border-double skew-3">
            <div className="relative group max-w-[30rem] w-full">
              <div className="absolute inset-0 bg-[#00cc99] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem] rounded-3xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700/50 overflow-hidden shadow-2xl">
                <Image src="/ola2.jpeg" alt="Olasunkanmi Fadayomi" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-800/60 my-4" />
         
        <section id="services" className="py-20 space-y-12">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#00cc99] font-semibold">My Services</p>
            <h2 className="text-3xl font-bold tracking-tight">What I Do</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<Code2 className=" border-2 border-dotted text-[#00cc99]" size={24} />} title="Frontend Development" description="Creating responsive, interactive UI using React, Tailwind CSS, and modern component architecture." />
            <ServiceCard icon={<Layout className="text-[#00cc99]" size={24} />} title="UI / UX Design" description="Designing polished interfaces with strong visual hierarchy, spacing, and usability for desktop and mobile." />
            <ServiceCard icon={<Palette className="text-[#00cc99]" size={24} />} title="Brand-Driven Styling" description="Crafting distinctive color systems, typography, and layout details that make each web experience feel premium." />
          </div>
        </section>

        <hr className="border-gray-800/60 my-4" />

        <section id="projects" className="py-20 space-y-12">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#00cc99] font-semibold">Selected Work</p>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#0e1215] border-t border-gray-800/80 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div>
            <p className="text-gray-100 font-bold">Let&apos;s build something great together.</p>
            <a href="mailto:eyinjuolasunkanmi@gmail.com" className="inline-flex items-center gap-2 mt-3 text-[#00cc99] hover:text-white transition-colors">
              <Mail size={16} /> eyinjuolasunkanmi@gmail.com
              <span className="ml-2 text-bold">+234 813 281 0239</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/Olasunkanmi347/olasunkanmi" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-[#00cc99] text-[#12161a] font-semibold text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/olasunkanmi-fadayomi" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-[#00cc99] text-[#12161a] font-semibold text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-[#171c22]/50 border border-gray-800/60 hover:border-gray-700/80 hover:bg-[#1c222a]/60 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-gray-800/40 border border-gray-700/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-bold mb-3 tracking-wide text-gray-200">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-[#171c22]/30 border border-gray-800/60 flex flex-col justify-between hover:bg-[#171c22]/60 transition-all duration-300 group">
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold tracking-wide text-gray-100 group-hover:text-[#00cc99] transition-colors">{title}</h3>
          <a href={link} className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noreferrer">
            <ArrowUpRight size={20} />
          </a>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-6">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-2.5 py-1 rounded-md bg-gray-800/60 text-gray-400 font-mono text-[11px]">{tag}</span>
        ))}
      </div>
    </div>
  );
}
