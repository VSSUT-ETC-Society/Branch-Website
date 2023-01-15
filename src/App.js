    import "./App.css";
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import React from "react";
    import hero from "./components/hero/hero";

    function App() {
    return (
        <>
        <Router>
            <Switch>
            <Route exact path="/" component={hero} />
            </Switch>
        </Router>
        </>
    );
    }

    export default App;