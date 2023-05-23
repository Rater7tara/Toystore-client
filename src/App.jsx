
import './App.css';
import Navigation from './Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';

function App() {


  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
