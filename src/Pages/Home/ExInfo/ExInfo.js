import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ExInfo = () => {
    return (
        <div className='md:flex mt-24'>
            <div className='lg:w-1/2'>
                <img className='lg:w-2/3 md:w-full mx-auto rounded-lg' src={treatment} alt="" />
            </div>
            <div className='lg:w-1/2 md:w-5/6'>
                <div className='w-5/6 mx-auto lg:mt-24' >
                    <h1 className='text-5xl font-bold'>Exceptional Dental Care, on Your Terms</h1>
                    <p className='my-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExInfo;