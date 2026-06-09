import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionNumber from "../components/SectionNumber";
import GlowCard from "../components/GlowCard";
import { staggerContainer, fadeUp } from "../utils/motion";

function Writing() {
  const articles = [
    {
      title: "How I Built a Semantic ATS Using RAG and Dual-LLM Orchestration",
      date: "Jan 2026",
      readTime: "6 min read",
      desc: "An in-depth look at building an automated candidate ranking system. Explains hybrid search using BM25 alongside dense vector retrieval, and caching latency cut strategies.",
      tags: ["LLM", "RAG", "Redis", "Python"],
      bullets: [
        "BM25 and cosine vector similarity weight tuning",
        "Redis/RabbitMQ query caching layers cutting load",
        "Neo4j knowledge graph entity connection maps",
      ],
    },
    {
      title: "Why RabbitMQ and Event-Driven Pipelines Saved Our API Monitors",
      date: "Nov 2025",
      readTime: "4 min read",
      desc: "Synchronous ingestion models choke under heavy payload bursts. Discussing the migration to decoupled worker queues and exponential backoff retry flows.",
      tags: ["RabbitMQ", "System Design", "Event-Driven"],
      bullets: [
        "Producer-consumer scaling thresholds under load",
        "Dead letter queue and worker retry boundaries",
        "Database write batching algorithms",
      ],
    },
    {
      title:
        "Redis is Not Always the Answer: Cache Anti-Patterns in Production",
      date: "Aug 2025",
      readTime: "5 min read",
      desc: "Analyzing cases where caching introduces write-amplification and data stale states. Tips on setting correct TTL values and cache invalidation policies.",
      tags: ["Redis", "Caching", "Database"],
      bullets: [
        "Cache-aside vs write-through latency comparison",
        "Stampede mitigation using mutex locks",
        "Stale-state recovery algorithms",
      ],
    },
  ];

  return (
    <div className="pb-24 selection:bg-accent selection:text-white">
      {/* SECTION 01 // HERO */}
      <section className="relative w-full pt-16 pb-20 border-b border-hairline-strong bg-canvas overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
          <span className="font-mono text-mute text-[11px] block mb-2 select-none">
            // page.writing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-6 leading-none">
            Writing
          </h1>
          <p className="text-sm md:text-base text-body max-w-[600px] mb-8 leading-relaxed font-sans">
            Technical essays, developer guides, and post-mortems on systems
            engineering and AI integration.
          </p>
          <div className="border border-accent-signal/30 text-accent-signal bg-accent-signal/5 px-4 py-1.5 font-mono text-[10px] uppercase font-bold tracking-wider inline-flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent-signal animate-pulse" />
            <span>Articles &amp; Build Logs</span>
          </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-20">
        {/* SECTION 02 // ARTICLES GRID */}
        <section className="relative">
          <SectionNumber number="02" align="right" />

          <ScrollReveal className="mb-12 text-left relative z-10">
            <span className="section-label">// section.articles</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink mb-4">
              Latest Articles
            </h2>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer(0.12)}
          >
            {articles.map((post, i) => (
              <motion.div key={i} variants={fadeUp}>
              <GlowCard className="article-card min-h-[420px] p-8">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono mb-4">
                    <span className="text-accent bg-accent/5 px-2.5 py-0.5 border border-hairline-strong font-bold">
                      {post.date}
                    </span>
                    <span className="text-mute">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-body leading-relaxed mb-6 font-sans">
                    {post.desc}
                  </p>

                  {/* Plus Bullet Points */}
                  <div className="bg-surface-soft/40 p-4 border border-hairline-strong font-mono text-xs rounded-none mb-6">
                    <ul className="space-y-1.5 text-body text-[11px]">
                      {post.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent font-bold mr-2 select-none">
                            +
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-hairline flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] text-mute bg-surface-soft px-2 py-0.5 border border-hairline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-xs link-arrow"
                  >
                    Read article <span className="arrow">&rarr;</span>
                  </a>
                </div>
              </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Writing;
