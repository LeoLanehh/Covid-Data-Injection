import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { BaseTable } from 'ali-react-table'

class nosqlinjection extends React.Component {

    // {"$ne": "AFG"}
    //{"$ne": "Asia"}
    state = {

        // Injection Example:
        // 1.find iso_code not equal "AFG", continent not equal "Asia", total_cases greater than 500
        // iso_code: { "$ne": "AFG" },
        // continent: { "$ne": "Asia" },
        // total_cases: { "$gte": 500 },

        // 2. find iso_code not equal "AFG", continent not equal "Asia", but total_cases between 100 to 1000
        // iso_code: { "$ne": "AFG" },
        // continent: { "$ne": "Asia" },
        // total_cases: { "$gte": 100, "$lte": 1000 },

        // 3. find iso_code = "SWZ", continent = "Africa", total_cases <= 5000
        // iso_code: "SWZ",
        // continent: "Africa",
        // total_cases: { "$lte": 5000 },

        // 4. find iso_code = "AFG" or "CIV", continent = "Asia" or "Africa", total_cases between 10 - 500
        // iso_code: { "$in": ["AFG", "CIV"] },
        // continent: { "$in": ["Asia", "Africa"] },
        // total_cases: { "$gte": 10, "$lte": 500 },






        iso_code: "",
        continent: "",
        total_cases: "",
        posts: []
    };

    componentDidMount = () => {
        this.getCovid19data();
    };

    getCovid19data = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
                console.log('Data has been received!!!');
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });

    }





    handleChange = ({ target }) => {
        const { name, value } = target;


        this.setState({ [name]: value });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            iso_code: this.state.iso_code,
            continent: this.state.continent,
            total_cases: this.state.total_cases
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                // console.log(payload.iso_code);
                // console.log(payload.continent);
                //console.log('Data has been sent to the server');
                this.resetUserInpts();
                this.getCovid19data();
            })
            .catch(() => {
                console.log('Internal server error');
            });;


    };


    resetUserInpts = () => {
        this.setState({
            iso_code: '',
            continent: '',
            total_cases: ''
        });
    };

    displayCovid19data = (posts) => {
        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div className="covid19data__display">
                <p>iso_code: {post.iso_code}</p>
                <p>continent: {post.continent}</p>
                <p>location: {post.location}</p>
                <p>date: {post.date}</p>
                <p>total_cases: {post.total_cases}</p>
                <p>total_deaths: {post.total_deaths}</p>
                <p>-----------------------------------------------</p>

            </div>
        ));
    };



    render() {
        console.log('State: ', this.state);
        return (
            <div>
                <h1>Search</h1>

                <form onSubmit={this.submit}>
                    <div className="form-input">
                        input the iso_code:
                        <input
                            type="text"
                            placeholder="Enter your search"
                            name="iso_code"
                            value={this.state.iso_code}
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="form-input">
                        input the continent:
                        <input
                            type="text"
                            placeholder="Enter your search"
                            name="continent"
                            value={this.state.continent}
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="form-input">
                        input the total_cases:
                        <input
                            type="number"
                            placeholder="Enter your search"
                            name="total_cases"
                            value={this.state.total_cases}
                            onChange={this.handleChange}

                        />
                    </div>
                    <button>Submit</button>
                </form>
                <div className="covid19datamodel">
                    {this.displayCovid19data(this.state.posts)}
                </div>
            </div>


        );
    }


}

export default nosqlinjection;

