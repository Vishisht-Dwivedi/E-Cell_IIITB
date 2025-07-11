
import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering students to transform innovative ideas into successful ventures through comprehensive support and mentorship."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "A creative space where groundbreaking ideas are born, nurtured, and developed into market-ready solutions."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of entrepreneurs, mentors, and industry leaders to foster collaborative growth."
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Creating lasting change in the startup ecosystem through education, events, and entrepreneurial initiatives."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="hero-text-gradient">E-Cell</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our Entrepreneurship Cell is the driving force behind innovation and startup culture 
            in our college. We provide a platform for aspiring entrepreneurs to learn, network, 
            and launch their ventures with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/30">
                    <feature.icon className="h-8 w-8 text-gold-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white">
              Why Choose <span className="text-gold-400">E-Cell?</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
                <p className="text-slate-300">Expert mentorship from successful entrepreneurs and industry leaders</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-slate-300">Regular workshops, seminars, and networking events</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
                <p className="text-slate-300">Access to funding opportunities and investor connections</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-slate-300">State-of-the-art incubation and co-working spaces</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <h4 className="text-2xl font-bold text-white">Join Our Journey</h4>
                <p className="text-slate-300">
                  Be part of a community that's shaping the future of entrepreneurship. 
                  Whether you're a budding entrepreneur or an experienced founder, 
                  there's a place for you in our E-Cell family.
                </p>
                {/* <div className="pt-4"> */}
                  {/* <div className="text-4xl font-bold text-gold-400 mb-2">1000+</div> */}
                  {/* <div className="text-slate-400">Success Stories</div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
