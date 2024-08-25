import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import './App.css'
import About from './Pages/about/About';
import Room from './Pages/rooms/room';
import Villas from './Pages/villas/Villas';
import SingleVilla from './Pages/villas/singlevillas';
import SignIn from './Pages/sign-in/signIn';
import SignUp from './Pages/sign-up/signUp';
import Footer from './components/footer/Footer';
import ContactUS from './Pages/ContactUs/ContactUs';
import HomePage from './Pages/HomePages/HomePages';

const App = () => {
  return (
    <>

<Router>
  <Navbar/>
  <Routes>
    <Route path= '/' element={<HomePage/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path = '/room' element = {<Room/>}/>
    <Route path='/contactus' element={<ContactUS/>}/>
    <Route path='/villas' element={<Villas/>}/>
    <Route path='/villa/:id' element={<SingleVilla/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>

  </Routes>
  <Footer/>

</Router>

    </>
  )
}

export default App;
