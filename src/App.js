import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import ChatArea from './component/ChatArea/ChatArea';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {user ? (
            <Route path="/message">
              <ChatArea />
            </Route>
          ) : (
            <Route path="/home">
              <Home />
            </Route>
          )} 
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>


  );
};

export default App;