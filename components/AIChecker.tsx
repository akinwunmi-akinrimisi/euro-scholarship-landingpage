import React, { useState } from 'react';
import { Send, Loader2, Bot } from 'lucide-react';
import { checkEligibility } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await checkEligibility(input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Network issues? No worries. Rest assured, our list covers HND, 2:1, and 2:2 profiles perfectly.", isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="checker" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            "Will they accept my 2:2 or HND?"
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Stop guessing. Tell our AI counselor your details (e.g., "I have an HND in Mass Comm with 5 years experience" or "I finished with a 2:2 in Biochemistry from UNIBEN"), and we'll tell you your chances.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="h-96 flex flex-col">
            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-slate-400 mt-10">
                  <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Type your academic profile below...</p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-700 shadow-sm border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 flex items-center">
                    <Loader2 className="w-4 h-4 animate-spin mr-2 text-brand-500" />
                    Analyzing your "Japa" potential...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. 2:2 in Physics from OAU, want to study in Germany..."
                  className="flex-1 rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-brand-600 text-white p-3 rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};