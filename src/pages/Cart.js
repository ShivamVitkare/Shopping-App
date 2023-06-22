import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="max-w-6xl p-2 mx-auto space-y-10  ">
      {cart.length > 0 ? (
        <div className="max-w-6xl p-2 mx-auto space-y-10 flex flex-col justify-between grid sm:grid-cols-1 lg:grid-cols-2">
          <div className=" border-black mb-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col gap-[200px]">
            <div>
              <div className="font-bold text-2xl">Your Cart</div>
              <div className="font-bold text-4xl text-green-700 uppercase">Summary</div>
              <p>
                <span className="font-bold text-2xl">
                  Total Items : {cart.length}
                </span>
              </p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {" "}
                <span className="font-bold text-xl text-gray-500">Total Amount</span> :
                ${totalAmout}
              </p>
              <button className="font-semibold text-xl text-white bg-green-700 p-2 rounded-lg w-[250px]">CheckOut</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[250px]">
          <h1 className="font-bold text-2xl">Your Cart is Empty</h1>
          <br />
          <Link to={"/"}>
            <button className="font-semibold text-xl text-white bg-green-700 p-2 rounded-lg w-[150px]">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
