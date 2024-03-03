import React from 'react';
import LeftSide from '../Layout/LeftSide/LeftSide';
import RightSide from '../Layout/RightSide/RightSide';

const Home = () => {
    return (
        <div className='px-12'>
             <div className='grid lg:grid-cols-4'>
                <div>
                    <LeftSide/>
                </div>
                <div className='col-span-2'>
                    loading data...
                </div>
                <div>
                   <RightSide/>
                </div>
             </div>
        </div>
    );
};

export default Home;