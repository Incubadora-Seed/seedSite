'use client'

import React, { useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Seed Admin - IFSul',
};

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    try {
      const response = await api.post('/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("chamou")
        router.push('/db');
      } else {
        console.log('Login inválido!');
      }
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Login - Administrador</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute top-2 right-2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}{' '}
          </button>
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:ring-blue-3"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
