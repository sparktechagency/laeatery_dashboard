import { useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks/hooks";
import UserLoading from "../loader/UserLoading";
import profile_placeholder from "../../assets/images/profile_placeholder.png";
import { baseUrl } from "../../redux/features/api/apiSlice";

const Header = () => {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery(undefined);
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <header className="w-full flex justify-end items-center h-[85px] bg-white pr-12">
        <div className="flex items-center gap-4">
          {isLoading ? (
            <UserLoading />
          ) : (
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={user?.profile_image === null ? profile_placeholder : baseUrl+user?.profile_image}
                alt="Profile"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = profile_placeholder;
                }}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">{user?.name}</span>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
