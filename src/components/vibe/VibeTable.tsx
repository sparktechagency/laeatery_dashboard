import { Table } from "antd";
import { IUser } from "../../types/user.type";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import profile_img from "../../assets/images/user1.png";
import profile_placeholder from "../../assets/images/profile_placeholder.png";

type TProps = {
    restaurants: IUser[];
};

const VibeTable = ({ vibes }: TProps) => {
  const columns = [
    {
      title: "SL NO.",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Vibe Title",
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
            className="w-[40px] h-[40px] rounded-lg"
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
          dataSource={vibes}
          pagination={false}
          scroll={{ x: true, y: "60vh" }}
        />

    </>
  );
};

export default VibeTable;
