import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Products from './Components/Products';
import Cart from './Components/Cart';
import {AddProducts} from './Components/AddProducts';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/add-products' element={<AddProducts />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
