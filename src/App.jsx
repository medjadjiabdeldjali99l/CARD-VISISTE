import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, MapPin, Briefcase, Award, GraduationCap, ChevronRight, ExternalLink } from 'lucide-react';

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
  };

  const roles = [
    {
      title: "CEO DELTALOG",
      description: "Solutions innovantes et expertise technologique.",
      websites: ["http://www.deltalog.dz"],
      location: "https://maps.app.goo.gl/DekjfFRnX7fBzrxw5",
      isPrimary: true
    },
    {
      title: "CEO INKIDIA / Plateforme Moalim",
      description: "Transformation numérique et éducation.",
      websites: ["https://www.inkidia.dz", "https://www.inkidia.com.dz"],
    },
    {
      title: "Fondateur – Cluster Excellence Opérationnelle",
      description: "Promotion de la performance industrielle.",
      websites: ["http://www.CEO-DZ.com"],
    }
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary-dim/5 rounded-full blur-[100px]" />
      </div>

      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-md mx-auto px-6 pt-12 pb-24 space-y-10"
      >
        {/* Hero Section */}
        <section className="space-y-6">
          <motion.div variants={itemVariants} className="relative inline-block">
             <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-on-surface/10">
                <img 
                  src="/portrait.png" 
                  alt="Dr. Said Babaci"
                  className="w-full h-full object-cover"
                />
             </div>
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 0.8, type: "spring" }}
               className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-xl shadow-lg border-4 border-surface"
             >
               <Award className="w-5 h-5 text-white" />
             </motion.div>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 variants={itemVariants} className="text-4xl font-manrope font-extrabold tracking-tight text-on-surface">
              Dr. Said Babaci
            </motion.h1>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low text-primary text-sm font-semibold rounded-full ring-1 ring-primary/10">
                <GraduationCap className="w-4 h-4" />
                PhD Robotics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low text-on-surface-variant text-sm font-medium rounded-full ring-1 ring-on-surface/5">
                <Briefcase className="w-4 h-4" />
                6 Sigma Black Belt
              </span>
            </motion.div>
          </div>
        </section>

        {/* Primary Actions */}
        <section className="grid grid-cols-2 gap-4">
          <motion.a 
            variants={itemVariants}
            href="tel:0560985514"
            className="btn-primary flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Appeler</span>
          </motion.a>
          <motion.a 
            variants={itemVariants}
            href="https://maps.app.goo.gl/DekjfFRnX7fBzrxw5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2 group ring-1 ring-on-surface/5"
          >
            <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Maps</span>
          </motion.a>
        </section>

        {/* Roles & Entities */}
        <section id="expertise" className="space-y-6">
          <motion.h2 variants={itemVariants} className="text-lg font-manrope font-bold text-on-surface-variant uppercase tracking-widest pl-1">
            Expertise & Direction
          </motion.h2>
          
          <div className="space-y-4">
            {roles.map((role, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="card-tonal p-5 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-manrope font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <div className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant opacity-50 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                  {role.description}
                </p>
                <div className="flex flex-col gap-2">
                  {role.websites.map((url, uidx) => (
                    <a 
                      key={uidx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline decoration-primary/30 underline-offset-4"
                    >
                      <Globe className="w-4 h-4" />
                      {url.replace('https://', '').replace('http://', '')}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Info */}
        <motion.footer variants={itemVariants} className="pt-8 text-center space-y-4">
          <p className="text-xs text-on-surface-variant/60 font-medium">
            © 2026 Dr. Said Babaci • Innovation & Excellence
          </p>
        </motion.footer>
      </motion.main>

      {/* Floating Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-nav rounded-full px-4 py-3 flex items-center gap-8 z-50 ring-1 ring-white/20">
        <a href="#expertise" className="p-2 text-primary hover:scale-110 transition-transform">
          <Briefcase className="w-6 h-6" />
        </a>
        <div className="w-[1px] h-6 bg-on-surface/10" />
        <a href="http://www.deltalog.dz" target="_blank" rel="noopener noreferrer" className="p-2 text-on-surface-variant hover:scale-110 transition-transform">
          <Globe className="w-6 h-6" />
        </a>
        <div className="w-[1px] h-6 bg-on-surface/10" />
        <a href="tel:0560985514" className="p-2 text-on-surface-variant hover:scale-110 transition-transform">
          <Phone className="w-6 h-6" />
        </a>
      </nav>
    </div>
  );
};

export default App;
