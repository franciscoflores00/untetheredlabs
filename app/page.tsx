'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Hobbipedia",
    description: "The go-to encyclopedia of terminology and slang for every hobby and sport.",
    color: "bg-green-500",
    logo: "/images/hobbipedia-logo.svg",
    url: "https://www.hobbipedia.com"
  },
  {
    id: 2,
    title: "Candidaid",
    description: "Digital voting guide matching your address to candidates and ballot measures in plain language.",
    color: "bg-blue-500",
    logo: "/images/canidaid-logo.png",
    url: "https://www.canidaid.com"
  },
  {
    id: 3,
    title: "DocSwap",
    description: "Secure electronic health record exchange platform seamlessly connecting medical providers.",
    color: "bg-orange-500",
    logo: "/images/docswap-logo.png"
  },
  {
    id: 4,
    title: "Through the Grapevine",
    description: "A storytelling platform enabling winemakers to share their brand narratives directly with consumers.",
    color: "bg-red-800"
  },
  {
    id: 5,
    title: "IB: Street Smarts",
    description: "Master investment banking interviews with technical and behavioral questions.",
    color: "bg-green-800"
  },
  {
    id: 6,
    title: "Prescription Pill Bottle",
    description: "Proposing California legislation to eliminate non-recyclable plastic prescription pill bottles.",
    color: "bg-amber-500"
  }
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Endurance Labs
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building Products & Services<br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              That Push Boundaries
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Endurance Labs creates innovative solutions at the intersection of technology and human potential.
            From political platforms to healthcare systems, we&apos;re building the future one project at a time.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Endurance Labs</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We don&apos;t just follow trends – we create them. Every project pushes the boundaries of what&apos;s possible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapid Iteration</h3>
              <p className="text-gray-600">
                Speed meets quality. We move fast, learn faster, and deliver exceptional products without compromise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Impact Focused</h3>
              <p className="text-gray-600">
                Every line of code, every design decision is made with one goal: creating meaningful impact for users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Diverse solutions for complex challenges across industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => {
              const CardContent = (
                <>
                  {project.logo ? (
                    <div
                      className={`-mx-4 -mt-4 mb-6 h-28 flex items-center justify-center rounded-t-xl ${
                        project.title === 'Candidaid' ? 'bg-[#F7EEFD]' : 'bg-gray-50'
                      }`}
                    >
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={project.title === 'Candidaid' ? 239 : project.title === 'Hobbipedia' ? 480 : project.title === 'DocSwap' ? 198 : 120}
                        height={project.title === 'Candidaid' ? 159 : project.title === 'Hobbipedia' ? 320 : project.title === 'DocSwap' ? 132 : 80}
                        className={`max-w-full max-h-full object-contain ${project.title === 'Hobbipedia' ? 'self-center mt-3' : ''}`}
                      />
                    </div>
                  ) : (
                    <div className={`-mx-4 -mt-4 mb-6 h-28 ${project.color} rounded-t-xl flex items-center justify-center`}>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {project.description}
                  </p>
                </>
              );

              return project.url ? (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl text-gray-700 mb-10">
              Get exclusive updates on our latest projects and innovations. Be the first to know when we launch something new.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg inline-block">
                ✓ Success! We&apos;ll keep you updated on all things Endurance Labs.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Endurance Labs
            </h3>
          </div>
          <p className="text-gray-400 mb-8 text-lg">
            Breaking free from conventional thinking, one innovation at a time.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Endurance Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
