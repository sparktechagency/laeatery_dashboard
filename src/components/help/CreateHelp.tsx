import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { ErrorToast } from "../../helper/ValidationHelper";
import { CgSpinnerTwo } from "react-icons/cg";
import { useCreateUpdateHelpMutation } from "../../redux/features/help/helpApi";

const CreateHelp = () => {
  const [description, setDescription] = useState("");
  const editor = useRef(null);
  const [createUpdateHelp, { isLoading }] =
    useCreateUpdateHelpMutation();

  const handleSubmit = async () => {
    if (!description) {
      ErrorToast("Description is required");
    } else {
      createUpdateHelp({
        message: "added",
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
          <h1 className="m-6 font-bold text-2xl text-center">
            Add Help & Support
          </h1>
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
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHelp;
