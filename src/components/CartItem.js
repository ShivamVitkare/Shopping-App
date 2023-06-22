import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };
  return (
    <div className="max-w-6xl p-2 mx-auto space-y-10  flex  items-center justify-between">
      <div className="flex flex-row gap-7 items-center  mb-2">
        <div className="h-[180px]">
          <img className="h-full" src={item.image} alt="" />
        </div>
        <div className="gap-y-5">
          <h1 className="text-gray-700 font-bold text-lg  mt-1 w-[240px]">
            {item.title}
          </h1>
          <h1 className="w-[350px]">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>

          <div className="flex  gap-[150px] items-center h-20 max-w-6xl mx-auto">
            <p className="text-green-600 font-bold">${item.price}</p>
            <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-red-700 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
