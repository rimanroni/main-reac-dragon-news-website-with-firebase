import React from 'react';
import LogInWith from '../../components/LogInWith';
import SocialLink from '../../components/SocialLink';
import Qzone from '../../components/Qzone';

const RightSide = () => {
    return (
        <div className='px-4 mt-4 mx-auto'>
             <LogInWith/>
             <SocialLink/>
             <Qzone/>
        </div>
    );
};

export default RightSide;