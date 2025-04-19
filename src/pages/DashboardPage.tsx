import BookingOverviewChart from "../components/summary/BookingOverviewChart";
import Summary from "../components/summary/Summary";
import UserGrowthChart from "../components/summary/UserGrowthChart";

const DashboardPage = () => {
  return (
    <>
      <div>
        <Summary/>
        <div className="grid grid-cols-2 mt-8 gap-4">
          <UserGrowthChart/>
          <BookingOverviewChart/>
        </div>
      </div>
    </>
  );
}

export default DashboardPage