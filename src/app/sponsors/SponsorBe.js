'use client'
import React from 'react';
import Link from 'next/link';

const SponsorBe = () => {
    return (
        <div className= " bg-[#eef0f4]  w-full py-10 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center bg-[#eef0f4]">
               
                <h2 className="bg-[#eef0f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Become A Sponsor
                </h2>
               
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-4 md:px-6">
                    Our diverse sponsors play a vital role in the Florida Halal Festival, significantly
                    impacting the success of our event and enriching our community. We deeply
                    appreciate their commitment and support, which helps us celebrate and unite
                    cultures. <span className="font-semibold">Sign up today</span> to join this incredible effort! If you have any questions
                    please contact Hussein Khaki @ +1 (407) 221-0792
                </p>

                <div className="mt-6 sm:mt-8">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-gray-900 bg-yellow-300 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SponsorBe;