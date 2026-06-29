"use client";

import React from 'react';
import type { Project } from '../../types';

export default function PortfolioHome() {
  // Strongly typed projects array
  const projects: Project[] = [
    {
      title: "Bloom & Blossom",
      description: "A luxury, minimalist landing page for a premium beauty brand featuring cohesive aesthetics and modern UI elements.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Delicious Bites",
      description: "A highly responsive food and restaurant landing page with an interactive menu grid and brand story sections.",
      tags: ["React", "Tailwind CSS", "UI Design"],
    },
    {
      title: "Automotive UI Concept",
      description: "A sleek, high-end landing page utilizing absolute overlays and glassmorphism to showcase luxury vehicles.",
      tags: ["Next.js", "Tailwind CSS", "Glassmorphism"],
    }
    ,
    {
      title: "My Journey",
      description: "A personal travel and progress tracker showcasing interactive storytelling and logs.",
      tags: ["Next.js", "Vercel", "Personal Project"],
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight bg-gradient-to-r; cursor-default from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Developer.
          </span>
          <div className="flex items-center space-x-8 text-lg font-bold text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors rounded-lg bg-emerald-400 text-slate-950">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100 leading-tight">
            Building digital experiences with <span className="bg-gradient-to-r; from-emerald-400 to-teal-300 bg-clip-text  text-white">clean code</span> and elegant design.
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
            Hi, I&apos;m a Full-Stack &amp; QA Engineer passionate about crafting seamless front-end architectures, modern user interfaces, and ensuring rock-solid software quality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium transition-colors text-sm shadow-lg shadow-emerald-500/10">
              View Work
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-medium transition-colors text-sm">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <hr className="border-slate-900 max-w-5xl mx-auto px-6" />

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Selected Work</h2>
            <p className="text-sm text-slate-400 mt-1">A curated look at recent front-end builds and web applications.</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project, index: number) => (
            <div key={index} className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-300">
              <div>
                <h3 className="text-lg font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag: string, tIndex: number) => (
                  <span key={tIndex} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-900 max-w-5xl mx-auto px-6" />

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Let&apos;s collaborate.</h2>
          <p  className="mt-4 text-slate-400 leading-relaxed">
            Want to discuss a project, freelance opportunity, or just say hello? Drop a line and let&apos;s build something exceptional together.
          </p>
          <div className="mt-8">
            <a href="mailto:your.email@example.com" className="inline-block px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-emerald-400 font-medium transition-colors text-sm">
              eyinjuolasunkanmi@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-slate-900 text-center text-xs text-slate-600">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>

    </div>
  );
}
