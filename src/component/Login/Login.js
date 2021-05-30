import React from 'react';
import './Login.css'
import {auth,provider} from '../../firebase';
import Button from '@material-ui/core/Button';

const Login = () => {
    const signIn =()=>{
    auth.signInWithPopup(provider).catch((error)=>{
        alert('error.message')
    })


    }
    return (
        <div className="main_div">
          <div className="img_div">
              <img src="https://www.shutterstock.com/search/gossip+logo" alt="" />
          </div>
        <div className="child_div">
        <Button onClick={signIn} variant="contained" color="primary">
         Google Sign In
        </Button>
        
        </div>
          
        </div>
    );
};

export default Login;