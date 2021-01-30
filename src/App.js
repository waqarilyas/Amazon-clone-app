import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Login from './components/Login'
import { auth } from './firebase'
import Checkout from './components/Checkout'
import { useStateValue } from './StateManagment/StateProvider'
import './App.css';


function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
