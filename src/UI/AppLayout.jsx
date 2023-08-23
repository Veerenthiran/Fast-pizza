import Header from './Header';
import Loading from './Loading';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Search from './Search';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      {isLoading && <Loading />}

      <Header />
      <div className=' overflow-scroll'>
      <main className=' mx-auto max-w-3xl'>
        <Outlet />
      </main>
      </div>
      <footer>
        <CartOverview />
      </footer>
    </div>
  );
}

export default AppLayout;
