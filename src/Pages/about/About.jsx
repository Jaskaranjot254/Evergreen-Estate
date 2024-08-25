import React from "react";
import "../about/About.css"
import AboutUs from "../../components/About/AboutUs";
const About = () => {
  return (
    <>
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/img/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem magnam totam alias harum sit facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste perferendis ab quod deserunt ipsam pariatur minus sit assumenda, voluptatem commodi reiciendis, est dicta fuga?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sunt consequatur dolorem saepe pariatur nulla molestiae a labore!</p>
        </div>
      </div>
    </section>
      <AboutUs />
     </>
  );
};

export default About;


