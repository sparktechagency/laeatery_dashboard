import { Table } from "antd";
import { IUser } from "../../types/user.type";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";

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
      title: "Details",
      key: "details",
      render: (_, record) => (
        <>
          <button className="bg-black hover:bg-primary p-1.5 text-white rounded-md">
            <IoEyeSharp size={20} />
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
            <button className="bg-edit hover:bg-blue-600 p-1.5 text-white rounded-md">
              <MdOutlineModeEdit size={18} />
            </button>
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
