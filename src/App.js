import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/shop" element={<Shop></Shop>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
