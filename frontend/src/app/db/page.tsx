'use client'

import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
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
