
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCart } from './cartSlice';
import EmptyCart from './EmptyCart';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';


function Cart() {
  const fecther=useFetcher();

  useEffect(function(){
    if(!fecther.data && fecther.state==="idle") fecther.load("/menu");
  },[fecther]);
  
  const cart = useSelector((state)=>state.cart.cart);

  const userName= useSelector((state)=>state.user.username);
const dispatch=useDispatch();

if(!cart.length)return <EmptyCart/>;
  return (
    <div className='mt-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className='mt-8 text-xl font-semibold'>Your cart, {userName}</h2>
      <ul className='mt-4 divide-y divide-stone-200 border-b'>{cart.map((item) => <CartItem key={item.key} item={item} pizzaImg={fecther.data?.find((el)=>el.id===item.pizzaId)?.imageUrl ?? ""} isLoadingimage={fecther.state==="loading"} />)}</ul>

      <div className='mt-2'>
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button onClick={()=>dispatch(ClearCart())}type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
