import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Welcome to our ElevateU Platform
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Your journey to learning, growth, and excellence starts here.
            </p>
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/courses" className="inline-flex items-center justify-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}