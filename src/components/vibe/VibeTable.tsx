import { Table } from "antd";
import { IUser } from "../../types/user.type";
import profile_img from "../../assets/images/vibe.png";
import EditVibeModal from "../modal/vibe/EditVibeModal";
import DeleteVibeModal from "../modal/vibe/DeleteVibeModal";

type TProps = {
    restaurants: IUser[];
};

const VibeTable = ({ vibes }: TProps) => {
  const columns = [
    {
      title: "SL NO.",
      dataIndex: "sl",
      key: "sl",
      render: (val:number)=> (
        <span className="pl-2">{val}</span>
      )
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
            className="w-[40px] h-[40px] rounded-full"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = profile_img;
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
            <EditVibeModal/>
            <DeleteVibeModal vibeId={record?._id}/>
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
