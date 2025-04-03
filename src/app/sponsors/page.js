"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import Header from '@/components/Header';

export default function SponsorsPage() {
    return (
        <div>

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

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header with logos */}
                    <div className="bg-white rounded-xl p-6 shadow-md mb-8 flex justify-center items-center">
                        <div className="flex items-center space-x-4">
                            <div className="text-center">
                                <a href='/'>
                                    <Image
                                        src="Masjid.svg"
                                        alt="Orlando Halal Eats"
                                        width={150}
                                        height={150}
                                        className="mx-auto"
                                    />
                                </a>
                                <p className="text-xs font-semibold mt-1">FOOD FESTIVAL</p>
                            </div>
                            <div className="h-16 w-px bg-amber-500 mx-4"></div>
                            <div>
                                <a href='/'>
                                    <Image
                                        src="https://cdn.codeopx.com/halal.png"
                                        alt="Masjid"
                                        width={150}
                                        height={80}
                                        className="mx-auto"
                                    />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Welcoming Title */}
                    <h1 className="text-5xl font-bold text-amber-700 text-center mb-10">WELCOMING</h1>

                    {/* Main content grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* FOODS Section */}
                        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md">
                            <h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">FOODS</h2>
                            <ul className="space-y-2">
                                {[
                                    "Chaat House Restaurant",
                                    "Big Backs BBQ",
                                    "Maya Thai Cuisine",
                                    "Talkin' Tacos",
                                    "Tender Dogs",
                                    "Ox's Way",
                                    "Koyla Pakistani BBQ",
                                    "Shoufi Mahfi Mediterranean Grill",
                                    "Smokin' Halal BBQ",
                                    "New Texas Fried Chicken",
                                    "The Falafel House",
                                    "The Halal Brisket",
                                    "Dave's Hot Chicken",
                                    "Chef Abu Rimas",
                                    "The Burger Jawn",
                                    "Charcoal Zyka",
                                    "Quick bites Halal"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-amber-600 mr-2">•</span>
                                        <span className="text-amber-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* OTHER Section */}
                        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md">
                            <h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">OTHER</h2>
                            <ul className="space-y-2">
                                {[
                                    "Paris Saint German Academy",
                                    "WISE Academy",
                                    "Fashion by Ruby",
                                    "Oud Clinic",
                                    "Alexandria Market / Happiness & Beyond Photobooth",
                                    "Zayn Hijabs",
                                    "Layl Fragrances",
                                    "Floridaestore",
                                    "Henna Gig",
                                    "Bunny Interaction Experience",
                                    "LaserLab",
                                    "Alpha Equity Realty & Management"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-amber-600 mr-2">•</span>
                                        <span className="text-amber-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* DESSERTS/DRINKS Section */}
                        <div>
                            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md mb-6">
                                <h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">DESSERTS/DRINKS</h2>
                                <ul className="space-y-2">
                                    {[
                                        "Chaand Chai & Coffee / Bisc & Crumb",
                                        "The Cozy Cup",
                                        "Barakah Beans",
                                        "CRUMBS",
                                        "Adam's Italian Ice",
                                        "Dapper Doughnut",
                                        "Melt n Dip"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-amber-600 mr-2">•</span>
                                            <span className="text-amber-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>

                    {/* Event details */}
                    <div className="mt-10 text-center">
                        <p className="text-teal-700 text-2xl font-semibold mb-2">SATURDAY | APRIL 5</p>
                        <p className="text-teal-700 text-2xl font-semibold mb-2">⏰ 2 PM - 11 PM</p>
                        <p className="text-teal-700 text-2xl font-semibold">📍 MASJID AL HAYY</p>
                    </div>

                    {/* Social media */}
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <div className="bg-black rounded-lg p-2">
                            <span className="text-white">TikTok</span>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg p-2">
                            <span className="text-white">Instagram</span>
                        </div>
                        <span className="text-xl font-bold">orlandohalaleats</span>
                    </div>
                </div>
            </div>
            <MapView />
            <Footer />
        </div>
    );
}