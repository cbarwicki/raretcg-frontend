import Card from "../../components/Card";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

interface Card {
  images: {
    small: string,
    large: string,
  },
  id: string,
  name: string,
  supertype: string,
  set_name: string,
  rarity: string,
  price: number,
}
const CardPage = () => {

  const cardData = useLoaderData() as Card

  if (!cardData) {
    return (
      <div>Loading...</div>
    )
  }
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(prev - 1, 1)); // min 1
  return (
    <div className="">
      <Navbar />
      <div className="bg-zinc-900 pt-20">
        <div className="flex items-center justify-evenly pb-20">
          <section className="">
            <Card images={cardData.images.large} name={cardData.name} />
          </section>
          <section className=" p-5  flex-col items-start justify-center">
            <h1 className="text-3xl font-bold mb-4 text-white-900 text-center">{cardData.name}</h1>
            <div className="text-xl ">
              <p><strong className="text-blue-400">Set:</strong> {cardData.set_name}</p>
              <p><strong className="text-blue-400">Rarity:</strong> {cardData.rarity}</p>
              <p><strong className="text-blue-400">Price:</strong> <strong className="text-3xl ">${(cardData.price / 100).toFixed(2)}</strong></p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              {/* Quantity selector */}
              <div className="bg-white text-black flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-3 py-2 bg-gray-200 hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={increment}
                  className="px-3 py-2 bg-gray-200 hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
              {/* Add to Cart button */}
              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          </section>
        </div>
        <section id="shop" className="bg-gray-100 dark:bg-gray-800 py-10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">You may also like </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow hover:scale-105 transition-transform"
                >
                  <img
                    src={`/images/card${n}.jpg`}
                    alt={`Card ${n}`}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <div className="p-4 text-center">
                    <p className="font-semibold">Charizard EX</p>
                    <p className="text-indigo-600 font-bold mt-1">$49.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CardPage;

