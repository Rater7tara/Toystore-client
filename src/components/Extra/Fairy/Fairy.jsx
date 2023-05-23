import React from 'react';
import './Fairy.css';

const Fairy = () => {
    return (
        <>
            <h1 className='text-6xl text-purple-500 font-bold text-center mt-14'>Special Fairy Toys</h1>
            <div className='p-12'>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img className='fairy-img hover:-translate-y-6 transition duration-300 ease-in-out' src={"https://i.ibb.co/Wn8tH2R/fvyy-jqyc-220304.jpg"} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img className='fairy-img hover:-translate-y-6 transition duration-300 ease-in-out' src={"https://i.ibb.co/RBPtgVX/412.jpg"} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img className='fairy-img hover:-translate-y-6 transition duration-300 ease-in-out' src={"https://i.ibb.co/wC8HLdx/425.jpg"} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img className='fairy-img hover:-translate-y-6 transition duration-300 ease-in-out' src={"https://i.ibb.co/QPQgGvT/101.jpg"} alt="Pizza" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Fairy;