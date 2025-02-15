import axios from 'axios';
import React from "react";

export default class Autocomplete extends React.Component {
    constructor() {
        super();

        this.state = { countries: [] };
    }

    onChange = async (value) => {
        if (!value.trim()) {
            this.updateCountries([]);

            return;
        }

        try {
            const res =  await axios.get('/countries', { params: { term: value.trim() } });
            this.updateCountries(res.data);
        } catch {
            this.updateCountries([]);
        }
    }

    updateCountries = (countries) => {
        this.setState({ countries });
    };

    render() {
        const { countries } = this.state;

        return (
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Enter Country" onChange={(e) => this.onChange(e.target.value)} />
                </form>
                {countries.length > 0 && (
                    <ul>
                        {countries.map(country => <li key={country}>{country}</li>)}
                    </ul>
                )}
            </div>
        );
    }
}