    import "./App.css";
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import React from "react";
    import hero from "./components/hero/hero";
    import Header from "./components/common/header/Header";

    function App() {
    return (
      <>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={hero} />
          </Switch>
        </Router>
      </>
    );
    }

    export default App;