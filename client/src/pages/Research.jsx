import React from 'react';
import { motion } from 'framer-motion';

function Research() {
  const articles = [
    {
      title: 'ESkinNetBD: Dual-Attention EfficientNet for Transparent Skin Disease Diagnosis',
      date: 'Dec 2024',
      area: 'Computer Vision',
      status: 'Published',
      desc: 'Architected a CNN framework using EfficientNetB2 and Convolutional Block Attention Module (CBAM) to classify dermatological conditions across six categories using the SkinDisNet Bangladeshi dataset. Mitigated dataset imbalances through focal loss and label smoothing.',
      tags: ['Medical AI', 'Computer Vision', 'PyTorch', 'Grad-CAM'],
      contributions: [
        'EfficientNetB2 backbone with CBAM dual-attention extraction',
        'Balanced training via focal loss & label smoothing augmentations',
        'Attained a 96.9% macro-F1 score on localized validation sets',
        'Grad-CAM/Grad-CAM++ explainability maps for clinical transparency'
      ]
    },
    {
      title: 'Chlorophyll Detection via CalCOFI Oceanic Data Analysis',
      date: 'Oct 2024',
      area: 'Machine Learning',
      status: 'Published',
      desc: 'Designed a regression analysis pipeline to predict ocean chlorophyll levels. Evaluated baseline classifiers, using Optuna to tune hyperparameter spaces for a Random Forest Regressor.',
      tags: ['Environmental AI', 'Machine Learning', 'Data Science', 'Optuna'],
      contributions: [
        'Outperformed 10 alternative baseline regression classifiers',
        'Conducted Optuna hyperparameter sweeps for Random Forest Regressor',
        'Achieved verified R² score of 0.7889 for ocean metrics tracking',
        'Identified key sea surface temperature correlation weights'
      ]
    }
  ];

  return (
    <div className="pb-24 selection:bg-accent selection:text-white">
      {/* SECTION 01 // HERO */}
      <section className="relative w-full pt-16 pb-20 border-b border-hairline-strong bg-canvas overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-left">
          <span className="font-mono text-mute text-[11px] block mb-2 select-none">
            // page.articles
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-6 leading-none">
            Writing
          </h1>
          <p className="text-sm md:text-base text-body max-w-[600px] mb-8 leading-relaxed font-sans">
            I write about systems architecture, data science pipelines, and applied artificial intelligence research. Most of it is just documenting the structural patterns I build in the lab.
          </p>
          <div className="border border-accent-signal/30 text-accent-signal bg-accent-signal/5 px-4 py-1.5 font-mono text-[10px] uppercase font-bold tracking-wider inline-flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent-signal animate-pulse" />
            <span>Limited Availability · Q2 2026</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-20">

        {/* SECTION 02 // RESEARCH ARTICLES LIST */}
        <section className="relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            02
          </div>
          
          <div className="mb-12 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// section.articles</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">Latest Research</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((post, i) => (
              <div key={i} className="border border-hairline-strong bg-surface-soft/10 p-8 flex flex-col justify-between min-h-[460px] relative">
                
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono mb-4">
                    <span className="text-accent bg-accent/5 px-2.5 py-0.5 border border-hairline-strong font-bold">{post.date}</span>
                    <span className="text-mute uppercase tracking-wider">{post.area}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{post.title}</h3>
                  <div className="text-[11px] text-accent font-mono mb-4">&gt; Status: {post.status}</div>
                  <p className="text-xs text-body leading-relaxed mb-6 font-sans">{post.desc}</p>
                  
                  {/* Plus Bullet Points for methodology/results */}
                  <div className="bg-surface-soft/40 p-4 border border-hairline-strong font-mono text-xs rounded-none mb-6">
                    <div className="text-ink font-bold mb-2 uppercase tracking-wide text-[10px]">// research_highlights:</div>
                    <ul className="space-y-1.5 text-body text-[11px]">
                      {post.contributions.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent font-bold mr-2 select-none">+</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-hairline flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-[8px] text-mute bg-surface-soft px-2 py-0.5 border border-hairline">{tag}</span>
                    ))}
                  </div>
                  <a href="https://github.com/NazimRiyadh" target="_blank" rel="noreferrer" className="text-xs text-accent hover:underline font-bold inline-block">
                    Read paper &rarr;
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

export default Research;
