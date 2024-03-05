import React, { useContext } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { myContaxt } from '../ContaxApi/Contaxt';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const {createUser} = useContext(myContaxt)
    const location = useLocation() 
   
    const navigate = useNavigate()
    const handleForm = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('photoURL');
        createUser(email, password)
        .then(result=>{
            toast.success('Successfuly user Create !')
            navigate('/')
             
        })
        .catch(error=>{
            toast.error('something wrong please try again!')
        })
         
         
    }
    return (
        <div>
            <Toaster/>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Navbar/>
            <div className='mx-auto flex justify-center items-center  my-4'>
                <div className='mt-4 space-y-2 rounded-md bg-blue-400 px-12 py-10'>
                  <h1 className='text-3xl font-bold mb-4'>Login your account</h1> 
                  <hr />
                  <form  onSubmit={handleForm} className='mt-12 space-y-3'>
                    <p className='text-xl ' >Name</p>
                    <input required className='outline-none ring-offset-0 px-3 py-2 w-full' type="text" name="name" placeholder='Enter Name' />

                    <p className='text-xl '>photo URL</p>
                    <input required className='outline-none ring-offset-0 px-3 py-2 w-full' type="text" name="photoURL" placeholder='photoURL' />

                    <p className='text-xl '>Email address</p>
                    <input required className='outline-none ring-offset-0 px-3 py-2 w-full' type="email" name="email" placeholder='Enter your email address' />

                    <p className='text-xl '>Password</p>
                     <input required className='outline-none w-full ring-offset-0 px-3 py-2' type="password" name="password" placeholder='Enter your password' /><br />
                     <p>
                        <input required type="checkbox" name="check" id="click" />
                        <label htmlFor="click">Accept Term & <b>Conditions</b></label>
                     </p>
                     <button className='bg-black text-white w-full px-4 py-2 rounded-lg'>Register</button>
                  </form>
                  <p>  Have An Account ? <NavLink to={'/login'} className={'text-white hover:underline'}>LogIn</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Register;