import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Store, Upload, BarChart, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const JoinMarketplacePage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Application Submission Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Join Our Marketplace - Sell on Pehenava</title>
        <meta name="description" content="Become a seller on Pehenava. Showcase your ethnic wear designs to a global audience and grow your business with us." />
      </Helmet>

      <div className="pt-24 min-h-screen">
        <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Store className="mx-auto h-16 w-16 text-emerald-500 mb-4" />
              <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6">
                Join Our Royal Marketplace
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Showcase your creations to a global audience of ethnic fashion lovers. Partner with Pehenava and grow your brand.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, title: "Global Reach", desc: "Connect with customers worldwide." },
                { icon: BarChart, title: "Powerful Tools", desc: "Manage your shop with our easy-to-use dashboard." },
                { icon: Upload, title: "Simple Setup", desc: "List your products in minutes." },
                { icon: CheckCircle, title: "Secure Payments", desc: "Reliable and timely payment processing." }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="royal-card p-8 rounded-2xl"
                >
                  <item.icon className="mx-auto h-12 w-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold font-playfair mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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
                Start Selling in 3 Easy Steps
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Boutique / Brand Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Your Brand Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your products</label>
                  <textarea rows="4" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Describe your unique collection..."></textarea>
                </div>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Apply to Sell
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

export default JoinMarketplacePage;