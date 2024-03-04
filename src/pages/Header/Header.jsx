import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" className='mx-auto pb-2 py-3'/>
            <div className='text-center space-y-1'>
            <p>Journalism Without Fear or Favour</p>
            <p className='font-[400]'>{moment().format('dddd , MMMM D YYYY')}</p>
            </div>

          <div className='px-12'>
          <div className='flex  px-8 mt-4 py-3 bg-[#F3F3F3]'>
            <button className='bg-red-500 text-white rounded py-2 px-5'>Latest</button>
            <Marquee pauseOnHover={true} className='ml-4'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
           </div>
          </div>
        </div>
    );
};

export default Header;