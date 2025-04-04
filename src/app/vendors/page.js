import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Vendor() {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
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
                    <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-3xl font-medium leading-relaxed bg-black/30 p-4 rounded-lg">
                        Embrace the opportunity to showcase your business.
                    </p>
                </div>
            </div>

            <div className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {/* Bazaar Vendor Card */}
                    <div className="bg-gray-100/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-3xl font-bold mb-1">Bazaar Vendor</h2>
                        <p className="text-gray-600 mb-6">$TBA</p>
                        <button className="w-full border border-gray-400 py-3 rounded-lg mb-6 hover:bg-gray-200 transition">Sign Up</button>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>10&apos;x10&apos; booth space</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Vendor listing in the event program and website</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Social media shoutout before the event</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Food Truck Vendor Card */}
                    <div className="bg-gray-100/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                        <h2 className="text-3xl font-bold mb-1">Food Truck Vendor</h2>
                        <p className="text-gray-600 mb-6">$TBA</p>
                        <button className="w-full border border-gray-400 py-3 rounded-lg mb-6 hover:bg-gray-200 transition">Sign Up</button>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Premium food truck parking space</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Vendor listing in the event program and website</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                <span>Social media shoutout before the event</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Become A Vendor Section */}
                <div className="text-center max-w-4xl mx-auto bg-gray-50/80 backdrop-blur-sm p-8 rounded-xl">
                    <h2 className="text-4xl font-bold mb-8">Become A Vendor</h2>
                    <p className="text-lg mb-8 leading-relaxed">
                        Join our incredible lineup of diverse vendors at the Florida Halal Festival and
                        make a lasting impact on our community. As a vendor, you&apos;ll have the
                        opportunity to showcase your products, connect with a vibrant audience, and be
                        part of an event that celebrates and unites cultures. Don&apos;t miss your chance to
                        be at the heart of this exciting festival—sign up today and elevate your business
                        to new heights! If you have any questions please email us
                    </p>
                    <a href="mailto:hello@orlandohalaleats.com" className="font-medium text-lg block mb-8 hover:underline">
                        hello@orlandohalaleats.com
                    </a>
                    <button className="bg-yellow-300 hover:bg-yellow-400 transition px-12 py-3 rounded-lg font-medium">
                        Sign Up
                    </button>
                </div>
            </div>

            <MapView></MapView>
            <Footer></Footer>
        </div>
    )
}