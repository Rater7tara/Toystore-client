import React from 'react';
import './OurSeller.css';

const OurSeller = () => {
    return (
        <>
            <h1 className='text-6xl text-lime-500 font-bold text-center mt-14'>Our Professional Sellers</h1>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 mt-6 p-14'>

                <div className="card lg:w-96 sm:w-full shadow-xl">
                    <figure><img className='seller-img max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30' src={"https://i.ibb.co/HtnKnMp/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms.jpg"} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Fahad Hossen
                            <div className="badge badge-secondary">5 Years +</div>
                        </h2>
                        <p>Toy Designer</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='seller-img max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30' src={"https://i.ibb.co/z895KKf/bohemian-man-with-his-arms-crossed.jpg"} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Edward
                            <div className="badge badge-secondary">7 Years +</div>
                        </h2>
                        <p>Toy Maker</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='seller-img max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30' src={"https://i.ibb.co/PtP31Xj/cheerful-curly-business-girl-wearing-glasses.jpg"} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Jennifer
                            <div className="badge badge-secondary">4 Years +</div>
                        </h2>
                        <p>Producer</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurSeller;