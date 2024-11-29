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

    return (
        <nav className="w-full h-14 border border-r-0 border-l-0 border-neutral-800 relative">
            <div className="h-full shadow-sm flex items-center justify-between px-4">
                <div className="flex items-center space-x-8">
                    <Link className='font-semibold' href="/">
                        Hexel Studio
                    </Link>
                    {/* Desktop Navigation */}
                    <div className='hidden md:flex space-x-8'>
                        {Object.keys(Navitems).map((key) => (
                            <a href={Navitems[key]} key={key}>
                                {key}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Button className='dark flex items-center gap-2'>
                        Agent Studio
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current my-1 ${isOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-14 left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-800">
                        <div className="flex flex-col p-4 space-y-4">
                            {Object.keys(Navitems).map((key) => (
                                <a
                                    href={Navitems[key]}
                                    key={key}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {key}
                                </a>
                            ))}
                            <Button className='dark flex items-center gap-2'>
                                Agent Studio
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;