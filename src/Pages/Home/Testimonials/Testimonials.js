import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviewData = [
        {
            _id: 1,
            name: "Winson Herry",
            img: people1,
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 2,
            name: "Winson Herry",
            img: people2,
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 3,
            name: "Winson Herry",
            img: people3,
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
        <section className='mt-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-lg text-primary text-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewData.map(review => <Testimonial
                        key={review._id}
                        review={review}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;