import React, { Component } from 'react';
import "./styles/App.scss";
import Home from './pages/Home';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: null,
            loading: true,
        };
    }

    render() {


        return (
            <Home />
        );
    }
}

export default App;
