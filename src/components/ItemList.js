import { useDispatch } from "react-redux";
import { Item_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items, showAddButton}) => {
    // console.log(items)
    // const tinyimg = (...item.card.info.imageId)


    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    }

    return(
        <div>
            <div className="flex flex-col gap-6">
                {items.map(item => <div className="p-5 flex justify-between border bg-white rounded-lg shadow-xl" key={item.card.info.id}>
                    <div className="flex flex-col text-left">
                        <div className="text-base font-semibold text-slate-950 mb-1">{item.card.info.name}</div>
                        <div className="text-sm font-medium mb-2 text-gray-900">₹{item.card.info.defaultPrice/100 || item.card.info.finalPrice/100 || item.card.info.price/100}</div>
                        <div className="text-xs font-normal text-gray-800 max-w-80">{item.card.info.description}</div>
                    </div>
                    <div className="relative">
                    <img className="w-40 h-36 rounded-lg" src={Item_URL + item.card.info.imageId} />
                    {showAddButton && (
                    <button className="px-2 py-2 bg-white flex items-center justify-center text-green-400 border
                     border-green-400 rounded-lg max-h-7 absolute bottom-[-12px] left-[52px] shadow-green-200" onClick={() => handleAddItem(item)}>
                        Add +</button>)}
                    </div>
                    
                    </div>)}
                    
            </div>        
        </div>
    )
}
export default ItemList;
