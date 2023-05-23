import React from 'react';
import { Link } from 'react-router-dom';
import DetailsModal from '../../Shared/DetailsModal/DetailsModal';

const ToyTable = ({ toy, handleDetailsModal }) => {

    const { name, quantity, seller, email, price, subCategory, details, photo, rating, _id } = toy;


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
                            <div>
                                <div className="font-bold">{name}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {seller}
                    </td>
                    <td>
                        {subCategory}

                    </td>
                    <td>Available_{quantity} piece</td>
                    <td>${price}</td>
                    <th>
                        <label onClick={() => handleDetailsModal(_id)} htmlFor="my-modal-5" className="btn bg-purple-500">View details</label>
                        
                        {/* <Link to={`/singleToy/${_id}`}><label htmlFor="my-modal-5" className="btn bg-purple-500">View details</label>
                        </Link> */}

                    </th>
                </tr>
            </tbody>

            <div>
            

                
            
            </div>
        </>
    );
};

export default ToyTable;