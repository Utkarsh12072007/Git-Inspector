import React from 'react';
import { Github, Search, Zap, Code, ShieldCheck, ChevronDown, Star, Users, GitBranch, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      
      <div className="container mx-auto px-4 text-center pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 animate-fade-in">
          <FaGithub size={16} />
          <span className="tracking-wide uppercase text-[10px]">Open Source Intelligence v2.0</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-gray-900 dark:text-white leading-[0.9]">
          Explore the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
            GitHub Universe
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          The ultimate dashboard for developers. Visualize contributions, analyze tech stacks, 
          and uncover the world's best code in one unified interface.
        </p>

        <button 
          onClick={onExploreClick}
          className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 mb-16"
        >
          Start Exploring Now
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="group p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 hover:border-blue-500/50 transition-colors">
            <Zap className="text-blue-500 mb-4" size={32} />
            <h4 className="font-bold text-xl dark:text-white mb-2">Instant Insight</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Fetch deep-profile data in milliseconds via GitHub's v3 REST API.</p>
          </div>
          <div className="group p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 hover:border-purple-500/50 transition-colors">
            <Code className="text-purple-500 mb-4" size={32} />
            <h4 className="font-bold text-xl dark:text-white mb-2">Stack Analysis</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Identify top languages and framework usage across all public repos.</p>
          </div>
          <div className="group p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 hover:border-green-500/50 transition-colors">
            <ShieldCheck className="text-green-500 mb-4" size={32} />
            <h4 className="font-bold text-xl dark:text-white mb-2">Open Access</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">No registration required. Just enter a username and start digging.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;