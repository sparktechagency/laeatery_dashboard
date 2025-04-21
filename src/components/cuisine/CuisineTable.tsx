import { Table } from "antd";
import { IUser } from "../../types/user.type";
import profile_img from "../../assets/images/user1.png";
import profile_placeholder from "../../assets/images/profile_placeholder.png";
import EditCuisineModal from "../modal/cuisine/EditCuisineModal";
import DeleteCuisineModal from "../modal/cuisine/DeleteCuisineModal";

type TProps = {
    restaurants: IUser[];
};

const CuisineTable = ({ cuisines }: TProps) => {
  const columns = [
    {
      title: "SL NO.",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Cuisine",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (val, record) => (
          <img
            src={record?.icon || profile_img}
            alt="profile"
            className="w-12 h-12 rounded-lg"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = profile_placeholder;
            }}
          />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex gap-x-3">
            <EditCuisineModal/>
            <DeleteCuisineModal cuisineId={record?._id}/>
          </div>
        </>
      ),
    },
  ];


  return (
    <>
        <Table
          columns={columns}
          dataSource={cuisines}
          pagination={false}
          scroll={{ x: true, y: "60vh" }}
        />

    </>
  );
};

export default CuisineTable;
