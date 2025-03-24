import React from 'react';
import { Phone, Calendar, MessageCircle, Clock, MapPin, Award, GraduationCap, Stethoscope, Brain, Users, BookOpen, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210'; // Replace with actual number
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/919876543210'; // Replace with actual number
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80")',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="text-white max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Sudheendra Huddar</h1>
              <p className="text-xl md:text-2xl mb-6">Consultant Psychiatrist & Addiction Specialist</p>
              <p className="text-lg opacity-90">Providing compassionate mental health care and addiction treatment in Hubli</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="bg-white shadow-lg transform -translate-y-16"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -64 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              onClick={handleCall}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" /> Call Now
            </motion.button>
            <motion.button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </motion.button>
            <motion.a
              href="#appointment"
              className="flex items-center justify-center gap-2 bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" /> Book Appointment
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeInUp}
          >
            About Dr. Huddar
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                alt="Doctor"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
            >
              <p className="text-gray-700 leading-relaxed">
                With over 15 years of experience in psychiatry and addiction medicine, Dr. Sudheendra Huddar is a renowned specialist in substance abuse disorders and mental health management. His patient-centric approach combines evidence-based treatments with compassionate care.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <GraduationCap className="text-blue-600" />
                  <span>MD Psychiatry - AIIMS</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="text-blue-600" />
                  <span>15+ Years Experience</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Brain className="text-blue-600" />
                  <span>Addiction Specialist</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="text-blue-600" />
                  <span>Hubli, Karnataka</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Areas of Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Addiction Psychiatry</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Alcohol & Substance Abuse</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Behavioral Addictions</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Relapse Prevention</span>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Therapeutic Approaches</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Cognitive Behavioral Therapy</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Motivational Interviewing</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Family Systems Therapy</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Experience */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Professional Background
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="text-blue-600" />
                Current Positions
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <Users className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Consultant Psychiatrist</h4>
                    <p className="text-gray-600">XYZ Hospital, Mumbai</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <BookOpen className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Visiting Faculty</h4>
                    <p className="text-gray-600">National Institute of Mental Health</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-medium">MD Psychiatry</h4>
                  <p className="text-gray-600">AIIMS New Delhi</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-medium">Diploma in Psychological Medicine</h4>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-medium">Fellowship in Addiction Psychiatry</h4>
                  <p className="text-gray-600">United Kingdom</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Appointment Section */}
      <motion.section 
        id="appointment" 
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeInUp}
          >
            Book an Appointment
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&mode=WEEK"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Clinic Information */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeInUp}
          >
            Clinic Information
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Timing</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-600" />
                  <span>Monday - Saturday: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-600" />
                  <span>Sunday: 10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" />
                  <span>123 Medical Center, Near City Hospital, Hubli, Karnataka</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Dr. Sudheendra Huddar. All rights reserved.</p>
        </div>
      </footer>

      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <motion.button
          onClick={handleWhatsApp}
          className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={handleCall}
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}

export default App;