import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Ticket = () => {
  const tickets = [
    {
      type: "Kids (Under 10)",
      price: "Free",
      id: 1,
    },
    {
      type: "Individual",
      price: "TBA",
      id: 2,
    },
    {
      type: "Family (Group of 5)",
      price: "TBA",
      id: 3,
    },
  ];

  return (
    <div className="py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Festival Tickets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="border-2 border-dashed border-[#0066c2] rounded-2xl relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div className="absolute w-4 h-4 bg-gray-100 rounded-full -top-2 -left-2"></div>
            <div className="absolute w-4 h-4 bg-gray-100 rounded-full -top-2 -right-2"></div>
            <div className="absolute w-4 h-4 bg-gray-100 rounded-full -bottom-2 -left-2"></div>
            <div className="absolute w-4 h-4 bg-gray-100 rounded-full -bottom-2 -right-2"></div>
            
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{ticket.type}</CardTitle>
            </CardHeader>
            
            <CardContent className="text-center">
              <p className="text-4xl font-bold mb-6">{ticket.price}</p>
              <div className="w-16 h-16 rounded-full bg-[#0066c2] mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">{ticket.id}</span>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-center pb-6">
              <Button className="bg-[#0066c2] hover:bg-[#0055a5] text-white">
                Buy Ticket
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Ticket;