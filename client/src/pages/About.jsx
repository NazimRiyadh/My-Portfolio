import React from 'react';

function About() {
  return (
    <div className="section-container flex flex-col md:flex-row gap-12">
      <div className="w-full md:w-1/3">
        <h1 className="text-display-xl mb-6 text-ink font-bold">About</h1>
        <div className="bg-surface-dark text-on-dark p-6 rounded-sm mb-6 border border-hairline-strong">
          <div className="font-mono text-sm leading-relaxed">
            <span className="text-ash"># execution_log</span><br/>
            <span>&gt; loading_profile...</span><br/>
            <span className="text-success">&gt; OK</span><br/>
            <span>&gt; name: Nazim-E-Alam Riyadh</span><br/>
            <span>&gt; status: Online</span><br/>
            <span>&gt; location: Dhaka, Bangladesh</span><br/>
            <span>&gt; role: Software Engineer</span>
          </div>
        </div>
        <a href="/Brac_Nazim_E_Alam.pdf" download className="btn-primary w-full text-center">Download CV (PDF)</a>
      </div>
      
      <div className="w-full md:w-2/3 space-y-8">
        <section>
          <h2 className="text-heading-md mb-4 pb-2 border-b border-hairline">**education**</h2>
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <strong className="text-body-strong text-ink">American International University-Bangladesh</strong>
              <span className="text-caption-md text-mute">2022 - 2025</span>
            </div>
            <div className="text-body-md text-body mb-1">B.Sc. in Computer Science Engineering</div>
            <div className="text-caption-md text-mute">CGPA: 3.96/4.0, Dean's List (All Semesters)</div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <strong className="text-body-strong text-ink">Jagannath University</strong>
              <span className="text-caption-md text-mute">2020 - 2021</span>
            </div>
            <div className="text-body-md text-body">B.Sc. in Mathematics</div>
          </div>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 pb-2 border-b border-hairline">**experience**</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <strong className="text-body-strong text-ink">KT Informatik</strong>
              <span className="text-caption-md text-mute">Nov 2025 - Jan 2026</span>
            </div>
            <div className="text-body-md text-body mb-2">Software Engineering Intern</div>
            <ul className="space-y-2 text-body-md text-body pl-2 border-l-2 border-hairline-strong">
              <li><span className="text-mute mr-2">[-]</span> Architected an intelligent ATS utilizing RAG (BM25, vector search, knowledge graphs) to automate candidate ranking.</li>
              <li><span className="text-mute mr-2">[-]</span> Optimized end-to-end latency by 50% through Redis/RabbitMQ caching and dual-LLM orchestration.</li>
              <li><span className="text-mute mr-2">[-]</span> Engineered a production-ready Docker environment for FastAPI, Neo4j, PostgreSQL, reducing image size by 60%.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 pb-2 border-b border-hairline">**activities**</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <strong className="text-body-strong text-ink">Unmesh</strong>
              <span className="text-caption-md text-mute">Mar 2017 - Present</span>
            </div>
            <div className="text-body-md text-body mb-2">Executive Council Member</div>
            <p className="text-body-md text-body">
              Spearheaded philanthropic programs for marginalized groups, directing resource distribution during winter and seasonal festivals while managing fundraising operations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
