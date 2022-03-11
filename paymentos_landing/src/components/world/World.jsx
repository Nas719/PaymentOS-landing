import React from 'react';
import bankless from '../../images/bankless.svg';
import indexcoop from '../../images/indexcoop 3.svg';
import compound from '../../images/compound Grants.svg';
import aave from '../../images/aave Grants DAO.svg';
import synthetix from '../../images/synthetix.svg';
import audio from '../../images/audio.svg';
import olympus from '../../images/olympus.svg';
import dydx from '../../images/dydx.svg';
import forefront from '../../images/forefront.svg';
import party from '../../images/party.svg';

const World = () => {
    return (
        <div className="world">
            <h2 className="world-title">Trusted by DAOs around the world</h2>
            <div className="world-one-resources">
                <a className="world-link" href="#">
                    <img className="world-image" src={bankless} alt="Логотип"/>
                    <p className="world-text">Bankless DAO</p>
                </a>
                <a className="world-link" href="#">
                    <img className="world-image" src={indexcoop} alt="Логотип"/>
                    <p className="world-text">Index Coop</p>
                </a>
                <a className="world-link" href="#">
                    <img className="world-image" src={compound} alt="Логотип"/>
                    <p className="world-text">Compund Grants</p>
                </a>
                <a className="world-link" href="#">
                    <img className="world-image" src={aave} alt="Логотип"/>
                    <p className="world-text">Aave Grants DAO</p>
                </a>
                <a className="world-link" href="#">
                    <img className="world-image-synthetix" src={synthetix} alt="Логотип"/>
                </a>
            </div>
            <div className="world-two-resources">
                <a className="world-link-two" href="#">
                    <img className="world-image" src={audio} alt="Логотип"/>
                    <p className="world-text">Audio Grants Committee</p>
                </a>
                <a className="world-link-two" href="#">
                    <img className="world-image" src={olympus} alt="Логотип"/>
                    <p className="world-text">Olympus DAO</p>
                </a>
                <a className="world-link-two" href="#">
                    <img className="world-image-dydx" src={dydx} alt="Логотип"/>
                </a>
                <a className="world-link-two" href="#">
                    <img className="world-image" src={forefront} alt="Логотип"/>
                    <p className="world-text">Party DAO</p>
                </a>
                <a className="world-link-two" href="#">
                    <img className="world-image" src={party} alt="Логотип"/>
                    <p className="world-text">Forefront</p>
                </a>
            </div>
        </div>
    );
};

export default World;