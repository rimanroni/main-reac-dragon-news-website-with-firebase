import React, { useEffect, useState } from 'react';
import Header from '../pages/Header/Header';
import LogInWith from './LogInWith';
import SocialLink from './SocialLink';
import Qzone from './Qzone';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import moment from 'moment';
const NewsDetils = () => {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const {id} = useParams();
     useEffect(()=>{
         fetch('/news.json')
        .then(res=>res.json())
        .then(data=> {
            const findData = data.find(item=>item._id==id)
            setData(findData)
        })

    },[])

    const {  title ,author,image_url , details} = data || {};
    const handleNavigate = () =>{
        navigate(-1)
    }
    
    // const {_id, title ,author,image_url , details} = news;
    return (
        <div className='px-8 mt-4 pb-7'>
            <Header/>

            <div className='grid md:grid-cols-3'>
                <div className='col-span-2 px-2'>
                   <h1 className='text-2xl font-bold'>Dragon News</h1>
                   <div className='space-y-3'>
                     <img src={image_url} alt="" className='mx-auto' />
                     <p className='text-[25px] font-bold text-[#403F3F]'>{title}</p>
                     <p>{details}</p>
                     <button onClick={handleNavigate} className='bg-[#D72050] text-white px-4 py-2 rounded-md'> <FaArrowLeft className='inline' /> All news in this category</button>
                   </div>
                    <h1 className='text-2xl mt-4 font-bold'>Editors Insight</h1>
                   <div className='grid gap-4 lg:grid-cols-3 mt-8'>
                     <div className='space-y-2'>
                        <img src="https://i.ibb.co/6PZqL7z/editors-Insight1.png" alt="" />
                        <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                        <div className='flex  items-center space-x-3'>
                            <p><CiCalendar/></p>
                            <p>{moment().format('MMMM D, YYYY')}
                            </p>
                        </div>
                     </div>
                     <div className='space-y-2'>
                        <img src="https://i.ibb.co/ZS4xns4/editors-Insight2.png" alt="" />
                        <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                        <div className='flex  items-center space-x-3'>
                            <p><CiCalendar/></p>
                            <p>{moment().format('MMMM D, YYYY')}
                            </p>
                        </div>
                     </div>
                     <div className='space-y-2'>
                        <img src="https://i.ibb.co/6PZqL7z/editors-Insight1.png" alt="" />
                        <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                        <div className='flex  items-center space-x-3'>
                            <p><CiCalendar/></p>
                            <p>{moment().format('MMMM D, YYYY')}
                            </p>
                        </div>
                     </div>
                   </div>
                 </div>
                <div className='px-5 '>
                <LogInWith/>
                <SocialLink/>
                <Qzone/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetils;