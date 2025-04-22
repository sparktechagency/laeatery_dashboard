import { Space, Table } from "antd";
import { IUser } from "../../types/user.type";
import profile_img from "../../assets/images/user1.png";
import icon from "../../assets/images/icon.png";
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
      render: (val)=> (
        <span className="pl-2">{val}</span>
      )
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
            src={record?.icon || icon}
            alt="profile"
            className="w-12 h-12 rounded-full"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = icon;
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
          size="small"
          columns={columns}
          dataSource={cuisines}
          pagination={false}
          scroll={{ x: true, y: "55vh" }}
        />

    </>
  );
};

export default CuisineTable;
