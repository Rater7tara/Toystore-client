import React, { useContext } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import background from '../../assets/et_8.jpg';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Navigation = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const navItems = <>
        <li className='bg-lime-100 rounded-md hover:bg-lime-300'><Link to='/home'>Home</Link></li>
        <li className='bg-rose-100 rounded-md hover:bg-rose-300'><Link to='/allToys'>All Toys</Link></li>
        {user?.email ? <>
          <li className='bg-yellow-100 rounded-md hover:bg-yellow-300'><Link to='/myToys'>My Toys</Link></li>
          <li className='bg-sky-100 rounded-md hover:bg-sky-300'><Link to='/addAToy'>Add A Toy</Link></li>
          
          </>
             :
            <Link to="/login">
            </Link>
          }
        
        <li className='bg-violet-100 rounded-md hover:bg-violet-300'><Link to='/blog'> Blog </Link></li>
  </>


  return (
    <div className='nav-div bg-white'>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <img className='logo' src="https://i.ibb.co/6WMP8w0/bird-2.jpg" />
          <a className="btn btn-ghost normal-case lg:text-2xl sm:text-lg font-black">
            <span className='text-purple-500'>Twinkle</span> <span className='text-lime-500'>Twie</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems}

          </ul>
        </div>
        <div className="navbar-end">
        {
            
            user?.photoURL ?<img src={user.photoURL} className=" user-img rounded-full me-2 " alt="" title={user.displayName} />:<FaUser className='user-img rounded-full me-2 text-3xl'></FaUser>
           }
          {user?
            
          <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
          
             :
            <Link to="/login">
              <button className="btn bg-purple-500">Login</button>
            </Link>
          }
        </div>
      </div>
      <div>
        <img src={background} alt="" />
      </div>

    </div>
  );
};

export default Navigation;