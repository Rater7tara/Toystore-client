import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, name, quantity, seller, email, price, subCategory, details, photo, rating } = toy;
    console.log(toy);

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const subCategory = form.subCategory.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const rating = form.rating.value;

        const updateToy = {name, seller, email, quantity, price, subCategory, details, photo, rating}

        console.log(updateToy);

        // send data to the server
        fetch(`http://localhost:5000/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully Updated',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                }
            })


    }


    return (
        <div className=" p-10 md:flex justify-center ">
           
            <form className='form md:w-2/4 sm:w-full bg-pink-100 p-10 rounded-lg' onSubmit={handleUpdateToy}>
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-2">Update A Toy</h2>
                {/* form toy name and row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form seller row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" defaultValue={seller} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={email} id="" placeholder='Seller Email' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Sub-Category row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Sub_Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" defaultValue={subCategory} placeholder="Sub_Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form quantity and details row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Price and Rating row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Update Toy" className="btn bg-purple-500 btn-block" />

            </form>

            <div className='form md:w-2/4 sm:w-full'>
                <img className='form-img' src={"https://i.ibb.co/5rPrdT9/fun-3d-panda-backpacker-cartoon-character.jpg"} alt="" />
            </div>
        </div>
    );
};

export default UpdateToy;