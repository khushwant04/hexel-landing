import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";

export function FlipWordsHero() {
    const words = ["Agentic", "Intelligent"];

    return (
        <div className="flex w-full">
            <div className="dark w-full min-h-[40rem] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0">
                <div className="text-left w-full">
                    <h1 className="
                        text-2xl      /* Mobile */
                        sm:text-3xl   /* Small screens */
                        md:text-4xl   /* Medium screens */
                        lg:text-5xl   /* Large screens */
                        font-normal text-neutral-600 dark:text-neutral-400
                        max-w-3xl     /* Limit text width */
                    ">
                        Build
                        <FlipWords words={words} /> <br />
                        Solutions for your business
                    </h1>

                    <Button className="
                        mt-6         
                        sm:mt-8     
                        md:mt-10     
                        px-4 py-2  
                        text-base     
                        sm:text-lg 
                        rounded
                    ">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
}