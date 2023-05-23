import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SingleToy.css';

const SingleToy = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
  const { _id, name, quantity, seller, price, photo, rating, details, email } = singleToy;

  return (
    <>
    <h1 className='text-3xl text-center mb-2 text-purple-500 font-bold'>{name} Details</h1>
    <div className='flex justify-center align-middle p-14 bg-purple-100 gap-4'>
      

{/* card start */}
      <div className="card w-1/2 bg-base-100 shadow-xl">
  <figure><img className='single-img hover:-translate-y-6 transition duration-300 ease-in-out' src={photo} alt="Shoes" /></figure>
</div>
      <div className="card-single shadow-xl my-auto rounded-lg bg-lime-200 glass">
  <div className="card-body">
    <h2 className="font-bold text-6xl text-center text-purple-500 mb-5">{name}</h2>
    <p className='text-2xl font-light'>{details}</p>
    <h2><span className='font-bold text-2xl'>Seller Name: </span> <span className='text-2xl'>{seller}</span> <br /><span className='font-bold text-2xl'>Seller Email: </span> <span className='text-2xl'>{email}</span></h2>

    <div className='flex justify-evenly mt-4'>
      <div className='border-e-2 border-purple-500 text-center justify-self-center'>
        <h1 className='flex justify-center text-lg  align-middle m-auto p-4'><span className='font-bold text-purple-500'>Quantity: </span> <br /><span className='text-center'>_ {quantity}</span></h1>
      </div>
      <div className='border-e-2 border-purple-500'>
        <h1 className='flex justify-center text-lg  align-middle m-auto p-4'><span className='font-bold text-purple-500'>Price: </span> <br /> <span className='text-center'>_${price}</span></h1>
      </div>
      <div className=''>
        <h1 className='flex justify-center  align-middle m-auto p-4 text-lg'><span className='font-bold text-purple-500'>Ratings:  </span> <br /> <span className='text-center'>_{rating}</span></h1>
      </div>
    </div>
    <div className="card-actions justify-center mt-4">
      <Link to='/home'><button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
    </div>
    </>
  );
};

export default SingleToy;