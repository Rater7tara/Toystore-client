import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CarouselCar from '../Extra/CarouselCar/CarouselCar';
import Fairy from '../Extra/Fairy/Fairy';
import OurSeller from '../Extra/OurSeller/OurSeller';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
    return (
        <div>
            <CarouselCar></CarouselCar>
            <div>
                <Gallery></Gallery>
            </div>
            <div className='mt-4'>
            <ShopCategory></ShopCategory>
            </div>
            <div>
                <Fairy></Fairy>
            </div>
            <div><OurSeller></OurSeller></div>
        </div>
    );
};

export default Home;