// Test ID: IIDSAT
import OrderItem from "./OrderItem";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./updateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher=useFetcher();

  useEffect(function(){
    if(!fetcher.data && fetcher.state==="idle") fetcher.load("/menu")
  },[fetcher]);


  
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  
  } = order;
  
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  

  

  return (
    <div className="py-6 px-4 space-y-10">
      <div className="flex items-center gap-2 justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 rounded-full py-1 px-3 text-sm text-red-50 tracking-widest uppercase font-semibold ">Priority</span>}
          <span className="bg-green-500 rounded-full py-1 px-3 text-green-50 font-semibold tracking-widest text-sm uppercase">{status} order</span>
        </div>
      </div>

      <div className="flex bg-stone-200 px-6 py-5 items-center justify-between flex-wrap gap-2">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        
        <p className="text-sm text-stone-500 font-semibold">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
<ul className="divide-y divide-stone-200 font-semibold border-t border-b">
      {cart.map((item)=><OrderItem item={item} isLoadingIngredients={fetcher.state==="loading"} key={item.id} ingredients={fetcher.data?.find((el)=>el.id===item.pizzaId)?.ingredients ?? ""} pizzaImg={fetcher.data?.find((img)=>img.id===item.pizzaId)?.imageUrl??""}/>)}
</ul>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-semibold  text-stone-600 ">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm text-stone-600 font-semibold">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-base text-stone-600 font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder order={order}/>}
    </div>


    
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
