import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa'; 
import { makeRequest } from '../axios';

const BiddingPage = () => {
  const endTime = new Date('2024-04-25T12:00:00Z');
  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["bidders"],
      queryFn: () => makeRequest.get("/bidders").then((res) => {
        return res.data;
      })
    }
  )
  const calculateTimeLeft = () => {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const bidders=data
  console.log(data)
  // Array of bidder details
  // const bidders = [
  //   { name: 'John Doe', maxBid: 5000, minBid: 1000 },
  //   { name: 'Jane Smith', maxBid: 4500, minBid: 1200 },
  //   { name: 'Alice Johnson', maxBid: 4800, minBid: 1100 },
  //   { name: 'Bob Williams', maxBid: 5200, minBid: 1050 },
  //   { name: 'Emily Brown', maxBid: 4900, minBid: 1150 },
  // ];
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-20">
      {/* Map through bidders array */}
      {bidders.map((bidder, index) => (
        <div key={index} className="max-w-md mx-auto bg-opacity-50 rounded-lg overflow-hidden shadow-md">
          <div className="h-64 overflow-hidden relative">
            <img
              src={`uploads/${bidder.product_img}`}
              alt="Bidding item"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 m-4 flex items-center">
              <FaClock className="text-white mr-2" />
              <span className="text-white">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            {/* Max and Min Bid */}
            <div className="text-white text-lg mb-2">Product: {bidder.product_name}</div>
            <div className="text-white text-sm mb-2">
               Bid: ${bidder.bidder_price}
            </div>

            {/* Bidder name */}
            <div className="text-white text-lg mb-2">Bidder: {bidder.bidder_name}</div>

            {/* Bid Now option */}
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default BiddingPage;
