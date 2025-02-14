import cn from 'classnames';
import React from "react";

const Header = (props) => <div className="modal-header">
    <div className="modal-title">{props.children}</div>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggle}>
    </button>
</div>;

const Body = (props) => <div className="modal-body">{props.children}</div>;

const Footer = (props) => <div className="modal-footer">
    {props.children}
</div>

export default class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={cn('modal', { show: this.props.isOpen, 'fade': this.props.isOpen})} style={{display: this.props.isOpen ? 'block' : 'none'}} role="dialog"><div className="modal-dialog"><div className="modal-content">{this.props.children}</div></div></div>;
    }
}