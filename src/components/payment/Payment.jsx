import React from 'react';
import imageHeader from '../../images/image_block2.png';
import vectorUpPath from '../../images/north_east_black_24dp 4.svg';

const Payment = () => {
    return (
        <div className="payment">
            <h1 className="payment__title">PaymentOS for DAOs</h1>
            <p className="payment__title-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="payment__button-container">
                <button className="payment__button-app">
                    <p className="header__button-text">Open App</p>
                    <img className="payment__iconup" src={vectorUpPath} alt=""/>
                </button>
                <button className="payment__button-demo">Watch Demo</button>
            </div>
            <p className="payment__subtitle">Lorem Ipsum is simply dummy</p>
            <div className="payment__container-items">
                <div className="payment__subtitle-item">
                    <h4 className="payment__subtitle-item-number">200+</h4>
                    <p className="payment__subtitle-item-text">DAO’S</p>
                </div>
                <div className="payment__subtitle-item">
                    <h4 className="payment__subtitle-item-number">$35M+</h4>
                    <p className="payment__subtitle-item-text">DISBUrsed</p>
                </div>
                <div className="payment__subtitle-item">
                    <h4 className="payment__subtitle-item-number">2500+</h4>
                    <p className="payment__subtitle-item-text">Contributors</p>
                </div>
            </div>
            <img className="payment__image" src={imageHeader} alt=""/>
        </div>
    );
};

export default Payment;