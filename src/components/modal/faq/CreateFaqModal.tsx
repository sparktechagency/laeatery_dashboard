import { Modal } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { useCreateFaqMutation } from "../../../redux/features/faq/faqApi";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateFaqModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [createFaq, { isLoading }] = useCreateFaqMutation();
  const { handleSubmit, control } = useForm({
      resolver: zodResolver(updateProfileSchema)
    });

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        + Add FAQ
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="space-y-4 pt-5">
          <h2 className="text-xl font-semibold mb-4 text-center">Add New</h2>

          <div>
            <label className="block text-sm mb-1">Question</label>
            <textarea
              placeholder="write a question..."
              rows={2}
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
          </div>
          <div className="text-left mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Full Name
                    </label>
                    <Controller
                      control={control}
                      name="name"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <input
                            type="text"
                            {...field}
                            placeholder="you@example.com"
                            className={`w-full border focus:outline-none rounded-md px-4 py-2 pr-10 ${
                              error
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 focus:border-blue-500"
                            }`}
                          />
                          {error && (
                            <p className="text-red-600 text-sm mt-1">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>
          <div>
            <label className="block text-sm mb-1">Answer</label>
            <textarea
              placeholder="write answer..."
              rows={3}
              className="w-full border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
            />
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

export default CreateFaqModal;
