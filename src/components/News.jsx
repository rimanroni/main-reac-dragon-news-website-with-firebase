import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='px-4 h-[180vh]  scrollbar-hide overflow-scroll'>
            <h1 className='text-2xl  font-bold mb-2'>Dragon News Home</h1>
            <div>
                {data.map(news=><NewsCard key={news._id} news={news}></NewsCard>)}
            </div>
        </div>
    );
};

export default News;