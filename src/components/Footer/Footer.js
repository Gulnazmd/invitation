import React from 'react';
import './Footer.css';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/tw-3.svg';
import Facebook from '../../images/fb.svg'

const Footer = (props) => (
    <div className="Footer">
        <ul>
            <li>Contact</li>
            <li>Privacy</li>
        </ul>
        <div className="Icons">
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/gulnazmd/'><img className="Social" src={Instagram} alt="альтернативный текст"/></a>
            <img className="Social" src={Twitter} alt="альтернативный текст"/>
            <img className="Social" src={Facebook} alt="альтернативный текст"/>
        </div>
    </div>
)
export default Footer;