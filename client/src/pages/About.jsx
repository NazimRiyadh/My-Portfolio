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
    <div className="section-container flex flex-col md:flex-row gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/3"
      >
        <span className="font-mono text-accent text-xs tracking-wider uppercase mb-2 block">// human.entity</span>
        <h1 className="font-display text-[44px] text-white font-bold tracking-tight mb-6">About</h1>
        <div className="bg-surface-soft p-6 rounded-sm mb-6 border border-hairline relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-accent/20" />
          <div className="font-mono text-caption-md leading-relaxed text-mute">
            <span># execution_log</span><br/>
            <span>&gt; loading_profile...</span><br/>
            <span className="text-success">&gt; COMPLETED (OK)</span><br/>
            <span className="text-white">&gt; name: Nazim-E-Alam Riyadh</span><br/>
            <span className="text-white">&gt; status: Online</span><br/>
            <span className="text-white">&gt; location: Dhaka, Bangladesh</span><br/>
            <span className="text-white">&gt; role: Software Engineer</span>
          </div>
        </div>
        <a href="/Brac_Nazim_E_Alam.pdf" download className="btn-primary w-full text-center py-2 select-none font-mono">
          Download CV (PDF)
        </a>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-2/3 space-y-12 font-sans"
      >
        <motion.section variants={itemVariants}>
          <h2 className="font-display text-2xl font-bold mb-6 pb-2 border-b border-hairline text-accent">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-accent/40 pl-4 relative">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
                <strong className="text-body-strong text-white font-sans">American International University-Bangladesh</strong>
                <span className="font-mono text-caption-md text-mute">2022 - 2025</span>
              </div>
              <div className="text-body-md text-body mb-1">B.Sc. in Computer Science Engineering</div>
              <div className="text-caption-md text-accent font-mono">CGPA: 3.96/4.0, Dean's List (All Semesters)</div>
            </div>
            
            <div className="border-l-2 border-accent/20 pl-4 relative">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-mute" />
              <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
                <strong className="text-body-strong text-white font-sans">Jagannath University</strong>
                <span className="font-mono text-caption-md text-mute">2020 - 2021</span>
              </div>
              <div className="text-body-md text-body">B.Sc. in Mathematics</div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="font-display text-2xl font-bold mb-6 pb-2 border-b border-hairline text-accent">Experience</h2>
          <div className="border-l-2 border-accent/40 pl-4 relative font-sans">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
              <strong className="text-body-strong text-white">KT Informatik</strong>
              <span className="font-mono text-caption-md text-mute">Nov 2025 - Jan 2026</span>
            </div>
            <div className="text-body-md text-body mb-4">Software Engineering Intern</div>
            <ul className="space-y-3 text-caption-md text-body font-sans">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-mono font-bold">[+]</span>
                <span>Architected an intelligent ATS utilizing RAG (BM25, vector search, knowledge graphs) to automate candidate ranking.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-mono font-bold">[+]</span>
                <span>Optimized end-to-end latency by 50% through Redis/RabbitMQ caching and dual-LLM orchestration.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-mono font-bold">[+]</span>
                <span>Engineered a production-ready Docker environment for FastAPI, Neo4j, PostgreSQL, reducing image size by 60%.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="font-display text-2xl font-bold mb-6 pb-2 border-b border-hairline text-accent">Activities</h2>
          <div className="border-l-2 border-accent/20 pl-4 relative font-sans">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-mute" />
            <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
              <strong className="text-body-strong text-white font-sans">Unmesh</strong>
              <span className="font-mono text-caption-md text-mute">Mar 2017 - Present</span>
            </div>
            <div className="text-body-md text-body mb-2">Executive Council Member</div>
            <p className="text-caption-md text-body leading-relaxed font-sans">
              Spearheaded philanthropic programs for marginalized groups, directing resource distribution during winter and seasonal festivals while managing fundraising operations.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default About;
