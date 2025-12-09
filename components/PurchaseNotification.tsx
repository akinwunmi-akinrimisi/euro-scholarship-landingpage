import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const purchasers = [
  "Tunde from Lagos",
  "Chioma from Abuja",
  "Emeka from Port Harcourt",
  "Aisha from Kano",
  "Femi from Ibadan",
  "Ngozi from Enugu",
  "Ahmed from Kaduna",
  "Bolanle from Ogun"
];

const items = ["The Relocation List", "The Japa Guide", "Full Scholarship List"];

export const PurchaseNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({ name: "", item: "" });

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 5000);

    const interval = setInterval(() => {
        triggerNotification();
    }, 45000 + Math.random() * 20000); // Random interval between 45s and 65s

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const triggerNotification = () => {
    const randomName = purchasers[Math.floor(Math.random() * purchasers.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    
    setNotification({ name: randomName, item: randomItem });
    setVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-xl border-l-4 border-green-500 p-4 flex items-center max-w-xs transform transition-all duration-500 ease-in-out">
        <div className="bg-green-100 rounded-full p-2 mr-3">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800">{notification.name}</p>
          <p className="text-xs text-slate-500">just purchased <strong>{notification.item}</strong></p>
          <p className="text-[10px] text-slate-400 mt-1">1 minute ago</p>
        </div>
      </div>
    </div>
  );
};