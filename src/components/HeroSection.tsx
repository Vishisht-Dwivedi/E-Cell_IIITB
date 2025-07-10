
import { ArrowRight, Rocket, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Ignite Your</span>
                <span className="block hero-text-gradient animate-glow p-5">
                  Entrepreneurial
                </span>
                <span className="block text-white">Journey</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                Welcome to IIIT Bhopal's Entrepreneurship Cell - where innovation meets 
                opportunity. We nurture the next generation of entrepreneurs through 
                mentorship, events, and a vibrant startup ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-600 hover:to-gold-700 text-lg px-8 py-3"
              >
                Join E-Cell
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-slate-900 text-lg px-8 py-3"
              >
                Our Events
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-gold-400" />
                </div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-400">Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Rocket className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-slate-400">Startups</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-8 w-8 text-gold-400" />
                </div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-slate-400">Events</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-float">
            <div className="relative">
              {/* Main visual container */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm overflow-hidden">
                {/* Floating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Central icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center animate-glow">
                      <Rocket className="h-10 w-10 text-slate-900" />
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center animate-pulse">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold-500/20 rounded-full border border-gold-400 flex items-center justify-center animate-pulse">
                      <Trophy className="h-6 w-6 text-gold-400" />
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center animate-pulse">
                      <span className="text-blue-400 font-bold">$</span>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gold-500/20 rounded-full border border-gold-400 flex items-center justify-center animate-pulse">
                      <span className="text-gold-400 font-bold">!</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
