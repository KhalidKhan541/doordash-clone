"use client";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

const restaurants = [
  { id: "1", name: "Pizza Palace", image: "https://via.placeholder.com/300x200/ff6b35/fff?text=Pizza", cuisine: "Italian", rating: 4.5, deliveryTime: "25-35", deliveryFee: 2.99 },
  { id: "2", name: "Sushi Supreme", image: "https://via.placeholder.com/300x200/004e89/fff?text=Sushi", cuisine: "Japanese", rating: 4.7, deliveryTime: "30-40", deliveryFee: 3.99 },
  { id: "3", name: "Burger Barn", image: "https://via.placeholder.com/300x200/ffc300/000?text=Burgers", cuisine: "American", rating: 4.3, deliveryTime: "20-30", deliveryFee: 1.99 },
  { id: "4", name: "Taco Town", image: "https://via.placeholder.com/300x200/d62828/fff?text=Tacos", cuisine: "Mexican", rating: 4.6, deliveryTime: "15-25", deliveryFee: 2.49 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Delivery or pickup?</h1>
          <div className="flex gap-4 mt-4">
            <input type="text" placeholder="Enter delivery address" className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600">Search</button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
          {["Fastest", "Rating", "Price", "Pizza", "Sushi", "Burgers", "Mexican", "Chinese"].map((filter) => (
            <button key={filter} className="px-4 py-2 border rounded-full text-sm whitespace-nowrap hover:bg-gray-100">{filter}</button>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Nearby restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((r) => (
            <div key={r.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer">
              <img src={r.image} alt={r.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{r.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{r.cuisine}</span>
                  <span>•</span>
                  <span className="text-green-600 font-medium">{r.rating} ?</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{r.deliveryTime} min •  delivery</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
