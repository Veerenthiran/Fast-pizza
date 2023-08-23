import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import DeleteButton from "../../UI/DeleteButton";
import UpdateCartItem from "../cart/updateCartItem";


function MenuItem({ pizza }) {
const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

const GetQuantityforeach=useSelector(state=>state.cart.cart.find(item=>item.pizzaId===id))?.quantity?? 0 ;

const isinCart=GetQuantityforeach>0;

const dispatch=useDispatch();
  function AddtoCart() {
    const Newitem={
            pizzaId:id,
            name,
            quantity:1,
            unitPrice,
            totalPrice:unitPrice*1,
          }
         dispatch(addToCart(Newitem));


  }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={soldOut?" h-24 opacity-70 grayscale":"h-24"}/>
      <div className="flex flex-col flex-grow ">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-base text-stone-600 capitalize ">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="font-medium uppercase text-stone-500">Sold out</p>}
        
       {isinCart&&<div className="flex items-center gap-4">
        <UpdateCartItem id={id}/>
        <DeleteButton id={id}/></div>}

       {!soldOut && !isinCart && <Button onClick={AddtoCart}type="small" >Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
