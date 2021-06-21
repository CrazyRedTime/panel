import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Login from "./components/Login/Login";
import Panel from "./components/Panel/Panel";
import { getIsLoggedIn } from "./redux/login/selectors";
import api from './api/api';
import { useEffect } from "react";

const App = () => {
  
  useEffect(() => {
    api.getOrdersfromApi();
  }, []);

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {Cookies.get('accessToken') ? <Redirect to="/panel" /> : <Redirect to="/admin" />}
        </Route>
        <Route exact path="/admin">
          {isLoggedIn ? <Redirect to="/panel" /> : <Login />}
        </Route>
        <Route exact path="/panel">
          {isLoggedIn ? <Panel /> : <Redirect to="/admin" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;