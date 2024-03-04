import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { myContaxt } from '../../ContaxApi/Contaxt';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user} = useContext(myContaxt)
    const singout = () =>{
        signOut(auth)
        .then(result=>{
            toast.success('user logout success!')
        })
        .catch(error=>{
            toast.error('something wrong try again')
 
        })
    }
    return (
        <div>
            <nav className='flex  justify-between px-12 mt-4 '>
                <div className='text-right   space-x-4   w-1/2'>
                <NavLink to={'/'} className={'hover:border-b border-green-400'}>Home</NavLink>
                <NavLink className={'hover:border-b border-green-400'}>About</NavLink>
                <NavLink className={'hover:border-b border-green-400'}> Career</NavLink>
                </div>
                <div className='flex items-center space-x-3 '>
                    {user?<img src={user.photoURL} alt="" className='w-[40px] rounded-full mr-4' />:<img src={'/user.png'} alt="" className='w-[40px] mr-4' />}
                    
                    
                    {user?<button className='bg-green-400 py-2 px-3 text-white rounded' onClick={singout}>logOut</button>:<NavLink to={'/login'} className='bg-green-400 py-2 px-3 text-white rounded'>Log In</NavLink>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;