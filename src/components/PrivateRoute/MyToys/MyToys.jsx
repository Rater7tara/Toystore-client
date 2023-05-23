import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ToysCard from '../../ToysCart/ToysCard';

const MyToys = () => {
    // const toys = useLoaderData();
    const [myToys, setMyToys] = useState([]);
    const [asc, setAsc] = useState(true);
  const {user} = useContext(AuthContext);

  const url = `https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys?email=${user.email}`;

    useEffect(() => {
      fetch(url)
          .then(res => res.json())
          .then(data => setMyToys(data))
          .catch(error => console.error(error))
  }, [user]);


    useEffect(() => {
      fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys?sort=${asc ? 'asc' : 'desc'}`)
          .then(res => res.json())
          .then(data => setMyToys(data))
          .catch(error => console.error(error))
  }, [asc]);


    

    return (
        <div className='m-20'>
            <h1 className='text-6xl font-bold text-center mb-4  text-purple-500'>My Toys</h1>
            <div className='text-right mb-8 mt-8'>
              <button onClick={() => setAsc(!asc)} className='btn btn-primary'>{asc ? 'Price High-Low' : 'Price Low-High'}</button>
            </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Seller</th>
        <th>Quantity</th>
        <th>Ratings</th>
        <th>Price</th>
        <th>Actions</th>
        
      </tr>
    </thead>
            {
                myToys.map(toy => <ToysCard
                key={toy._id}
                toy={toy}
                ></ToysCard>)
            }
            </table>
            </div>
        </div>
    );
};

export default MyToys;