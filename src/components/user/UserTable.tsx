import { Table } from "antd";
import { IUser } from "../../types/user.type";
import { MdBlockFlipped } from "react-icons/md";
import profile_img from "../../assets/images/user1.png";
import profile_placeholder from "../../assets/images/profile_placeholder.png";
import ChangeStatusModal from "../modal/auth/ChangeStatusModal";

type TProps = {
  users: IUser[];
};

const UserTable = ({ users }: TProps) => {
  const columns = [
    {
      title: "SL NO.",
      dataIndex: "SL No",
      key: "SL No",
      render: (val:number)=> (
        <span className="pl-2">{val}</span>
      )
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (val, record) => {
        const statusStyles = {
          blocked: "bg-red-100 text-red-700 border border-red-300",
          unblocked: "bg-green-100 text-green-700 border border-green-300",
        };
        const bgColor =
          val === "blocked" ? statusStyles.blocked : statusStyles.unblocked;
    
        return (
          <div className="flex items-center gap-2">
            <span
              className={`${bgColor} px-3 py-0.5 text-sm font-medium rounded-full`}
            >
              {val}
            </span>
            <ChangeStatusModal userId={record._id} status={val}/>
          </div>
        );
      }
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <>
    //       <button className="bg-secondary hover:bg-red-600 p-1.5 text-white rounded-md">
    //         <MdBlockFlipped size={18} />
    //       </button>
    //     </>
    //   ),
    // },
  ];


  return (
    <>
        <Table
          size="small"
          columns={columns}
          dataSource={users}
          pagination={false}
          scroll={{ x: true, y: "55vh" }}
          className="custom-table"
        />

    </>
  );
};

export default UserTable;
