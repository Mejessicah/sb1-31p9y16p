import React from 'react';
import { Shield, Lock, Server, Users, ArrowRight, Github, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold">crime.si</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Secure Your Digital <span className="text-red-500">Future</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Advanced cybersecurity solutions protecting your business 24/7. Stay ahead of threats with our cutting-edge security infrastructure.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <span>Start Protection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-gray-700 hover:border-red-500 px-8 py-4 rounded-lg transition-colors">
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Our Security Solutions</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl">
            <Lock className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Advanced Encryption</h3>
            <p className="text-gray-400">Military-grade encryption protecting your sensitive data from unauthorized access.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl">
            <Server className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">24/7 Monitoring</h3>
            <p className="text-gray-400">Real-time threat detection and response system keeping your infrastructure safe.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl">
            <Users className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Team Training</h3>
            <p className="text-gray-400">Comprehensive security training for your team to prevent human errors.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guaranteed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-400">Clients Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Secure Your Business?</h2>
          <p className="text-gray-400 mb-8">
            Get in touch with our security experts and discover how we can protect your digital assets.
          </p>
          <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="font-bold">crime.si</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            © {new Date().getFullYear()} crime.si. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;