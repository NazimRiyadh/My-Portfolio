import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Owlpi',
      stack: 'React, Node, Express, Postgres, MongoDB, RabbitMQ, Docker',
      desc: 'Architected a real-time API Monitoring System using Node.js, Express, and RabbitMQ to ingest and analyze performance metrics across distributed client applications via asynchronous decoupled workflows.',
      features: [
        'Engineered a resilient event-driven infrastructure with Dead Letter Queues and an exponential backoff strategy (200ms-5s), ensuring zero data loss.',
        'Scalable backend featuring a dual-database schema (MongoDB/PostgreSQL), JWT/RBAC.'
      ],
      link: '#'
    },
    {
      title: 'BigBazar',
      stack: 'React, Node, Express, Postgres, Redis, Pinecone, Cloudinary, Gemini, Stripe',
      desc: 'Developed a high-performance e-commerce architecture featuring secure JWT authentication and Stripe integration.',
      features: [
        'Boosted platform efficiency by integrating Redis caching and a Pinecone/Google AI vector search engine to deliver semantically-aware product recommendations.',
        'Implemented robust backend scaling using PostgreSQL and Cloudinary for asset management.'
      ],
      link: '#'
    },
    {
      title: 'Blogbyte',
      stack: 'React JS, Appwrite (BaaS), Redux Toolkit, tailwind',
      desc: 'Built a full-stack blog app with authentication, CRUD operations, and image upload.',
      features: [
        'Integrated Appwrite for backend services and Redux for state management.',
        'Enhanced responsiveness and UX using component-based design with protected routes.'
      ],
      link: '#'
    }
  ];

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
    <div className="section-container">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left"
      >
        <span className="font-mono text-accent text-xs tracking-wider uppercase mb-2 block">// work.archives</span>
        <h1 className="font-display text-[44px] text-white font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-body-md text-body max-w-[600px] leading-relaxed font-sans">
          Distributed systems built for scale, performance monitoring, and artificial intelligence integration. Hover to inspect.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="border border-hairline p-8 bg-surface-soft rounded-sm glow-card relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
              <div>
                <h2 className="font-display text-[22px] font-bold text-white flex items-center">
                  {proj.title}
                </h2>
              </div>
              <div className="font-mono text-[10px] text-accent bg-card-bg px-3 py-1 border border-hairline rounded-sm">
                [ {proj.stack} ]
              </div>
            </div>
            
            <p className="text-body-md text-body mb-6 leading-relaxed font-sans">
              {proj.desc}
            </p>
            
            <div className="bg-canvas/50 p-6 rounded-sm border border-hairline mb-6 font-sans">
              <div className="font-mono text-xs text-white mb-3 flex items-center uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 inline-block"></span>
                technical_focus:
              </div>
              <ul className="space-y-3">
                {proj.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start text-caption-md text-body">
                    <span className="text-accent mr-3 font-mono font-bold select-none">[+]</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={proj.link} 
              className="inline-flex items-center text-accent hover:text-white transition-colors text-[13px] font-mono"
            >
              <span>inspect_source_code()</span>
              <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
