'use client'

import '../../app/globals.css'
import React, { useState } from 'react';
import { api } from "@/lib/api"
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Seed Admin - IFSul'
}

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', {
        username,
        password
      });

      if (response.status === 200) {
        router.push("/db") // Redireciona para '/db' se login = ok
      } else {
        console.log('Login inválido!');
      }
    } catch (error) {
      // TODO: handle error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Login - Administrador</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
