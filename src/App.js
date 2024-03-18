import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

function App() {
  // const { user } = useContext(AuthContext);
  return (

    <Router>
      <div>
        he
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;