import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Column */}
          <div className="w-full md:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-mute text-[11px] block mb-2 select-none">
                // system.init
              </span>
              <div className="font-mono text-xs text-accent mb-6 select-none uppercase tracking-wider font-bold">
                Dean's List · CGPA 3.96 · System &amp; AI Architect
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-2 leading-tight">
                Hello, I'm <br />
                <span className="text-accent">Nazim Riyadh</span>
              </h1>
              <h2 className="text-lg md:text-xl font-bold text-mute mb-8">
                Software Engineer &amp; AI Architect
              </h2>
              
              <p className="text-sm md:text-base text-body max-w-[600px] mb-10 leading-relaxed">
                Your systems feel slow. APIs choke under traffic, database queries block your threads, and your AI features return hallucinated responses. I identify structural engineering bottlenecks and build event-driven, optimized architectures.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs">
                <Link to="/about" className="btn-primary">
                  See my approach
                </Link>
                <Link to="/projects" className="btn-secondary">
                  Case studies
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Panel (Terminal Mockup style avatar) */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-[360px] browser-mockup h-[400px]"
            >
              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot" />
                  <div className="browser-dot" />
                  <div className="browser-dot" />
                </div>
                <div className="browser-address">system://entity.avatar</div>
                <div className="w-6" />
              </div>
              <div className="flex-grow p-6 flex flex-col justify-between bg-surface-soft/40 relative overflow-hidden font-mono text-xs">
                {/* Background matrix effects */}
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[8px] leading-none text-accent">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="truncate">
                      01001110 01000001 01011010 01001001 01001101 01011111 01010011 01011001 01010011
                    </div>
                  ))}
                </div>
                
                <div className="text-accent">
                  <span>&gt; INITIALIZE PORTRAIT_RENDERER</span><br/>
                  <span className="text-mute">&gt; rendering vector space...</span>
                </div>
                
                {/* ASCII art developer representation */}
                <div className="my-auto text-center font-bold text-ink leading-relaxed select-none">
                  <pre className="inline-block text-left text-[9px] md:text-[10px] text-accent/85 leading-normal">
{`    +-----------------------+
    |  .-----------------.  |
    |  |  [NAZIM_OS]     |  |
    |  |                 |  |
    |  |   O   N   E     |  |
    |  |   S   Y   S     |  |
    |  |                 |  |
    |  \`-----------------\`  |
    +-----------------------+
        ___/           \\___
       /                   \\`}
                  </pre>
                </div>
                
                <div className="border-t border-hairline-strong pt-4 flex justify-between items-center text-mute text-[10px]">
                  <span>PORT: 8080</span>
                  <span className="text-accent">STATUS: READY_</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Section Down Arrow Indicator */}
        <div className="w-full text-center mt-12 flex flex-col items-center justify-center text-mute select-none font-mono text-[10px]">
          <span>0x01 // the_focus</span>
          <span className="animate-bounce mt-2 text-xs text-accent">↓</span>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-20">
        
        {/* SECTION 02 // FOCUS PROBLEMS */}
        <section className="mb-32 relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            02
          </div>
          
          <div className="mb-12 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// focus.challenges</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">Focus Areas</h2>
            <p className="text-sm text-body max-w-[700px] leading-relaxed">
              Modern systems suffer from silent, compound issues. I analyze bottlenecks at these critical layers to build responsive, robust applications.
            </p>
          </div>

          {/* Cards Grid matching codedgar.com red left-border cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                idx: '01',
                title: 'Latency & Blocking',
                desc: 'Synchronous database queries and heavy API pipelines block CPU threads, dropping throughput under load.'
              },
              {
                idx: '02',
                title: 'Brittle Monoliths',
                desc: 'Cascading failures across coupled modules make releases risky. Decoupled event queues prevent complete down-times.'
              },
              {
                idx: '03',
                title: 'RAG Hallucinations',
                desc: 'Naive document parsing and standard vector queries yield low-quality contexts. Hybrid search restores factual accuracy.'
              },
              {
                idx: '04',
                title: 'Bloated Containers',
                desc: 'Unoptimized layers and build caches bloat Docker image sizes, slowing down continuous integration and deployments.'
              }
            ].map((card, i) => (
              <div key={i} className="border-l-2 border-accent bg-surface-soft/40 p-6 flex flex-col justify-between min-h-[200px] relative">
                <span className="absolute top-4 right-4 font-mono text-[10px] text-accent-signal">[{card.idx}]</span>
                <div>
                  <h3 className="font-bold text-ink text-sm mb-3 mt-4">{card.title}</h3>
                  <p className="text-body text-xs leading-relaxed font-sans">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-mute leading-relaxed max-w-[800px] italic border-t border-hairline-strong pt-6">
            "Most engineering teams try to patch scaling bottlenecks by increasing server resources. That's a temporary fix. True robustness is architectural, and that is what I design."
          </p>
        </section>

        {/* SECTION 03 // WHO I AM */}
        <section className="mb-32 relative">
          <div className="absolute left-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            03
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Narrative */}
            <div className="w-full md:w-3/5 text-left z-10">
              <span className="font-mono text-mute text-xs block mb-2">// section.about</span>
              <h2 className="text-3xl font-bold tracking-tight text-ink mb-6">Who I Am</h2>
              <p className="text-sm md:text-base text-body mb-8 leading-relaxed">
                I graduated from American International University-Bangladesh with a B.Sc. in Computer Science Engineering (3.96/4.00 CGPA). I focus on distributed backends, AI retrieval systems, and infrastructure optimization, delivering production-grade software engineered with care and intention.
              </p>
              <Link to="/about" className="btn-secondary inline-block">
                More about me &rarr;
              </Link>
            </div>

            {/* Right Stats Grid */}
            <div className="w-full md:w-2/5">
              <div className="border border-hairline-strong p-8 bg-surface-soft/30 grid grid-cols-2 gap-8 relative overflow-hidden font-mono">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-ink">
                    3.96<span className="text-accent font-bold">+</span>
                  </div>
                  <div className="text-[10px] text-mute uppercase mt-1">B.Sc. CGPA</div>
                  <div className="text-[9px] text-mute/60 font-sans mt-0.5">Dean's Honor List</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-ink">
                    50<span className="text-accent font-bold">%</span>
                  </div>
                  <div className="text-[10px] text-mute uppercase mt-1">Latency cut</div>
                  <div className="text-[9px] text-mute/60 font-sans mt-0.5">Redis/RabbitMQ tier</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-ink">
                    96.9<span className="text-accent font-bold">%</span>
                  </div>
                  <div className="text-[10px] text-mute uppercase mt-1">Macro-F1</div>
                  <div className="text-[9px] text-mute/60 font-sans mt-0.5">Dermatological AI</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-ink">
                    60<span className="text-accent font-bold">%</span>
                  </div>
                  <div className="text-[10px] text-mute uppercase mt-1">Size Cut</div>
                  <div className="text-[9px] text-mute/60 font-sans mt-0.5">Docker optimizations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 // FEATURED WORK */}
        <section className="mb-32 relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            04
          </div>
          
          <div className="mb-12 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// section.work</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">Featured Work</h2>
            <p className="text-sm text-body max-w-[700px] leading-relaxed">
              A select portfolio of engineering systems and architectural components built to solve structural problems.
            </p>
          </div>

          {/* 3-Column Projects Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Owlpi',
                year: '2025',
                role: 'Creator & Architect',
                desc: 'An API monitoring pipeline resolving synchronous ingestion bottlenecks. Decoupled via RabbitMQ and dual-db layers, cutting loss to zero.',
                tags: ['Distributed Systems', 'RabbitMQ', 'PostgreSQL'],
                address: 'system://projects.owlpi'
              },
              {
                title: 'BigBazar',
                year: '2025',
                role: 'Full-Stack Developer',
                desc: 'An AI-powered e-commerce architecture leveraging Redis caching layers and Pinecone vector retrieval for product semantic search.',
                tags: ['Vector Databases', 'Redis', 'Node.js'],
                address: 'system://projects.bigbazar'
              },
              {
                title: 'ESkinNetBD',
                year: '2024',
                role: 'Lead Researcher',
                desc: 'A dual-attention medical AI model achieving 96.9% macro-F1 score with integrated Grad-CAM explainability for clinical validation.',
                tags: ['Computer Vision', 'PyTorch', 'Medical AI'],
                address: 'system://research.eskinnet'
              }
            ].map((proj, i) => (
              <div key={i} className="styled-card flex flex-col justify-between min-h-[500px]">
                {/* Top Half Mockup Screenshot */}
                <div className="browser-mockup h-[200px] mb-6">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <div className="browser-dot" />
                      <div className="browser-dot" />
                      <div className="browser-dot" />
                    </div>
                    <div className="browser-address">{proj.address}</div>
                    <div className="w-6" />
                  </div>
                  <div className="flex-grow bg-surface-soft/60 p-4 flex items-center justify-center relative select-none">
                    <div className="font-mono text-[9px] text-mute text-center leading-normal border border-hairline-strong border-dashed p-4 bg-canvas w-full h-full flex flex-col justify-between">
                      <span className="text-accent uppercase font-bold tracking-wider">// debug_view</span>
                      <div className="text-xs font-bold text-ink">{proj.title}</div>
                      <span className="text-[8px] text-mute">READY_PORT: {3000 + i}</span>
                    </div>
                  </div>
                </div>

                {/* Under Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-2 text-[10px] font-mono">
                    <span className="text-accent bg-accent/5 px-2 py-0.5 border border-hairline-strong font-bold">{proj.year}</span>
                    <span className="text-accent-hover font-bold">{proj.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{proj.title}</h3>
                  <p className="text-xs text-body leading-relaxed mb-6 font-sans">{proj.desc}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-hairline flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] text-mute bg-surface-soft px-2 py-0.5 border border-hairline">{tag}</span>
                    ))}
                  </div>
                  <Link to="/projects" className="text-xs text-accent hover:underline font-bold inline-block">
                    View case study &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary inline-block">
              View all projects
            </Link>
          </div>
        </section>

        {/* SECTION 05 // SERVICES */}
        <section className="mb-32 relative">
          <div className="absolute left-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            05
          </div>
          
          <div className="mb-12 text-left z-10 relative">
            <span className="font-mono text-mute text-xs block mb-2">// section.services</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">How I Help</h2>
            <p className="text-sm text-body max-w-[700px] leading-relaxed">
              Three ways to work together, depending on your project scale and infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'High-End Backend Systems',
                desc: 'Designing highly concurrent message queues, decoupled API worker architectures, and low-latency cache tiers utilizing Redis and RabbitMQ.',
                blocks: (
                  <div className="flex space-x-1.5 mb-6">
                    <div className="w-3 h-3 bg-accent" />
                    <div className="w-3 h-3 bg-accent" />
                    <div className="w-3 h-3 bg-accent/30" />
                  </div>
                )
              },
              {
                title: 'Applied AI & RAG Engineering',
                desc: 'Developing contextual document chunks indexing, hybrid vector retrieval spaces, and integrating local/cloud model frameworks for semantic applications.',
                blocks: (
                  <div className="flex space-x-1.5 mb-6">
                    <div className="w-3 h-3 bg-accent-signal" />
                    <div className="w-3 h-3 bg-accent-signal" />
                    <div className="w-3 h-3 bg-accent-signal" />
                  </div>
                )
              },
              {
                title: 'Docker & Container Infrastructure',
                desc: 'Hardening multi-container orchestration environments, optimizing Docker layers to cut sizes, and scripting clean, automated deployment flows.',
                blocks: (
                  <div className="flex space-x-1.5 mb-6">
                    <div className="w-3 h-3 bg-ink" />
                    <div className="w-3 h-3 bg-ink/20" />
                    <div className="w-3 h-3 bg-ink" />
                  </div>
                )
              }
            ].map((service, i) => (
              <div key={i} className="styled-card styled-card-hover p-8">
                {service.blocks}
                <h3 className="text-base font-bold text-ink mb-4">{service.title}</h3>
                <p className="text-xs text-body leading-relaxed font-sans">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 06 // LATEST WRITING / RESEARCH */}
        <section className="mb-32 relative">
          <div className="absolute right-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            06
          </div>
          
          <div className="mb-12 text-left">
            <span className="font-mono text-mute text-xs block mb-2">// section.writing</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">Latest Writing</h2>
            <p className="text-sm text-body max-w-[700px] leading-relaxed">
              Documenting technical insights on systems architecture, mathematical findings, and applied artificial intelligence research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'ESkinNetBD: Transparent Skin Disease Diagnosis Framework',
                date: 'Dec 2024',
                desc: 'A comprehensive review of the EfficientNet dual-attention CNN architecture, utilizing CBAM layers and focal loss strategies to balance skin pathology datasets.',
                tags: ['Computer Vision', 'Medical AI', 'PyTorch']
              },
              {
                title: 'Oceanic Chlorophyll Analysis via Optimized Random Forest',
                date: 'Oct 2024',
                desc: 'Investigating environmental predictive models over massive datasets. Feature engineering and Optuna hyperparameter sweeps compared across baseline regressors.',
                tags: ['Machine Learning', 'Data Science', 'Optuna']
              }
            ].map((post, i) => (
              <div key={i} className="border border-hairline-strong p-8 bg-surface-soft/20 relative flex flex-col justify-between min-h-[260px]">
                <div>
                  <span className="text-[10px] text-mute font-mono block mb-2">{post.date}</span>
                  <h3 className="text-base font-bold text-ink mb-3">{post.title}</h3>
                  <p className="text-xs text-body leading-relaxed font-sans mb-6">{post.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-hairline">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] text-mute bg-surface-soft px-2 py-0.5 border border-hairline">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/research" className="btn-secondary inline-block">
              Read all research
            </Link>
          </div>
        </section>

        {/* SECTION 07 // TESTIMONIALS */}
        <section className="mb-32 relative">
          <div className="absolute left-0 top-0 font-bold text-mute/5 text-8xl md:text-[12rem] select-none pointer-events-none leading-none">
            07
          </div>
          
          <div className="mb-12 text-left z-10 relative">
            <span className="font-mono text-mute text-xs block mb-2">// section.proof</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">What Others Say</h2>
            <p className="text-sm text-body max-w-[700px] leading-relaxed">
              Feedback from academic advisors, code collaborators, and project coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: 'Nazim demonstrated exceptional capabilities during his tenure, designing and implementing systems that greatly optimized our pipeline bottlenecks and showing absolute focus on clean documentation.',
                author: 'Project Advisor',
                role: 'Department of Computer Science Engineering'
              },
              {
                text: 'A highly methodical software developer who approaches engineering questions from a solid mathematical foundation, consistently delivering robust, decoupled components that scale.',
                author: 'Research Coordinator',
                role: 'Applied Artificial Intelligence Lab'
              }
            ].map((quote, i) => (
              <div key={i} className="border-l-2 border-accent bg-surface-soft/40 p-8 flex flex-col justify-between relative">
                <span className="text-2xl text-accent font-bold absolute top-4 left-6 select-none opacity-20">"</span>
                <p className="text-xs text-body italic leading-relaxed font-sans mb-6 mt-4 pl-4">{quote.text}</p>
                <div className="pl-4 font-mono">
                  <strong className="text-xs text-ink block">{quote.author}</strong>
                  <span className="text-[10px] text-mute">{quote.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 08 // CONTACT BOX */}
        <section className="mb-20">
          <div className="border border-hairline-strong bg-surface-soft/40 p-12 text-center relative overflow-hidden flex flex-col items-center">
            {/* Custom pixel block cross icon */}
            <div className="flex flex-col items-center justify-center space-y-1 mb-6">
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
              <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 bg-transparent" />
                <div className="w-2.5 h-2.5 bg-accent" />
                <div className="w-2.5 h-2.5 bg-transparent" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-ink mb-4">Let's Connect</h3>
            <p className="text-xs text-body max-w-[500px] leading-relaxed mb-6 font-sans">
              Have a systems architecture project, research paper collaboration, or engineering role opportunity? Reach out directly.
            </p>
            
            <div className="border border-accent-signal/30 text-accent-signal bg-accent-signal/5 px-4 py-1.5 font-mono text-[10px] mb-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-accent-signal animate-pulse" />
              <span>Limited Availability · Q2 2026</span>
            </div>

            <a href="mailto:nazimriyadh001@gmail.com" className="btn-primary font-bold">
              Establish Handshake
            </a>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Home;
