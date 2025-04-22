import { FaCamera } from "react-icons/fa";
import profile_img from "../../assets/images/profile_placeholder.png";

const EditProfilePic = () => {
    return (
        <>
             <div className="relative">
              <img
                src={profile_img}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full">
                <FaCamera className="cursor-pointer" size={14} />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-semibold">Edit Profile</h2>
        </>
    );
};

export default EditProfilePic;