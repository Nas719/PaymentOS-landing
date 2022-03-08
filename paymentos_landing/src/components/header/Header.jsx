import React from 'react';
import vectorTwitterPath from '../../images/twitter.svg';
import vectorDiscordPath from '../../images/discord.svg';

const Header = () => {
    return (
        <header className="header">
            <p className="header__logo">Logo</p>
            <ul className="header__list">
                <li className="header__list-item">
                    Blog
                </li>
                <li className="header__list-item">
                    <img className="header__list-item-img" src={vectorTwitterPath} alt="twitter"/>
                    Twitter
                </li>
                <li className="header__list-item">
                    <img className="header__list-item-img" src={vectorDiscordPath} alt="discord"/>
                    Discord
                </li>
                <button className="header__button-open">
                    <p className="header__button-text">Open App</p>
                </button>
            </ul>
        </header>
    );
};

export default Header;