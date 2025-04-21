import { Modal } from "antd";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import restaurant_img from '../../../assets/images/restaurant_img.png';
import gallery_img from '../../../assets/images/gallery.png';


const ViewRestaurantModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-black hover:bg-primary p-1.5 text-white rounded-md"
      >
        <IoEyeSharp size={18} />
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="bg-white rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Details</h2>

          <div className="space-y-6">
            {/* Images */}
            <div>
              <h3 className="font-semibold mb-2">Images:</h3>
              <div className="flex justify-center">
                <img src={restaurant_img} alt="Main" className="w-48 rounded" />
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Restaurant Name:</span>
                <span className="text-[#585858]">The Drizzle Room</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Cuisine:</span>
                <span className="text-[#585858]">Custom</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Vibe:</span>
                <span className="text-[#585858]">Rooftop</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Address:</span>
                <span className="text-[#585858]">PA, Philadelphia, 19101</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Email:</span>
                <span className="text-[#585858]">alma.lawson@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Phone Number:</span>
                <span className="text-[#585858]">35346346366</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Website Address:</span>
                <span className="truncate text-[#585858]">www.innovixsaas.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Open Hours:</span>
                <span className="text-[#585858]">9:00 AM–10:00 PM (Mon–Fri)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-fieldColor">Price Range:</span>
                <span className="text-[#585858]">$$$</span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="font-semibold">Overview:</h3>
              <p className="text-sm text-gray-700 text-justify">
                Luna Mesa is a rooftop Latin-fusion restaurant located in the
                heart of Downtown Los Angeles. Known for its skyline views,
                curated cocktails, and vibrant ambiance.
              </p>
            </div>

            {/* Signature Dishes */}
            <div>
              <h3 className="font-semibold">Signature Dishes:</h3>
              <p className="text-sm text-gray-700 text-justify">
                Tender Spanish octopus, flame-charred for a smoky finish, laid
                over soft blue corn tortillas. Topped with mango-habanero salsa,
                pickled onions, micro cilantro, and a drizzle of cilantro aioli.
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="font-semibold mb-2">Gallery:</h3>
              <div className="grid grid-cols-5 gap-2">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={gallery_img}
                    alt={`Gallery ${index + 1}`}
                    className="rounded object-cover w-full h-16"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewRestaurantModal;
