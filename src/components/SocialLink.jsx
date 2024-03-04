import React from 'react';
 import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6" 

const SocialLink = () => {
    return (
        <div className='mt-4 mx-auto'>
            <h1 className='text-2xl font-bold mb-3'>Find Us On</h1>
            <div className='text-xl'>
                <p className='border px-4 py-1  w-3/4 rounded-t-md'><FaFacebook className='inline'/> Facebook</p>
                <p className=' border-x px-4 py-1 w-3/4   '><FaTwitter className='inline'/> Twitter</p>
                <p className='border px-4 py-1 w-3/4  rounded-b-md '><FaInstagram className='inline'/> Instagram </p>
            </div>
        </div>
    );
};

export default SocialLink;