import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            history: []
        };
    }

    plus = () => {
        this.setState((state) => this.updateState(state, 1));
    };

    minus = () => {
        this.setState((state) => this.updateState(state, -1));
    };

    updateState = (state, k) => {
        const value = state.value + k;
        const item = {id: uniqueId(), value};

        return {
            value,
            history: [item, ...state.history]
        }
    }

    deleteItem = (item) => {
        this.setState((state) => {
            const history = state.history.filter(current => current.id !== item.id);

            return {
                value: history.length > 0 ? state.value : 0,
                history
            }
        });
    }

    render() {
        const list = this.state.history.map((item) => <button type="button" key={item.id} className="list-group-item list-group-item-action" onClick={() => this.deleteItem(item)}>{item.value}</button>);

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.plus}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.minus}>-</button>
                </div>

                {this.state.history.length > 0 ? <div className="list-group">{list}</div> : null}
            </div>
        );
    }
}

function uniqueId() {
    return Math.random().toString(16).slice(2);
}