import React from 'react';
import group1 from '../../images/group 1.png';
import group2 from '../../images/group 2.png';
import group3 from '../../images/group 3.png';
import group4 from '../../images/group 4.png';
import group5 from '../../images/group 5.png';
import group6 from '../../images/group 6.png';
import group7 from '../../images/group 7.png';
import group8 from '../../images/group 8.png';

const Cards = () => {
    return (
        <div className="cards">
                <h4 className="cards-title">We are Backed By</h4>
                <p className="cards-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="cards-container">
                <img className="card-image" src={group1} alt="Изображение"/>
                <img className="card-image" src={group2} alt="Изображение"/>
                <img className="card-image" src={group3} alt="Изображение"/>
                <img className="card-image" src={group4} alt="Изображение"/>
                <img className="card-image" src={group5} alt="Изображение"/>
                <img className="card-image" src={group6} alt="Изображение"/>
                <img className="card-image" src={group7} alt="Изображение"/>
                <img className="card-image" src={group8} alt="Изображение"/>
            </div>
        </div>
    );
};

export default Cards;