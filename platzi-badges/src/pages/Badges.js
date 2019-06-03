import React from "react";
import BadgetList from "../components/BadgeList";
import { Link } from "react-router-dom";

// import './styles/Badges.css';
import data from "./data.json";
import confLogo from "../images/badge-header.svg";

class Badges extends React.Component {
  constructor(props) {
    console.log("1 - constructor()");

    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    console.log("3 - componentDidMount()");
    this.timeout =setTimeout(() => {
      this.setState({
        data: data.data
      });
    }, 3000);
  }

 componentDidUpdate(preveProps,preveState){
    console.log("5 - componentDidUpdate()");
    console.log({
        preveProps,preveState
    });
 }

//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillUnmount() {
    console.log("6 - componentWillMount");
    clearTimeout(this.timeout);

    
} 
  
  render() {
    console.log("2 - render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgetList badgets={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
