import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: cavity,
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: fluoride
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: whitening
        },
    ]
    return (
        <div className='text-center'>
            <p className='text-primary'>OUR SERVICES</p>
            <h3 className='text-2xl'>Services We Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;