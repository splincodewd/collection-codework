import React from "react";

const Body = (props) => <div className="card-body">{props.children}</div>;
const Title = (props) => <h4 className="card-title">{props.children}</h4>;
const Text = (props) => <p className="card-text">{props.children}</p>;

export default class Card extends React.Component {
    static Title = Title;
    static Body = Body;
    static Text = Text;

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="card">{this.props.children}</div>;
    }
}