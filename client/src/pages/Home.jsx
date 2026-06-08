import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="pb-section">
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-16 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden border-b border-hairline">
        <div className="max-w-[960px] w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-accent text-xs tracking-wider uppercase mb-3 block">[ system.init ]</span>
            <h1 className="font-display text-[44px] md:text-[68px] leading-tight text-ink font-bold tracking-tight mb-6">
              Nazim-E-Alam Riyadh
            </h1>
            <h2 className="font-mono text-[16px] md:text-[20px] text-white/90 mb-8 border-l-2 border-accent pl-4">
              Software Engineer &amp; AI Systems Architect
            </h2>
            <p className="text-body-md md:text-lg text-body max-w-[700px] mb-10 leading-relaxed font-sans">
              I construct high-performance distributed systems, research applied Artificial Intelligence, and design developer tools that scale. B.Sc. in Computer Science Engineering (3.96/4.0 CGPA) with an emphasis on RAG systems, vector space search, and event-driven architectures.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <Link to="/projects" className="btn-primary">explore_projects()</Link>
              <a href="/Brac_Nazim_E_Alam.pdf" download className="btn-secondary">download_resume.pdf</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-container mt-16"
      >
        {/* Services / Focus Section */}
        <div className="mb-20">
          <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Engineering Focus</h2>
            <span className="font-mono text-mute text-xs">// areas_of_practice</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <motion.div variants={itemVariants} className="border border-hairline p-6 bg-surface-soft rounded-sm hover:border-accent/50 transition-colors">
              <div className="text-accent mb-4 text-lg">01/</div>
              <h3 className="font-mono font-bold text-white text-sm mb-2">Distributed Systems</h3>
              <p className="text-body font-sans text-caption-md leading-relaxed">
                Designing resilient, message-queued APIs and caching systems utilizing Node.js, Express, Go, RabbitMQ, and Redis.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="border border-hairline p-6 bg-surface-soft rounded-sm hover:border-accent/50 transition-colors">
              <div className="text-accent mb-4 text-lg">02/</div>
              <h3 className="font-mono font-bold text-white text-sm mb-2">Applied AI &amp; Vision</h3>
              <p className="text-body font-sans text-caption-md leading-relaxed">
                Implementing RAG architecture, semantic vector search indexes (Pinecone), and dual-attention CNN frameworks.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="border border-hairline p-6 bg-surface-soft rounded-sm hover:border-accent/50 transition-colors">
              <div className="text-accent mb-4 text-lg">03/</div>
              <h3 className="font-mono font-bold text-white text-sm mb-2">Infrastructure</h3>
              <p className="text-body font-sans text-caption-md leading-relaxed">
                Creating optimized multi-container Docker environments and robust CI/CD deployment automation pipelines.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Featured Works</h2>
            <Link to="/projects" className="font-mono text-accent text-xs hover:text-white transition-colors">view_all_projects() &rarr;</Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <motion.div 
              variants={itemVariants}
              className="border border-hairline p-8 bg-surface-soft rounded-sm flex flex-col h-full glow-card relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-xl font-bold text-white">Owlpi</h3>
                <span className="font-mono text-[10px] text-accent border border-hairline px-2 py-0.5 rounded-sm">API Monitor</span>
              </div>
              <p className="text-body text-body-md font-sans mb-6 flex-grow leading-relaxed">
                Real-time API performance ingestion system leveraging event-driven Node.js, Express, and RabbitMQ to achieve decoupled analytics processing.
              </p>
              <div className="font-mono text-xs text-mute mb-4 select-none">
                [ React | Node.js | Postgres | RabbitMQ ]
              </div>
              <Link to="/projects" className="link-inline mt-auto font-mono text-[13px]">inspect_case_study() &rarr;</Link>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div 
              variants={itemVariants}
              className="border border-hairline p-8 bg-surface-soft rounded-sm flex flex-col h-full glow-card relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-xl font-bold text-white">BigBazar</h3>
                <span className="font-mono text-[10px] text-accent border border-hairline px-2 py-0.5 rounded-sm">AI E-Commerce</span>
              </div>
              <p className="text-body text-body-md font-sans mb-6 flex-grow leading-relaxed">
                High-performance marketplace architecture utilizing Redis cache tiers and Pinecone vector databases for contextual user recommendations.
              </p>
              <div className="font-mono text-xs text-mute mb-4 select-none">
                [ React | Express | Redis | Pinecone | Gemini ]
              </div>
              <Link to="/projects" className="link-inline mt-auto font-mono text-[13px]">inspect_case_study() &rarr;</Link>
            </motion.div>
          </div>
        </div>

        {/* Quick Contact Form link */}
        <motion.div 
          variants={itemVariants} 
          className="border border-hairline bg-surface-soft p-8 rounded-sm text-center relative overflow-hidden"
        >
          <h3 className="font-display text-2xl font-bold text-white mb-2">Let's build something together</h3>
          <p className="text-body text-body-md max-w-[500px] mx-auto mb-6 font-sans">
            Have a system engineering project, research study, or role opportunity? Drop a line.
          </p>
          <a href="mailto:nazimriyadh001@gmail.com" className="btn-primary inline-flex font-mono px-8 py-2">
            establish_handshake()
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
