import { Table } from "antd";
import { IUser } from "../../types/user.type";
import { MdBlockFlipped } from "react-icons/md";
import profile_img from "../../assets/images/user1.png";
import profile_placeholder from "../../assets/images/profile_placeholder.png";

type TProps = {
  users: IUser[];
};

const UserTable = ({ users }: TProps) => {
  const columns = [
    {
      title: "SL NO.",
      dataIndex: "SL No",
      key: "SL No",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (val, record) => (
        <div className="flex items-center gap-2">
          <img
            src={record?.image || profile_img}
            alt="profile"
            className="w-[45px] h-[45px] rounded-lg"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = profile_placeholder;
            }}
          />
          <h1>{val}</h1>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <button className="bg-secondary hover:bg-red-600 p-1.5 text-white rounded-md">
            <MdBlockFlipped size={18} />
          </button>
        </>
      ),
    },
  ];


  return (
    <>
        <Table
          columns={columns}
          dataSource={users}
          pagination={false}
          scroll={{ x: true, y: "60vh" }}
        />

    </>
  );
};

export default UserTable;
