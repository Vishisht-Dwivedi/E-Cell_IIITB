
import { Building2, Star, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SponsorsSection = () => {
  // const sponsors = [
  //   {
  //     name: "Digital Marketing Pro",
  //     category: "Media Partner",
  //     logo: "📱",
  //     description: "Digital marketing agency helping startups build their online presence.",
  //     partnership: "1 year",
  //     contribution: "₹2,00,000"
  //   }
  // ];

  // return (
  //   <section id="sponsors" className="py-20 relative">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center mb-16 animate-fade-in-up">
  //         <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
  //           Our <span className="hero-text-gradient">Sponsors</span>
  //         </h2>
  //         <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
  //           We're grateful to our amazing sponsors and partners who believe in our mission 
  //           and support the entrepreneurial journey of our students.
  //         </p>
  //       </div>

  //       {/* Sponsors Grid */}
  //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  //         {sponsors.map((sponsor, index) => (
  //           <Card 
  //             key={index} 
  //             className="bg-slate-800/50 border-slate-700 backdrop-blur-sm card-hover animate-fade-in-up"
  //             style={{ animationDelay: `${index * 0.1}s` }}
  //           >
  //             <CardContent className="p-6 text-center">
  //               <div className="text-4xl mb-4">{sponsor.logo}</div>
  //               <h3 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h3>
  //               <div className="mb-4">
  //                 <span className={`inline-block px-3 py-1 text-xs rounded-full border ${
  //                   sponsor.category === 'Title Sponsor' 
  //                     ? 'bg-gold-500/20 text-gold-400 border-gold-400/30'
  //                     : sponsor.category === 'Gold Partner'
  //                     ? 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30'
  //                     : 'bg-blue-500/20 text-blue-400 border-blue-400/30'
  //                 }`}>
  //                   {sponsor.category}
  //                 </span>
  //               </div>
  //               <p className="text-slate-300 text-sm mb-4 leading-relaxed">
  //                 {sponsor.description}
  //               </p>
  //               <div className="space-y-2 text-sm">
  //                 <div className="flex justify-between text-slate-400">
  //                   <span>Partnership:</span>
  //                   <span className="text-white">{sponsor.partnership}</span>
  //                 </div>
  //                 <div className="flex justify-between text-slate-400">
  //                   <span>Contribution:</span>
  //                   <span className="text-gold-400 font-semibold">{sponsor.contribution}</span>
  //                 </div>
  //               </div>
  //             </CardContent>
  //           </Card>
  //         ))}
  //       </div>

  //       {/* Partnership Levels */}
  //       <div className="mb-16">
  //         <h3 className="text-3xl font-bold text-white text-center mb-8">
  //           Partnership <span className="text-gold-400">Levels</span>
  //         </h3>
  //         <div className="grid md:grid-cols-3 gap-8">
  //           {partnershipLevels.map((level, index) => (
  //             <Card 
  //               key={index} 
  //               className="bg-slate-800/50 border-slate-700 backdrop-blur-sm card-hover"
  //             >
  //               <CardContent className="p-6 text-center">
  //                 <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
  //                   <Star className="h-8 w-8 text-slate-900" />
  //                 </div>
  //                 <h4 className={`text-xl font-semibold mb-4 ${level.textColor}`}>
  //                   {level.title}
  //                 </h4>
  //                 <ul className="space-y-2">
  //                   {level.benefits.map((benefit, benefitIndex) => (
  //                     <li key={benefitIndex} className="text-slate-300 text-sm flex items-center">
  //                       <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
  //                       {benefit}
  //                     </li>
  //                   ))}
  //                 </ul>
  //               </CardContent>
  //             </Card>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Partnership CTA */}
  //       <div className="text-center">
  //         <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm max-w-3xl mx-auto">
  //           <Building2 className="h-16 w-16 text-gold-400 mx-auto mb-6" />
  //           <h3 className="text-3xl font-bold text-white mb-4">
  //             Become Our <span className="text-gold-400">Partner</span>
  //           </h3>
  //           <p className="text-slate-300 mb-6 text-lg leading-relaxed">
  //             Join hands with us to shape the future of entrepreneurship. Partner with E-Cell 
  //             to connect with brilliant young minds, support innovation, and be part of something extraordinary.
  //           </p>
  //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  //             <div className="flex items-center space-x-2 text-slate-400">
  //               <Handshake className="h-5 w-5" />
  //               <span>Partnership Opportunities Available</span>
  //             </div>
  //           </div>
  //           <div className="mt-6 pt-6 border-t border-slate-700">
  //             <p className="text-slate-400 text-sm">
  //               Contact us at <span className="text-gold-400">partnerships@ecell.college.edu</span> 
  //               or call <span className="text-gold-400">+91 9876543210</span>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default SponsorsSection;
