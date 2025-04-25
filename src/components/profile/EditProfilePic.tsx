import { FaCamera } from "react-icons/fa";
import profile_placeholder_img from "../../assets/images/profile_placeholder.png";
import { useRef, useState } from "react";

type TProps = {
  setFile: React.Dispatch<React.SetStateAction<null | File>>;
  isProfile: boolean;
};

const EditProfilePic = ({ setFile, isProfile }: TProps) => {
  const [imageSrc, setImageSrc] = useState(profile_placeholder_img); // Default image
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  return (
    <>
      {/* input file */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      {/* input file ended*/}

      <div className="relative">
        <img
          src={imageSrc}
          alt="Profile"
          onError={() => setImageSrc(profile_placeholder_img)}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        {isProfile && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-1 right-1 bg-black/60 text-white p-2 rounded-full cursor-pointer hover:bg-black/80 transition duration-200 shadow-md"
          >
            <FaCamera size={16} />
          </div>
        )}
      </div>
      <h2 className="mt-4 text-xl font-semibold">Edit Profile</h2>
    </>
  );
};

export default EditProfilePic;
