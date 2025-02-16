import axios from 'axios';
import React from "react";
import routes from "./routes.js";
import Item from "./Item.jsx";

export default class TodoBox extends React.Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            tasks: [],
        }
    }

    setInputValue = (value) => this.setState({inputValue: value});

    async componentDidMount() {
        try {
            const res = await axios.get(routes.tasksPath());
            this.setState({ tasks: res.data });
        } catch {
        }
    }

    addTask = async (event) => {
        event.preventDefault();

        const text = this.state.inputValue;
        const res = await axios.post(routes.tasksPath(), {text});

        this.setState((state) => ({inputValue: '', tasks: [res.data, ...state.tasks]}));
    }

    closeTask = async (event, task) => {
        event.preventDefault();

        const res = await axios.patch(routes.finishTaskPath(task.id));

        this.setState((state) => {
            const tasks = state.tasks.filter((task) => task.id !== res.data.id);

            return { tasks: [...tasks, res.data] };
        });
    }

    reopenTask = async (event, task) => {
        event.preventDefault();

        const res = await axios.patch(routes.activateTaskPath(task.id));

        this.setState((state) => {
            const tasks = state.tasks.filter((task) => task.id !== res.data.id);

            return { tasks: [...tasks, res.data] };
        });
    }

    render() {
        const finishedTasks = this.state.tasks.filter((task) => task.state === 'finished');
        const activeTasks = this.state.tasks.filter((task) => task.state === 'active');

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3">
                        <div className="d-flex col-md-3">
                            <input type="text" value={this.state.inputValue} required className="form-control me-3"
                                   placeholder="I am going..." onChange={(e) => this.setInputValue(e.target.value)}/>
                            <button type="submit" className="btn btn-primary" onClick={this.addTask}>add</button>
                        </div>
                    </form>
                </div>

                {activeTasks.length > 0 && <div className="todo-active-tasks">
                    {activeTasks.map((task) => (
                        <Item task={task} key={task.id} closeTask={this.closeTask} />
                    ))}
                </div>}

                {finishedTasks.length > 0 && <div className="todo-finished-tasks">
                    {finishedTasks.map((task) => (
                        <Item task={task} key={task.id} reopenTask={this.reopenTask} />
                    ))}
                </div>}
            </div>
        );
    }
}