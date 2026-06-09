import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const featured = [
    {
      title: 'Owlpi',
      year: '2025',
      role: 'Creator & Architect',
      stack: ['Node.js', 'Express', 'RabbitMQ', 'PostgreSQL', 'MongoDB'],
      desc: 'An API monitoring system designed to ingest, queue, and process performance metrics asynchronously. Decouples processing from client calls via event workers.',
      address: 'system://projects.owlpi',
      contributions: [
        'Resilient RabbitMQ channel pipeline with DLQ',
        'Exponential backoff retry mechanisms',
        'Dual-db sync tier (SQL transactional + Mongo analytics)'
      ]
    },
    {
      title: 'BigBazar',
      year: '2025',
      role: 'Full-Stack Developer',
      stack: ['React', 'Express', 'Redis', 'Pinecone', 'Gemini AI'],
      desc: 'A modern e-commerce platform integrated with semantic vector spaces to serve contextual product recommendations dynamically.',
      address: 'system://projects.bigbazar',
      contributions: [
        'Pinecone vector embedding index sweeps',
        'Redis caching layers cutting DB query costs',
        'Stripe payment gateway webhook integrations'
      ]
    }
  ];

  const archive = [
    {
      title: 'Blogbyte',
      year: '2024',
      category: 'React & BaaS',
      role: 'Creator & Developer',
      desc: 'A classic responsive web application utilizing BaaS backends for content storage, access management, and asset uploads.',
      tags: ['React', 'Appwrite', 'Redux Toolkit', 'Tailwind'],
      bullets: [
        'Appwrite user session & database CRUD integrations',
        'Redux Toolkit global store state sync',
        'Protected page routes and file buffer uploads'
      ]
    },
    {
      title: 'ESkinNetBD Pipeline',
      year: '2024',
      category: 'Research Tool',
      role: 'Lead Developer',
      desc: 'Local validation pipelines built to run Grad-CAM maps over trained dermatology convolutional models, exporting explainability metrics.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'Grad-CAM'],
      bullets: [
        'Batch inference script pipeline with CSV metrics export',
        'Grad-CAM overlay blending mask generators',
        'Optimized validation loops over large image folders'
      ]
    },
    {
      title: 'Docker Build Optimizer',
      year: '2025',
      category: 'Infrastructure',
      role: 'DevOps Engineer',
      desc: 'A collection of optimized Multi-stage Dockerfiles and CI/CD pipelines designed to speed up deployment builds and shrink image sizes.',
      tags: ['Docker', 'CI/CD', 'GitHub Actions', 'Alpine'],
      bullets: [
        'Multi-stage build pipelines stripping development headers',
        'Docker layer caching scripts for GitHub runners',
        'Reduced final image sizes by up to 60%'
      ]
    }
  ];

  return (
    <div className="pb-24 selection:bg-accent selection:text-white">
      {/* SECTION 01 // HERO */}
      <section className="relative w-full pt-16 pb-20 border-b border-hairline-strong bg-canvas overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-left">
          <span className="font-mono text-mute text-[11px] block mb-2 select-none">
            // page.portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-6 leading-none">
            Work
          </h1>
          <p className="text-sm md:text-base text-body max-w-[600px] mb-8 leading-relaxed font-sans">
            These are systems where I got to solve real engineering bottlenecks. The interesting part is always the context behind structural choices and the trade-offs that came with them.
          </p>
          <div className="border border-accent-signal/30 text-accent-signal bg-accent-signal/5 px-4 py-1.5 font-mono text-[10px] uppercase font-bold tracking-wider inline-flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent-signal animate-pulse" />
            <span>Limited Availability · Q2 2026</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-20">

        {/* SECTION 02 // FEATURED PROJECTS */}
        <section className="mb-32 relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            02
          </div>
          
          <div className="mb-12 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// section.featured</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">Featured Projects</h2>
          </div>

          <div className="space-y-16">
            {featured.map((proj, i) => (
              <div key={i} className="border border-hairline-strong bg-canvas rounded-none p-8 flex flex-col md:flex-row gap-8 items-stretch relative">
                
                {/* Left Visual Screenshot panel */}
                <div className="w-full md:w-2/5 browser-mockup min-h-[220px]">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <div className="browser-dot" />
                      <div className="browser-dot" />
                      <div className="browser-dot" />
                    </div>
                    <div className="browser-address">{proj.address}</div>
                    <div className="w-6" />
                  </div>
                  <div className="flex-grow bg-surface-soft/50 p-4 flex items-center justify-center relative select-none">
                    <div className="font-mono text-[9px] text-mute text-center leading-normal border border-hairline-strong border-dashed p-4 bg-canvas w-full h-full flex flex-col justify-between">
                      <span className="text-accent uppercase font-bold tracking-wider">// repository_state</span>
                      <div className="text-xs font-bold text-ink">{proj.title}</div>
                      <span className="text-[8px] text-mute">YEAR_IN: {proj.year}</span>
                    </div>
                  </div>
                </div>

                {/* Right text contents */}
                <div className="w-full md:w-3/5 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center space-x-3 mb-2 text-[10px] font-mono">
                      <span className="text-accent bg-accent/5 px-2 py-0.5 border border-hairline font-bold">{proj.year}</span>
                      <span className="text-accent-hover font-bold">{proj.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3">{proj.title}</h3>
                    <p className="text-xs text-body leading-relaxed font-sans mb-6">{proj.desc}</p>
                    
                    {/* Diff-style bullets */}
                    <div className="bg-surface-soft/40 p-4 border border-hairline-strong font-mono text-xs rounded-none mb-6">
                      <div className="text-ink font-bold mb-2 uppercase tracking-wide text-[10px]">// technical_contributions:</div>
                      <ul className="space-y-1.5 text-body text-[11px]">
                        {proj.contributions.map((bullet, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-accent font-bold mr-2 select-none">[+]</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 items-center justify-between border-t border-hairline pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((s, idx) => (
                        <span key={idx} className="text-[9px] text-mute bg-surface-soft px-2 py-0.5 border border-hairline">{s}</span>
                      ))}
                    </div>
                    <a href="https://github.com/NazimRiyadh" target="_blank" rel="noreferrer" className="text-xs text-accent hover:underline font-bold">
                      inspect_source() &rarr;
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03 // MORE PROJECTS */}
        <section className="relative">
          <div className="absolute left-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            03
          </div>
          
          <div className="mb-12 text-left z-10 relative">
            <span className="font-mono text-mute text-xs block mb-2">// section.more</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">More Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {archive.map((proj, i) => (
              <div key={i} className="border border-hairline-strong bg-surface-soft/10 p-6 flex flex-col justify-between min-h-[360px] relative">
                
                <div>
                  <div className="flex justify-between items-start text-[10px] font-mono mb-4">
                    <span className="text-accent-signal bg-accent-signal/5 px-2 py-0.5 border border-hairline-strong font-bold">{proj.year}</span>
                    <span className="text-mute uppercase tracking-wider">{proj.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-ink mb-2">{proj.title}</h3>
                  <div className="text-[11px] text-accent font-mono mb-4">&gt; {proj.role}</div>
                  <p className="text-xs text-body leading-relaxed mb-6 font-sans">{proj.desc}</p>
                  
                  {/* Plus Bullet Points */}
                  <ul className="space-y-1.5 font-mono text-[10px] text-mute mb-6">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent font-bold mr-2 select-none">+</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-hairline flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="text-[8px] text-mute bg-surface-soft px-1.5 py-0.5 border border-hairline">{tag}</span>
                    ))}
                  </div>
                  <a href="https://github.com/NazimRiyadh" target="_blank" rel="noreferrer" className="text-xs text-accent hover:underline font-bold inline-block">
                    View details &rarr;
                  </a>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;
