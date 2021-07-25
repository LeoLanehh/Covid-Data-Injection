import React from 'react';
import axios from 'axios';
import "../css/table.css";


class nosqlinjection extends React.Component {
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
        // total_cases: { "$where": 'sleep(1000) || trun' },

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



        // total_cases: {
        //     "$where": "sleep(5000)||True"
        // },

        posts: [],
        Header: ["iso_code", "continent", "location", "date", "total_cases", "total_death"]
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


    displayCovid19dataHeader = () => {
        return (
            <div className="covid19dataHeader__display">
                <tr>
                    <th>iso_code</th>
                    <th>continent</th>
                    <th>location</th>
                    <th>date</th>
                    <th>date</th>
                    <th>total_deaths</th>
                </tr>



            </div>
        );
    };



    render() {
        console.log('State: ', this.state);
        return (
            <div className="searcharea-showdata">
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
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <table id="dataTable">
                        <thead>
                            <tr>
                                <th>iso_code</th>
                                <th>continent</th>
                                <th>location</th>
                                <th>date</th>
                                <th>total_cases</th>
                                <th>total_deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.displayCovid19data(this.state.posts)} */}
                            {this.state.posts.map((post) => (
                                <tr>
                                    <td>{post.iso_code}</td>
                                    <td>{post.continent}</td>
                                    <td>{post.location}</td>
                                    <td>{post.date}</td>
                                    <td>{post.total_cases}</td>
                                    <td>{post.total_deaths}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>




            </div>


        );
    }


}

export default nosqlinjection;

