import Image from 'next/image'
import { ChevronLeft } from 'lucide-react';

export default function HeaderHome() {
    return (
            <div className="container mx-auto flex items-center justify-between px-4 border-b-4">
                <Image
                    src="/logo-roxa.png"
                    alt="Logo"
                    width={300}
                    height={0}
                />
                <a href="/" className="text-xl font-semibold hover:underline">
                        <ChevronLeft className="inline-block w-6 h-6 mr-2 " />
                            Voltar para a Home
                </a>
            </div>
    );
}
