
import React from "react";
import '../About/aboutus.css'

const AboutUs = () => {
    return (
        <>
            <section id="aboutUs_Mini">
                <div className="first_container">
                    <div className="content">
                        <h1>ABOUT US</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
                            error sit dignissimos illum optio, numquam molestias quod! Sed?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                            voluptate vel quaerat sit repellat odio accusantium amet culpa a
                            dignissimos ab, excepturi ipsum delectus officiis, rem optio ex
                            recusandae eum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                            nihil voluptatibus accusamus minus voluptatum dolores dignissimos
                            velit nisi neque facere.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam
                            voluptatibus necessitatibus? Ratione, omnis quo.
                        </p>
                    </div>
                    <button>We strive to offer you best possible homes to stay!</button>
                </div>
                <div className="second_container">
                    <div className="image_1">
                        <img src="/img/people.jpg" alt="people" />
                    </div>
                    <div className="image_2">
                        <img src="/img/people2.jpg" alt="people2" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
