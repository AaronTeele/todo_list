import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.task) return;
        this.props.addTodo({
            ...this.state, 
            id: uuid(),
            completed: false,
        });
        this.setState({task: ''});
    };

    render() {
        return (
           <form className="NewTodoForm" onSubmit={this.handleSubmit}>
               <label htmlFor='task'>Add Todo</label>
               <input 
                type='text' 
                name='task' 
                value={this.state.task} 
                placeholder='enter task'
                onChange={this.handleChange}
               />
               <button>Submit</button>
           </form>
        );
    };
};

export default NewTodoForm;