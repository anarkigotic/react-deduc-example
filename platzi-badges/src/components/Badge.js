import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';
import '../pages/BadgeNew'

class Badge extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo}  alt="Avatar"/>
                </div>
                <div className="Badge__section-name">
                    <img 
                        className="Badge__avatar"
                        src={this.props.avatarUrl} alt="Logo de la conferencia"/>
                    <h1>{this.props.firtsName}  <br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>
                       {this.props.jobTitle}
                    </h3>
                    <div>
                        {this.props.twitter}
                    </div>
                </div>

                <div className="Badge__footer">
                    PlatzyConft
                </div>


            </div>
        )
    }

}
export default Badge;