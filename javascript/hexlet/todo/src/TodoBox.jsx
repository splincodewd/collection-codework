import React from "react";
import Item from "./Item.jsx";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tasks: []
        };
    }

    addTask = (event) => {
        event.preventDefault();

        this.setState((state) => {
            return {
                value: '',
                tasks: [{id: uniqueId(), value: state.value}, ...state.tasks]
            }
        });
    }

    deleteTaskById = (id) => {
        this.setState((state) => {
            return {
                tasks: state.tasks.filter((task) => task.id !== id)
            }
        });
    }

    handleChange = (event) => {
        event.preventDefault();

        this.setState(({value: event.target.value}));
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text" className="form-control"
                                   value={this.state.value} onChange={(event) => this.handleChange(event)}
                                   placeholder="I am going..."/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(event) => this.addTask(event)}>add</button>
                    </form>
                </div>

                {this.state.tasks.map((task) => (<Item key={task.id} task={task} deleteTaskById={this.deleteTaskById} />))}
            </div>
        );
    }
}

function uniqueId() {
    return Math.random().toString(16).slice(2);
}