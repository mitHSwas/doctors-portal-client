import React from 'react';
import Banner from '../Banner/Banner';
import ContractForm from '../ContractForm/ContractForm';
import ExInfo from '../ExInfo/ExInfo';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExInfo></ExInfo>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContractForm></ContractForm>
        </div>
    );
};

export default Home;