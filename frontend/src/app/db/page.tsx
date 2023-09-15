'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const fileType = ['application/pdf'];
  const router = useRouter();

  const useCustomLocalStorage = (key: string) => {
    const [value, setValue] = useState(localStorage.getItem(key));
  
    const setItem = (newValue: any) => {
      localStorage.setItem(key, newValue);
      setValue(newValue);
    };
  
    return [value, setItem];
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        setFile(selectedFile);
        console.log("Selecionado arquivo PDF")
      } else {
        alert('Por favor, selecione um arquivo PDF.');
      }
    }
  };

  const handleUpload = async () => {
    if (file) {
      const isLoggedIn = localStorage.getItem('token');

      if (!isLoggedIn) {
        router.push('/admin');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
        console.log("Tentando enviar arquivo PDF para o servidor");
        console.log("Arquivo PDF: ", file);
        console.log("Form Data: ", formData);

        const response = await api.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log("Arquivo PDF enviado para o servidor");

        if (response.status === 200) {
          alert('Upload do arquivo PDF concluído com sucesso!');
        } else {
          alert('Erro ao fazer o upload do arquivo PDF.');
        }
      } catch (error) {
        console.error('Erro ao fazer o upload do arquivo PDF:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload de Arquivo PDF</h2>
        <div className="mb-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          {file && (
            <p className="text-green-500">
              Arquivo selecionado: {file.name}
            </p>
          )}
        </div>
        <div className="mb-4">
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={!file}
          >
            Enviar Arquivo
          </button>
        </div>
      </div>
    </div>
  );
}
