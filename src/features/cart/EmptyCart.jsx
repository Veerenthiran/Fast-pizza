import { Link } from 'react-router-dom';
import LinkButton from '../../UI/LinkButton';

function EmptyCart() {
  return (
    <div className='py-6 px-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
    

      <p className='mt-8 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
