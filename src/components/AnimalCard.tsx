import React from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, Info, Calendar } from 'lucide-react';
import { Animal } from '../types';
import { Carousel } from './Carousel';

interface AnimalCardProps {
  animal: Animal;
  onAdoptClick: (animalName: string) => void;
}

export function AnimalCard({ animal, onAdoptClick }: AnimalCardProps) {
  const genderIcon = animal.gender === 'male' ? '♂' : '♀';
  const genderColor = animal.gender === 'male' ? 'text-blue-500' : 'text-pink-500';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-orange-50 flex flex-col h-full"
    >
      <Carousel images={animal.images} />
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              {animal.name}
              <span className={`text-lg ${genderColor}`}>{genderIcon}</span>
            </h3>
            <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full mt-1">
              {animal.breed}
            </span>
          </div>
          <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className="text-orange-300 hover:text-red-500 transition-colors"
          >
            <Heart className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
          <div className="flex items-center gap-2">
             <Calendar className="w-4 h-4 text-orange-400" />
             <span><span className="font-medium">年齡：</span>{animal.age}</span>
          </div>
          <div className="flex flex-col gap-1">
             <div className="flex items-center gap-2">
               <Info className="w-4 h-4 text-orange-400 flex-shrink-0" />
               <span className="font-medium flex-shrink-0">個性描述：</span>
             </div>
             <p className="pl-6 text-gray-500 leading-relaxed">{animal.personality}</p>
          </div>
          <div className="flex flex-col gap-1">
             <div className="flex items-center gap-2">
               <Activity className="w-4 h-4 text-orange-400 flex-shrink-0" />
               <span className="font-medium flex-shrink-0">健康狀況：</span>
             </div>
             <p className="pl-6 text-gray-500 leading-relaxed">{animal.health}</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAdoptClick(animal.name)}
          className="w-full py-3 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white rounded-xl font-bold shadow-md transform transition-all mt-auto flex justify-center items-center gap-2"
        >
          <Heart className="w-5 h-5 fill-current" />
          我想認養
        </motion.button>
      </div>
    </motion.div>
  );
}
