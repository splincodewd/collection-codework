import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.deleteTaskById(this.props.task.id)}>-</button>
                    </div>
                    <div className="col">{this.props.task.value}</div>
                </div>
                <hr/>
            </div>
        );
    }
}
