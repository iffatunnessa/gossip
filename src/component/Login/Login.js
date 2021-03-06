import React from 'react';
import './Login.css'
import { auth, provider } from '../../firebase';
import Button from '@material-ui/core/Button';
import gossipLogoBlack from '../../image/gossip-logo-black.png'
import gossipLogoPurple from '../../image/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => {
            alert('error.message')
        })
    }
    return (
        <div className="main_div">
            <div className="img_div">
                <img className='logoLogin' src={gossipLogoPurple} alt="" />
                <img src={gossipLogoBlack} alt="" />
            </div>
            <div className="child_div">
                <Button onClick={signIn} component={Link} to="/message" variant="contained" color="primary" size='large'>
                    Google Sign In
                </Button>
            </div>
            <div>
                <Button className="home-btn" component={Link} to="/home" variant="contained" color="default" size='small'>
                    Go Back to Home
                </Button>
            </div>
        </div>
    );
};

export default Login;