import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';

<<<<<<< HEAD
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
=======
import './App.css';
import Chat from './component/Chat';
import {useSelector} from 'react-redux'
import Sidebar from './component/Sidebar';
import {selectUser} from './component/userSlice';


function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
        <h2>you need to login</h2>
      )}
    </div>
>>>>>>> b48f38f20a7e438b5b969f64d5f6367929b6bd65
  );
};

export default App;