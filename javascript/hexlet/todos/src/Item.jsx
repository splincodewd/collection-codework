import React from "react";

export default class Item extends React.Component {
    constructor() {
        super();
    }

    render() {
        const task = this.props.task;

        return (
            <div className="row">
                <div className="col-1">{task.id}</div>
                <div className="col">
                    {
                       task.state === 'active'
                            ? (
                                <a href="#" className="todo-task" onClick={(e) => this.props.closeTask(e, task)}>{task.text}</a>
                            ) : (
                                <s><a href="#" className="todo-task" onClick={(e) => this.props.reopenTask(e, task)}>{task.text}</a></s>
                            )
                    }
                </div>
            </div>
        );
    }
}