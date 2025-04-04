'use client'
import React from 'react';
import Image from 'next/image';

const Slide = () => {
    return (
        <div className="relative w-full h-[200px] md:h-[200px] lg:h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/cover.png"
                    alt="Food Festival"
                    fill
                    priority
                    className="object-cover brightness-75"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-3xl font-medium leading-relaxed bg-black/50 p-4 rounded-lg">
                    With Your Support, We&apos;re Creating a Community Where Everyone Belongs.
                </p>
            </div>
        </div>
    );
};

export default Slide;