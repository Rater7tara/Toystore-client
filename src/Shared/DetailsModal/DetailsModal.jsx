import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DetailsModal.css';

const DetailsModal = ({toy}) => {
    console.log(toy)
    const { _id, name, quantity, seller, price, photo, rating, details, email } = toy;
    

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-6xl">
                    <div className='flex justify-center align-middle p-14 bg-purple-100 gap-4'>
                        
      

      {/* card start */}
            <div className="card w-1/2 h-2/3 bg-base-100 shadow-xl">
        <figure><img className='single-img2 hover:-translate-y-6 transition duration-300 ease-in-out' src={photo} alt="Shoes" /></figure>
      </div>
            <div className="card-single2 shadow-xl my-auto rounded-lg bg-violet-200">
        <div className="card-body">
          <h2 className="font-bold text-6xl text-center text-purple-500 mb-5">{name}</h2>
          <p className='text-2xl font-light'>{details}</p>
          <h2><span className='font-bold text-2xl'>Seller Name: </span> <span className='text-2xl'>{seller}</span> <br /><span className='font-bold text-2xl'>Seller Email: </span> <span className='text-2xl'>{email}</span></h2>
      
          <div className='flex justify-evenly mt-4'>
            <div className='border-e-2 border-purple-500 text-center justify-self-center'>
              <h1 className='flex justify-center text-lg  align-middle m-auto p-1'><span className='font-bold text-purple-500'>Quantity: </span> <br /><span className='text-center font-semibold text-lime-600'>-{quantity}</span></h1>
            </div>
            <div className='border-e-2 border-purple-500'>
              <h1 className='flex justify-center text-lg  align-middle m-auto p-1'><span className='font-bold text-purple-500'>Price: </span> <br /> <span className='text-center font-semibold text-lime-600'>_${price}</span></h1>
            </div>
            <div className=''>
              <h1 className='flex justify-center  align-middle m-auto p-1 text-lg'><span className='font-bold text-purple-500'>Ratings:</span> <br /> <span className='text-center font-semibold text-lime-600'>{rating}</span></h1>
            </div>
          </div>
          <div className="card-actions justify-center mt-4">
            <Link to='/home'><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        </div>
      </div>
          </div>
                        <div className="modal-action text-center">
                            <label htmlFor="my-modal-5" className="btn btn-primary text-center">X</label>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DetailsModal;