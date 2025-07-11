
import { Calendar, Users, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import ideathonImage from '@/assets/events/ideathon.png';
import biddingBlitzImage from '@/assets/events/bidding-blitz.png';
import codingThinkersImage from '@/assets/events/coding-thinkers.png';

const EventsSection = () => {
  const events = [
  {
    title: "Ideathon",
    date: "April 5, 2024",
    location: "Innovation Hall",
    participants: "250+ thinkers",
    description: "A creative brainstorming event where ideas meet purpose and innovation.",
    image: ideathonImage,
    status: "completed",
    prize: "Rewards worth 50k+"
  },
  {
    title: "Bidding Blitz",
    date: "April 12, 2024",
    location: "Auditorium",
    participants: "120+ teams",
    description: "A fun strategic event where participants outbid each other to win mystery challenges.",
    image: biddingBlitzImage,
    status: "completed",
    prize: "₹50,000"
  },
  {
    title: "Coding Thinkers",
    date: "April 20, 2024",
    location: "Coding Arena",
    participants: "200+ developers",
    description: "Where logic meets creativity. A coding event filled with innovative problem solving.",
    image: codingThinkersImage,
    status: "completed",
    prize: "Goodies + Internship Opportunities"
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
                {/* 📸 Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />

                {/* 📄 Event Info */}
                <div className="bg-gradient-to-r from-gold-500/20 to-blue-500/20 p-6 border-b border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{event.title}</h3>
                  <div className="flex items-center justify-center text-slate-300 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gold-400" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>

                {/* 📌 Event Details */}
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

        {/* 🎯 Call to Action */}
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
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                <a href="https://www.instagram.com/ecell_iiitbpl/">Follow on Social Media</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;