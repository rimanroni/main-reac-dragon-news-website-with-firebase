import React, { useContext } from 'react';
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { myContaxt } from '../ContaxApi/Contaxt';
import toast, { Toaster } from 'react-hot-toast';
const LogInWith = () => {
    const { forGoogle, forGithub, user } = useContext(myContaxt)
    const googleHandle = () => {
        forGoogle()
            .then(result => {
                toast.success('Successfully LogIn!')
            })
            .catch(error => {
                toast.error('something wrong try again!')
            })
    }
    const githubHandle = () => {
        forGithub()
            .then(result => {
                toast.success('Successfuly User LogIn!')
            })
            .catch(error => {
                toast.error('Something wrong try again!')
            })
    }
    
    return (
        <div>
            <div><Toaster /></div>
            {user? '' : <div>
                <h1 className='text-2xl font-semibold'>LogIn With </h1>
            <div className='mt-4 space-y-2'>
                <button onClick={googleHandle} className='border m-2 hover:border-blue-400 px-4 py-2'><IoLogoGoogle className='inline mr-2 ' /> LogIn With Google</button>
                <button onClick={githubHandle} className='border m-2 hover:border-blue-400 px-[18px] py-2'><FaGithub className='inline mr-2 ' /> LogIn With GitHub</button>
            </div>
</div>
                 }
        </div>
    );
};

export default LogInWith;