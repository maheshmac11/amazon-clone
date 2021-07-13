import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>  
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;  
