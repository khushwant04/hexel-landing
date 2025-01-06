"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface NavItem {
    [key: string]: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Navitems: NavItem = {
        Research: "/research",
        Company: "/company",
        Services: "/services",
        Docs: "/docs",
    };

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://console.hexelstudio.com/";

    return (
        <nav className="w-full h-14 border border-r-0 border-l-0 border-neutral-800 relative">
            <div className="h-full shadow-sm flex items-center justify-between px-4">
                <div className="flex items-center space-x-8">
                    <Link className='font-semibold' href="/" passHref>
                        Hexel Studio
                    </Link>
                    <div className='hidden md:flex space-x-8'>
                        {Object.entries(Navitems).map(([key, value]) => (
                            <Link href={value} key={key} passHref>
                                {key}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Link href={baseUrl}>
                        <Button className='dark flex items-center gap-2'>
                            Agent Builder
                        </Button>
                    </Link>
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current my-1 ${isOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>

                {isOpen && (
                    <div className="md:hidden absolute top-14 left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-800">
                        <div className="flex flex-col p-4 space-y-4">
                            {Object.entries(Navitems).map(([key, value]) => (
                                <Link
                                    href={value}
                                    key={key}
                                    onClick={() => setIsOpen(false)}
                                    passHref
                                >
                                    {key}
                                </Link>
                            ))}
                            <Link href={baseUrl}>
                                <Button className='dark flex items-center gap-2 w-full'>
                                    Agent Builder
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;