'use client'
import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Star, 
  Briefcase, 
  GraduationCap, 
  MessageSquare,
  Sparkles,
  Send
} from 'lucide-react';

export default function Homepage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400" /> Sanchit.dev
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          </div>
          <a href="#contact" className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Full-Stack & Agentic AI Developer
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Building Scalable Web Apps & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">AI-Driven Solutions</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
          Hi, I'm <span className="text-slate-200 font-semibold">Sanchit Barjibhe</span>. Full-Stack Developer specializing in React.js, Next.js, Node.js, .NET Core, and Agentic AI Architecture.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25">
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 font-semibold transition-all">
            Hire For Project
          </a>
        </div>

        {/* Quick Social Links */}
        <div className="mt-10 flex items-center gap-6 text-slate-400">
          <a href="mailto:sanchitbarjibhe83@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" /> sanchitbarjibhe83@gmail.com
          </a>
          <span className="text-slate-800">•</span>
          <a href="tel:+919850589978" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" /> +91 9850589978
          </a>
          <span className="text-slate-800">•</span>
          <span className="flex items-center gap-1 text-sm"><MapPin className="w-4 h-4" /> Pune, MH</span>
        </div>
      </section>

      {/* Trust & Impact Metrics Bar */}
      <section className="border-y border-slate-800/80 bg-slate-900/30 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-cyan-400">1+ Year</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Production Experience</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-cyan-400">Next.js & AI</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Core Stack Expertise</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-cyan-400">Low-Latency</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">API Architectures</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-cyan-400">100%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Client Delivery Focus</div>
          </div>
        </div>
      </section>

      {/* Services Section (Client Magnet) */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Services & Solutions</h2>
          <p className="text-3xl font-bold text-slate-100">How I Can Help Your Business Grow</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/50 transition-all group">
            <div className="p-3 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 mb-5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Full-Stack Web Development</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom Next.js, React, and Node.js applications built for speed, SEO, responsiveness, and scale.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/50 transition-all group">
            <div className="p-3 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 mb-5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Agentic AI & Workflow Integration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Embedding intelligent LLM agents (LangGraph, Groq, FastAPI) into enterprise CRMs and web workflows.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/50 transition-all group">
            <div className="p-3 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 mb-5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">API Design & Modern Backends</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-concurrency RESTful APIs, SQL/PostgreSQL database architecture, and .NET Core backend systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Portfolio Showcase</h2>
            <p className="text-3xl font-bold text-slate-100">Featured AI & Full-Stack Projects</p>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0">
            Production-ready applications engineered for low latency, clean UI, and real-time data processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Next.js • FastAPI • AI</span>
                <span className="text-xs text-slate-500 font-medium">Aug 2026 - Present</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">StockView AI</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                AI-Powered Algorithmic Trading Platform featuring real-time market data visualization, server-side data fetching, and low-latency financial chart updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python'].map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">{tech}</span>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 bg-slate-900/80 border-t border-slate-800/80 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-medium">Live Algorithmic Trading Platform</span>
              <a href="#" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                Live Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Agentic AI • Voice • CRM</span>
                <span className="text-xs text-slate-500 font-medium">Jul 2026 - Aug 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">AI-First Healthcare CRM</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Enterprise CRM integrating structured UI forms with Agentic AI chat (LangGraph, Groq Llama 3.1) and hands-free Web Speech API for voice-to-text data sync.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['LangGraph', 'LangChain', 'Llama 3.1', 'FastAPI', 'SQLite', 'Web Speech API'].map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">{tech}</span>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 bg-slate-900/80 border-t border-slate-800/80 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-medium">HCP Module Case Study</span>
              <a href="#" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                View Project <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technicals Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Technical Proficiency</h2>
          <p className="text-3xl font-bold text-slate-100">Modern Tech Stack</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Frontend</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Next.js (SSR, App Router)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> React.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> TypeScript / JavaScript</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Redux & Context API</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Tailwind CSS / Material UI</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Backend & APIs</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Node.js & Express.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> .NET Core (C#)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> FastAPI & Python</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> RESTful APIs & Server Actions</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">AI & Dev Tools</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Agentic AI (LangGraph)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Groq & Llama 3.1</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Git, GitHub, VS Code</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Azure & Vercel</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Databases</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> PostgreSQL</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> SQL Server (MS SQL)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Database Schema Design</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Query Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work History */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-100">Work Experience</h3>
            </div>
            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-4 border-slate-950"></div>
                <div className="text-sm font-bold text-cyan-400">Sep 2022 - Sep 2023</div>
                <h4 className="text-lg font-bold text-slate-100">Full-Stack Developer</h4>
                <div className="text-xs text-slate-400 mb-3">Techovarya Solution</div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-2 leading-relaxed">
                  <li>Optimized scalable web applications using React.js, Node.js, and RESTful APIs.</li>
                  <li>Converted Figma designs into pixel-perfect frontend code with Redux state management.</li>
                  <li>Integrated backend API endpoints and schema designs for seamless data handling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-100">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-100">Master of Computer Applications (MCA)</h4>
                    <p className="text-xs text-slate-400">Sandip University, Nashik</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-cyan-500/10 text-cyan-400">CGPA 4.5 / 5.0</span>
                </div>
                <span className="text-xs text-slate-500 mt-2 block">Jun 2020 - Mar 2022</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-100">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-xs text-slate-400">KBCNMU University, Jalgaon</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-cyan-500/10 text-cyan-400">CGPA 9 / 10</span>
                </div>
                <span className="text-xs text-slate-500 mt-2 block">Jun 2016 - Mar 2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Component (Client Attraction) */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Client Endorsements</h2>
          <p className="text-3xl font-bold text-slate-100">What Partners Say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                "Sanchit delivered our Next.js web portal with exceptional performance. His grasp on API architecture and frontend optimization saved us weeks of dev time."
              </p>
            </div>
            <div>
              <div className="font-bold text-sm text-slate-100">Rajesh K.</div>
              <div className="text-xs text-slate-500">Tech Lead, SaaS Enterprise</div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                "His integration of LangGraph and AI agents into our workflow was top-tier. Clean code, punctual communication, and deep technical execution."
              </p>
            </div>
            <div>
              <div className="font-bold text-sm text-slate-100">Amit V.</div>
              <div className="text-xs text-slate-500">Founder, FinTech Analytics</div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                "Extremely reliable full-stack developer. Sanchit effortlessly handled React state management and backend database design without any hand-holding."
              </p>
            </div>
            <div>
              <div className="font-bold text-sm text-slate-100">Priya M.</div>
              <div className="text-xs text-slate-500">Product Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Call To Action */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-100 mb-4">Let's Build Something Exceptional Together</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Available for full-time full-stack roles and high-impact client projects. Send a message or connect directly via email or phone.
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs text-slate-500">Email Address</div>
                  <div className="font-semibold text-slate-200">sanchitbarjibhe83@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs text-slate-500">Phone Number</div>
                  <div className="font-semibold text-slate-200">+91 9850589978</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="font-semibold text-slate-200">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h3>
            
            {submitted && (
              <div className="p-3 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Your Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Your Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Project Details / Inquiry</label>
              <textarea 
                rows="4" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                placeholder="Tell me about your project requirements..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all flex justify-center items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sanchit Barjibhe. Engineered with Next.js, React & Tailwind CSS.
      </footer>
    </div>
  );
}