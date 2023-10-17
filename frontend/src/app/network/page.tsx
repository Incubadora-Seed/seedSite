'use client'

import Header from '@/components/Header';
import { useEffect, useState } from 'react';

export default function NetworkPage() {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3333/company')
            .then(response => response.json())
            .then(data => {
                setCompany(data)
            })
            .catch(error => console.error('Erro', error))
    })

    return (
        <>
            <Header />
            <div className='block text-center mt-[20vh]'>
                <div className='mx-auto'>
                   <form action="" method="get">
                        <input
                            type="text"
                            name="text-company"
                            id="text-company"
                            placeholder="Tente pesquisar 'sapiranga' ou 'tecnologia'"
                            className='p-2 w-[40vh]'
                        />
                    </form> 
                </div>
                
            </div>
        </>    
    );
}   