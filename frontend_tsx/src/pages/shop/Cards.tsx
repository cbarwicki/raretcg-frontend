import { Link, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

interface Card {
  id: string;
  name: string;
  supertype: string;
  set_name: string;
  rarity: string;
  images: { small: string; large: string };
  price: number;
}



const Cards = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(location.search);
    params.set("p", newPage.toString());
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  const { data, page, totalPages } = useLoaderData()

  return (
    <div className="bg-white text-black">
      <Navbar />
      <section className="flex items-center justify-end m-3 text-xl">
        <label htmlFor="sort" className="mr-2 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="name">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
          <option value="priceLow">Price (Low to High)</option>
          <option value="priceHigh">Price (High to Low)</option>
          <option value="rarity">Rarity</option>
        </select>
      </section>
      <div className=" p-4 grid grid-cols-5 gap-4 ">
        {data.map((card: Card) => (
          <Link key={card.id} to={`/cards/${card.id}`}>
            <div className=" rounded-lg flex p-4 text-black shadow-sm hover:shadow-2xl transition-shadow duration-150">
              <img src={card.images.small} alt={card.name} className="w-50 mr-2" />
              <div className="text-center flex flex-col items-center justify-between mt-5">
                <div>
                  <h2 className="text-xl font-bold">{card.name}</h2>
                  <p className="italic text-sm">{card.set_name}</p>
                  <p className="italic text-sm">{card.rarity}</p>
                </div>
                <p className="text-2xl">${(card.price / 100).toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <section>
        <Pagination page={page} totalPages={totalPages} onPageChange={goToPage} />
      </section>
      <Footer />
    </div>
  );
};

export default Cards;

