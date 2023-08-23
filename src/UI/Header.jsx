import { Link } from 'react-router-dom';
import Search from './Search';
import Username from "../features/user/userName";

function Header() {
  return (
    <header className="flex font-pizza items-center justify-between border-b-2 border-stone-300 uppercase bg-yellow-500 py-4 px-4 sm:px-8 ">
      <Link to="/" className='tracking-widest'>
        <h1>Fast Pizza React co. </h1>
      </Link>
      <Search />

      <Username/>
    </header>
  );
}

export default Header;
