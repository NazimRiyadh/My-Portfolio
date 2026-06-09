import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="pb-24 selection:bg-accent selection:text-white">
      {/* SECTION 01 // HERO */}
      <section className="relative w-full pt-16 pb-20 border-b border-hairline-strong bg-canvas overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          {/* Left Text Column */}
          <div className="w-full md:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-mute text-[11px] block mb-2 select-none">
                // page.about
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-6 leading-none">
                About
              </h1>
              
              <p className="text-sm md:text-base text-body max-w-[600px] mb-8 leading-relaxed font-sans">
                From a systems builder background in Dhaka to designing AI architectures and concurrent microservice layers. Building high-performance backends, studying RAG systems, and maintaining a disciplined approach to technical design.
              </p>
              
              <div className="border border-accent-signal/30 text-accent-signal bg-accent-signal/5 px-4 py-1.5 font-mono text-[10px] uppercase font-bold tracking-wider inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-accent-signal animate-pulse" />
                <span>Limited Availability · Q2 2026</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Panel (Terminal Mockup style avatar) */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-[360px] browser-mockup h-[300px]"
            >
              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot" />
                  <div className="browser-dot" />
                  <div className="browser-dot" />
                </div>
                <div className="browser-address">system://entity.profile</div>
                <div className="w-6" />
              </div>
              <div className="flex-grow p-6 flex flex-col justify-between bg-surface-soft/40 relative overflow-hidden font-mono text-xs">
                <div className="text-accent leading-relaxed">
                  <span># system_diagnostics</span><br/>
                  <span>&gt; loading_cv_profile...</span><br/>
                  <span className="text-ink">&gt; name: Nazim Riyadh</span><br/>
                  <span className="text-ink">&gt; role: Systems &amp; AI Architect</span><br/>
                  <span className="text-ink">&gt; origin: Dhaka, BD</span><br/>
                  <span className="text-accent">&gt; PROFILE_LOADED_OK</span>
                </div>
                
                <a href="/Brac_Nazim_E_Alam.pdf" download className="btn-primary w-full text-center py-2 select-none text-[11px]">
                  download_resume.pdf
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats horizontal columns at bottom of hero */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 border-t border-hairline pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
            <div>
              <div className="text-3xl font-bold text-ink">
                3.96<span className="text-accent font-bold">+</span>
              </div>
              <div className="text-[10px] text-mute uppercase mt-1">years experience</div>
              <div className="text-[9px] text-mute/50 font-sans mt-0.5">Dean's honors list</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink">
                50<span className="text-accent font-bold">%</span>
              </div>
              <div className="text-[10px] text-mute uppercase mt-1">latency reduction</div>
              <div className="text-[9px] text-mute/50 font-sans mt-0.5">via Redis/RabbitMQ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink">
                96.9<span className="text-accent font-bold">%</span>
              </div>
              <div className="text-[10px] text-mute uppercase mt-1">Macro-F1 score</div>
              <div className="text-[9px] text-mute/50 font-sans mt-0.5">Dermatological AI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink">
                60<span className="text-accent font-bold">%</span>
              </div>
              <div className="text-[10px] text-mute uppercase mt-1">Docker image cut</div>
              <div className="text-[9px] text-mute/50 font-sans mt-0.5">optimized layers</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-20">

        {/* SECTION 02 // STORY */}
        <section className="mb-32 relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            02
          </div>
          
          <div className="mb-8 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// section.story</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-6">My Story</h2>
          </div>

          <div className="text-left space-y-6 max-w-[800px] text-sm leading-relaxed text-body font-sans">
            <p>
              I am a <strong className="text-ink font-mono font-bold">Systems-focused Software Engineer</strong> and <strong className="text-ink font-mono font-bold">AI Researcher</strong>. I help teams resolve microservice bottleneck issues, optimize database caches, and integrate verified AI models into production environments.
            </p>
            <p>
              Studying Computer Science Engineering in Dhaka taught me to view software systems as a collection of interlocking gears. This system-level thinking translates directly into how I write code: every thread boundary, event buffer queue, and database index is a choice with trade-offs. I prefer clean, simple logic over clever abstractions.
            </p>
            <p>
              My research focus is on medical AI and local retrieval algorithms. In my published paper, <span className="italic text-ink font-mono">ESkinNetBD</span>, I built and evaluated dual-attention CNN classifiers for dermatology. That research reinforced my belief in clinical transparency, leading me to integrate explainability systems such as Grad-CAM to explain neural decisions.
            </p>
          </div>
        </section>

        {/* SECTION // TECH STACK */}
        <section className="mb-32">
          <div className="border border-hairline-strong p-8 bg-surface-soft/20 text-left">
            <span className="font-mono text-mute text-xs block mb-3">// system.stack</span>
            <h3 className="text-lg font-bold text-ink mb-6">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-2 text-xs text-accent">
              {['Node.js', 'Express', 'Go', 'RabbitMQ', 'Redis', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'MongoDB', 'Pinecone', 'Docker', 'CI/CD', 'Git'].map((tech) => (
                <span key={tech} className="bg-canvas px-3 py-1.5 border border-hairline-strong rounded-none font-mono font-bold shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03 // HOW I THINK */}
        <section className="mb-32 relative">
          <div className="absolute left-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            03
          </div>
          
          <div className="mb-12 text-left z-10 relative">
            <span className="font-mono text-mute text-xs block mb-2">// section.principles</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">How I Think About Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Systems over features',
                desc: 'Clean components and solid data structures allow developers to build features without fighting the architecture. Boring, predictable code always wins.',
                icon: (
                  <div className="flex flex-col space-y-1 mb-6">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-transparent" />
                      <div className="w-2.5 h-2.5 bg-accent" />
                      <div className="w-2.5 h-2.5 bg-transparent" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-accent" />
                      <div className="w-2.5 h-2.5 bg-accent" />
                      <div className="w-2.5 h-2.5 bg-accent" />
                    </div>
                  </div>
                )
              },
              {
                title: 'Clarity over cleverness',
                desc: 'Clever, nested abstractions cause bugs. Complex microservices should be modularized, documented, and traceable, reducing onboarding ramp-up times.',
                icon: (
                  <div className="flex flex-col space-y-1 mb-6">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-ink" />
                      <div className="w-2.5 h-2.5 bg-transparent" />
                      <div className="w-2.5 h-2.5 bg-ink" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-transparent" />
                      <div className="w-2.5 h-2.5 bg-ink" />
                      <div className="w-2.5 h-2.5 bg-transparent" />
                    </div>
                  </div>
                )
              },
              {
                title: 'Business context matters',
                desc: 'Architecture decisions are business decisions. I pick technologies and protocols based on long-term maintainability rather than framework hype.',
                icon: (
                  <div className="flex flex-col space-y-1 mb-6">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-ink" />
                      <div className="w-2.5 h-2.5 bg-ink" />
                      <div className="w-2.5 h-2.5 bg-ink" />
                    </div>
                  </div>
                )
              },
              {
                title: 'Long-term thinking',
                desc: 'Every technical shortcut is a debt that compiles interest. Spending an extra day to refine data models saves weeks of migration issues down the road.',
                icon: (
                  <div className="flex flex-col space-y-1 mb-6">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-transparent" />
                      <div className="w-2.5 h-2.5 bg-transparent" />
                      <div className="w-2.5 h-2.5 bg-ink" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-transparent" />
                      <div className="w-2.5 h-2.5 bg-ink" />
                    </div>
                  </div>
                )
              }
            ].map((principle, i) => (
              <div key={i} className="styled-card p-6 flex flex-col justify-between min-h-[260px]">
                {principle.icon}
                <div>
                  <h3 className="font-bold text-ink text-sm mb-3">{principle.title}</h3>
                  <p className="text-body text-xs leading-relaxed font-sans">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04 // CAREER COMMITS */}
        <section className="mb-32 relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            04
          </div>
          
          <div className="mb-12 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// section.career</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">Career Commits</h2>
            <p className="text-sm text-body max-w-[700px] leading-relaxed">
              A version-controlled log of my software engineering commits, education, and community involvement.
            </p>
          </div>

          {/* Timeline commits matching codedgar git commit/diff list */}
          <div className="space-y-12">
            
            {/* Commit 01 */}
            <div className="relative border-l border-hairline-strong pl-8 pb-4">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 border-2 border-accent bg-canvas" />
              
              <div className="flex items-center space-x-3 mb-2 text-[10px] font-mono">
                <span className="text-accent bg-accent/5 px-2 py-0.5 border border-hairline font-bold">Nov 2025 - Jan 2026</span>
                <span className="text-accent font-bold uppercase tracking-wider">[HEAD]</span>
              </div>
              
              <h3 className="text-base font-bold text-ink mb-1">Software Engineering Intern @ KT Informatik</h3>
              <p className="text-xs text-body font-sans max-w-[800px] mb-4 leading-relaxed">
                Architected semantic ATS pipelines and optimized container deployments for medical diagnostic applications.
              </p>

              {/* Git Diff box */}
              <div className="diff-block max-w-[700px]">
                <div className="diff-add">+ RAG semantic search pipelines (BM25 + dual-retrieval)</div>
                <div className="diff-add">+ Redis caching &amp; RabbitMQ worker ingestion (latency cut 50%)</div>
                <div className="diff-add">+ Dockerized multi-stage container optimization (size cut 60%)</div>
                <div className="diff-mod">~ Dual-LLM API calling schemas &amp; response orchestrations</div>
              </div>
            </div>

            {/* Commit 02 */}
            <div className="relative border-l border-hairline-strong pl-8 pb-4">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 border-2 border-hairline-strong bg-canvas" />
              
              <div className="flex items-center space-x-3 mb-2 text-[10px] font-mono">
                <span className="text-accent bg-accent/5 px-2 py-0.5 border border-hairline font-bold">2022 - 2025</span>
              </div>
              
              <h3 className="text-base font-bold text-ink mb-1">American International University-Bangladesh</h3>
              <p className="text-xs text-body font-sans max-w-[800px] mb-4 leading-relaxed">
                B.Sc. in Computer Science Engineering. Grade Point Average: 3.96/4.00.
              </p>

              <div className="diff-block max-w-[700px]">
                <div className="diff-add">+ Dean's Honor List &amp; Dean's Award (All Semesters)</div>
                <div className="diff-add">+ Coursework: Distributed Systems, Artificial Intelligence, Databases</div>
                <div className="diff-mod">~ Academic research paper on dual-attention dermatological CNNs</div>
              </div>
            </div>

            {/* Commit 03 */}
            <div className="relative border-l border-hairline-strong pl-8 pb-4">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 border-2 border-hairline-strong bg-canvas" />
              
              <div className="flex items-center space-x-3 mb-2 text-[10px] font-mono">
                <span className="text-accent bg-accent/5 px-2 py-0.5 border border-hairline font-bold">2020 - 2021</span>
              </div>
              
              <h3 className="text-base font-bold text-ink mb-1">Jagannath University</h3>
              <p className="text-xs text-body font-sans max-w-[800px] mb-4 leading-relaxed">
                B.Sc. in Mathematics (Completed initial coursework before transferring to CSE).
              </p>

              <div className="diff-block max-w-[700px]">
                <div className="diff-add">+ Foundations of Linear Algebra, Multivariable Calculus, Real Analysis</div>
                <div className="diff-mod">~ Transitioned to Applied Computer Science and Software Engineering</div>
              </div>
            </div>

            {/* Commit 04 */}
            <div className="relative border-l border-hairline-strong pl-8 pb-4">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 border-2 border-hairline-strong bg-canvas" />
              
              <div className="flex items-center space-x-3 mb-2 text-[10px] font-mono">
                <span className="text-accent bg-accent/5 px-2 py-0.5 border border-hairline font-bold">2017 - Present</span>
              </div>
              
              <h3 className="text-base font-bold text-ink mb-1">Executive Council Member @ Unmesh</h3>
              <p className="text-xs text-body font-sans max-w-[800px] mb-4 leading-relaxed">
                Directing seasonal operations, philanthropic program coordination, and public fundraisers for marginalized groups.
              </p>

              <div className="diff-block max-w-[700px]">
                <div className="diff-add">+ Coordinated 10+ community seasonal distributions</div>
                <div className="diff-add">+ Structured operational logs &amp; donor database spreadsheets</div>
                <div className="diff-mod">~ Mentored junior volunteers in project delivery execution</div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
