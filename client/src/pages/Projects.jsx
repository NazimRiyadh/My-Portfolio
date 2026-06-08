import React from 'react';

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

  return (
    <div className="section-container">
      <h1 className="text-display-xl mb-4 text-ink font-bold">Projects</h1>
      <p className="text-body-md mb-12 text-mute max-w-[600px]">
        Systems built for scale, resilience, and intelligent automation. Each case study details the architecture, tradeoffs, and impact.
      </p>

      <div className="space-y-16">
        {projects.map((proj, idx) => (
          <div key={idx} className="border-t border-hairline pt-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h2 className="text-heading-md">{proj.title}</h2>
              <div className="text-caption-md text-mute mt-2 md:mt-0">[ {proj.stack} ]</div>
            </div>
            
            <p className="text-body-md text-body mb-6">
              {proj.desc}
            </p>
            
            <div className="bg-surface-soft p-4 rounded-sm border border-hairline mb-4">
              <div className="text-body-strong mb-2">Technical Focus:</div>
              <ul className="space-y-2">
                {proj.features.map((feat, fidx) => (
                  <li key={fidx} className="list-row text-sm">
                    <span className="text-mute mr-2">[+]</span>{feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <a href={proj.link} className="link-inline">View source code on GitHub →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
