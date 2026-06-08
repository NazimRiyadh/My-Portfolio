# Product Requirements Document (PRD)

# Nazim Lab — MERN Portfolio, Research Lab, CMS & AI Companion

**Version:** 1.0  
**Owner:** Nazim-E-Alam  
**Product Type:** Personal portfolio + research lab + engineering journal + admin CMS + future AI assistant  
**Primary Stack:** MongoDB, Express.js, React, Node.js  
**Design Direction:** Clean, editorial, system-like, codedgar-inspired, research-lab aesthetic  
**Future AI Layer:** RAG-based personal assistant + miniature companion/pet interface

---

## 1. Executive Summary

Nazim Lab is not a normal developer portfolio. It is a living personal platform where Nazim can publish projects, research, blogs, experiments, GitHub stats, notes, and career information from a private admin dashboard.

The website should feel like entering the workspace of a software engineer, AI researcher, and systems builder. It should be interesting for researchers, useful for recruiters, technically credible for engineers, and simple enough for normal visitors.

The site will be built using MERN, with a modular CMS so Nazim can log in as admin and update almost every public-facing section without touching code.

A future feature will add a GPT-like assistant named **Ask Nazim**. It will answer questions about Nazim’s projects, papers, skills, experience, blogs, and research notes. A small animated companion/pet will act as the friendly face of this assistant.

---

## 2. Inspiration & Research Findings

### 2.1 codedgar.com inspiration

codedgar.com works because it feels like a personal operating environment rather than a generic template. The homepage uses system-style labels such as `system.init`, numbered sections, visitor-mode details, calm typography, personal storytelling, and clear case-study navigation. Its case studies are especially strong because each project explains the problem, approach, key features, and impact instead of simply showing screenshots.

For Nazim Lab, the goal is not to copy codedgar visually. The goal is to adapt the principles:

- Calm confidence
- Strong writing
- Technical storytelling
- Case-study depth
- Personal system identity
- Numbered sections
- Editorial spacing
- A site that feels maintained with care

### 2.2 Portfolio best-practice research

Modern portfolio references emphasize that portfolio websites should act as versatile platforms for showcasing professional work, creative identity, and credibility. Awwwards describes portfolios as valuable creative mediums for presenting work, while case-study guidance emphasizes that a portfolio gives a broad overview and case studies provide deeper proof of problem-solving.

For Nazim Lab, this means the public website must have two levels:

1. **Fast overview:** Recruiters and casual visitors can understand Nazim in 30–60 seconds.
2. **Deep-dive mode:** Engineers and researchers can inspect architecture, methodology, experiments, results, tradeoffs, and lessons.

### 2.3 AI assistant research

RAG-based portfolio chatbots are now practical. A typical RAG assistant workflow is:

1. Convert user query into embeddings.
2. Retrieve relevant portfolio/blog/research content from the database or vector index.
3. Pass retrieved context into an LLM.
4. Stream a grounded answer back to the user.

For Nazim Lab, the assistant should be grounded only in Nazim’s approved public content. It should not hallucinate job history, fake research results, or unpublished achievements. It should cite the exact project, blog, research note, or CV source inside the answer.

### 2.4 MERN research

MERN is suitable because it uses JavaScript across frontend and backend. MongoDB stores flexible documents, Express provides API routing, React powers the UI, and Node.js runs the backend. This is a strong match for a customizable personal CMS where content models may evolve over time.

---

## 3. Product Vision

### 3.1 Vision Statement

Build a personal digital lab where Nazim’s engineering work, research, writing, experiments, and professional identity live together in one clean, customizable, AI-ready platform.

### 3.2 Positioning

**Not:** A basic CV website.  
**Not:** A flashy 3D portfolio.  
**Not:** A blog-only website.  

**Yes:** A living research-and-engineering operating system.

### 3.3 Product Tagline Options

Recommended:

> **Nazim Lab — Engineering intelligent systems. Researching applied AI. Documenting the journey.**

Alternatives:

- **NazimOS — Systems, research, and notes from Nazim-E-Alam.**
- **The Builder’s Lab — Software, AI, research, and engineering notes.**
- **Building Things That Think — Projects, research, and systems by Nazim-E-Alam.**

---

## 4. Target Audiences

### 4.1 Recruiters

Recruiters want to quickly answer:

- Who is Nazim?
- What roles is he suitable for?
- What has he built?
- What is his strongest technical proof?
- Can I download his CV?
- Can I contact him easily?

Recruiter experience must be fast, clean, and direct.

### 4.2 Researchers

Researchers want:

- Papers
- Abstracts
- Methodology
- Datasets
- Results
- Experimental details
- Future research ideas
- Failure notes and limitations

Research pages should feel like mini research notebooks.

### 4.3 Engineers

Engineers want:

- Architecture diagrams
- Backend decisions
- API design
- Database decisions
- Scaling strategy
- Tradeoffs
- Code quality
- GitHub links
- Failure cases

Project pages should read like engineering case studies.

### 4.4 General Visitors

General visitors want:

- A simple story
- Clean visuals
- Easy navigation
- Interesting personality
- Human details
- No overwhelming technical jargon

Every deep page should have a plain-English summary at the top.

---

## 5. Core Product Goals

### Goal 1: Make Nazim memorable

The website should not feel like a copied developer template. It should feel like Nazim’s own digital lab.

### Goal 2: Support multiple audience depths

Every major content type should support:

- Simple summary
- Technical deep dive
- Related links
- Source/code/paper references

### Goal 3: Make everything editable

Nazim should be able to log in and customize:

- Hero text
- Projects
- Research
- Blogs
- Notes
- Skills
- Social links
- Stats
- Timeline
- Featured content
- Contact information
- SEO metadata
- Companion/pet messages
- AI knowledge base entries

### Goal 4: Prepare for AI integration

The content database should be structured so the future assistant can retrieve trusted facts easily.

### Goal 5: Keep design creative but clean

The design should be distinctive, but performance and readability come first.

---

## 6. Product Scope

### 6.1 MVP Scope

The MVP must include:

- Public homepage
- Projects page
- Project detail pages
- Research page
- Research detail pages
- Blog page
- Blog detail pages
- About page
- Contact page
- GitHub stats section
- Admin login
- Admin dashboard
- CRUD for projects
- CRUD for research
- CRUD for blogs
- CRUD for skills
- CRUD for timeline
- Site settings editor
- Image upload
- Draft/publish system
- SEO fields
- Responsive design

### 6.2 Version 2 Scope

- Digital garden / notes
- Experiment vault
- Reading notes
- GitHub advanced analytics
- LeetCode/Codeforces stats
- Newsletter/email capture
- AI assistant basic version
- Companion/pet UI
- Content search
- Related content graph

### 6.3 Version 3 Scope

- Full RAG assistant
- Admin-managed AI knowledge base
- Conversation memory for visitors, with privacy controls
- Citation-based answers
- Analytics dashboard
- Theme customization
- Page builder blocks
- Multi-language support
- Public changelog
- Resume generator from CMS data

---

## 7. Information Architecture

```txt
Public Website
├── Home
├── Projects
│   ├── Project Listing
│   └── Project Detail / Case Study
├── Research
│   ├── Papers
│   ├── Experiments
│   └── Research Detail
├── Writing
│   ├── Blog Listing
│   └── Blog Detail
├── Digital Garden [V2]
│   ├── Notes
│   ├── Concepts
│   └── Reading Logs
├── Stats
├── About
├── Contact
└── Ask Nazim [V2/V3]

Admin Dashboard
├── Login
├── Overview
├── Projects
├── Research
├── Blogs
├── Experiments
├── Notes
├── Skills
├── Timeline
├── Stats
├── Media Library
├── Messages
├── AI Knowledge Base
├── Companion Settings
└── Site Settings
```

---

## 8. Public Website Requirements

## 8.1 Homepage

### Purpose

The homepage should explain Nazim’s identity in less than 10 seconds and invite deeper exploration.

### Hero Content

Recommended hero:

```txt
Nazim-E-Alam
Software Engineer · AI Researcher · Systems Builder

I build intelligent systems, study applied AI, and document the engineering journey behind them.
```

### Hero UI

Elements:

- Large name
- One-line identity
- Short human description
- CTA buttons:
  - View Projects
  - Explore Research
  - Download CV
  - Ask Nazim
- Small system label:

```txt
// system.init
MODE: VISITOR
STATUS: ONLINE
```

### Homepage Sections

1. Hero
2. Current focus
3. Featured projects
4. Featured research
5. Latest writing
6. GitHub/stats snapshot
7. Timeline preview
8. Contact CTA

### Acceptance Criteria

- Visitor understands Nazim’s identity within 10 seconds.
- Recruiter can find CV/contact without scrolling too much.
- Research and project links are visible above or shortly below the fold.
- Mobile hero remains clean and readable.

---

## 8.2 Projects

### Purpose

Show projects as real systems, not just cards.

### Listing Page Features

- Search
- Filter by category:
  - Full-stack
  - Backend
  - AI/ML
  - Research tool
  - Open source
  - Startup/product
- Filter by tech stack
- Featured projects pinned at top
- Status tags:
  - Live
  - Case study
  - In progress
  - Archived

### Project Card Fields

- Title
- Short description
- Thumbnail
- Tech stack
- Role
- Status
- Live link
- GitHub link
- One-line impact

### Project Detail Page Structure

Each project detail page must include:

1. Plain-English overview
2. Problem
3. Why it matters
4. Nazim’s role
5. Architecture
6. Tech stack
7. Key features
8. Engineering decisions
9. Tradeoffs
10. Challenges
11. Results/impact
12. Screenshots
13. Links
14. Lessons learned
15. Related blogs/research

### Deep Dive Toggle

Each project should support:

```txt
Simple View
Technical Deep Dive
```

Simple View is for recruiters/general visitors.  
Technical Deep Dive is for engineers.

### Example: OwlPi Page

```txt
Problem:
Distributed APIs need monitoring, but synchronous ingestion can fail under load.

Architecture:
Client Apps → API Gateway → RabbitMQ → Workers → PostgreSQL/MongoDB

Technical Focus:
Event-driven ingestion, retry strategy, DLQ, producer-consumer scaling.
```

---

## 8.3 Research

### Purpose

Make Nazim’s research credible, readable, and interesting.

### Research Listing Features

- Filter by status:
  - Published
  - Under review
  - Working paper
  - Experiment
  - Failed experiment
- Filter by area:
  - Computer vision
  - NLP
  - Medical AI
  - Environmental AI
  - LLM reliability
- Search
- Featured research

### Research Detail Page Structure

1. Title
2. Status
3. Plain-English summary
4. Abstract
5. Problem statement
6. Research question
7. Dataset
8. Methodology
9. Model/algorithm
10. Experimental setup
11. Results
12. Figures
13. Explainability/analysis
14. Limitations
15. Future work
16. Paper link
17. Code link
18. Citation
19. Related notes/blogs

### Special Feature: Research Notebook Mode

Each paper can have a notebook-style view:

```txt
Problem → Method → Experiment → Result → Limitation → Next Step
```

This makes the page more useful to researchers.

---

## 8.4 Blogs / Writing

### Purpose

Make Nazim’s thinking visible.

### Blog Categories

- Engineering
- AI/ML
- Research notes
- System design
- Career/reflection
- Build logs
- Tutorials

### Blog Detail Features

- Markdown/MDX rendering
- Code blocks
- Table of contents
- Reading time
- Tags
- Related content
- Copy code button
- Social sharing
- SEO metadata

### Recommended First Blog Topics

- How I built an ATS using RAG
- Why RabbitMQ helped my API monitoring architecture
- Redis is not always the answer
- How I structure AI research experiments
- What I learned from building BigBazar
- From CSE student to systems builder

---

## 8.5 Digital Garden [V2]

### Purpose

Create a place for small, connected learning notes.

### Content Types

- Concept notes
- Reading notes
- Research ideas
- Experiment logs
- Technical definitions
- System design notes

### Features

- Backlinks
- Related notes
- Graph view
- Tags
- Maturity labels:
  - Seed
  - Growing
  - Evergreen

---

## 8.6 Stats Page

### Purpose

Show proof of activity and impact.

### Stats to Show

- GitHub contributions
- Top languages
- Pinned repositories
- Total public repos
- Stars/forks if available
- Codeforces profile link
- LeetCode profile link
- Research count
- Project count
- Blog count
- Timeline achievements
- CV highlights

### Recommended Stats Copy

```txt
3.96 / 4.00 CGPA
300+ coding problems solved
40L+ BDT business revenue
50% latency reduction in ATS workflow
60% Docker image size reduction
```

Stats must be admin editable. GitHub stats can be fetched automatically.

---

## 8.7 About Page

### Purpose

Tell the human story.

### Structure

1. Short intro
2. Engineering identity
3. Research interest
4. Founder/startup journey
5. Volunteering/community
6. Design/creative side
7. Current focus
8. Resume download
9. Contact links

### Tone

Personal but not overly emotional. Clear, confident, and humble.

---

## 8.8 Contact Page

### Features

- Contact form
- Email link
- LinkedIn
- GitHub
- Behance
- Download CV
- Optional booking link
- Message storage in admin panel
- Spam protection

### Contact Form Fields

- Name
- Email
- Subject
- Message
- Reason:
  - Job opportunity
  - Research collaboration
  - Freelance/project
  - General message

---

## 9. Admin CMS Requirements

## 9.1 Authentication

### Requirements

- Admin login
- JWT access token
- Refresh token or secure session strategy
- Password hashing with bcrypt
- Rate limiting login attempts
- Optional 2FA later

### Roles

MVP:

- Admin only

Future:

- Admin
- Editor
- Viewer

---

## 9.2 Admin Dashboard Overview

### Dashboard Cards

- Total projects
- Total research items
- Total blogs
- Draft blogs
- Contact messages
- Published content
- GitHub stats status
- AI knowledge entries

### Quick Actions

- Add project
- Add blog
- Add research
- Update hero
- Upload media
- View messages

---

## 9.3 Project CMS

### Fields

```js
Project {
  title,
  slug,
  subtitle,
  summary,
  plainEnglishSummary,
  category,
  status,
  role,
  startDate,
  endDate,
  featured,
  priority,
  thumbnail,
  gallery,
  techStack,
  liveUrl,
  githubUrl,
  caseStudyUrl,
  problem,
  whyItMatters,
  architectureText,
  architectureDiagram,
  keyFeatures,
  engineeringDecisions,
  tradeoffs,
  challenges,
  results,
  metrics,
  lessonsLearned,
  relatedBlogs,
  relatedResearch,
  seoTitle,
  seoDescription,
  draftStatus,
  createdAt,
  updatedAt
}
```

### Admin Features

- Create/edit/delete project
- Upload images
- Toggle featured
- Reorder projects
- Save as draft
- Preview before publishing

---

## 9.4 Research CMS

### Fields

```js
Research {
  title,
  slug,
  status,
  area,
  summary,
  plainEnglishSummary,
  abstract,
  researchQuestion,
  problemStatement,
  dataset,
  methodology,
  model,
  experimentalSetup,
  results,
  metrics,
  figures,
  explainability,
  limitations,
  futureWork,
  paperUrl,
  codeUrl,
  citation,
  authors,
  venue,
  publicationDate,
  featured,
  tags,
  relatedProjects,
  relatedBlogs,
  seoTitle,
  seoDescription,
  draftStatus,
  createdAt,
  updatedAt
}
```

---

## 9.5 Blog CMS

### Fields

```js
Blog {
  title,
  slug,
  excerpt,
  coverImage,
  contentMarkdown,
  category,
  tags,
  readingTime,
  featured,
  status,
  publishedAt,
  seoTitle,
  seoDescription,
  relatedProjects,
  relatedResearch,
  createdAt,
  updatedAt
}
```

### Editor Requirements

MVP:

- Markdown editor
- Image upload
- Preview
- Draft/publish

Future:

- MDX support
- Callout blocks
- Mermaid diagrams
- Code playground snippets

---

## 9.6 Site Settings CMS

Admin can edit:

- Site name
- Hero title
- Hero subtitle
- Hero description
- CTA labels
- Social links
- Contact email
- Resume file
- SEO default title
- SEO default description
- Theme accent color
- Footer text
- Availability status

---

## 9.7 Skills CMS

Skills should not be random badges only. Each skill can include proof.

```js
Skill {
  name,
  category,
  proficiency,
  yearsExperience,
  proofText,
  relatedProjects,
  icon,
  featured,
  order
}
```

---

## 9.8 Timeline CMS

```js
TimelineEvent {
  year,
  date,
  title,
  description,
  category,
  link,
  icon,
  featured,
  order
}
```

---

## 9.9 Media Library

### Requirements

- Upload images/files
- Cloudinary integration recommended
- Store metadata in MongoDB
- Copy URL button
- Alt text field
- Folder/category organization

---

## 9.10 Contact Messages

### Requirements

- Store submitted messages
- Mark as read/unread
- Archive/delete
- Filter by reason
- Reply status
- Optional email notification

---

## 10. AI Assistant: Ask Nazim

## 10.1 Feature Vision

Ask Nazim is a GPT-like assistant embedded in the portfolio. It helps visitors explore Nazim’s work through conversation.

Example questions:

```txt
What kind of backend projects has Nazim built?
Explain OwlPi in simple terms.
What research has Nazim done in AI?
Is Nazim suitable for a full-stack role?
Show me projects using Redis.
What is Nazim currently learning?
Summarize his CV for a recruiter.
```

---

## 10.2 Assistant Personality

The assistant should feel:

- Helpful
- Calm
- Friendly
- Accurate
- Slightly playful through the pet/companion
- Not over-hyped
- Not pretending to be Nazim himself

Recommended assistant name options:

1. **N-Lab Assistant**
2. **Nazo**
3. **MiniNaz**
4. **Labbit**
5. **Byte**
6. **Owlpi Mini**
7. **Circuit**
8. **Navi**

Recommended final name:

> **Navi** — the Nazim Lab companion.

Reason: short, friendly, navigation-related, not a copy of Claude or ChatGPT.

---

## 10.3 Companion/Pet Concept

The companion should be a small original character, not a direct copy of Claude’s miniature style.

### Recommended concept

**Navi: a tiny glowing lab owl / circuit creature.**

Why owl?

- Connects subtly with OwlPi project
- Symbolizes knowledge/research
- Works as a friendly guide
- Can be minimal and iconic
- Better than generic robot

### Visual Style

- Small floating character
- Minimal geometric shape
- Soft glowing eyes
- Lab/terminal vibe
- Subtle idle animation
- Changes expression depending on context

### States

```txt
Idle        → floating quietly
Thinking    → small loading pulse
Answering   → eyes glow softly
Confused    → tilts head
Success     → small bounce
Error        → dims slightly
Sleeping    → when chat minimized
```

### UI Placement

- Bottom-right floating widget
- Can be minimized
- Does not block content
- On hover: “Ask me about Nazim’s projects”

### Important Rule

The pet must support the site, not dominate it. It should be charming but subtle.

---

## 10.4 AI Assistant MVP

MVP assistant can use controlled context injection instead of full RAG.

### Inputs

- Selected public CV facts
- Featured projects
- Featured research
- Skills
- Contact info
- Current focus

### Features

- Chat UI
- Suggested questions
- Streaming answer effect
- Clear disclaimer:

```txt
I answer based on Nazim’s public portfolio content.
```

- Fallback response when unsure:

```txt
I don’t have enough information about that yet. You can contact Nazim directly for details.
```

---

## 10.5 AI Assistant V2: RAG

### Architecture

```txt
Admin Content
   ↓
Content Parser
   ↓
Chunking
   ↓
Embedding Generation
   ↓
Vector Store
   ↓
User Query
   ↓
Query Embedding
   ↓
Relevant Context Retrieval
   ↓
LLM Response
   ↓
Answer with Sources
```

### Knowledge Sources

- Projects
- Research
- Blogs
- Notes
- Timeline
- Skills
- Site settings
- Uploaded CV
- Admin-approved custom facts

### RAG Requirements

- Only use published content
- Retrieve top relevant chunks
- Include source references
- Refuse unsupported claims
- Do not expose admin-only drafts
- Do not expose private messages
- Store conversation logs only if user consents

---

## 10.6 AI Knowledge Base CMS

Admin can manage:

```js
KnowledgeEntry {
  title,
  type,
  sourceId,
  sourceType,
  content,
  visibility,
  embeddingStatus,
  lastEmbeddedAt,
  tags,
  createdAt,
  updatedAt
}
```

Actions:

- Re-index all content
- Re-index one item
- Disable item from AI
- Preview retrieved chunks
- Test assistant answer

---

## 10.7 AI Safety & Trust Rules

The assistant must:

- Never invent achievements
- Never claim Nazim has experience that is not in CMS
- Never reveal private admin data
- Always say when it is unsure
- Prefer concise answers
- Give contact link for hiring/collaboration questions
- Avoid medical/legal/financial advice unless written in a blog and clearly framed as general content

---

## 11. Design System

## 11.1 Visual Identity

### Name

**Nazim Lab**

### Style Keywords

```txt
calm
technical
editorial
research-lab
system-like
clean dark mode
soft grid
numbered sections
case-study storytelling
```

### Avoid

```txt
excessive neon
random 3D blobs
NFT-style visuals
generic developer template cards
too many badges
fake AI hype
```

---

## 11.2 Colors

```txt
Background: #070A0F
Surface: #0F172A
Card: #111827
Border: #1E293B
Primary Text: #F8FAFC
Secondary Text: #94A3B8
Muted Text: #64748B
Accent Cyan: #22D3EE
Accent Blue: #3B82F6
Accent Purple: #8B5CF6
Success: #10B981
Warning: #F59E0B
Error: #EF4444
```

---

## 11.3 Typography

Recommended:

```txt
Heading: Space Grotesk / Satoshi / General Sans
Body: Inter / Geist Sans
Code: JetBrains Mono / Geist Mono
```

---

## 11.4 UI Components

Public:

- Hero block
- Section label
- Project card
- Research card
- Blog card
- Stat card
- Timeline item
- Code block
- Architecture diagram block
- Deep dive toggle
- Contact form
- AI chat widget
- Companion/pet widget

Admin:

- Sidebar
- Data table
- Form builder
- Markdown editor
- Media uploader
- Status badge
- Preview drawer
- Confirmation modal
- Analytics cards

---

## 11.5 Motion Guidelines

Use Framer Motion subtly.

Allowed:

- Fade in on scroll
- Small card hover
- Terminal cursor blink
- Companion idle floating
- Smooth page transition

Avoid:

- Heavy parallax
- Overdone scroll hijacking
- Slow loading animations
- Motion that hurts readability

---

## 12. Technical Architecture

## 12.1 Stack

Recommended MVP:

```txt
Frontend: React + Vite or Next.js
Backend: Node.js + Express.js
Database: MongoDB Atlas
Auth: JWT + bcrypt
Media: Cloudinary
Styling: Tailwind CSS
Animation: Framer Motion
Editor: Markdown editor / TipTap
Charts: Recharts
Deployment: Vercel frontend + Render/Railway backend
```

If SEO is very important, prefer Next.js instead of pure Vite React.

---

## 12.2 High-Level Architecture

```txt
Client Browser
   ↓
React/Next Frontend
   ↓
Express API Server
   ↓
MongoDB
   ↓
Cloudinary / GitHub API / AI Provider
```

Future AI:

```txt
Portfolio Content → Embeddings → Vector Store → Assistant API → Chat UI
```

---

## 12.3 Backend Modules

```txt
/auth
/projects
/research
/blogs
/notes
/skills
/timeline
/media
/messages
/github
/settings
/ai
/admin
```

---

## 12.4 API Examples

### Public APIs

```txt
GET /api/projects
GET /api/projects/:slug
GET /api/research
GET /api/research/:slug
GET /api/blogs
GET /api/blogs/:slug
GET /api/settings/public
GET /api/github/stats
POST /api/contact
POST /api/ai/chat
```

### Admin APIs

```txt
POST /api/auth/login
GET /api/admin/overview
POST /api/admin/projects
PATCH /api/admin/projects/:id
DELETE /api/admin/projects/:id
POST /api/admin/research
PATCH /api/admin/research/:id
DELETE /api/admin/research/:id
POST /api/admin/blogs
PATCH /api/admin/blogs/:id
DELETE /api/admin/blogs/:id
POST /api/admin/media/upload
PATCH /api/admin/settings
POST /api/admin/ai/reindex
```

---

## 13. Database Collections

MVP collections:

```txt
users
projects
research
blogs
skills
timelineEvents
siteSettings
media
messages
githubCache
```

Future collections:

```txt
notes
experiments
knowledgeEntries
embeddings
chatSessions
chatMessages
analyticsEvents
companionSettings
```

---

## 14. GitHub Stats Integration

### MVP

Use GitHub REST API to fetch:

- Public repos
- Pinned-like selected repos, manually configured if needed
- Stars
- Languages
- Recent activity if available

### Cache Strategy

- Cache GitHub data in MongoDB
- Refresh every 6–12 hours
- Manual refresh button in admin

### Display

- GitHub contribution graphic if available through external image service or custom GitHub API calculation
- Top languages chart
- Featured repositories
- Total stars
- Last updated time

---

## 15. SEO Requirements

Every public page must support:

- SEO title
- Meta description
- Open Graph image
- Canonical URL
- Structured data where useful
- Clean slug
- Sitemap
- Robots.txt

Blog/research pages should be indexable.

Admin/drafts must not be indexed.

---

## 16. Performance Requirements

Targets:

- Lighthouse Performance: 90+
- SEO: 95+
- Accessibility: 90+
- First contentful paint under 2s on good connection
- Images optimized
- Lazy loading for heavy sections
- AI widget lazy-loaded after main page
- Companion animation lightweight

Avoid loading 3D or AI scripts before the main content.

---

## 17. Accessibility Requirements

- Keyboard navigable
- Proper contrast
- Alt text for images
- ARIA labels for icon buttons
- Focus states
- Reduced motion support
- Chat widget accessible
- Forms with labels and error messages

---

## 18. Security Requirements

- Password hashing with bcrypt
- JWT expiry
- Refresh token security
- Rate limiting
- Input validation
- XSS protection for markdown
- CORS configuration
- File upload validation
- Admin route protection
- Environment variables for secrets
- No API keys exposed on frontend
- AI assistant must not access private admin data

---

## 19. Analytics Requirements

MVP:

- Page views
- Contact form submissions
- Popular projects
- Popular blogs
- AI assistant usage count

Future:

- Search queries
- Assistant question categories
- Conversion events
- CV downloads
- GitHub link clicks
- Recruiter mode clicks

Privacy-friendly analytics preferred.

---

## 20. User Experience Modes

## 20.1 Visitor Mode

Default public mode. Clean, simple, readable.

System label:

```txt
MODE: VISITOR
```

## 20.2 Recruiter Mode [V2]

A toggle that simplifies the site for hiring.

Shows:

- CV
- Experience
- Skills
- Best projects
- Contact

## 20.3 Engineer Mode [V2]

Highlights:

- Architecture
- Code
- Tech stack
- Tradeoffs
- GitHub

## 20.4 Researcher Mode [V2]

Highlights:

- Papers
- Methods
- Datasets
- Results
- Experiments

This mode idea can become a very unique signature feature.

---

## 21. Content Strategy

### Homepage should answer

```txt
Who is Nazim?
What does he build?
Why should I care?
Where should I click next?
```

### Projects should answer

```txt
What problem was solved?
What architecture was used?
What was Nazim’s contribution?
What was the impact?
```

### Research should answer

```txt
What question was studied?
What method was used?
What result was achieved?
What are the limitations?
```

### Blogs should answer

```txt
How does Nazim think?
What did he learn?
What can others learn from it?
```

---

## 22. Recommended MVP Roadmap

### Phase 1: Foundation

- Set up MERN project
- Auth
- MongoDB models
- Admin layout
- Public layout
- Design system

### Phase 2: Core CMS

- Projects CRUD
- Research CRUD
- Blogs CRUD
- Site settings
- Media upload

### Phase 3: Public Pages

- Home
- Projects
- Project detail
- Research
- Research detail
- Blog
- Blog detail
- About
- Contact

### Phase 4: Stats & Polish

- GitHub API
- Timeline
- SEO
- Responsiveness
- Animations
- Performance optimization

### Phase 5: AI MVP

- Ask Nazim widget
- Static context assistant
- Suggested questions
- Companion/pet UI

### Phase 6: RAG Upgrade

- Chunking
- Embeddings
- Vector search
- Source-grounded responses
- Admin AI knowledge base

---

## 23. MVP Success Metrics

The MVP is successful if:

- Nazim can update projects, blogs, research, skills, and hero text from admin.
- A recruiter can understand Nazim’s strongest work in under 60 seconds.
- An engineer can inspect at least 2 detailed project case studies.
- A researcher can inspect at least 2 research pages with methods/results/limitations.
- GitHub stats appear automatically or through cached API.
- The website is responsive and performs well.
- Contact form works.
- Design feels custom, not template-based.

---

## 24. Nice-to-Have Signature Features

1. **Ask Nazim** AI assistant
2. **Navi** companion/pet
3. **Deep Dive Mode** for projects/research
4. **Audience Mode**: Recruiter / Engineer / Researcher
5. **Experiment Vault**
6. **Digital Garden Graph**
7. **Auto-generated resume page from CMS**
8. **Research timeline**
9. **Architecture diagram blocks**
10. **Public changelog**

---

## 25. Non-Goals

The project should not attempt to be:

- A full social network
- A heavy 3D game-like site
- A clone of ChatGPT
- A clone of Claude
- A generic theme marketplace portfolio
- A public CMS for multiple users
- A job board

---

## 26. Risks & Mitigation

### Risk: Too many features

Mitigation: Build MVP first. AI and digital garden can come later.

### Risk: AI hallucination

Mitigation: Ground answers in CMS content, cite sources, use fallback responses.

### Risk: Design becomes too flashy

Mitigation: Keep typography, spacing, and content as the main experience.

### Risk: Admin complexity

Mitigation: Start with simple CRUD forms, then add page-builder features later.

### Risk: Poor performance

Mitigation: Lazy-load AI widget, optimize images, avoid heavy 3D.

---

## 27. Final Product Feel

When a visitor enters Nazim Lab, they should feel:

```txt
This person builds real systems.
This person thinks deeply.
This person can communicate.
This person is technical but human.
This is not a template.
```

That is the product.

---

## 28. External References

- codedgar.com — personal portfolio/case-study inspiration: https://codedgar.com/
- codedgar Hostal Juarez case study — problem/impact storytelling: https://codedgar.com/portfolio/hostal-juarez/
- codedgar Puppertino case study — technical product storytelling: https://codedgar.com/portfolio/puppertino/
- MongoDB MERN overview: https://www.mongodb.com/resources/languages/mern-stack
- Contentful MERN overview: https://www.contentful.com/blog/mern-stack/
- Neon RAG portfolio chatbot guide: https://neon.com/guides/react-fastapi-rag-portfolio
- N3XTCODER RAG chatbot guide: https://n3xtcoder.org/how-to-build-ai-chatbot
- Awwwards portfolio inspiration: https://www.awwwards.com/websites/portfolio/
- Proxify article on portfolios vs case studies: https://proxify.io/knowledge-base/developer-types/how-do-developer-portfolios-differ-from-case-studies

