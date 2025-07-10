
import { Calendar, Users, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const events = [
    {
      title: "Startup Pitch Competition 2024",
      date: "March 15-17, 2024",
      location: "Main Auditorium",
      participants: "200+ participants",
      description: "Annual pitch competition where students present their innovative business ideas to a panel of industry experts and investors.",
      image: "🚀",
      status: "completed",
      prize: "₹5,00,000"
    },
    {
      title: "Entrepreneurship Summit",
      date: "February 10, 2024",
      location: "Convention Center",
      participants: "500+ attendees",
      description: "A day-long summit featuring keynote speakers, panel discussions, and networking sessions with successful entrepreneurs.",
      image: "🏆",
      status: "completed",
      prize: "Knowledge & Network"
    },
    {
      title: "Innovation Workshop Series",
      date: "January 20-22, 2024",
      location: "Innovation Lab",
      participants: "150+ students",
      description: "Three-day intensive workshop on design thinking, product development, and business model canvas.",
      image: "💡",
      status: "completed",
      prize: "Certificates"
    },
    {
      title: "Startup Bootcamp",
      date: "December 5-7, 2023",
      location: "E-Cell Hub",
      participants: "100+ participants",
      description: "Intensive bootcamp covering all aspects of starting a business from ideation to launch.",
      image: "⚡",
      status: "completed",
      prize: "Mentorship"
    },
    {
      title: "Business Plan Competition",
      date: "November 15, 2023",
      location: "Business School",
      participants: "80+ teams",
      description: "Competition focused on developing comprehensive business plans with market analysis and financial projections.",
      image: "📊",
      status: "completed",
      prize: "₹2,00,000"
    },
    {
      title: "Tech Startup Expo",
      date: "October 20-21, 2023",
      location: "Tech Park",
      participants: "300+ visitors",
      description: "Exhibition showcasing innovative tech startups and their products to potential investors and customers.",
      image: "🌟",
      status: "completed",
      prize: "Funding Opportunity"
    }
  ];

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Previous <span className="hero-text-gradient">Events</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the exciting events and competitions we've organized to foster 
            entrepreneurship and innovation among students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm card-hover animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Event Header */}
                <div className="bg-gradient-to-r from-gold-500/20 to-blue-500/20 p-6 border-b border-slate-700">
                  <div className="text-4xl mb-4 text-center">{event.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-slate-300 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gold-400" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-slate-300 text-sm">
                      <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-sm">
                      <Users className="h-4 w-4 text-blue-400 mr-2" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-sm">
                      <Award className="h-4 w-4 text-gold-400 mr-2" />
                      <span>{event.prize}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-400/30">
                      Completed
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Miss Our Next Event!
            </h3>
            <p className="text-slate-300 mb-6">
              Stay tuned for upcoming events and competitions. Follow us on social media 
              and join our newsletter to get notified about new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-600 hover:to-gold-700">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                Follow on Social Media
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
