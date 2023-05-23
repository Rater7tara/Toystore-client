import Swal from 'sweetalert2';
import './AddAToy.css';

const AddAToy = () => {

    const handleAddToy = event => {
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

        const newToy = {name, seller, email, quantity, price, subCategory, details, photo, rating}

        console.log(newToy);

        // send data to the server
        fetch('https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Added',
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
           
            <form className='form md:w-2/4 sm:w-full bg-purple-200 p-10 rounded' onSubmit={handleAddToy}>
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-2">Add A Toy</h2>
                {/* form toy name and row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
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
                            <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" id="" placeholder='Seller Email' className="input input-bordered w-full" />
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
                            <input type="text" name="subCategory" placeholder="Sub_Category" className="input input-bordered w-full" />
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
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Ratings" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Add Toy" className="btn bg-purple-500 btn-block" />

            </form>

            <div className='form md:w-2/4 sm:w-full'>
                <img className='form-img' src={"https://i.ibb.co/h76VTVJ/bhai-8sml-210603.jpg"} alt="" />
            </div>
        </div>
    );
};

export default AddAToy;