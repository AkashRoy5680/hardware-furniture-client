import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Footer from './Shared/Footer/Footer';
import Purchase from './Purchase/Purchase';
import NotFound from './NotFound/NotFound';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import AddReview from './Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/addreview" element={<AddReview></AddReview>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
