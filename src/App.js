import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import UploadProduct from './components/UploadProduct/UploadProduct';
import OrderList from "./components/OrderList/OrderList";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/uploadProduct" element={
          <PrivateRoute>
            <UploadProduct/>
          </PrivateRoute>
        
        }/>
        <Route path="/orderList" element={
        <PrivateRoute>
        <OrderList/>
        </PrivateRoute>
        
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
