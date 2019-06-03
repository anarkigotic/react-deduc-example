import React from 'react';


class BadgeForm extends React.Component{

    constructor(props){
        super(props);
        // this.state = {
        //     firstName:'',
        //     lastName:'',
        //     email:'',
        //     jobTitle:'',
        //     twitter:''
        // }
    }

 
    // handleChange = e =>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     });
    // }

    handleClick = e =>{
        e.preventDefault();
        // console.log(this.state);
        
    }
    render(){
        return(
            <div>
             <h1>New attendant</h1>
             <form>
                 <div className="form-group">
                     <label htmlFor="">Firts Name</label>
                     <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.valuesData.firstName}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Last Name</label>
                     <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.valuesData.lastName}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Email</label>
                     <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.valuesData.email}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Job Title</label>
                     <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.valuesData.jobTitle}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="">Twitter</label>
                     <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.valuesData.twitter}/>
                 </div>
                 <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
             </form>
            </div>
        )
    }

}
export default BadgeForm;