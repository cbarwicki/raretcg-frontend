import axios from "axios";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  // const fetchCards = async () => {
  //   let fetchedCards: any[] = [];
  //   let hasMore = true;
  //   let page = 1;
  //
  //   try {
  //     while (hasMore) {
  //       const { data } = await axios.get("https://api.pokemontcg.io/v2/cards", {
  //         params: {
  //           q: "set.id:sv6",
  //           orderBy: "name",
  //           pageSize: 250,
  //           page,
  //         },
  //       });
  //       // Filter/map the data to match your schema
  //       const filteredCards = data.data.map((card: any) => ({
  //         id: card.id,
  //         name: card.name,
  //         supertype: card.supertype,
  //         set_name: card.set?.name || "", // optional chaining
  //         rarity: card.rarity || "",
  //         images: {
  //           small: card.images?.small || "",
  //           large: card.images?.large || "",
  //         },
  //         price: 20000, // fixed value
  //       }));
  //
  //       fetchedCards = [...fetchedCards, ...filteredCards];
  //       hasMore = page * 250 < data.totalCount;
  //       page++;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log(fetchedCards);
  //   return fetchedCards;
  // };
  useEffect(() => {
  }, [])
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* HERO SECTION */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-yellow-200 to-yellow-100 dark:from-yellow-600 dark:to-yellow-400">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
            Catch Rare Cards <br /> Build Legendary Decks
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
            Buy, sell, and trade authentic Pokémon TCG cards — from the classics to the latest sets.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/cards"
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      {/* <section id="collections" className="max-w-6xl mx-auto px-6 py-20"> */}
      {/*   <h2 className="text-3xl font-bold text-center mb-10">Explore Collections</h2> */}
      {/*   <div className="grid gap-8 md:grid-cols-4"> */}
      {/*     {[ */}
      {/*       { title: "Booster Boxes", img: "/images/booster.jpg" }, */}
      {/*       { title: "Singles", img: "/images/singles.jpg" }, */}
      {/*       { title: "Accessories", img: "/images/accessories.jpg" }, */}
      {/*       { title: "Preorders", img: "/images/preorders.jpg" }, */}
      {/*     ].map((col) => ( */}
      {/*       <div */}
      {/*         key={col.title} */}
      {/*         className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer" */}
      {/*       > */}
      {/*         <img src={col.img} alt={col.title} className="w-full h-48 object-cover" /> */}
      {/*         <div className="p-4 text-center font-semibold">{col.title}</div> */}
      {/*       </div> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* </section> */}

      {/* FEATURED / TRENDING */}
      <section id="shop" className="bg-gray-100 dark:bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">🔥 Trending Cards</h2>
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

      {/* TRUST / ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h2 className="text-3xl font-bold text-center mb-10">Why Trainers Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {[
            { icon: "✅", text: "100% Authentic Cards" },
            { icon: "⚡", text: "Fast Shipping" },
            { icon: "💬", text: "Trusted by Collectors" },
            { icon: "💸", text: "Fair Market Pricing" },
          ].map((item) => (
            <div key={item.text} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      {/* <section className="bg-indigo-600 text-white py-20 text-center"> */}
      {/*   <h2 className="text-3xl font-bold mb-4">Join the Trainer List</h2> */}
      {/*   <p className="mb-6 text-lg"> */}
      {/*     Get exclusive drops, discounts, and early access to new sets. */}
      {/*   </p> */}
      {/*   <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"> */}
      {/*     <input */}
      {/*       type="email" */}
      {/*       placeholder="Enter your email" */}
      {/*       className="px-4 py-3 rounded-lg text-gray-800 w-full" */}
      {/*     /> */}
      {/*     <button */}
      {/*       type="submit" */}
      {/*       className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg" */}
      {/*     > */}
      {/*       Subscribe */}
      {/*     </button> */}
      {/*   </form> */}
      {/* </section> */}

      <Footer />
    </div>
  );
}

