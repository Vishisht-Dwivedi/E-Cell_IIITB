
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="hero-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your entrepreneurial journey? Have questions about our events or want to collaborate? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/30">
                    <Mail className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-slate-300">ecelliiitbhopal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-slate-300">+91 6390995058 {`Sameer Chandra`}</p>
                    <p className="text-slate-300">+91 7988700736 {`Vikas Kaushik`}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/30">
                    <MapPin className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                    <p className="text-slate-300">Administrative Office</p>
                    <p className="text-slate-300">New Teaching Block</p>
                    <p className="text-slate-300">MANIT</p>
                    <p className="text-slate-300">Bhopal, Madhya Pradesh - 462003</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/ecell_iiitbpl/" 
                  className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full flex items-center justify-center border border-pink-400/30 hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6 text-pink-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/iiitbhopal-ecell/posts/?feedView=all" 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30 hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="h-6 w-6 text-blue-400" />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Office Hours</h4>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-600 hover:to-gold-700 py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2024 E-Cell, IIIT Bhopal. All rights reserved. 
            <span className="text-gold-400 ml-2">Built with passion for entrepreneurship by Vishisht Dwivedi</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
