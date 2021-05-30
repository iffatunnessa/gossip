import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 80,
        textAlign:"center"
    },
    loginBtn: {
        width: 100,
        height: 50,
        borderRadius: "30px",
        marginRight: 150
    }
}));

const Service = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                <div> <h1 style={{ fontSize: 50 }}>Reliable Source of Connectivity</h1>
                    <p style={{ fontSize: 25 }}>Stay Conneted with your <span style={{ color: "salmon" }}>Friends</span> and make a place that you deserve.</p>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.loginBtn}
                    >
                        Login
                </Button>
                </div>
            </Slide>
        </div >
    );
};

export default Service;