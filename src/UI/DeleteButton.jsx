import { useDispatch } from "react-redux";
import Button from "./Button"
import { deleteToCart } from "../features/cart/cartSlice";

function DeleteButton({id}) {

    const dispatch=useDispatch();
    return (
        <Button onClick={()=>dispatch(deleteToCart(id))}  type="small">Delete</Button>
    )
}

export default DeleteButton
