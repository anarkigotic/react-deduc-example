import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
import Formulario from './component/formulario';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Aplicacion de tareas',
      todos
    }
    this.agregarTarea = this.agregarTarea.bind(this);
  }

  agregarTarea(tarea){
    this.setState({
      todos: [...this.state.todos,tarea]
    });
  }

  eliminarTarea(index){
    this.setState({
      todos : this.state.todos.splice(index,1)
    })
  }

  render() {

    const todosAll = this.state.todos.map((todo, i) => {
      return (
        <div className='col-md-4'>
          <div className='card mt-4'>
            <div className="card-header">
              <h3>
                {todo.title}
              </h3>
            </div>
            <div className="card-body">
              <p>
                {todo.description}
              </p>
              <p>
                <mark>
                  {todo.responsable}
                </mark>
              </p>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>

            </div>
            <div className="card-footer">
              <button 
              className="btn btn-danger"
              onClick={this.eliminarTarea.bind(this,i)}
              >
                Eliminar Tarea
              </button>
              
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">Task 
            <span className="badge badge-pill  badge-light ml-2">
                  {this.state.todos.length}
            </span>
          </a>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {this.state.title} - {this.state.ntareas}
        </a>

        <div className="container">
          <div className="row mt-4">
          <Formulario enviarTarea={this.agregarTarea}></Formulario>

            {todosAll}
          </div>

        </div>

      </div>
    );
  }
}


export default App;