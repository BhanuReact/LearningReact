import React,{ useState } from 'react'
import Crousal from '../component/Center-contant/Crousal'
import Main from '../component/Center-contant/Main'
import Footer from '../component/Footer/Footer'
import Signup from '../component/Form/Signup'
import Navbar from '../component/Navbar/Navbar'

const Home = () => {
  const[toggleForm,setToggleForm]=useState(false);


  return (
    <div>
       <Navbar handleChange={() => setToggleForm(!toggleForm)}/>
     {toggleForm?<Signup handleClose={() => setToggleForm(false)}/>:null}                                                                           
       <Crousal/>
       <Main/>
       <Footer/>
    </div>
  )
}

export default Home
