import { FaTrashAlt } from "react-icons/fa";
import { TNotification } from "../../types/notification.type";

type TProps = {
  item: TNotification,
  index: number
}

const NotificationListItem = ({item, index}: TProps) => {
  return (
    <>
      <div
            className={`flex justify-between items-start p-3 rounded-md ${
              index % 2 === 1 ? "bg-[#E7E7E7]" : ""
            }`}
          >
            <div>
              <p className="font-semibold text-sm text-gray-800">
                {item.title}
              </p>
              <p className="text-sm text-gray-600">{item.message}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {item.time}
              </span>
              <button className="text-red-500 hover:text-red-600 transition">
                <FaTrashAlt size={14} />
              </button>
            </div>
          </div>
    </>
  )
}

export default NotificationListItem