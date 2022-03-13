import React from 'react';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';
import image7 from '../../images/image7.png';
import image8 from '../../images/image8.png';
import twittericon from '../../images/twitter-icon.svg';
import linkedin from '../../images/linkedin.svg';

const Cards = () => {
    return (
        <div className="cards">
                <h4 className="cards-title">We are Backed By</h4>
                <p className="cards-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="cards-container">
                <div className="card-box-grey">
                    <img className="card-image" src={image1} alt="Изображение"/>
                    <p className="card-text">Dragonfly Capital</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-white">
                    <img className="card-image" src={image2} alt="Изображение"/>
                    <p className="card-text">Leighton Cusack</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-grey">
                    <img className="card-image" src={image3} alt="Изображение"/>
                    <p className="card-text">Linda Xie</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-white">
                    <img className="card-image" src={image4} alt="Изображение"/>
                    <p className="card-text">Sandeep Nailwal</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-white">
                    <img className="card-image" src={image5} alt="Изображение"/>
                    <p className="card-text">Cooper Turley</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-grey">
                    <img className="card-image" src={image6} alt="Изображение"/>
                    <p className="card-text">Consensys</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-white">
                    <img className="card-image" src={image7} alt="Изображение"/>
                    <p className="card-text">Ryan Sean Adams</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
                <div className="card-box-grey">
                    <img className="card-image" src={image8} alt="Изображение"/>
                    <p className="card-text">Mike Dudas</p>
                    <img className="card-twiticon" src={twittericon}/>
                    <img className="card-twiticon-in" src={linkedin}/>
                </div>
            </div>
        </div>
    );
};

export default Cards;