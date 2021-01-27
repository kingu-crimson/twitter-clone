import './App.css';
import Bookmarks from './Components/Pages/Bookmarks';
import Explore from './Components/Pages/Explore';
import Home from  './Components/Pages/Home';
import Profile from './Components/Pages/Profile'
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';




import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/Home" exact component={Home} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="/Explore" exact component={Explore} />
      <Route path="/Bookmarks" exact component={Bookmarks} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
