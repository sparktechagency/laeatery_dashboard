import { Modal } from "antd";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbCameraPlus } from "react-icons/tb";

const EditVibeModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-edit hover:bg-blue-600 p-1.5 text-white rounded-md"
      >
        <MdOutlineModeEdit size={18} />
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="space-y-4 pt-5">
          <h2 className="text-xl font-semibold mb-4 text-center">Update Vibe</h2>

          <div>
            <label className="block text-sm mb-1">Vibe Title</label>
            <input
              type="text"
              placeholder="title"
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>

          {/* Gallery Photo */}
          <div>
            <label className="block text-sm mb-1">Add Icon</label>
            <div className="border-2 border-dashed rounded-lg p-4 flex justify-center items-center cursor-pointer border-gray-500">
              <TbCameraPlus className="mr-2" />
              <span className="text-gray-600 font-medium">Add</span>
            </div>
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
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditVibeModal;
