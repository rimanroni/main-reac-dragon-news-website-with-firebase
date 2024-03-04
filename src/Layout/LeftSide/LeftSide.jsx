import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSide = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setData(data ))
    },[])
    
    return (
        <div className='mx-auto px-4'>
            <h1 className='text-2xl font-bold'>All Caterogy </h1>
            <div className='mt-2 space-y-4'>
                {data.map(link=><div key={link.id} className={'text-xl '}> 
                  <NavLink>{link.name}</NavLink>
                </div>)}
            </div>

            <div className='mt-4'>
                <div>
                    <img src="https://i.ibb.co/fQGvt6L/1.png" alt="" />
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/Wc7jqxX/2.png" alt="" />
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/74cPSpP/3.png" alt="" />
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;