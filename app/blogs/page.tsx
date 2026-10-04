import React from 'react';
import { Terminal, Clock, ArrowUpRight, Sparkles, BookOpen, Search } from 'lucide-react';

export default function BlogsPage() {
    const blogs = [
        {
            id: 'langgraph-llama-3',
            title: 'Building Agentic AI Workflows with LangGraph & Llama 3.1',
            excerpt: 'A comprehensive guide to constructing autonomous AI agents with stateful multi-actor workflows, entity extraction, and FastAPI backend persistence.',
            date: 'Sep 28, 2026',
            readTime: '6 min read',
            category: 'Agentic AI',
            slug: 'langgraph-llama-3'
        },
        {
            id: 'nextjs-15-app-router',
            title: 'Optimizing Next.js App Router for Low-Latency Real-Time Dashboards',
            excerpt: 'How to leverage Server Actions, streaming SSR, and optimized API routes for real-time financial market analytics and chart rendering.',
            date: 'Aug 14, 2026',
            readTime: '8 min read',
            category: 'Full-Stack Dev',
            slug: 'nextjs-15-app-router'
        },
        {
            id: 'stripe-subscription-architecture',
            title: 'Designing a Bulletproof Stripe Integration for Next.js SaaS',
            excerpt: 'Handling webhooks safely, managing database synchronizations, handling failed payments, and setting up customer billing portals cleanly.',
            date: 'Jul 22, 2026',
            readTime: '5 min read',
            category: 'Payments & SaaS',
            slug: 'stripe-subscription-architecture'
        },
        {
            id: 'web-speech-api-crm',
            title: 'Integrating Web Speech API with Enterprise CRMs',
            excerpt: 'Implementing real-time hands-free voice-to-text logging and instantaneous database synchronization in modern web applications.',
            date: 'Jun 11, 2026',
            readTime: '4 min read',
            category: 'Web APIs',
            slug: 'web-speech-api-crm'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <a href="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-cyan-400" /> Sanchit.dev
                    </a>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                        <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
                        <a href="/products" className="hover:text-cyan-400 transition-colors">Products</a>
                        <a href="/blogs" className="text-cyan-400 font-semibold">Blog</a>
                    </div>
                    <a href="/#contact" className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                        Get In Touch
                    </a>
                </div>
            </nav>

            {/* Hero Header */}
            <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
                    <BookOpen className="w-3.5 h-3.5" /> Technical Articles & Engineering Insights
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
                    Thoughts On <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">AI Architecture, Next.js & SaaS</span>
                </h1>
                <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
                    Deep dives into full-stack development, agentic AI systems, and software craftsmanship.
                </p>
            </section>

            {/* Articles Section */}
            <section className="max-w-4xl mx-auto px-6 pb-20 space-y-6">
                {blogs.map((post) => (
                    <article
                        key={post.id}
                        className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/50 transition-all group"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span>{post.date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                            <a href={`/blogs/${post.slug}`} className="flex items-center gap-2">
                                {post.title}
                                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                            </a>
                        </h2>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {post.excerpt}
                        </p>

                        <a
                            href={`/blogs/${post.slug}`}
                            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                        >
                            Read Full Article →
                        </a>
                    </article>
                ))}
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Sanchit Barjibhe. Engineered with Next.js & Tailwind CSS.
            </footer>
        </div>
    );
}