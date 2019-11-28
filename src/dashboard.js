import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            searchValue: "",
            flag: false
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/planets')
            .then(res => res.json())
            .then(json => {
                if (json && json.results) {
                    let items = json.results.map(o => {
                        let population = o.population === "unknown" ? 0 : Number(o.population)
                        o['population'] = population;
                        return o;
                    })
                    let planets = this.sortItems(items);
                    this.setState({
                        planets: planets
                    });
                } else {
                    this.setState({
                        planets: []
                    })
                }
            })
    }

    handleLogOut = () => {
        this.props.history.push("/");
    }

    sortItems = (items) => {
        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < items.length; i++) {
                if (items[i - 1].population < items[i].population) {
                    done = false;
                    var tmp = items[i - 1];
                    items[i - 1] = items[i];
                    items[i] = tmp;
                }
            }
        }
        return items;

    }

    handleInputChange = (event) => {
        var val = event.target.value
        this.setState({ searchValue: val });

        if (val !== "") {
            this.setState({ flag: true });
        }
        else {
            this.setState({ flag: false });
        }

    }

    getPopolation = () => {
        var { planets } = this.state;
        console.log("population", planets);
    }

    render() {
        const { planets, searchValue, flag } = this.state;
        const found_array = [];
        for (let val of planets) {
            if (val.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                found_array.push(val.name);
            }
        }

        return (
            <div className="container">
                <header className="header">
                    <h3>Logo</h3>
                    <button onClick={this.handleLogOut} className="btnCustom" >Log Out</button>
                </header>
                <div className="wrapper">
                    <div className="searchBlock">
                        <form>
                            <input
                                placeholder="Search for..."
                                value={searchValue}
                                onChange={this.handleInputChange}
                            />
                        </form>
                    </div>
                    <div className="displayBlock">
                        <ul>
                            {
                                flag === true && found_array.map((val, index) => {
                                    return (
                                        < li onClick={this.getPopolation} key={index} style={{ fontSize: (found_array.length - index) * 4 + 12, backgroundColor: "rgba" + `(210, 180, 140, 0.${found_array.length - index - 1})` }} > {val}</li>
                                    )
                                }

                                )
                            }
                        </ul>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
