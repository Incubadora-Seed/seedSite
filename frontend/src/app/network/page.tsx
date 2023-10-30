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
    const [searchTerm, setSearchTerm] = useState(''); // state for search term
    const [searchResults, setSearchResults] = useState<Company[]>([]); // state for search results
    const [allCompanies, setAllCompanies] = useState<Company[]>([]); // state for all companies data

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
            setSearchResults(allCompanies); // Se o termo de busca está vazio, exiba todas as empresas
        }
    }

    // useEffect for all companies data when render the page    
    useEffect(() => {
        fetch('http://localhost:3333/company')
            .then(response => response.json())
            .then(data => {
                setSearchResults(data);
                setAllCompanies(data); // save all companies data in state allCompanies
            })
            .catch(error => console.error('Erro', error));
    }, []); // empty array to run only once


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
            <ul className='mt-8 space-y-4'>
                {searchResults.map(company => (
                    <li key={company.id} className='bg-white p-6 rounded shadow-md'>
                        <h2 className='text-xl font-bold'>{company.nome_fantasia}</h2>
                        <p className='text-gray-700'>Área de Atuação: {company.categoria}</p>
                        <p className='text-gray-700'>Email: {company.email}</p>
                        <p className='text-gray-700'>Telefone: {company.telefone}</p>
                    </li>
                ))}
            </ul>
        </>    
    );
}
