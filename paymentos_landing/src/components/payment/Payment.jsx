import React from 'react';
import vectorUpPath from '../../images/up.svg';

const Payment = () => {
    return (
        <div className="payment">
            <h1 className="payment__title">PaymentOS for DAOs</h1>
            <p className="payment__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="payment__button-container">
                <button className="payment__button-app">
                    <p className="header__button-text">Open App</p>
                </button>
                <button className="payment__button-demo">Watch Demo</button>
            </div>
            <p className="payment__text-lorem">Lorem Ipsum is simply dummy</p>
            <div className="payment__container-item">
                <div className="">
                    <h4>200+</h4>
                    <p>DAO’S</p>
                </div>
                <div>
                    <h4>$35M+</h4>
                    <p>DISBUrsed</p>
                </div>
                <div>
                    <h4>2500+</h4>
                    <p>Contributors</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;