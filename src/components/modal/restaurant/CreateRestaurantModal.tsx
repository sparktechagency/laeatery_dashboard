import { Modal } from "antd";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";

const CreateRestaurantModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-primary transition"
      >
        <FaPlus />
        Add New
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="space-y-4 pt-5">
          <h2 className="text-xl font-semibold mb-4 text-center">Add New</h2>

          {/* Cover Photo */}
          <div>
            <label className="block text-sm mb-1" htmlFor="file">Cover Photo
            <input type="file" style={{ display: "none" }} id="file" />
            <div className="border-2 border-dashed rounded-lg mt-1 p-4 flex justify-center items-center cursor-pointer border-gray-500">
              <TbCameraPlus className="mr-2" />
              <span className="text-gray-600 font-medium">Add</span>
            </div>
            </label>
          </div>
          <div>
            <label className="block text-sm mb-1">Restaurant Name</label>
            <input
              type="text"
              placeholder="Restaurant Name"
              className="w-full rounded-md px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Cuisine Type</label>
            <select className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2 bg-white">
              <option>Italian</option>
              <option>Mexican</option>
              <option>Japanese</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Dining Style</label>
            <select className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2 bg-white">
              <option>Rooftop</option>
              <option>Casual</option>
              <option>Fine Dining</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Website Address</label>
            <input
              type="url"
              placeholder="Website Address"
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Open Hours</label>
            <input
              type="text"
              placeholder="Open Hours"
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
              defaultValue="9:00 AM–10:00 PM (Mon–Fri)"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Price Range</label>
            <select className="w-full border rounded-md px-3 py-2 bg-white">
              <option>$$$</option>
              <option>$$</option>
              <option>$</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Overview</label>
            <textarea
              placeholder="Overview"
              rows={3}
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Signature Dishes</label>
            <textarea
              placeholder="Signature Dishes"
              rows={2}
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>
          {/* Gallery Photo */}
          <div>
            <label className="block text-sm mb-1" htmlFor="file">Gallery Photo
            <input type="file" style={{ display: "none" }} id="file" />
            <div className="border-2 border-dashed rounded-lg mt-1 p-4 flex justify-center items-center cursor-pointer border-gray-500">
              <TbCameraPlus className="mr-2" />
              <span className="text-gray-600 font-medium">Add</span>
            </div>
            </label>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => setModalOpen(false)}
              className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Add
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateRestaurantModal;
