import React from 'react'
import '../HomePages/HomePages.css'
import SearchBar from '../../components/searchBar/SearchBar'
import TopVillas from '../../components/topvillas/topvillas'
import OurSpecialities from '../../components/ourspecialities/OurSpecialities'
import AboutUs from '../../components/About/AboutUs'
import Contact from '../../components/Contact/Contact'


function HomePage() {
  return (
    <>
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aspernatur dolorem vitae impedit molestias asperiores fugit provident, laborum reprehenderit, debitis reiciendis id qui corrupti tenetur, enim illum deserunt doloribus? Aspernatur?</p>

            <SearchBar/>

            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/img/bg.png" alt="" />
        </div>
       
    </div>
    {/* <div> */}
    <TopVillas/>

    {/* </div> */}
    <div>
        <OurSpecialities/>
    </div>

    <div>
        <AboutUs/>
    </div>

    <div>
        <Contact/>
    </div>
{/* 
    <div>
        <Footer/>
    </div> */}
    </>
  )
}

export default HomePage