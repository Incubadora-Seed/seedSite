'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';

export default function Editals() {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/download')
      .then(response => response.json())
      .then(data => {
        setPdfFiles(data.pdfFiles)
      })
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <div className="mt-8 text-center">
        <h1 className="text-2xl md:text-4xl mt-4">Editais - Seed</h1>
      </div>
      <div className="mt-8">
        {pdfFiles.map((pdf, index) => (
          <div key={index} className="mb-2">
            <Link className="text-blue-600 hover:underline"
              href={`http://localhost:3333/download/${pdf}`}>
                {`${pdf}`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
