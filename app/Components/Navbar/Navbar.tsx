"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenMenu = () => {
        setIsOpen(true);
        // Atualiza o índice da imagem para a próxima do array
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagensMenu.length);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { name: 'INÍCIO', href: '/' },
        { name: 'NOSSA HISTÓRIA', href: '/historia' },
        { name: 'COLEÇÃO', href: '/colecao' },
        { name: 'PROCESSO', href: '/processo' },
        { name: 'EXPERIÊNCIAS', href: '/experiencias' },
        { name: 'CONTATO', href: '/contato' },
    ];

    const imagensMenu = [
        {
            imagem: '/foto-menu/1.png',
            alt: 'Imagem do Menu 1',
        },
        {
            imagem: '/foto-menu/2.png',
            alt: 'Imagem do Menu 2',
        },
        {
            imagem: '/foto-menu/3.png',
            alt: 'Imagem do Menu 3',
        },
        {
            imagem: '/foto-menu/4.png',
            alt: 'Imagem do Menu 4',
        },
        {
            imagem: '/foto-menu/5.png',
            alt: 'Imagem do Menu 5',
        },
    ];

    return (
        <>
            {/* NAVBAR */}
            <nav className={`fixed w-full z-30 transition-all duration-500 ${scrolled ? 'bg-black/90 navbar-blur' : 'bg-transparent'
                }`}>
                <div className="grid grid-cols-[1fr_180px_1fr] h-[100px]">
                    {/* Esquerda */}
                    <div className="flex justify-start items-center border-b border-white/10">
                        <a href="#" className="link-nome pl-8">
                            <img className="w-40 h-20" src="/texto-logo2.png" alt="Logo Thornfield" />
                        </a>
                    </div>

                    {/* Centro */}
                    <div className="flex justify-center items-center">
                        <a className="mt-[30px] transform hover:scale-105 transition-transform duration-300" href="/">
                            <img src="/cabra.png" alt="Logo Thornfield" className="w-24" />
                        </a>
                    </div>

                    {/* Direita */}
                    <div className="flex justify-end items-center border-b border-white/10 pr-8">
                        <button
                            onClick={handleOpenMenu}
                            className={`menu-button p-3 rounded-full hover:bg-white/5 transition-colors duration-300 group ${isOpen ? 'hidden' : ''}`}
                            aria-label="Abrir Menu"
                        >
                            <div className="menu-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu Fullscreen */}
            <div
                className={`fixed inset-0 w-full h-full z-50 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={handleCloseMenu}
                />

                {/* Grid de duas colunas */}
                <div className={`grid md:grid-cols-[35%_65%] grid-cols-1 h-full ${isOpen ? 'menu-wave' : 'translate-x-full -translate-y-full'
                    }`}>
                    {/* Coluna da Imagem - escondida em mobile */}
                    <div
                        className="bg-cover bg-center bg-no-repeat relative hidden md:block"
                        style={{ backgroundImage: `url(${imagensMenu[currentImageIndex].imagem})` }}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Coluna do Menu */}
                    <div className="bg-[#1a1a1a] p-4 md:p-16 flex flex-col relative">
                        {/* Botão Fechar */}
                        <button
                            onClick={handleCloseMenu}
                            className="absolute top-8 right-8 p-2 text-white/60 hover:text-white transition-colors duration-300"
                            aria-label="Fechar Menu"
                        >
                            <X size={24} />
                        </button>

                        <div className="h-full md:grid md:grid-cols-[250px_1fr]">
                            {/* Coluna da Logo */}
                            <div className="mb-16 md:mb-0">
                                <div className="flex justify-center md:justify-start">
                                    <img src="/cabra.png" alt="Thornfield" className="w-32 md:w-48" />
                                </div>
                            </div>

                            {/* Coluna do Menu */}
                            <div className="md:pt-[200px]">
                                {/* Links do Menu */}
                                <nav className="flex-1" aria-label="Menu de Navegação">
                                    <ul className="space-y-6">
                                        {menuItems.map((item, index) => (
                                            <li
                                                key={item.name}
                                                className="menu-item text-center md:text-left"
                                            >
                                                <a
                                                    href={item.href}
                                                    onClick={handleCloseMenu}
                                                    className="text-white/90 text-xl md:text-2xl font-light tracking-[0.15em] hover:text-amber-600 transition-colors duration-300 flex items-center justify-center md:justify-start group menu-link uppercase"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Footer do Menu */}
                                <div className="pt-8 mt-auto border-t border-white/10 menu-content text-center md:text-left">
                                    <div className="flex justify-center md:justify-start space-x-6 mb-8">
                                        <a href="#" className="social-icon" aria-label="Facebook">
                                            <svg className="w-5 h-5 text-white/60 hover:text-amber-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="social-icon" aria-label="Instagram">
                                            <svg className="w-5 h-5 text-white/60 hover:text-amber-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                                        © {new Date().getFullYear()} Thornfield Whisky
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}