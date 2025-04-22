import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import { Pagination } from "antd";
import type { PaginationProps } from 'antd';
import { useNavigate } from "react-router-dom";
import VibeTable from "../components/vibe/VibeTable";
import CreateVibeModal from "../components/modal/vibe/CreateVibeModal";

const RestaurantsPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); 
  };

  // getVibes
  const vibes = [
    {
      "sl": 1,
      "title": "Chill",
      "icon": "https://example.com/icons/chill.png"
    },
    {
      "sl": 2,
      "title": "Romantic",
      "icon": "https://example.com/icons/romantic.png"
    },
    {
      "sl": 3,
      "title": "Energetic",
      "icon": "https://example.com/icons/energetic.png"
    },
    {
      "sl": 4,
      "title": "Cozy",
      "icon": "https://example.com/icons/cozy.png"
    },
    {
      "sl": 5,
      "title": "Luxury",
      "icon": "https://example.com/icons/luxury.png"
    },
    {
      "sl": 6,
      "title": "Tropical",
      "icon": "https://example.com/icons/tropical.png"
    },
    {
      "sl": 7,
      "title": "Modern",
      "icon": "https://example.com/icons/modern.png"
    },
    {
      "sl": 8,
      "title": "Traditional",
      "icon": "https://example.com/icons/traditional.png"
    },
    {
      "sl": 9,
      "title": "Family-Friendly",
      "icon": "https://example.com/icons/family.png"
    },
    {
      "sl": 10,
      "title": "Party",
      "icon": "https://example.com/icons/party.png"
    }
  ]
  
  

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
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
              Vibe Management
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
            <CreateVibeModal/>
          </div>
        </div>

        <div>
          <VibeTable vibes={vibes} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center p-4">
          <Pagination total={20} itemRender={itemRender} />
        </div>
        </div>
      </section>
    </>
  );
}

export default RestaurantsPage