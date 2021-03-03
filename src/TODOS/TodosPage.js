import React from 'react';
import {
    getAllUserTodos,
    addUserTodo,
    completeUserTodo
} from '../UTILS/api-utils.js';


export default class SignInPage extends React.Component {
    state = {
        todos: [],
        todoInput: '',
    }

    componentDidMount = async () => {
        await this.fetchTodos();
    }

    fetchTodos = async () => {
        const response = await getAllUserTodos(this.props.token);

        this.setState({
            todos: response,
        })
    }

    handleComplete = async (id) => {
        await completeUserTodo(id, this.props.token);

        await this.fetchTodos();
    }

    handleTodoInputChange = (e) => {
        this.setState({
            todoInput: e.target.value,
        })
    }

    handleAddTodo = async (e) => {
        e.preventDefault();

        await addUserTodo(this.state.todoInput, this.props.token);

        this.setState({
            todoInput: '',
        })

        await this.fetchTodos();
    }

    render() {
        return (
            <div>
                <div className="todos-wrapper">
                    {this.state.todos.map(todo =>
                        <div key={todo.todo} className="todos-div"
                            onClick={() =>
                                this.handleComplete(todo.id)
                            }>
                            <p className={todo.completed && 'finished'}>{todo.todo}</p>
                        </div>
                    )}
                </div >
                <form onSubmit={this.handleAddTodo}>
                    <label>
                        <input value={this.state.todoInput} onChange={this.handleTodoInputChange} required />
                    </label>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}