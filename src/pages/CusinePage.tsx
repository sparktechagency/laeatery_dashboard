import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import { Pagination } from "antd";
import type { PaginationProps } from 'antd';
import { useNavigate } from "react-router-dom";
import CuisineTable from "../components/cuisine/CuisineTable";

const CusinePage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); 
  };

  // getCuisines
  const cuisines = [
    {
      "sl": 1,
      "title": "Italian",
      "icon": "https://example.com/images/cuisines/italian.png"
    },
    {
      "sl": 2,
      "title": "Mexican",
      "icon": "https://example.com/images/cuisines/mexican.png"
    },
    {
      "sl": 3,
      "title": "Indian",
      "icon": "https://example.com/images/cuisines/indian.png"
    },
    {
      "sl": 4,
      "title": "Chinese",
      "icon": "https://example.com/images/cuisines/chinese.png"
    },
    {
      "sl": 5,
      "title": "Japanese",
      "icon": "https://example.com/images/cuisines/japanese.png"
    },
    {
      "sl": 6,
      "title": "Thai",
      "icon": "https://example.com/images/cuisines/thai.png"
    },
    {
      "sl": 7,
      "title": "French",
      "icon": "https://example.com/images/cuisines/french.png"
    },
    {
      "sl": 8,
      "title": "Korean",
      "icon": "https://example.com/images/cuisines/korean.png"
    },
    {
      "sl": 9,
      "title": "Greek",
      "icon": "https://example.com/images/cuisines/greek.png"
    },
    {
      "sl": 10,
      "title": "Middle Eastern",
      "icon": "https://example.com/images/cuisines/middle-eastern.png"
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
      <section className="bg-white rounded-lg">
        <div className="flex justify-between items-center h-[74px] px-6 py-4 shadow">
          {/* Left side - Back icon and title */}
          <div className="flex items-center space-x-4">
            <button onClick={handleGoBack} className="hover:text-black">
              <FaArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Cuisine Types
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
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-primary transition">
              <FaPlus />
              Add New
            </button>
          </div>
        </div>

        <div>
          <CuisineTable cuisines={cuisines} />
          <div className="flex justify-center items-center p-4">
            <Pagination total={20} itemRender={itemRender} />
          </div>
        </div>
      </section>
    </>
  );
}

export default CusinePage