// src/hooks/useAuth.tsx

import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

export function useAuth() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verificar se há um token JWT válido no localStorage (ou onde você estiver armazenando)
    const token = localStorage.getItem('adminToken');

    if (token) {
      try {
        // Verificar a validade do token
        const decodedToken = jwt.verify(token, 'seuSegredo'); // Substitua 'seuSegredo' pelo segredo real usado na geração do token

        // Se chegou aqui, o token é válido
        setIsAdmin(true);
      } catch (error) {
        // O token é inválido ou expirou
        console.error('Erro ao verificar o token:', error);
      }
    }
  }, []);

  return { isAdmin };
}
