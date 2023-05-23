import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ item }) => {
  const { name, price, details, photo, rating, _id } = item;
  return (
    <div className='p-10'>
      <div className="card lg:w-96 sm:w-full glass shadow-lg ">
        <figure><img className='cart-img hover:-translate-y-6 transition duration-300 ease-in-out' src={photo} alt="" /></figure>
        <div className="card-body indicator">
          <span className="indicator-item badge bg-lime-500 mt-4">
            <p className="text-xl font-bold">$ {price}</p>
          </span>
          <h2 className="card-title color">{name}</h2>
          <p>{details}</p>
          <h2>{rating}</h2>
          
          
        </div>
        <div className="card-actions justify-center rounded mt-2 mb-4">
          <Link to={`/singleToy/${_id}`}><button className="btn bg-purple-500">View details</button></Link>

          </div>
      </div>
    </div>
  );
};

export default Category;