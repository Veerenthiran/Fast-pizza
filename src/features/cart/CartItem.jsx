
import { useSelector } from "react-redux";
import DeleteButton from "../../UI/DeleteButton";
import { formatCurrency } from "../../utils/helpers";
import UpdateCartItem from "./updateCartItem";
import Loading from "../../UI/Loading";

function CartItem({isLoadingimage, pizzaImg,item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    
    
      
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <span className="flex gap-4 items-center ">
      {isLoadingimage?"...":<img className="h-10 w-10 rounded" src={pizzaImg}></img>}
      <p className="text-xl mt-4 sm:mb-0 pb-4">
     {quantity}&times; {name}
      </p>
      </span>
      <div className="sm:gap-6 flex items-center justify-between">
        <p className=" font-semibold mt-4">{formatCurrency(totalPrice)}</p>
        <UpdateCartItem  id={pizzaId}  />
        <DeleteButton id={pizzaId}/>
      </div>
    </li>
    
  );
}


export default CartItem;
