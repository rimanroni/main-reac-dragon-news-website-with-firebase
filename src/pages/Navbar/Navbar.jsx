import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex  justify-between px-12 mt-4 '>
                <div className='text-right   space-x-4   w-1/2'>
                <NavLink className={'hover:border-b border-green-400'}>Home</NavLink>
                <NavLink className={'hover:border-b border-green-400'}>About</NavLink>
                <NavLink className={'hover:border-b border-green-400'}> Career</NavLink>
                </div>
                <div className='flex items-center space-x-3 '>
                    <img src="/user.png" alt="" className='w-[40px] mr-4' />
                    <button className='bg-green-400 py-2 px-3 text-white rounded'>Log In</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;