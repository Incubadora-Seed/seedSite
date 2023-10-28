'use client'

import Header from '@/components/Header';
import { useState, useEffect } from 'react';

interface Company {
    id: number;
    nome_fantasia: string;
    categoria: string;
    email: string;
    telefone: string;
}

export default function NetworkPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Company[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.trim() !== '') {
            fetch(`http://localhost:3333/company/${term}/${term}/${term}/${term}/${term}`)
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data);
                })
                .catch(error => console.error('Erro', error));
        } else {
            setSearchResults([]);
        }
    }

    useEffect(() => {
        handleSearch({ target: { value: searchTerm } } as React.ChangeEvent<HTMLInputElement>);
    }, [searchTerm]);

    return (
        <>
            <Header />
            <div className='block text-center'>
                <form className='mt-[20vh]'>   
                    <div className="relative">
                        <input type="search" id="default-search" className=" w-1/3 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquise por categoria ou cidade" required onChange={handleSearch} />
                    </div>
                </form>
            </div>
            <ul className='mt-[50vh]'>
                {searchResults.map(company => (
                    <li key={company.id}>
                        <strong>{company.nome_fantasia}</strong><br />
                        Área de Atuação: {company.categoria}<br />
                        Email: {company.email}<br />
                        Telefone: {company.telefone}
                    </li>
                ))}
            </ul>
        </>    
    );
}
