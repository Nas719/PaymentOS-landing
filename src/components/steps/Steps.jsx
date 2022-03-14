import React from 'react';
import people from '../../images/people.svg';
import gnosis from '../../images/gnosis.svg';
import account from '../../images/account.svg';
import moni from '../../images/moni.svg';
import contact from '../../images/contact.svg';

const Steps = () => {
    return (
        <div className="steps">
                <div className="steps__info">
                    <h4 className="steps__info-title">What makes us special 🔥</h4>
                    <p className="steps__info-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="steps__info">
                    <div className="circle"></div>
                    <img className="steps__image-icon" src={people} alt="#"/>
                    <h4 className="steps__title">Step 1</h4>
                    <p className="steps__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="steps__info">
                    <div className="circle"></div>
                    <img className="steps__image-icon" src={gnosis} alt="#"/>
                    <h4 className="steps__title">Step 1</h4>
                    <p className="steps__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="steps__info steps__info-border">
                    <div className="circle"></div>
                    <img className="steps__image-icon" src={account} alt="#"/>
                    <h4 className="steps__title">Step 1</h4>
                    <p className="steps__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="steps__info">
                    <div className="circle"></div>
                    <img className="steps__image-icon" src={moni} alt="#"/>
                    <h4 className="steps__title">Step 1</h4>
                    <p className="steps__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="steps__info">
                    <div className="circle"></div>
                    <img className="steps__image-icon" src={contact} alt="#"/>
                    <h4 className="steps__title">Step 1</h4>
                    <p className="steps__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
        </div>
    );
};

export default Steps;