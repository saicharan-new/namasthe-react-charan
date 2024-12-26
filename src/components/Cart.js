import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }
    
    return (
    <div className="px-[45px] py-[20px] ">
       <h1 className="text-center font-bold text-2xl flex justify-evenly mb-6">Cart
        <button className={`${cartItems.length <= 0 ? 'cursor-not-allowed text-gray-100': 'text-black'}border-none text-sm font-semibold `} onClick={() => handleClear(cartItems)}>clear cart</button>
       </h1>
       <div className="w-3/4 m-auto">
       {cartItems.length <= 0 ? <div className="text-center font-bold text-xl ">Please add Items to cart😑</div> : <ItemList items={cartItems} showAddButton={false}/>}
       </div>
    </div>
    );
};

export default Cart;
