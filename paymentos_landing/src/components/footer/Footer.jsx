import React from 'react';
import telegram from '../../images/telegram icon.svg';
import youtube from '../../images/youtube.svg';
import vectorTwitterPath from '../../images/twitter 1.svg';
import linkedin from '../../images/linkedin 1.svg';
import vectorDiscordPath from '../../images/disc.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-blockone">
                <p className="footer__logo">Logo</p>
                <p className="footer-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="footer-age">Made with love for DAOs 2021 Inc.</p>
            </div>
            <div className="footer-blocktwo">
                <p className="footer-subscribe">Subscribe to our newsletter</p>
                <div className="footer-search">
                    <input className="footer-input" placeholder="Email Address"/>
                    <button className="footer-telegram-icon">
                        <img src={telegram}/>
                    </button>
                </div>
                <div className="footer-text">
                    We will send you updates on the latest news and features. No spam.
                </div>
                <div className="footer-link-icon">
                    <div className="footer-icons">
                        <img className="icon-size" src={youtube}/>
                    </div>
                    <div className="footer-icons">
                        <img className="icon-size" src={vectorTwitterPath}/>
                    </div>
                    <div className="footer-icons">
                        <img className="icon-size" src={linkedin}/>
                    </div>
                    <div className="footer-icons">
                        <img className="icon-size" src={vectorDiscordPath}/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;