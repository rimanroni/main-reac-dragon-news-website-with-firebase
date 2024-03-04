import React from 'react';
import LeftSide from '../Layout/LeftSide/LeftSide';
import RightSide from '../Layout/RightSide/RightSide';
import News from './News';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='px-12'>
            <Helmet>
                <title>Dragon-website-home</title>
            </Helmet>
             <div className='grid lg:grid-cols-4'>
                <div>
                    <LeftSide/>
                </div>
                <div className='col-span-2'>
                    <News/>
                </div>
                <div>
                   <RightSide/>
                </div>
             </div>
        </div>
    );
};

export default Home;