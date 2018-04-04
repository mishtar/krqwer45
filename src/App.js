import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.cambiar = this.cambiar.bind(this);
  }

  change(event){
    this.setState({newTask: event.target.value});
  }
  cambiar(indice){
    this.setState({tasks: this.state.tasks.map(
      (element,index) => index === (indice-1) 
      ? {...element, done: !element.done}
      : element
    )});
  }
  submit(event){
    this.setState({
      tasks: 
      [...this.state.tasks,
        {
          id: (this.state.tasks.length +1),
          name: this.state.newTask, 
          done: false
        }
      ], 
      newTask: ''
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => 
              <li key={task.id} onClick={() => this.cambiar(task.id)} className={task.done ? 'done' : null}>{task.name}</li>)
            }
          </ul>
          <form onSubmit={this.submit}>
            <input type="text" onChange={this.change} className={this.state.newTask === '' ? 'error' : null} id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
