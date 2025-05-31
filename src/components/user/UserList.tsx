
import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import UserGoBack from "./UserGoBack";
import { FaSearch } from "react-icons/fa";
import ListLoading from "../loader/ListLoading";
import { useGetUsersQuery } from "../../redux/features/dashboard/dashboardApi";


const UserList = () => {
  const [searchQuery, setSearchQuery ] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pageSize, setPageSize ] = useState(10);

  //debounced handle
  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let timeoutId;
    clearTimeout(timeoutId); //clear timeout after onChange
    timeoutId = setTimeout(() => {
      setSearchTerm(searchQuery);
    }, 600);
  }, [searchQuery]);

  const { data, isLoading } = useGetUsersQuery([
    { name: "searchTerm", value: searchTerm },
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize }
  ]);

  const users = data?.data?.result || [];
  const meta = data?.data?.meta;
    
   
  const handleSearch = (value:string) => {
    setSearchQuery(value);
  };



  return (
    <>
      <div className="flex justify-between items-center h-[74px] px-6 py-4 shadow">
          {/* Left side - Back icon and title */}
         <UserGoBack/>

          {/* Right side - Search bar */}
          <div className="flex items-center gap-12">
            <h1 className="text-lg">
              Total: <span className="font-bold"> {meta?.total} </span>
            </h1>
            <div className="relative w-72">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-700">
                <FaSearch size={16} />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>


      {
        isLoading ? (
          <ListLoading/>
        ): (
          <UserTable users={users} meta={meta} currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize} setPageSize={setPageSize}/>
        )
      }
    </>
  );
}

export default UserList