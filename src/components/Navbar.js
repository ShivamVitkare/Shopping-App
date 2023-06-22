import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="">
      <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="ml-5">
            <img
              className="w-[120px] h-10"
              src="https://www.pngkey.com/png/detail/239-2398314_logo-store-png-e-store.png"
              alt=""
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-400 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// const dispatch = useDispatch()
// const cart = useSelector((state) => state.cartreducer.value)
// const curtitem = cart.find((item)=> item.id == product.id)
// const curquantily = curtitem ? curtitem.quantity : 0;

// addtocart:(state, action) =>{
// const cartitem = state.value.find((item) => item.id == action.payload)
// if(cartitem){
//   cartitem.quantity += 1;
//   return;
// }
// state.value.push({
//   quantity: 1,
//   id: action.payload
// })
// },
// removeformcart:(state, action) =>{
// const cartitem = state.value.find((item)=> item.id == action.payload)
// if(cartitem){
//   cartitem.quantity -= 1;
//   if(cartitem.quantity ==0){
//       state.value = state.value.filter(item => item.id !== action.payload)
//   }
// }

// },
