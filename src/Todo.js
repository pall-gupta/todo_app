import React, { Component } from 'react'
// import Moment from 'moment'

export default class Todo extends Component {
    state ={
        todos : [{
            text:"",
            isEditable: false,
        }],
        todo: "",
    };
    
    enterTodo = (e) => {
        e.preventdefault();
        this.setState({
            todo: e.target.value,
        })
    }
    addTodo = (e) =>{
        e.preventdefault();
        // console.log("Todo Added")
        const {todos, todo} = this.state;
        todos.push(todo);
        this.setState(
            {
                text: todo,
                isEditable: false
            }
        )
    } 
    removeTodo =(index) =>{ 
        const {todos} = this.state;
        todos.splice(index, 1);
        this.setState({
            todos: todos,
        })
    }
    changeEditable = (e, index) =>{ 
        const {todos} = this.state;
        todos[index].text = e.target.value;
        this.setState({
            todos: todos,
        })
    }
    editTodo =(index) =>{

    }
    render() {
        return (
            <div className="main" >
                <h2 className="text">Hey, Wats you todo today?</h2>
                <form className="wrapper" onSubmit={this.addTodo}>
                <input type="text" className="form-control" placeholder="Enter Todo" value={this.state.todo} onChange={this.enterTodo} />
                <button className="add-todo" onClick={this.addTodo}><i class="fa fa-plus"></i></button>
                </form>
                {this.state.todos.map((todo, i) => {
          return (
            <div className="todo-list" key={i}>
              {todo.isEditable ? (
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => this.editTodo(e, i)}
                />
              ) : (
                <p>{todo.createdTime}{todo.text}</p>
              )}
              {todo.isEditable ? (
                <button
                  className="add-todo"
                  onClick={() => this.changeEditable(i)}
                >
                  <i className="fa fa-check"></i>
                </button>
              ) : (
                <button
                  className="add-todo"
                  onClick={() => this.changeEditable(i)}
                >
                  <i className="fa fa-edit"></i>
                </button>
              )}
              <button onClick={() => this.removeTodo(i)} className="add-todo">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}