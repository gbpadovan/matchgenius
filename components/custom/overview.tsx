import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

import { MessageIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-10"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <div className="flex flex-row justify-center gap-2 items-center">
          <Heart className="text-rose-500" size={24} />
          <span>+</span>
          <MessageIcon size={24} />
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-medium">
            Welcome to Match Genius! Get help crafting engaging messages that showcase your personality and create meaningful connections.
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Select any of the suggestions below to get started, or type your own message. Our AI will help you write the perfect response.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
