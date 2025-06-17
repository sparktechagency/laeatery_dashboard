import user from "../../assets/images/user.png";
import { useGetTotalQuery } from "../../redux/features/dashboard/dashboardApi";
import TotalLoading from "../loader/TotalLoading";


const Summary = () => {
  const { data, isLoading } = useGetTotalQuery(undefined);
  const total = data?.data?.totalUsers;

  if(isLoading){
    return <TotalLoading/>
  }


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
      </div>
    </>
  )
}

export default Summary