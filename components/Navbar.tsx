import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button";

interface NavItem {
    [key: string]: string;
}

const Navbar = () => {
    const Navitems: NavItem = {
        Research: "/research",
        Company: "/company",
        Services: "/services",
        Docs: "/docs",
    };

    return (
        <nav className="w-full h-14 border border-r-0 border-l-0 border-neutral-800 relative">
            <div className="px-56 h-full shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Link className='font-semibold' href="/">
                        Hexel Studio
                    </Link>
                    <div className='space-x-8'>
                        {Object.keys(Navitems).map((key) => (
                            <a href={Navitems[key]} key={key}>
                                {key}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <Button className='dark flex items-center gap-2'>
                        Agent Studio
                    </Button>
             </div>
            </div>
        </nav>
    );
};

export default Navbar;