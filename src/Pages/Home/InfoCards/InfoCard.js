import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, bgClass, icon } = card;
    return (
        <div className={`card md:card-side my-13 shadow-xl ${bgClass}`}>
            <figure><img className='md:m-6 mt-8 text-xl' src={icon} alt="Movie" /></figure>
            <div className="card-body mr-8">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;