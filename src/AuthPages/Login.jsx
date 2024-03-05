import React, { useContext } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { myContaxt } from '../ContaxApi/Contaxt';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const {userLogIn} = useContext(myContaxt)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email  = form.get('email');
        const password = form.get('password');
        userLogIn(email, password)
        .then(result =>{
            toast.success('user log in success !')
            navigate(location?.state ? location.state : '/')

        })
        .catch(error=>{
            toast.error('something wron please try again!')
        })
    }
    return (
        <div>
            <Toaster/>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Navbar/>
            <div className='mx-auto flex justify-center items-center  mt-4'>
                <div className='mt-4 space-y-2 rounded-md bg-blue-400 px-12 py-20'>
                  <h1 className='text-3xl font-bold mb-4'>Login your account</h1> 
                  <hr />
                  <form  onSubmit={handleLogin} className='mt-12 space-y-3'>
                    <p className='text-xl '>Email address</p>
                    <input required className='outline-none ring-offset-0 px-3 py-2 w-full' type="email" name="email" placeholder='Enter your email address' />
                    <p className='text-xl '>Password</p>
                     <input required className='outline-none w-full ring-offset-0 px-3 py-2' type="password" name="password" placeholder='Enter your password' /><br />
                     <button className='bg-black text-white w-full px-4 py-2 rounded-lg'>LogIn</button>
                  </form>
                  <p>Dont’t Have An Account ? <NavLink to={'/register'} className={'text-white hover:underline'}>Register</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;