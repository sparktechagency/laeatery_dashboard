import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HelpPage = () => {
  const [intro, setIntro] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    // You can post `intro` and `details` to an API here
    console.log("Saved content:", { intro, details });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full bg-gray-50 py-6 relative rounded-md">
      <div className="mx-auto p-8 rounded-lg">
        {/* Back button */}
        <div className="text-left mb-6 text-lg font-semibold flex items-center gap-2">
          <FaArrowLeft
            onClick={handleGoBack}
            size={20}
            className="cursor-pointer"
          />{" "}
          Help & Support
        </div>

        {/* Section 1: Intro */}
        <div>
          <h2 className="text-lg  text-fieldColor font-semibold mb-2">1. Intro</h2>
          <textarea
            placeholder="Write something..."
            rows={5}
            defaultValue={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            }
            className="w-full border  border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
          />
        </div>

        {/* Section 2: Details */}
        <div className="mt-5">
          <h2 className="text-lg  text-fieldColor font-semibold mb-2">2. Details</h2>
          <textarea
            placeholder="write something..."
            defaultValue={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority."
            }
            rows={5}
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-3 py-2"
          />
        </div>
      </div>
      {/* Save Button */}
      <div className="flex justify-center absolute bottom-0 py-12 left-1/2 -translate-x-1/2">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default HelpPage;
