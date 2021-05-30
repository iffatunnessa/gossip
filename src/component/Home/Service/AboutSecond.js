import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import happyFriends from '../../../image/happy-friends.jpg';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 80,
        marginBottom: 80,
    },
    image: {
        width: 500,
        textAlign:"center",
        paddingLeft: "20%"
    },
    grid: {
        margin: 40,
        paddingLeft:"5%",
        textAlign: "Left",
    }
}));

const AboutSecond = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item lg={6} md={6} sm={12} xm={12}>
                    <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <img src={happyFriends} alt="" className={classes.image} />
                    </Slide>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xm={12} className={classes.grid}>
                    <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <div> <h1 style={{fontSize:50}}>Make a Hangout Place Virtually!</h1>
                            <p style={{fontSize:25}}>Stay Conneted with your <span style={{color:"salmon"}}>Friends</span> and make a place that you deserve.</p>
                        </div>
                    </Slide>
                </Grid>
            </Grid>
        </div >
    );
};

export default AboutSecond;