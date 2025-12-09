import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}