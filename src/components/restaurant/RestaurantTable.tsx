import { Table } from "antd";
import { IUser } from "../../types/user.type";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import EditRestaurantModal from "../modal/restaurant/EditRestaurantModal";

type TProps = {
    restaurants: IUser[];
};

const RestaurantTable = ({ restaurants }: TProps) => {
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
          <button className="bg-black hover:bg-primary p-1.5 text-white rounded-md">
            <IoEyeSharp size={18} />
          </button>
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
            <button className="bg-secondary hover:bg-red-600 p-1.5 text-white rounded-md">
              <RiDeleteBin6Line size={18} />
            </button>
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

export default RestaurantTable;
