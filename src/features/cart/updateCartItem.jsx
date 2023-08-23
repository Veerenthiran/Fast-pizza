import { useDispatch, useSelector } from "react-redux"
import Button from "../../UI/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateCartItem({id}) {
  const currentQuantity = useSelector((state)=>state.cart.cart.find((item)=>item.pizzaId===id)?.quantity) ?? 0;

    const dispatch = useDispatch()
    return (
        <div className="flex  gap-3 mg:gap-3">

    <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(id))}>-</Button>
    <span className="pt-5 font-semibold">{currentQuantity}</span>
    <Button type="round" onClick={()=>dispatch(increaseItemQuantity(id))}>+</Button>

    </div>
    )
}

export default UpdateCartItem
