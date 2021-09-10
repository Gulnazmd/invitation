import React, {Component} from 'react';
import MainPhoto from '../../components/MainPhoto/MainPhoto';
import './Builder.css';
import shadow from '../../../images/_82x.png';
import form from '../../../images/_6.svg';
import form2 from '../../../images/_7.svg'

class Builder extends Component {

    state = {
        move: false,
        show: false
    }
    

    startedHandler = () => {
        this.setState({
            move: !this.state.move
        })
      }

      
    render() {
        
        return (
                <div className="MainContainer">
                    <img className="Shadow" src={shadow} alt="альтернативный текст"/>
                    <img className="Form" src={form} alt="альтернативный текст"/>
                    <img className="FormSecond" src={form2} alt="альтернативный текст"/>
                    <MainPhoto/>
                       
                </div>

            
        );
    }
}

export default Builder;