import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Video, Calendar, Sparkles, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PersonalStylistPage = () => {
  const { toast } = useToast();

  const handleBooking = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Booking System Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const stylists = [
    { name: "Anjali Verma", specialty: "Bridal & Wedding", image: "Portrait of a smiling female stylist with a warm expression" },
    { name: "Rohan Mehra", specialty: "Men's Festive Wear", image: "Portrait of a confident male stylist with a fashionable look" },
    { name: "Priya Desai", specialty: "Contemporary & Fusion", image: "Portrait of a chic female stylist with a modern haircut" },
  ];

  return (
    <>
      <Helmet>
        <title>Personal Stylist - Book a Video Consultation | Pehenava</title>
        <meta name="description" content="Book a personal styling session with our fashion experts. Get personalized advice for weddings, festivals, and more via video call." />
      </Helmet>

      <div className="pt-24 min-h-screen">
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Video className="mx-auto h-16 w-16 text-purple-500 mb-4" />
              <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6">
                Your Personal Stylist
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get expert fashion advice tailored to your style and occasion. Book a one-on-one video consultation with our professional stylists.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center gradient-text mb-12">
              Meet Our Expert Stylists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stylists.map((stylist, index) => (
                <motion.div
                  key={stylist.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="royal-card p-6 rounded-2xl text-center"
                >
                  <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden border-4 border-purple-200">
                    <img  class="w-full h-full object-cover" alt={stylist.image} src="https://images.unsplash.com/photo-1697725709169-d4012376c0b8" />
                  </div>
                  <h3 className="text-xl font-semibold font-playfair">{stylist.name}</h3>
                  <p className="text-purple-600">{stylist.specialty}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="royal-card p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center gradient-text mb-8">
                Book Your Consultation
              </h2>
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What's the occasion?</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="e.g., My sister's wedding, Diwali party" />
                </div>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Find a Time
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PersonalStylistPage;