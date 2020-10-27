import React from 'react';
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'Pages/LandingPage';
import DetailsPage from 'Pages/DetailsPage';
import Example from 'Pages/Example';
import Checkout from 'Pages/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
