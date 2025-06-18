"use client";
import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${10 + i * 15}%`,
              top: '80%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in-up">
          
          <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <h1 
              className="md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent leading-tight"
             
            >
              Portfolio
            </h1>
            <h6 
              className=" md:text-5xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
              style={{
                textShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
              }}
            >
              Nattanun Naknaree
            </h6>
          </div>
          
          <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <h2 className="md:text-2xl text-gray-300 mb-8 font-light">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h2>
          </div>

          <div className="flex justify-center items-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="mx-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

      </div>

      {/* Enhanced Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{animationDuration: '2s'}}
      >
        <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center relative backdrop-blur-sm">
          <div 
            className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"
          ></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}