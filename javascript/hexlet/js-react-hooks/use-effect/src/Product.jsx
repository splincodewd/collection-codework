import React from 'react';

const Product = (props) => {
    const {
        product,
        countProduct,
        handleIncrement,
        handleDecrement,
    } = props;
    const { name, id, price } = product;

    return (
        <li data-testid={id} key={id}>
            <div className="col-2 ">
                {`${name}. Цена: ${price} р.`}
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" data-testid={`decrement-${id}`} type="button" onClick={() => handleDecrement(product)}>-</button>
                </div>
                <input type="number" value={countProduct || ''} disabled placeholder="0" className="col-1" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" data-testid={`increment-${id}`} type="button" onClick={() => handleIncrement(product)}>+</button>
                </div>
            </div>
            <hr />
        </li>
    );
};

export default Product;
