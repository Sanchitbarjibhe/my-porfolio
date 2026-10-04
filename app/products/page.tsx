import React from 'react';
import { Terminal, ExternalLink, ArrowRight, Zap, Shield, Sparkles, Layers } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      id: 'stripe-kit',
      name: 'Stripe Payment Gateway Kit',
      category: 'Developer Tool / Boilerplate',
      description: 'Production-ready Stripe integration setup for Next.js & Node.js. Includes subscriptions, webhooks, customer portal, and multi-currency checkout.',
      price: '$29',
      tags: ['Next.js', 'Stripe API', 'Node.js', 'TypeScript'],
      featured: true,
      link: '#'
    },
    {
      id: 'launch-nest',
      name: 'Launch Nest',
      category: 'Product Launch & Marketing Tool',
      description: 'Turn your product launch into real momentum beyond a basic launch page. Automation tools for makers and indie hackers.',
      price: '$49',
      tags: ['SaaS', 'Marketing Automation', 'React'],
      featured: false,
      link: '#'
    },
    {
      id: 'hardcore-ai',
      name: 'HardcoreAI Agent Toolkit',
      category: 'AI & Developer Tooling',
      description: 'Automated tool to convert datasheets and technical documents directly into working firmware and clean code.',
      price: '$79',
      tags: ['LangGraph', 'FastAPI', 'Python', 'Llama 3.1'],
      featured: false,
      link: '#'
    },
    {
      id: 'saas-growth',
      name: 'SaaS Growth Playbook',
      category: 'Digital Resource / Guide',
      description: 'A curated playbook featuring battle-tested plays for customer acquisition, retention, and monetization strategies.',
      price: 'Free',
      tags: ['E-Book', 'Growth', 'SaaS Strategy'],
      featured: false,
      link: '#'
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
            <a href="/products" className="text-cyan-400 font-semibold">Products</a>
            <a href="/blogs" className="hover:text-cyan-400 transition-colors">Blog</a>
          </div>
          <a href="/#contact" className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Digital Products & Kits
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Tools & Boilerplates Built For <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Developers & Founders</span>
        </h1>
        <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
          Save hundreds of development hours with production-ready kits, AI toolkits, and digital resources engineered for scale.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((prod) => (
            <div 
              key={prod.id} 
              className={`border rounded-2xl p-8 flex flex-col justify-between transition-all bg-slate-900/40 hover:border-cyan-500/50 ${
                prod.featured ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10 relative overflow-hidden' : 'border-slate-800'
              }`}
            >
              {prod.featured && (
                <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-cyan-500 text-slate-950">
                  Featured
                </div>
              )}
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">{prod.category}</span>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{prod.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{prod.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {prod.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Price</span>
                  <span className="text-xl font-extrabold text-slate-100">{prod.price}</span>
                </div>
                <a 
                  href={prod.link} 
                  className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-md shadow-cyan-500/20"
                >
                  Get Access <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sanchit Barjibhe. Engineered with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}