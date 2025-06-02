import { Modal } from "antd";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IFaq } from "../../../types/faq.type";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { useUpdateFaqMutation } from "../../../redux/features/faq/faqApi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { faqSchemaSchema } from "../../../schema/faq.schema";
import { z } from "zod";
import Error from "../../validation/Error";
import { CgSpinnerTwo } from "react-icons/cg";
import { SetEditFaqError } from "../../../redux/features/faq/faqSlice";

type TProps = {
  faq: IFaq;
};
type FormValues = z.infer<typeof faqSchemaSchema>;

const EditFaqModal = ({ faq }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { EditFaqError } = useAppSelector((state) => state.faq);
  const [updateFaq, { isLoading, isSuccess }] = useUpdateFaqMutation();
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(faqSchemaSchema),
    defaultValues: {
      questions: faq.questions,
      answer: faq.answer,
    },
  });

  useEffect(() => {
    if (isSuccess) {
      reset({
        questions: faq.questions,
        answer: faq.answer,
      });
      dispatch(SetEditFaqError(""));
      setModalOpen(false);
    }
  }, [isSuccess, reset, faq, dispatch]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(SetEditFaqError(""));
    updateFaq({
      id: faq._id,
      data
    });
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FiEdit className="text-blue-600" size={20} />
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => {
          reset({
            questions: faq.questions,
            answer: faq.answer,
          });
          dispatch(SetEditFaqError(""));
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
      >
        <form className="space-y-4 pt-5" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl font-semibold mb-4 text-center">Update Faq</h2>
          {EditFaqError && <Error message={EditFaqError} />}

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

          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => {
                reset({
                  questions: faq.questions,
                  answer: faq.answer,
                });
                dispatch(SetEditFaqError(""));
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
                  Processing...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditFaqModal;
