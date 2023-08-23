import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const TotalQuatity=useSelector(state=>state.cart.cart.reduce((sum,currenttItem)=>sum+currenttItem.quantity,0));
const TotalPrice=useSelector(state=>state.cart.cart.reduce((sum,currentItem)=>sum+currentItem.totalPrice,0))
  
if(!TotalQuatity)return null;


return (
    <div className=" flex items-center justify-between md:text-base sm:px-8 px-4 py-4 text-xl uppercase bg-stone-700 text-stone-200">
      <p className='space-x-4 sm:space-x-6'>
        <span>{TotalQuatity} Pizzas</span>
        <span>{formatCurrency(TotalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
