import React from 'react';
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
const LogInWith = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>LogIn With </h1>
            <div className='mt-4 space-y-2'>
                <button className='border m-2 hover:border-blue-400 px-4 py-2'><IoLogoGoogle className='inline mr-2 ' /> LogIn With Google</button>
                <button className='border m-2 hover:border-blue-400 px-[18px] py-2'><FaGithub className='inline mr-2 ' /> LogIn With GitHub</button>
            </div>
        </div>
    );
};

export default LogInWith;