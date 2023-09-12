'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';
import Image from 'next/image';

export default function Editals() {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/download')
      .then(response => response.json())
        .then(data => {
            console.log(data);  
            setPdfFiles(data.pdfFiles)
        })
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="flex ms-[20vh] items-end mt-[20vh]">
        <Image
          src="/editals.png"
          alt="Editais-image"
          width={50}
          height={100}
          title="Editais"
        />
        <h1 className="md:text-xl xl:text-4xl">Editais</h1>
        {pdfFiles.map((pdf, index) => (
          <div key={index}>
            <Link href={`http://localhost:3333/download/${pdf}`}>
              {`Download ${pdf}`}
            </Link>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
