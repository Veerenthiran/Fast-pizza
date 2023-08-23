
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import store from "../../store";
import { ClearCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const Navigation = useNavigation();
  const Submitting = Navigation.state === "submitting";

  const formerrors = useActionData();
   const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state)=>state.cart.cart);
  const UserName=useSelector(state=>state.user.username);
  const {status:currentStatus,position,address,error:errorAddress}=useSelector(state=>state.user);

  const isLoadingAddress=currentStatus==="loading";
 const price=useSelector((state)=>state.cart.cart.reduce((sum,currentItem)=>sum+currentItem.totalPrice,0));
const PriorityPrice=withPriority ? price*0.2:0;
 const totalprice=PriorityPrice+price;

 const dispatch=useDispatch();
 if(!cart.length) return <EmptyCart/>;
  return (
    
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-8 ">Ready to order? Order Now!!!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">

        <div className="mt-4 mb-5 flex gap-2 flex-col sm:flex-row sm:items-center ">
          
          <label className="sm:basis-40 font-semibold">First Name</label>
          <input 
            className=" input grow"          
          type="text" name="customer" defaultValue={UserName} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 font-semibold">Phone number</label>
          <div className="grow">
            <input 
            className="input w-full"
            
            type="tel" name="phone" required />
          
          {formerrors?.phone && <p className="text-sm mt-1 font-semibold text-red-600 bg-red-100 p-2 rounded-md text-center  ">{formerrors.phone}</p>}
        </div>
        </div>

        <div className="mb-5 flex gap-2 relative flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 font-semibold">Address</label>
          <div className="grow">
            <input
            className="input w-full"
             type="text"
             disabled={isLoadingAddress}
             name="address" 
             defaultValue={address}
            required />
            {currentStatus==="error" && <p className="text-sm mt-1 font-semibold text-red-600 bg-red-100 p-2 rounded-md text-center  ">{errorAddress} Make sure to fill this field </p>}
          </div>
     {!address&&<span className="absolute bottom-3 md:bottom-0 md:mb-0 right-0 z-50 mb-3"> <Button disabled={isLoadingAddress} type="small"  onClick={(e)=>{
      e.preventDefault();
      dispatch(fetchAddress())}}
      >Get Position</Button>
     </span>}
        </div>

        <div className="mb-8 flex items-center gap-5">
          <input
          className=" mt-2 h-5 w-5 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none accent-yellow-400"
            type="checkbox"   
            name="priority"
            id="priority"
             value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="pt-2 font-semibold" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.latitude&&position.longitude?`${position.latitude},${position.longitude}`:""}/>
          <Button disabled={Submitting || isLoadingAddress} type="primary" >
            {Submitting ? "Placing Order..." : `Order now from ${formatCurrency(totalprice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  // console.log(formData);
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  

  const Errors = {};
  if (!isValidPhone(order.phone))
    Errors.phone = "Please enter a valid phone number";

  if (Object.keys(Errors).length > 0) return Errors;

  const newOrder = await createOrder(order);

  store.dispatch(ClearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
