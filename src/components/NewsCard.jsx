import React from 'react';
import { NavLink } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, title ,author,image_url , details} = news;
    return (
        <div>
             
            <div className='mb-2'>
                {/* autho info  */}
                <div className='bg-[#F3F3F3] flex space-x-2 px-4 py-3'>
                  <img src={author.img} className='w-[40px] rounded-full'  alt="" />
                  <div>
                    <p className='text-gray-700 text-sm font-medium'>{author.name}</p>
                    <p className='text-gray-500 text-xs'>{author.published_date}</p>
                  </div>
                </div>
                {/* content */}
                <div className='px-4 mt-4 space-y-2'>
                    <p className='text-xl'>{title}</p>
                    <img src={image_url} alt="" />
                    <p>{details.slice(0,250)}</p>
                    <NavLink className={'underline'} to={`/news/${_id}`}>Read More...</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;