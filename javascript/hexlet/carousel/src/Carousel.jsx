import React from "react";
import cn from 'classnames';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            length: this.props.images.length
        };
    }

    snapToItem(nextOrPrev) {
        this.setState((state) => {
            const newIndex = state.current + nextOrPrev;
            const current = (newIndex) >= state.length ? 0 : (newIndex < 0 ? state.length - 1 : newIndex);

            return {current};
        });
    }

    render() {
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.props.images.map((object, i) => {
                        return <div key={i} className={cn('carousel-item', {active: i === this.state.current})}>
                            <img alt="" className="d-block w-100" src={object}/>
                        </div>
                    })}
                </div>
                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"
                        onClick={() => this.snapToItem(-1)}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next"
                        onClick={() => this.snapToItem(1)}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}