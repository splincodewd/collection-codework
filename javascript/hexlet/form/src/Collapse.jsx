import React from "react";
import cn from 'classnames';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            address: '',
            password: '',
            country: '',
            email: '',
            acceptRules: false,
            submitting: false,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({submitting: true});
    };

    toBack = () => {
        this.setState({submitting: false});
    };

    handleChange = (key, e) => {
        e.preventDefault();
        this.setState({ [key]: e.target.value });
    };

    toggleChange = () => {
        this.setState((state) => ({acceptRules: !state.acceptRules}));
    };

    render() {
        return (
            <>
                {!this.state.submitting ? (
                    <form name="myForm" onSubmit={this.handleSubmit}>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="col-form-label">Email</label>
                            <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                                   value={this.state.email} onChange={(event) => this.handleChange('email', event)}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="password" className="col-form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password"
                                   value={this.state.password} onChange={(event) => this.handleChange('password', event)}
                                   placeholder="Password"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="address" className="col-form-label">Address</label>
                            <textarea type="text" className="form-control" name="address" id="address"
                                      value={this.state.address} onChange={(event) => this.handleChange('address', event)}
                                      placeholder="1234 Main St"></textarea>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city" className="col-form-label">City</label>
                            <input value={this.state.city} onChange={(event) => this.handleChange('city', event)} type="text" className="form-control" name="city" id="city"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="country" className="col-form-label">Country</label>
                            <select value={this.state.country} onChange={(event) => this.handleChange('country', event)} id="country" name="country" className="form-control">
                                <option value="">Choose</option>
                                <option value="argentina">Argentina</option>
                                <option value="russia">Russia</option>
                                <option value="china">China</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="rules">
                                    <input id="rules" type="checkbox" name="acceptRules"
                                           defaultChecked={this.state.acceptRules} onChange={this.toggleChange}
                                           className="form-check-input"/>
                                    Accept Rules
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                ) : (
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.toBack}>Back</button>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>acceptRules</td>
                                <td>{this.state.acceptRules.toString()}</td>
                            </tr>
                            <tr>
                                <td>address</td>
                                <td>{this.state.address}</td>
                            </tr>
                            <tr>
                                <td>city</td>
                                <td>{this.state.city}</td>
                            </tr>
                            <tr>
                                <td>country</td>
                                <td>{this.state.country}</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td>{this.state.password}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </>

        );
    }
}