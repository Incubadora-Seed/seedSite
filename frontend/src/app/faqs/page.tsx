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

export default function FAQs() {
  const faqs: FAQ[] = [
    {
      question: "O que é o nosso projeto?",
      answer: "Nosso projeto é um ambiente de incubação local para empresas iniciativas de empreendedorismo em estágios iniciais. Através de um processo seletivo, iremos selecionar as melhores ideias que apresentem maiores potenciais de empreendedorismo e as auxiliamos a dar os seus primeiros passos, visando oferecer e conseguir uma independência para o mercado de trabalho."
    },
    {
      question: "Como posso ser incubado e quais os requisitos?",
      answer: "O processo de incubação pode acontecer nas modalidades residente ou não residente. A admissão de propostas para o programa de incubação se dará a partir de edital, publicado especificamente para esta finalidade. A participação no programa de incubação tem como requisito prévio que a empresa iniciativa participante tenha inscrição no Cadastro Nacional de Pessoa Jurídica (CNPJ) ativa no momento da assinatura dos documentos contratuais junto à Seed. Os requisitos aplicáveis a cada edição do Programa de Pré-Incubação da Seed estarão definidos no edital que irá reger o processo seletivo dos projetos. O edital será publicado no site da Seed e divulgado em nossas redes sociais."
    },
    {
      question: "Quem pode participar?", 
      answer: "Qualquer empresa em estágio inicial que apresente uma iniciativa inovadora pode participar do nosso processo seletivo, seja ela do Rio Grande do Sul ou de qualquer outro estado do Brasil."
    },
    {
      question: "Quanto tempo durará o processo de incubação?",
      answer: "O período previsto para duração do processo de incubação é defica em cerca de 12 até 24 meses, podendo ser prorrogável por até dois períodos subsequentes de seis meses. Os demais requisitos necessários para ingresso no programa de incubação estarão dispostos em cada edital de seleção para esta finalidade."
    },
    {
      question: "Quais os benefícios de ser incubado pela Seed?",
      answer: "A incubação oferece diversos benefícios para as empresas participantes, tais como: espaço físico adequado para o desenvolvimento das atividades (caso for presencial); acesso a serviços de apoio técnico, gerencial e administrativo; capacitação e treinamento em áreas específicas; networking com outras empresas e instituições; acesso a fontes de financiamento e investimento; e suporte para a comercialização dos produtos e serviços oferecidos. Além disso, a incubação permite que as empresas iniciativas participantes tenham um ambiente propício para o desenvolvimento de suas ideias e projetos, com menor risco e maior chance de sucesso, pois se encontrará dentro de um Instituto Federal de Ciência e Tecnologia."
    }, 
    {
      question: "Quais os custos para ser incubado?",
      answer: "O processo de incubação envolve alguns custos para as empresas participantes, tais como: taxa de inscrição, taxa de pré-incubação, taxa de incubação, taxa de uso de serviços e taxa de saída. No entanto, essas taxas têm caráter pedagógico e são alinhadas a uma perspectiva educativa do processo de formação de novos negócios. Além disso, as taxas são aplicáveis somente entre instrumentos contratuais desenvolvidos entre os CNPJs da Fundação doo Instituto Federal Sul-rio-grandense e da empresa incubada/pós-incubada. Os valores das taxas serão definidos em cada edital de seleção para esta finalidade."
    }, 
    {
      question: "Quais serão as etapas da incubação?",
      answer: "O processo de seleção para o programa de incubação é composto por duas etapas: a primeira é o processo de pré-incubação, que tem como objetivo avaliar a viabilidade do projeto e a capacidade empreendedora dos proponentes; a segunda é o processo de incubação propriamente dito, que tem como objetivo consolidar a operação do negócio e aprimorar o(s) produto(s) e/ou serviço(s) oferecidos."
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
