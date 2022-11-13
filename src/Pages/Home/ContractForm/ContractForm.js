import React from 'react';
import contractBg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContractForm = () => {
    return (
        <section
            className='mt-16'
            style={{ background: `url(${contractBg})` }}
        >
            <div className=" w-full lg:w-1/3 mx-auto text-center py-16">
                <div className=''>
                    <h4 className="text-base text-primary">Contract Us</h4>
                    <h3 className='text-2xl text-white mb-5'>Stay connected with us</h3>
                </div>
                <div>
                    <input type="email" placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input type="subject" placeholder="Subject" className="input input-bordered w-full max-w-xs my-5" />
                    <br />
                    <textarea className="textarea  w-full max-w-xs" placeholder="Your message"></textarea>
                    <br />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContractForm;