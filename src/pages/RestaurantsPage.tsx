import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import RestaurantTable from "../components/restaurant/RestaurantTable";
import { useNavigate } from "react-router-dom";
import CreateRestaurantModal from "../components/modal/restaurant/CreateRestaurantModal";

const RestaurantsPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // getRestaurants
  const restaurants = [
    {
      slNo: 1,
      name: "Spice Garden",
      cuisine: "Indian",
      email: "contact@spicegarden.com",
      address: "123 Curry Lane, New York, NY",
      website: "https://spicegarden.com",
    },
    {
      slNo: 2,
      name: "Pasta Palace",
      cuisine: "Italian",
      email: "info@pastapalace.it",
      address: "456 Olive Street, Chicago, IL",
      website: "https://pastapalace.it",
    },
    {
      slNo: 3,
      name: "Sushi World",
      cuisine: "Japanese",
      email: "hello@sushiworld.jp",
      address: "789 Sakura Ave, San Francisco, CA",
      website: "https://sushiworld.jp",
    },
    {
      slNo: 4,
      name: "Taco Time",
      cuisine: "Mexican",
      email: "order@tacotime.mx",
      address: "321 Fiesta Blvd, Austin, TX",
      website: "https://tacotime.mx",
    },
    {
      slNo: 5,
      name: "Burger Bros",
      cuisine: "American",
      email: "support@burgerbros.us",
      address: "654 Grill Rd, Seattle, WA",
      website: "https://burgerbros.us",
    },
    {
      slNo: 6,
      name: "Dragon Noodles",
      cuisine: "Chinese",
      email: "info@dragonnoodles.cn",
      address: "987 Bamboo Way, Los Angeles, CA",
      website: "https://dragonnoodles.cn",
    },
    {
      slNo: 7,
      name: "Le Baguette",
      cuisine: "French",
      email: "bonjour@lebaguette.fr",
      address: "159 Rue de Paris, Miami, FL",
      website: "https://lebaguette.fr",
    },
    {
      slNo: 8,
      name: "The Greek Table",
      cuisine: "Greek",
      email: "contact@greektable.gr",
      address: "753 Athena St, Denver, CO",
      website: "https://greektable.gr",
    },
    {
      slNo: 9,
      name: "Falafel House",
      cuisine: "Middle Eastern",
      email: "info@falafelhouse.me",
      address: "852 Desert Rd, Phoenix, AZ",
      website: "https://falafelhouse.me",
    },
    {
      slNo: 10,
      name: "K-Town Grill",
      cuisine: "Korean",
      email: "hello@ktowngrill.kr",
      address: "963 Seoul St, Atlanta, GA",
      website: "https://ktowngrill.kr",
    },
  ];

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <>
      <section className="bg-white rounded-lg h-full relative">
        <div className="flex justify-between items-center h-[74px] px-6 py-4 shadow">
          {/* Left side - Back icon and title */}
          <div className="flex items-center space-x-4">
            <button onClick={handleGoBack} className="hover:text-black">
              <FaArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Restaurant Management
            </h1>
          </div>

          {/* Right side - Search bar */}
          <div className="flex items-center gap-x-4">
            <div className="relative w-72">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-700">
                <FaSearch size={16} />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Add button */}
            <CreateRestaurantModal />
          </div>
        </div>

          <RestaurantTable restaurants={restaurants} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center p-4">
          <Pagination total={20} itemRender={itemRender} />
        </div>
      </section>
    </>
  );
};

export default RestaurantsPage;
