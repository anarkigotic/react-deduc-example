import React  from 'react';

import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

// import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form:{
                firstName:'',
                lastName:'',
                email:'',
                jobTitle:'',
                twitter:''
            }
        }
    }

    handleChangenew = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firtsName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://scontent.flim5-4.fna.fbcdn.net/v/t1.0-1/p160x160/60267801_10219085158624629_3385655052227051520_n.jpg?_nc_cat=108&_nc_ht=scontent.flim5-4.fna&oh=252833409594309be4472e9b3b48a383&oe=5D5825F2"    
                            ></Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm  onChange={this.handleChangenew} valuesData={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default BadgeNew;