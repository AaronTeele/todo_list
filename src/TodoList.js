import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    };

    addTodo(newTask) {
        this.setState({ 
            todos: [...this.state.todos, newTask],
        });
    };

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(task => task.id !== id) 
        });
    };

    updateTodo(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    };

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    }

    render() {
        return (
        <div className="TodoList">
            <h1>Todo List! <span>A simple React Todo List App.</span></h1>
            <ul className='todos'>
                {this.state.todos.map(todo => {
                   return <Todo  
                            task={todo.task}
                            id={todo.id} 
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={this.removeTodo}
                            updateTodo={this.updateTodo}
                            toggleTodo={this.toggleCompletion}
                        />
                })}
            </ul>
            {<NewTodoForm addTodo={this.addTodo} />}
        </div> 
        );
    };
};

export default TodoList;