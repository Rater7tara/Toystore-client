import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-purple-500 text-6xl font-bold mb-4 text-center'>Our Gallery</h1>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"https://i.ibb.co/HnS6YsB/1t9y-8tfp-191219.jpg"} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"https://i.ibb.co/HXZqKKd/51663.jpg"} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"https://i.ibb.co/X5mBK4P/46214.jpg"} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"https://i.ibb.co/5jcTzhP/106.jpg"} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"https://i.ibb.co/cLykZCh/doraemon-character-free-download-8.png"} />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"https://i.ibb.co/YcCnrFr/41631.jpg"} />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Gallery;