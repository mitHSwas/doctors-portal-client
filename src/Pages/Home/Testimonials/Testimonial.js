import React from 'react';

const Testimonial = ({ review }) => {
    const { name, review: userReview, img, address } = review;
    return (
        <div className="card shadow-xl px-7">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex mt-4">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl'>{name}</h3>
                        <p className='text-base'>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;