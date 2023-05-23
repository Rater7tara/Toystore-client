import { CiFaceFrown } from "react-icons/ci";
import React from 'react'
import { Link, useRouteError,  } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import animationData from './../assets/95560-error-404.json';
// import { LottiePlayer } from "lottie-react";

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex'>
      <div className=' mx-auto text-center'>
        
                <img className="w-1/2 text-center m-auto" src={'https://i.ibb.co/Cw0sWbP/3814348.jpg'} alt="" />
                
        <div className=' text-center'>
          <p className='text-danger mb-4'>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-primary'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;