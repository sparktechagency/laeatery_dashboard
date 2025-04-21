import { FaUpload } from "react-icons/fa";

const AddModal = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New</h2>

      {/* Cover Photo */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Cover Photo</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex justify-center items-center cursor-pointer hover:border-gray-500">
          <FaUpload className="mr-2 text-gray-500" />
          <span className="text-gray-600 font-medium">Add</span>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Restaurant Name"
          className="w-full border rounded-md px-3 py-2"
        />

        <select className="w-full border rounded-md px-3 py-2 bg-white">
          <option>Italian</option>
          <option>Mexican</option>
          <option>Japanese</option>
        </select>

        <select className="w-full border rounded-md px-3 py-2 bg-white">
          <option>Rooftop</option>
          <option>Casual</option>
          <option>Fine Dining</option>
        </select>

        <input
          type="text"
          placeholder="Address"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="url"
          placeholder="Website Address"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          placeholder="Open Hours"
          className="w-full border rounded-md px-3 py-2"
          defaultValue="9:00 AM–10:00 PM (Mon–Fri)"
        />

        <select className="w-full border rounded-md px-3 py-2 bg-white">
          <option>$$$</option>
          <option>$$</option>
          <option>$</option>
        </select>

        <textarea
          placeholder="Overview"
          rows={3}
          className="w-full border rounded-md px-3 py-2"
        />

        <textarea
          placeholder="Signature Dishes"
          rows={2}
          className="w-full border rounded-md px-3 py-2"
        />

        {/* Gallery Photo */}
        <div>
          <label className="block text-sm mb-1">Gallery Photo</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex justify-center items-center cursor-pointer hover:border-gray-500">
            <FaUpload className="mr-2 text-gray-500" />
            <span className="text-gray-600 font-medium">Add</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
