
import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
      
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto animate-glow">
            <Rocket className="h-12 w-12 text-slate-900 animate-float" />
          </div>
        </div>

        {/* Text */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
            <span className="hero-text-gradient">E-Cell</span>
          </h1>
          <p className="text-slate-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Igniting Entrepreneurial Dreams
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-gold-500 to-gold-600 h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-slate-400 text-sm mt-2">
            Loading... {progress}%
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-96 h-96">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 animate-pulse" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500/20 rounded-full border border-gold-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-blue-500/20 rounded-full border border-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-5 h-5 bg-gold-500/20 rounded-full border border-gold-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
