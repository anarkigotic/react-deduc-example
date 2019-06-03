import React,{Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            responsable:'',
            description:'',
            priority:'low'
        }
        this.handeInput = this.handeInput.bind(this); 
        this.eventoEnviar = this.eventoEnviar.bind(this);
    }
    handeInput(e){
        const { value,name } = e.target;
        this.setState({
            [name]:value
        });     
    }
    eventoEnviar(e){
        e.preventDefault();
        this.props.enviarTarea(this.state)
    }
    render(){
        return(
            <div className="card">
                <form className='card-body' onSubmit={this.eventoEnviar}>
                    <div className="form-group">
                        <input 
                        className='form-control' 
                        type="text" 
                        onChange={this.handeInput}
                        name='title' 
                        placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input 
                        className='form-control' 
                        type="text"
                        onChange={this.handeInput}
                        name='responsable' 
                        placeholder="Responsive"/>
                    </div>
                    <div className="form-group">
                        <input 
                        className='form-control'
                        type="text" 
                        onChange={this.handeInput}
                        name='description' 
                        placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        onChange={this.handeInput}
                        className='form-control'
                    >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <input 
                        type="submit" 
                        className="btn btn-primary"
                        value="guardar"/>
                    </div>
                </form>

            </div>
        )
    }

}

export default Formulario