import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../redux/navSlice';

function NavMob() {
  const isOpen = useSelector(state => state.toggle.value);
  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <div className='absolute z-50 h-auto w-48 bg-blue-500 text-white text-xl flex flex-col gap-4 p-6 rounded-lg top-20 right-4 shadow-xl'>
          <Link 
            onClick={() => dispatch(toggle())} 
            to="/"
            className='hover:bg-blue-400 px-4 py-2 rounded-md transition-colors'
          >
            Hem
          </Link>
          <Link 
            onClick={() => dispatch(toggle())} 
            to="/services"
            className='hover:bg-blue-400 px-4 py-2 rounded-md transition-colors'
          >
            Tjänster
          </Link>
          <Link 
            onClick={() => dispatch(toggle())} 
            to="/about"
            className='hover:bg-blue-400 px-4 py-2 rounded-md transition-colors'
          >
            Om Oss
          </Link>
        </div>
      )}
    </>
  );
}

export default NavMob;