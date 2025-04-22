import { FaCamera } from "react-icons/fa";
import profile_placeholder_img from "../../assets/images/profile_placeholder.png";
import { useRef, useState } from "react";

type TProps = {
  setFile: React.Dispatch<React.SetStateAction<null | File>>;
};

const EditProfilePic = ({ setFile }: TProps) => {
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
        <div
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer"
        >
          <FaCamera size={14} />
        </div>
      </div>
      <h2 className="mt-4 text-xl font-semibold">Edit Profile</h2>
    </>
  );
};

export default EditProfilePic;
