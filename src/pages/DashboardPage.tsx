import Summary from "../components/summary/Summary";
import UserGrowthChart from "../components/summary/UserGrowthChart";

const DashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Summary/>
        {/* <div className="grid grid-cols-1 mt-4 gap-4"> */}
          <UserGrowthChart/>
        {/* </div> */}
      </div>
    </>
  );
}

export default DashboardPage