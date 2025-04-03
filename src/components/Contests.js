"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contests = () => {
  const contestImages = [
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Exciting Contests
        </motion.h1>
        
        <motion.p 
          className="text-center text-muted-foreground mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Did you want the chance to win up to $1000? Reserve a spot for one of our contests!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contestImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="perspective-1000"
            >
              <Card className="overflow-hidden border-0 shadow-lg transform transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <img 
                      src={image} 
                      alt={`Contest ${index + 1}`} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">Contest {index + 1}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-[#0066c2] hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-md shadow-[0_0_15px_rgba(255,220,0,0.5)] hover:shadow-[0_0_20px_rgba(255,220,0,0.7)] transition-all duration-300"
            >
              Sign Up
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contests;