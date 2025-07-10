
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy, Lightbulb, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import SponsorsSection from '@/components/SponsorsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-hero-gradient opacity-90" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,215,0,0.1),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SponsorsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
