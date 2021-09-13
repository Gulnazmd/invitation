import React from 'react';
import './MainPhoto.css';
import leaf from '../../images/_103x.webp';
import leaf1 from '../../images/_113x.webp'


const MainPhoto = (props) => (
        <div className="Main">
            <img className="Photo" src='https://mk0paperlessmovn94k7.kinstacdn.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg' alt="альтернативный текст"/>
        <div className="TextContent">
                <div className="PhotoDivBig">
                        <img className="Leaf" id="First" src={leaf} alt="альтернативный текст"/>
                        <img className="Leaf" id="Second" src={leaf1} alt="альтернативный текст"/>
                    <div className="PhotoDivSmall">
                        <h1>Gulnaz</h1>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
)


export default MainPhoto;