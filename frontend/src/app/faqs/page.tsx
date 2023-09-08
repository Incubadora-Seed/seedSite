'use client'

import Header from "@/components/Header";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

    return (
      
    <div className="border rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-purple-600">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

const FAQs: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "O que é o nosso projeto?",
      answer: "Nosso projeto é..."
    },
    {
      question: "Como posso participar?",
      answer: "Você pode participar..."
    },
    {
      question: "teste", 
      answer: "teste1"
    },
    {
      question: "teste2",
      answer: "teste2"
    },
    {
      question: "teste2",
      answer: "teste2"
    }
  ];

    return (
        <>
            <Header />
            <div className="max-w-md mx-auto p-4 my-[20vh]">
                <h2 className="text-2xl font-bold text-center mb-8 text-purple-800">
                    Perguntas Frequentes
                </h2>
                {faqs.map((faq, index) => (
                    <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    />
                ))}
            </div>
        </>
    );
};

export default FAQs;
