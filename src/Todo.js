import React, { Component } from 'react'

export default class Todo extends Component {
    state ={
        todos : [],
        todo: "",
    };
    
    enterTodo = (e) => {
        this.setState({
            todo: e.target.value,
        })
    }
    addTodo = () =>{
        // console.log("Todo Added")
        const {todos, todo} = this.state;
        todos.push(todo);
        this.setState(
            {
                todos: todos,
                todo: "",
            }
        )
    } 
    removeTodo =(index) =>{ 
        const {todos} = this.setState;
        todos.splice(index, 1);
        this.setState({
            todos: todos,
        })
    }
    render() {
        return (
            <div className="main" >
                <h2 className="text">Hey, Wats you todo today?</h2>
                <div className="wrapper">
                <input type="text" className="form-control" placeholder="Enter Todo" value={this.state.todo} onChange={this.enterTodo} />
                <button className="add-todo" onClick={this.addTodo}><i class="fa fa-plus"></i></button>
                </div>
                {this.state.todos.map((todo, i) => {
                return (
                    <div className="todo-list" key={i}>
                    <p>{todo}</p>
                    <button onClick={() => this.removeTodo(i)} className="add-todo"><i class="fa fa-trash"></i></button>
                    </div>
                );
                })}
            </div>
        )
    }
}
