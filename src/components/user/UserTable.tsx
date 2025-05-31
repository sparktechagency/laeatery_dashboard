import { Pagination, Table } from "antd";
import profile_placeholder from "../../assets/images/profile_placeholder.png";
import ChangeStatusModal from "../modal/auth/ChangeStatusModal";
import { TUser, TUserTableRow } from "../../types/user.type";
import React from "react";
import { IMeta } from "../../types/global.type";




type TProps = {
  users: TUser[];
  meta: IMeta,
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const UserTable = ({ users, meta, currentPage, setCurrentPage, pageSize, setPageSize }: TProps) => {

   const dataSource: TUserTableRow[] = users?.map((user, index)=> ({
        key: index,
        serial: Number(index+1) + ((currentPage-1)*pageSize),
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        phone_number: user?.phone_number,
        profile_image: user?.profile_image,
        is_block: user?.authId?.is_block
    }))



  const columns= [
    {
      title: "SL NO.",
      dataIndex: "serial",
      key: "serial",
      render: (val:number)=> (
        <span className="pl-2">{val}</span>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Image",
      dataIndex: "profile_image",
      key: "profile_image",
      render: (val?:string) => (
        <div className="flex items-center gap-2">
          <img
            src={val || profile_placeholder}
            alt="profile"
            className="w-[45px] h-[45px] rounded-lg"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = profile_placeholder;
            }}
          />
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "phone_number",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 150
    },
    {
      title: "Status",
      dataIndex: "is_block",
      key: "is_block",
      render: (val:boolean, record:TUserTableRow) => {
        const statusStyles = {
          blocked: "bg-red-100 text-red-700 border border-red-300",
          active: "bg-green-100 text-green-700 border border-green-300",
        };
        const bgColor = val ? statusStyles.blocked : statusStyles.active;
    
        return (
          <div className="flex items-center gap-2">
            <span
              className={`${bgColor} w-20 text-center px-3 py-0.5 text-sm font-medium rounded-full`}
            >
              {val ? "blocked" : "active"}
            </span>
            <ChangeStatusModal email={record.email} status={val}/>
          </div>
        );
      }
    },
  ];


    
  
  const handlePagination = (page:number, PageSize:number) => {
    setCurrentPage(page);
    setPageSize(PageSize)
  }


  return (
    <>
        <Table
          size="small"
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          scroll={{ x: true, y: "55vh" }}
          className="custom-table"
        />

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center items-center p-4">
          <Pagination onChange={handlePagination} current={currentPage} pageSize={pageSize} total={meta?.total} />
        </div>

    </>
  );
};

export default UserTable;
