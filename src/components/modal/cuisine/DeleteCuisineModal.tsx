import { Modal } from "antd";
import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";


type TProps = {
  restaurantId : string
}


const DeleteCuisineModal = ({ cuisineId }: TProps) => {
   const [ modalOpen, setModalOpen ] = useState(false);
   //const [ deleteRestaurant, { isLoading, isSuccess, isError }] = useDeleteRestaurantMutation();
   const isLoading=false;

    // useEffect(()=> {
    //     if(isSuccess || isError){
    //       setModalOpen(false)
    //     }
    // },[isSuccess, isError])
   
    const handleDelete = () => {
        //deleteRestaurant(restaurantId);
    }

  return (
    <>
      <button onClick={()=>setModalOpen(true)} className="bg-secondary hover:bg-red-600 p-1.5 text-white rounded-md">
        <RiDeleteBin6Line size={18} />
      </button>
      <Modal
        title="Are you sure, you want to delete?"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="flex justify-end px-4 gap-x-3">
          <button
            onClick={() => setModalOpen(false)}
            className="bg-black text-white px-4 py-1 rounded-md"
          >
            No
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
              </>
            ) : (
              "Yes"
            )}
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteCuisineModal;