import { Pagination, PaginationProps } from "antd";
import NotificationListItem from "./NotificationListItem";
import { TNotification } from "../../types/notification.type";



const notifications: TNotification[] = [
    {
      title: "New Order Received",
      message:
        "A new custom jewelry order (#123456) has been placed. Review the details now.",
      time: "Just Now",
    },
    {
      title: "Payment Confirmed",
      message:
        "Payment for order #123456 has been successfully received. Proceed with processing.",
      time: "5 min ago",
    },
    {
      title: "Order In Progress",
      message:
        "Custom jewelry order #123456 is now being crafted. Keep track of progress.",
      time: "30 min ago",
    },
    {
      title: "Repair Request Submitted",
      message:
        "A new repair request (#789012) has been received. Review the issue.",
      time: "6 hours ago",
    },
    {
      title: "Order Completed",
      message:
        "The order #123456 has been successfully delivered. Mark as completed.",
      time: "8 hours ago",
    },
    {
      title: "New Order Received",
      message:
        "A new custom jewelry order (#123456) has been placed. Review the details now.",
      time: "Just Now",
    },
    {
      title: "Payment Confirmed",
      message:
        "Payment for order #123456 has been successfully received. Proceed with processing.",
      time: "5 min ago",
    },
    {
      title: "Order In Progress",
      message:
        "Custom jewelry order #123456 is now being crafted. Keep track of progress.",
      time: "30 min ago",
    },
    {
      title: "Repair Request Submitted",
      message:
        "A new repair request (#789012) has been received. Review the issue.",
      time: "6 hours ago",
    },
    {
      title: "Order Completed",
      message:
        "The order #123456 has been successfully delivered. Mark as completed.",
      time: "8 hours ago",
    },
  ];
  
  
   const itemRender: PaginationProps["itemRender"] = (
      _,
      type,
      originalElement
    ) => {
      if (type === "prev") {
        return <a>Previous</a>;
      }
      if (type === "next") {
        return <a>Next</a>;
      }
      return originalElement;
    };

const NotificationList = () => {
  return (
    <>
       {/* Notification List */}
       <div className="space-y-3 h-[75%] overflow-y-scroll pr-4">
        {notifications.map((item, index) => (
          <NotificationListItem item={item} key={index} index={index}/>
        ))}
      </div>

      <div className="flex justify-center items-center p-4">
        <Pagination total={30} itemRender={itemRender} />
      </div>
    </>
  )
}

export default NotificationList