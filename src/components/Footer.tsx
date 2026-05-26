import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-50 pt-16 pb-8 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Heart className="w-6 h-6 text-orange-500 fill-orange-500" />
              毛孩尋家
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              我們致力於為每一隻正在等待溫暖的毛孩找到合適的家。
              認養不棄養，讓愛延續。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">聯絡資訊</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                (02) 2345-6789
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                adopt@furryhome.tw
              </li>
              <li className="flex flex-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>台北市幸福區溫馨路 99 號<br />(開放時間：週二至週日 10:00-18:00)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">追蹤我們</h4>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white transition-colors">
                  FB
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white transition-colors">
                  IG
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white transition-colors">
                  LINE
               </a>
            </div>
          </div>

        </div>
        
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-amber-200/50">
          © {new Date().getFullYear()} 毛孩尋家 動物認養平台. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
