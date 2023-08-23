import { formatCurrency } from "../../utils/helpers";

function OrderItem({pizzaImg, item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(ingredients);
  return (
    <li className="py-3 ">
      <div className="flex items-center justify-between">
        
        <p className="flex gap-3">
        {isLoadingIngredients?".....":<img className=" rounded h-10 w-10" src={pizzaImg}></img>}
         <span>
          <span>{quantity}&times;</span> {name}
          <p className="text-sm font-medium text-stone-500 capitalize italic">{isLoadingIngredients?"Loading...":ingredients}</p>
          </span>
        </p>
        
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
