import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import gossipLogo from '../../../image/gossip-logo-white.png';
import { Slide } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: 300,
        paddingTop: 18,
        paddingLeft: 150
    },
    loginBtn: {
        width: 100,
        height: 50,
        borderRadius: "30px",
        marginRight: 150
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div position="absolute">
                <Slide direction="down" in={true} timeout={1000} mountOnEnter unmountOnExit>
                    <Toolbar>
                        <div variant="h6" className={classes.title}>
                            <img src={gossipLogo} alt='' className={classes.logo} />
                        </div>
                        <Button
                            variant="contained"
                            color="default"
                            size="large"
                            className={classes.loginBtn}
                            component={Link}
                            to ="/login"
                        >
                            Login
                    </Button>
                    </Toolbar>
                </Slide>
            </div>
        </div>
    );
}

export default NavBar;