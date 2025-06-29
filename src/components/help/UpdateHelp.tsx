import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { ErrorToast } from "../../helper/ValidationHelper";
import { CgSpinnerTwo } from "react-icons/cg";
import { useCreateUpdateHelpMutation } from "../../redux/features/help/helpApi";

type TProps = {
  description: string;
};

const UpdateHelp = ({ description: initialDescription }: TProps) => {
  const [description, setDescription] = useState(initialDescription);
  const editor = useRef(null);
  const [createUpdateHelp, { isLoading }] =
    useCreateUpdateHelpMutation();

  const handleSubmit = async () => {
    if (!description) {
      ErrorToast("description is required");
    } else {
      createUpdateHelp({
        message: "updated",
        data: {
          description,
        },
      });
    }
  };

  return (
    <>
      <div className="h-full p-4">
        <div className="bg-[#F6F6F6] h-[90%] p-4">
          <h1 className="m-6 font-bold text-2xl text-center">Update Help & Support</h1>
          <JoditEditor
            ref={editor}
            value={description}
            onChange={(newContent) => setDescription(newContent)}
          />

          <div className="flex py-5  justify-center">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-56 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:bg-gray-800 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <CgSpinnerTwo className="animate-spin" fontSize={16} />
                  Processing...
                </>
              ) : (
                "Save Change"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHelp;
