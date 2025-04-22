import { Table } from "antd";
import { IUser } from "../../types/user.type";
import EditRestaurantModal from "../modal/restaurant/EditRestaurantModal";
import DeleteRestaurantModal from "../modal/restaurant/DeleteRestaurantModal";
import ViewRestaurantModal from "../modal/restaurant/ViewRestaurantModal";

type TProps = {
    restaurants: IUser[];
};

const RestaurantTable = ({ restaurants }: TProps) => {
  const columns = [
    {
      title: "SL",
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
          size="small"
          columns={columns}
          dataSource={restaurants}
          pagination={false}
          scroll={{ x: true, y: "55vh" }}
        />

    </>
  );
};

export default RestaurantTable;
