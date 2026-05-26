import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Dog, Cat, LayoutGrid } from 'lucide-react';
import { animals } from './data';
import { AnimalType } from './types';
import { AnimalCard } from './components/AnimalCard';
import { Footer } from './components/Footer';

type FilterType = AnimalType | 'all';

export default function App() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const filteredAnimals = animals.filter(
    (animal) => filter === 'all' || animal.type === filter
  );

  const handleAdoptClick = (animalName: string) => {
    setToastMessage(`太棒了！已收到您對「${animalName}」的認養意願，我們將會與您聯繫！`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const FilterButton = ({ type, label, icon: Icon }: { type: FilterType, label: string, icon: React.ElementType }) => {
    const isActive = filter === type;
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFilter(type)}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
          isActive 
            ? 'bg-orange-500 text-white shadow-orange-500/30 ring-2 ring-orange-500 ring-offset-2' 
            : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 border border-gray-100'
        }`}
      >
        <Icon size={18} />
        {label}
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans overflow-x-hidden flex flex-col">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 20, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-0 left-1/2 z-50 bg-white px-6 py-4 rounded-2xl shadow-xl shadow-orange-500/10 border border-orange-100 flex items-center gap-3 text-gray-800"
          >
            <Sparkles className="text-orange-500" size={24} />
            <p className="font-medium">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="pt-20 pb-16 px-4 relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-100/50 to-transparent -z-10" />
        {/* Decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/40 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-10 w-32 h-32 bg-amber-200/40 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-3xl flex flex-col items-center mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6 tracking-wide"
          >
            <HeartFilledIcon className="w-4 h-4" />
            給牠一個溫暖的家
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            遇見你的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">毛孩家人</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl"
          >
            這裡有許多正在等待愛的孩子，用領養代替購買，讓牠們的尾巴為你而搖，呼嚕聲為你而響。
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <FilterButton type="all" label="全部毛孩" icon={LayoutGrid} />
            <FilterButton type="dog" label="找狗狗" icon={Dog} />
            <FilterButton type="cat" label="找貓咪" icon={Cat} />
          </motion.div>
        </div>
      </header>

      {/* Main Content Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 flex-grow w-full">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAnimals.map((animal) => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                onAdoptClick={handleAdoptClick} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAnimals.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-gray-500"
          >
            <Cat size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-lg">目前沒有符合條件的毛孩喔！</p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}
