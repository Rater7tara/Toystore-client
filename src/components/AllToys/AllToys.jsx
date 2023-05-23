import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsModal from '../../Shared/DetailsModal/DetailsModal';
import ToyTable from './ToyTable';

const AllToys = () => {
    const toys = useLoaderData();
    const [search, setSearch] = useState('');
    const [toy, setToy] = useState({});

    const handleDetailsModal = (id) =>{
        console.log(id)
        fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${id}`)
        .then((res) => res.json())
        .then((data) => setToy(data));

    }

    const handleSearch = () => {
        fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${search}`)
        .then((res) => res.json())
        .then((data) => setGetToys(data));
    };


    console.log(search);


    return (
        <div>
            <h1 className='text-6xl text-purple-500 text-center mb-5'>All Toys</h1>

            <div className='form-control p-5'>
                <div className='text-center'>
                    <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search" name="" id="" placeholder='Search...' className='input input-bordered w-1/2'/>
                    <button onClick={handleSearch}
                    className='btn btn-primary ms-1'>Search Toys</button>
                </div>

            </div>
            <div  className="overflow-x-auto w-full">
            <table className="table w-full">
                   {/* head */}
                   <thead>
                    <tr>
                        <th>
                            NO.
                        </th>
                        <th>Name</th>
                        
                        <th>Seller</th>
                        <th>Sub_Category</th>
                        
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
            {
                toys.slice(0, 20)?.map(toy => <ToyTable
                key={toy._id}
                toy={toy}
                handleDetailsModal ={handleDetailsModal}
                ></ToyTable>)
            }
            </table>
            </div>
            <div>
            <DetailsModal toy={toy}
             >

             </DetailsModal>
            
            </div>
        </div>
    );
};

export default AllToys;