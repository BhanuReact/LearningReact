import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Gallary from './component/ImageGallary/Gallary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './component/Form/Login';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/imageGallary" element={<Gallary/>}/>
      {/* <Route path="/login" element={<Login/>}/> */}
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
