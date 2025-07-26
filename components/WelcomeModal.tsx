import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Swords, Scale } from "lucide-react";
import { motion } from "motion/react";

interface WelcomeModalProps {
  open: boolean;
  onClose: () => void;
}

export function WelcomeModal({ open, onClose }: WelcomeModalProps) {
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md mx-4 bg-card border-yellow/20 shadow-2xl">
        <DialogHeader>
          <motion.div 
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Scale className="w-6 h-6 text-yellow mr-2" />
            <DialogTitle className="text-2xl text-center text-foreground flex items-center">
              Welcome to Argubot
            </DialogTitle>
            <Swords className="w-6 h-6 text-yellow ml-2" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DialogDescription className="text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-yellow">Argubot</strong> is an LLM powered application that helps you practice your debating skills.
              </p>
              
              <p>
                We found that in court, it isn't always the best evidence or case that wins: it's the <em className="text-yellow/80">best argument</em>.
              </p>
              
              <p>
                For this hackathon, we made a silly, open ended twist on this idea for lawyers and beyond.
              </p>
            </DialogDescription>
          </motion.div>
        </DialogHeader>
        
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Button 
            onClick={onClose}
            className="bg-yellow hover:bg-yellow/90 text-black font-medium px-8 py-2 rounded-lg transition-colors"
          >
            Let's Argue!
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}