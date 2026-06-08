import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pb-section">
      {/* Hero TUI Mockup */}
      <section className="bg-surface-dark text-on-dark w-full pt-[64px] pb-[64px] px-[32px] flex flex-col items-center justify-center border-b border-hairline">
        <div className="max-w-[800px] w-full">
          <pre className="font-mono text-center text-[10px] md:text-[14px] leading-tight mb-8 overflow-x-auto text-on-dark">
{`
███╗   ██╗ █████╗ ███████╗██╗███╗   ███╗
████╗  ██║██╔══██╗╚══███╔╝██║████╗ ████║
██╔██╗ ██║███████║  ███╔╝ ██║██╔████╔██║
██║╚██╗██║██╔══██║ ███╔╝  ██║██║╚██╔╝██║
██║ ╚████║██║  ██║███████╗██║██║ ╚═╝ ██║
╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝     ╚═╝
`}
          </pre>
          <div className="bg-surface-dark-elevated text-on-dark rounded-sm px-[12px] py-[8px] flex items-center font-mono text-body-md mb-8 w-full max-w-[600px] mx-auto border border-hairline-strong">
            <span className="text-accent mr-2">❯</span>
            <span>init system --user "Nazim-E-Alam Riyadh"</span>
          </div>
          <div className="text-ash text-center text-caption-md flex justify-center space-x-6">
            <span>[+] Software Engineer</span>
            <span>[+] AI Researcher</span>
            <span>[+] Systems Builder</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container mt-section">
        <h2 className="text-heading-md mb-6">**system.status**</h2>
        <div className="bg-canvas border border-hairline p-6 rounded-sm mb-8">
          <p className="text-body-md mb-4">
            I build intelligent systems, study applied AI, and document the engineering journey behind them. 
            Recent graduate (B.Sc. CSE) from AIUB with a 3.96/4.0 CGPA.
          </p>
          <div className="flex space-x-4">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <a href="/Brac_Nazim_E_Alam.pdf" download className="btn-secondary">Download CV</a>
          </div>
        </div>

        <h2 className="text-heading-md mb-6">**core.competencies**</h2>
        <ul className="space-y-2 mb-section">
          <li className="list-row">[+] <strong>Backend & Systems</strong>: Node.js, Express, GO, FastAPI, PostgreSQL, MongoDB, RabbitMQ, Redis</li>
          <li className="list-row">[+] <strong>Frontend</strong>: React.js, Tailwind CSS, Redux</li>
          <li className="list-row">[+] <strong>AI/ML</strong>: RAG, Vector Search (Pinecone), TensorFlow, PyTorch, Scikit-learn</li>
          <li className="list-row">[+] <strong>DevOps</strong>: Docker, CI/CD, AWS, Actions</li>
        </ul>

        <h2 className="text-heading-md mb-6">**featured.projects**</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="border border-hairline p-6 bg-surface-soft rounded-none flex flex-col h-full">
            <h3 className="text-body-strong mb-2">Owlpi (API Monitoring)</h3>
            <p className="text-body-md text-body mb-4 flex-grow">
              Real-time API monitoring system using Node.js, Express, RabbitMQ. Event-driven infrastructure with Dead Letter Queues ensuring zero data loss.
            </p>
            <div className="text-caption-md text-mute mb-4">
              [ React | Node | Postgres | RabbitMQ | Docker ]
            </div>
            <Link to="/projects" className="link-inline">Read case study →</Link>
          </div>

          <div className="border border-hairline p-6 bg-surface-soft rounded-none flex flex-col h-full">
            <h3 className="text-body-strong mb-2">BigBazar (E-commerce & AI)</h3>
            <p className="text-body-md text-body mb-4 flex-grow">
              High-performance platform with JWT, Redis caching, and Pinecone/Google AI vector search for semantically-aware product recommendations.
            </p>
            <div className="text-caption-md text-mute mb-4">
              [ React | Express | Redis | Pinecone | Gemini ]
            </div>
            <Link to="/projects" className="link-inline">Read case study →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
