import { Table } from "antd";
import EditRestaurantModal from "../modal/restaurant/EditRestaurantModal";
import DeleteRestaurantModal from "../modal/restaurant/DeleteRestaurantModal";
import ViewRestaurantModal from "../modal/restaurant/ViewRestaurantModal";


const TopRestaurantTable = () => {

  const restaurants = [
    {
      slNo: 1,
      name: "Spice Garden",
      cuisine: "Indian",
      email: "contact@spicegarden.com",
      address: "123 Curry Lane, New York, NY",
      website: "https://spicegarden.com",
    },
    {
      slNo: 2,
      name: "Pasta Palace",
      cuisine: "Italian",
      email: "info@pastapalace.it",
      address: "456 Olive Street, Chicago, IL",
      website: "https://pastapalace.it",
    },
    {
      slNo: 3,
      name: "Sushi World",
      cuisine: "Japanese",
      email: "hello@sushiworld.jp",
      address: "789 Sakura Ave, San Francisco, CA",
      website: "https://sushiworld.jp",
    },
    {
      slNo: 4,
      name: "Taco Time",
      cuisine: "Mexican",
      email: "order@tacotime.mx",
      address: "321 Fiesta Blvd, Austin, TX",
      website: "https://tacotime.mx",
    }
  ];


  const columns = [
    {
      title: "SL NO.",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Restaurant Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Cuisine",
      dataIndex: "cuisine",
      key: "cuisine",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
        title: "Website",
        dataIndex: "website",
        key: "website",
    },
    {
      title: "View",
      key: "details",
      render: (_, record) => (
        <>
          <ViewRestaurantModal/>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-x-3">
            <EditRestaurantModal/>
            <DeleteRestaurantModal restaurantId={record?._id}/>
          </div>
        </>
      ),
    },
  ];


  return (
    <>
        <Table
          columns={columns}
          dataSource={restaurants}
          pagination={false}
          scroll={{ x: true, y: "60vh" }}
        />

    </>
  );
};

export default TopRestaurantTable;
