import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { useCreateFaqMutation } from "../../../redux/features/faq/faqApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { faqSchemaSchema } from "../../../schema/faq.schema";
import { z } from "zod";
import Error from "../../validation/Error";
import { SetCreateFaqError } from "../../../redux/features/faq/faqSlice";
import { CgSpinnerTwo } from "react-icons/cg";

type FormValues = z.infer<typeof faqSchemaSchema>;

const CreateFaqModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { CreateFaqError } = useAppSelector((state) => state.faq);
  const [createFaq, { isLoading, isSuccess }] = useCreateFaqMutation();
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(faqSchemaSchema),
  });

  useEffect(() => {
    if (isSuccess) {
      reset({
        questions: "",
        answer: "",
      });
      dispatch(SetCreateFaqError(""));
      setModalOpen(false);
    }
  }, [isSuccess, reset, dispatch]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(SetCreateFaqError(""));
    createFaq(data);
  };

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
        onCancel={() => {
          reset({
            questions: "",
            answer: "",
          });
          dispatch(SetCreateFaqError(""));
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
      >
        <form className="space-y-4 pt-5" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl font-semibold mb-4 text-center">Add New</h2>
          {CreateFaqError && <Error message={CreateFaqError} />}

          <div className="text-left mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Question
            </label>
            <Controller
              control={control}
              name="questions"
              render={({ field, fieldState: { error } }) => (
                <>
                  <textarea
                    {...field}
                    placeholder="write a question..."
                    rows={2}
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
          <div className="text-left mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Answer
            </label>
            <Controller
              control={control}
              name="answer"
              render={({ field, fieldState: { error } }) => (
                <>
                  <textarea
                    {...field}
                    placeholder="write a question..."
                    rows={3}
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

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => {
                reset({
                  questions: "",
                  answer: "",
                });
                dispatch(SetCreateFaqError(""));
                setModalOpen(false);
              }}
              className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:bg-gray-800 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <CgSpinnerTwo className="animate-spin" fontSize={16} />
                  Adding...
                </>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateFaqModal;
