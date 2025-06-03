import user from "../../assets/images/user.png";
import { useGetTotalQuery } from "../../redux/features/dashboard/dashboardApi";


const Summary = () => {
  const { data } = useGetTotalQuery(undefined);
  const total = data?.data?.totalUsers;
  return (
    <>
      <div className="gap-3">
        <div className="bg-white flex flex-col items-center gap-y-3 py-6 rounded-lg h-96">
            <h1 className="text-xl font-medium">Total Users</h1>
            <div>
                <img src={user} alt="user" />
            </div>
            <h1 className="text-2xl font-semibold">
              {total}
            </h1>
        </div>
        {/* <div className="bg-white font-medium flex flex-col items-center gap-y-3 py-6 rounded-lg">
            <h1 className="text-xl font-medium">Total Users</h1>
            <div className="bg-[#E7E7E7] p-3 rounded-full">
                <img src={restaurant} alt="restaurant" />
            </div>
            <h1 className="text-2xl font-semibold">
              852,650
            </h1>
        </div>
        <div className="bg-white font-medium flex flex-col items-center gap-y-3 py-6 rounded-lg">
            <h1 className="text-xl font-medium">Total Users</h1>
            <div className="bg-[#E7E7E7] p-3 rounded-full">
                <img src={task} alt="restaurant" />
            </div>
            <h1 className="text-2xl font-semibold">
              852,650
            </h1>
        </div> */}
      </div>
    </>
  )
}

export default Summary