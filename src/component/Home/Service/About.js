import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import fourFriend from '../../../image/four friends.jpg';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 80,
        marginBottom: 80,
    },
    image: {
        width: 400,
        paddingLeft: "20%"
    },
    grid: {
        margin: 70,
        paddingLeft: 30,
        textAlign: "Right",
    }
}));
const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item lg={5} md={5} sm={12} xm={12} className={classes.grid}>
                    <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <div> <h1 style={{fontSize:50}}>Missing Your Friends in this Pandemic?</h1>
                            <p style={{fontSize:25}}>You've come across a vitual world where you can maintain <span style={{color:"salmon"}}>social distancing</span> but Stay More Connected with Gossip.</p>
                        </div>
                    </Slide>
                </Grid>
                <Grid item lg={5} md={5} sm={12} xm={12}>
                    <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <img src={fourFriend} alt="" className={classes.image} />
                    </Slide>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;