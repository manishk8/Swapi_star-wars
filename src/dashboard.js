import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            searchValue: ""
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
        this.setState({ searchValue: event.target.value });
        // console.log("searchValue", searchValue);

        // const { planets, searchValue } = this.state;
        // console.log("planets cccccc", planets)

        // this.setState({ planets: planets && planets.length > 0 ? planets.filter(val => val.name === searchValue) : "nothing" })
        // console.log("planets 22222", planets)

    }



    render() {
        const { planets, searchValue } = this.state;
        const found_array = [];
        // console.log("planetsffffffffff: ", searchValue);
        // const list = planets && planets.length > 0 ? planets.map(val => val.name) : "null";
        // const ppppp = planets.map((val, index) => <li key={index}>{val.name}</li>)
        // console.log("planetsjjj ", planets);
        // planets.sort(function (a, b) {
        //     return a.population == b.population ? 0 : +(a.population > b.population) || -1;
        // })
        // planets.sort(function (a, b) {
        //     return a.population === "unknown" ? 0 : (Number(a.population) - Number(b.population));
        // });
        // planets = this.sortItems(planets);
        // console.log("planets-Sort ", planets)
        for (let val of planets) {
            // let obj = {};
            // console.log("val name: " + val.population);
            if (val.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                found_array.push(val.name);
            }
        }

        // }
        // found_array.sort(function (a, b) { return a - b });
        // console.log("found_array: ", found_array);



        // this.setState( planets : found_array);

        // const ppppp = planets.results.indexOf(searchValue);
        // console.log("list: ", ppppp);
        // console.log("planetState", planetState && planetState.results && planetState.results.length > 0 ? planetState.results.map(val => val.name) : "nothing")
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
                                found_array.map((val, index) => {
                                    return (
                                        // const hhh = 40 - ({ index } * 4);
                                        < li key={index} style={{ fontSize: (found_array.length - index) * 4 + 12, backgroundColor: "rgba" + `(210, 180, 140, 0.${found_array.length - index - 1})` }} > {val}</li>
                                    )
                                }

                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
