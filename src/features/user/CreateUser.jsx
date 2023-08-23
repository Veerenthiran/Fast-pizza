import { useState } from 'react';
import Button from '../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { name } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  

  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if(!username) return;
    dispatch(name(username));
    navigate("/menu")

  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='text-sm text-stone-500 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
      className='mt-2 w-72 h-8'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
