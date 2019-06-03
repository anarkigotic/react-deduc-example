import React from 'react';
import MuiThemePrivider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import { indigo400, green400, lightBlue400, amber400 } from 'material-ui/styles/colors';

import './App.css';
import Title from './components/Title';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <MuiThemePrivider>
        <div className="Header-background">
          <div style={{ width: "80%", margin: "0 auto" }}>
            <div className="Header-main">
              <Title title="Places"></Title>
              <RaisedButton label="Crear cuenta gratuita" primary={true} />
              {/* <button>Crear cuenta gratuita</button> */}
              <img className="Heaer-ilustration" src={process.env.PUBLIC_URL + '/imagenes/background.png'} height='300' alt="" />
            </div>
          </div>
        </div>
        <div style={{ 'background-color': indigo400, 'padding': '50px' }}>
          <ul>

            <Card className="Header-Benefit">
              <CardText >
                <div className="row">
                  <div className="Header-Benefit-image" style={{ 'backgroundColor': green400 }}>
                    <img src={process.env.PUBLIC_URL + '/imagenes/heart.png'} />
                  </div>
                  <div className="Header-Benefit-content">
                    <h3>Calificaciones con emociones</h3>
                    <p>Califica tus lugares con experiencias, no con números</p>
                  </div>
                </div>
              </CardText>
            </Card>
            <Card className="Header-Benefit">
              <CardText >
                <div className="row">
                  <div className="Header-Benefit-image" style={{ 'backgroundColor': green400 }}>
                    <img src={process.env.PUBLIC_URL + '/imagenes/nointernet.jpeg'} />
                  </div>
                  <div className="Header-Benefit-content">
                    <h3>Calificaciones con emociones</h3>
                    <p>Califica tus lugares con experiencias, no con números</p>
                  </div>
                </div>
              </CardText>
            </Card>
            <Card className="Header-Benefit">
              <CardText >
                <div className="row">
                  <div className="Header-Benefit-image" style={{ 'backgroundColor': green400 }}>
                    <img src={process.env.PUBLIC_URL + '/imagenes/start.png'} />
                  </div>
                  <div className="Header-Benefit-content">
                    <h3>Calificaciones con emociones</h3>
                    <p>Califica tus lugares con experiencias, no con números</p>
                  </div>
                </div>
              </CardText>
            </Card>
            

            
          </ul>
        </div>
      </MuiThemePrivider>
    );
  }

}

export default App;
