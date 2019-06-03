import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'demo@gmail.com',
      password:''
    }
  }

sendData(email){
this.setState({
    email:email
});
}

sendForm =(e)=>{
  alert("enviado...");
  console.log(this.state);
  e.preventDefault();
  
}


sendPass(password){
  this.setState({
    password:password
  });
  }

  render(){
    return(
      <div>
        <form>
          <input 
          onChange={(evn)=>{ this.sendData(evn.target.value)}}
          type="email" 
          placeholder="Email" 
          value={this.state.email}/>
          <input 
          type="password" 
          onChange={(evn)=>{ this.sendPass(evn.target.value)}}
          placeholder="****" 
          value={this.state.password}/>
          <div>
            <input 
            type="submit" 
            onClick={ this.sendForm }
            value="iniciar sesion"/>
          </div>
        </form>
      </div>
    );
  }
}

// function B(props){
//   return(
//     <p>
//       Hola {props.nombre}
//     </p>
//   );
// }
// function A(props){
//   // console.log(props.children);
//   // return(
//   //   <p>
//   //     {props.nombre}:10
//   //   </p>
//   // );
//   return props.children;
// }


// class Contador extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       contador:0
//     }
//   }
//   aumentar = ()=>{
//     this.setState({
//       contador:this.state.contador+1
//     })
//   }; 
//   render(){
//     return(
//       <div>
//         <p>{this.state.contador}</p>
//         <button onClick={this.aumentar}>Aumentar</button>
//       </div>
//     );
//   }
// }


function MiPrimerComponente() {
  return (
    <h1>Hola mundo</h1>
  );
}

class MiClaseComponent extends Component {
  render() {
    let nombre = "mateo";
    return (
      <div>
        <Formulario></Formulario>
        {/* <Contador/> */}
        {/* <A nombre={nombre}>
          <p>Como</p>
          <h1>GENIAL</h1>
        </A>
        <B nombre={nombre}></B> */}
      </div>
    )

  }

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MiClaseComponent;
