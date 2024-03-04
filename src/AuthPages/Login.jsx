import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-auto flex justify-center items-center  mt-4'>
                <div className='mt-4 space-y-2 rounded-md bg-blue-400 px-12 py-20'>
                  <h1 className='text-3xl font-bold mb-4'>Login your account</h1> 
                  <hr />
                  <form  className='mt-12 space-y-3'>
                    <p className='text-xl '>Email address</p>
                    <input className='outline-none ring-offset-0 px-3 py-2 w-full' type="email" name="email" placeholder='Enter your email address' />
                    <p className='text-xl '>Password</p>
                     <input className='outline-none w-full ring-offset-0 px-3 py-2' type="password" name="password" placeholder='Enter your password' /><br />
                     <button className='bg-black text-white w-full px-4 py-2 rounded-lg'>LogIn</button>
                  </form>
                  <p>Dont’t Have An Account ? <NavLink to={'/register'} className={'text-white hover:underline'}>Register</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;