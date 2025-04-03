"use client";
import React from 'react';
import Image from 'next/image';

const Celebrate = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <section className="flex max-w-7xl mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden md:flex-row flex-col md:m-8 m-4">
        <div className="flex-1 min-h-[400px] md:min-h-[400px] min-h-[300px]">
          <Image 
            src="/babypic.jpg" 
            alt="Child jumping in a bounce house"
            className="w-full h-full object-cover"
            width={800}
            height={600}
          />
        </div>
        <div className="flex-1 p-10 flex flex-col justify-center md:p-10 p-6">
          <h2 className="text-4xl mb-6 text-black font-bold md:text-4xl text-3xl md:mb-6 mb-4">
            Celebrate Culture & Flavor
          </h2>
          <p className="text-base leading-relaxed text-gray-800 mb-6">
            The South Florida Halal Fest is a vibrant celebration of the rich tapestry of 
            culinary traditions, artistic expression, and cultural diversity that defines our 
            region. Throughout the event, guests will delight in a wide array of 
            mouthwatering dishes from local restaurants, food trucks, and specialty vendors, 
            each showcasing the unique flavors of various ethnic cuisines. Experience 
            captivating performances by artists from around the globe and explore a variety 
            of vendor stalls celebrating cultures from every corner of the world. Join us for a 
            day of exceptional food, dynamic entertainment, shopping, and cultural 
            exploration. Eat, play, and laugh as you immerse yourself in the excitement and 
            joy of our community. Follow us on our Social Media to stay tuned with updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Celebrate;