import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Sparkles, Eye, MapPin, Camera, Star, Users, Video, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature} Coming Soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const collections = [
    { name: "Women's Wear", image: "Elegant woman in a beautiful traditional saree", link: "/marketplace?gender=women" },
    { name: "Men's Wear", image: "Man dressed in a stylish sherwani for a wedding", link: "/marketplace?gender=men" },
    { name: "Kids' Wear", image: "Smiling child in a colorful ethnic outfit", link: "/marketplace?gender=kids" },
    { name: "Royal Accessories", image: "Close-up of intricate Kundan jewelry set", link: "/marketplace?category=accessories" }
  ];

  return (
    <>
      <Helmet>
        <title>Pehenava - Premium Ethnic Wear with VR/AR Trials</title>
        <meta name="description" content="Experience the future of ethnic fashion with Pehenava. Try on premium sarees, lehengas, and suits using VR/AR technology. Discover local designers and apply as a model." />
      </Helmet>

      <div className="pt-24">
        <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img  class="w-full h-full object-cover opacity-20" alt="Faded background of a royal Indian palace interior" src="https://images.unsplash.com/photo-1674909730707-27782fb12584" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-rose-50/80 to-purple-50/80" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-playfair font-bold gradient-text leading-tight"
              >
                The Art of Royal Attire
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Experience the future of ethnic fashion with VR/AR trials, discover local artisans, and find your perfect outfit made to perfection.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/marketplace">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Collections
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/vr-trials">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Try VR Experience
                    <Eye className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
                Our Royal Collections
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handcrafted with love, designed for elegance. Each piece tells a story of tradition and artistry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={collection.link}>
                    <div className="royal-card rounded-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center p-4">
                        <img 
                          alt={collection.image}
                          class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                         src="https://images.unsplash.com/photo-1553767149-9d196eec5c66" />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold font-playfair text-gray-800">
                          {collection.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <img  class="w-full h-full object-cover" alt="Mughal art pattern background" src="https://images.unsplash.com/photo-1655127553747-42f800565e53" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
                            Your Personal Stylist Awaits
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Unsure what to wear? Book a one-on-one video consultation with our expert stylists. Get personalized recommendations for your special occasions, from weddings to festive gatherings.
                        </p>
                        <Link to="/personal-stylist">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Video className="mr-2 h-5 w-5" />
                                Book an Appointment
                            </Button>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-96"
                    >
                        <img  class="w-full h-full object-contain" alt="2D illustration of a royal painting of a queen" src="https://images.unsplash.com/photo-1582022614003-20a92ab1cbbe" />
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-96 order-last md:order-first"
                >
                    <img  class="w-full h-full object-contain" alt="3D render of a royal Indian artifact" src="https://images.unsplash.com/photo-1611881798501-b41d68d68f59" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
                        Join Our Royal Marketplace
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Are you a designer or a boutique owner with a passion for ethnic wear? Showcase your creations to a global audience. Join our curated marketplace and become part of the Pehenava family.
                    </p>
                    <Link to="/join-marketplace">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <Store className="mr-2 h-5 w-5" />
                            Become a Seller
                        </Button>
                    </Link>
                </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;