"use client";

import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import Header from '@/components/Header';

export default function SponsorsPage() {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-blue-50 p-6 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-10 left-10">
                        <div className="w-8 h-8 text-yellow-400">★</div>
                    </div>
                    <div className="absolute top-20 left-20">
                        <div className="w-6 h-10 bg-teal-200 opacity-70 rounded-full transform rotate-45"></div>
                    </div>
                    {/* More decorative elements would be placed here */}
                </div>
                <main className="flex-grow relative h-[350px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-[#eef0f4]">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/food.jpeg"
                            alt="Sponsor 1"
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
                            style={{ width: '100%', height: '100%' }}
                            className="object-contain"
                        />
                    </div>
                </main>

            </div>
            <MapView />
            <Footer />
        </div>
    );
}