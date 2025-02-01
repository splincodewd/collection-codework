import React from "react";
import cn from 'classnames';

export default class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {opened: this.props.opened??true};
    }

    click = () => {
        this.setState((state) => ({opened: !state.opened}));
    }

    render() {
        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       onClick={this.click}
                       aria-expanded={this.state.opened}>Link with href</a>
                </p>
                <div className={cn('collapse', {show: this.state.opened})}>
                    <div className="card card-body">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}