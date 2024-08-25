import React from 'react';
import '../singlePage/singlePage.css';

import { singlePostData } from '../../lib/data';
import Slider from '../../components/slider/slider';

function SinglePage() {


  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.img}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="./img/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  <span>$ {singlePostData.price}</span>
                </div>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="singlefeatures">
        <div className="wrapper">
          <p className="single_title">Genral</p>
          <div className="listVertical">
            <div className="singlefeatures">
              <img src="./img/utility.png" alt="" />
              <div className="singlefeaturesText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="singlefeatures">
              <img src="./img/pet.png" alt="" />
              <div className="singlefeaturesText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="singlefeatures">
              <img src="./img/fee.png" alt="" />
              <div className="singlefeaturesText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="single_title">
            <div className="size">
              <img src="./img/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="./img/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="./img/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </p>
          <div className="sizes"></div>
          <p className="single_title">
          <div className="singlefeatures">
              <img src="./img/school.png" alt="" />
              <div className="singlefeaturesText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
          <div className="singlefeatures">
              <img src="./img/school.png" alt="" />
              <div className="singlefeaturesText">
                <span>Bus Stop</span>
                <p>150m away</p>
              </div>
            </div>
          <div className="singlefeatures">
              <img src="./img/school.png" alt="" />
              <div className="singlefeaturesText">
                <span>Resturant</span>
                <p>200 away</p>
              </div>
            </div>
          </p>
          <div className="listHorizontal"></div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
