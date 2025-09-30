"use client";

import React, { useState } from 'react';

// Define the TypeScript interface for the data structure
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Mock data 
const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Do plumbers deal with heating?',
    answer: 'Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.',
  },
  {
    id: 2,
    question: 'Do you charge a call out fee?',
    answer: 'We provide clear, upfront quotes before any work begins. For scheduled maintenance or standard repairs, we typically do not charge a separate call-out fee, only for the labor and parts agreed upon.',
  },
  {
    id: 3,
    question: 'How quickly can your company send out an engineer?',
    answer: 'For emergency plumbing or heating issues, we aim to dispatch an engineer to your location within 60 minutes, 24/7. For non-urgent matters, we will schedule a visit at your earliest convenience.',
  },
  {
    id: 4,
    question: 'What should I do if I get a water leak?',
    answer: 'Immediately locate and turn off your main water supply valve (stopcock). If the leak is near an electrical source, turn off the electricity to that area first. Then, call our 24-hour emergency line for immediate assistance.',
  },
];

// Accordion Item Sub-Component
interface AccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, isOpen, toggleAccordion }) => {
  // Icon that rotates based on the open state
  const ChevronIcon = (
    <svg
      className={`w-5 h-5 text-indigo-900 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className="py-5 border-b border-gray-200 last:border-b-0 ">
      {/* Question Header (Button) */}
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-[16px] md:text-[20px] xl:text[28px] text-[#1B1743] transition duration-150 cursor-pointer"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${faq.id}`}
      >
        <span>{faq.question}</span>
        {ChevronIcon}
      </button>

      {/* Answer Content - uses max-height for a smooth CSS-driven transition */}
      <div
        id={`accordion-content-${faq.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pt-3' : 'max-h-0'}`}
      >
        <p className="text-[#2A2F32] font-inter text-[14px] xl:text-[18px] ">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};


//Main Next.js Component (named App for single-file environment compatibility)
const FAQ = () => {
  // State to track which item is open. We start with the first item open to match the image.
  const [openId, setOpenId] = useState<number | null>();

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex items-start justify-center py-16 sm:px-6 lg:px-8 font-inter">
      <div className="w-full max-w-[920px] bg-white p-6 sm:p-12 rounded-2xl ">

        {/* Title Section */}
        <h1 className="text-[24px] md:text-[32px] xl:text-[48px] font-bold text-center mb-12 text-[#1B1743] tracking-tight">
          Frequently asked questions
        </h1>

        {/* Accordion List Container */}
        <div className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              toggleAccordion={() => toggleAccordion(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
