import './ToyCart.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ToysCard = ({ toy }) => {

  const { _id, name, quantity, seller, price, subCategory, photo, rating, email } = toy;

  // const {user} = useContext(AuthContext);

  //   useEffect(() => {
  //     fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys?email=${user?.email}`)
  //         .then(res => res.json())
  //         .then(data => setEmail(data))
  //         .catch(error => console.error(error))
  // }, [user]);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
              const remaining = myToys.filter(data => data._id !== _id);
              setMyToys(remaining);
            }
          })

      }
    })

  }


  return (
    <>
      
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{subCategory}</div>
            </div>
          </div>
        </td>
        <td>
          {seller}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{quantity} Piece</td>
        <td>{rating}</td>
        <td>$ {price}</td>
        <th>
        <Link to={`updateToy/${_id}`}><button className="btn bg-purple-500 btn-sm me-3 ">Update</button></Link>
        <button onClick={() => handleDelete(_id)} className="btn bg-lime-500 btn-sm">delete</button>
        </th>
      </tr>
      
    </tbody>
</>
      
  );
};

export default ToysCard;