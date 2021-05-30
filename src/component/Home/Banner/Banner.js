import React, { useState } from 'react';
import friends from "../../../image/friends-banner.jpg";
import NavBar from '../AppBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        paddingLeft: "5%",
        textAlign: "center",
        paddingBottom: 100,
        color: "white"
    },
    bannerImage: {
        paddingTop: 39,
        paddingLeft: "50px",
        textAlign: "center",
        width: "90%",
        paddingBottom: 10
    },
    banner: {
        background: 'linear-gradient(180deg, rgba(69,2,251,1) 0%, rgba(111,35,187,1) 0%, rgba(112,36,189,1) 0%, rgba(107,24,194,1) 39%, rgba(108,119,230,1) 100%)',
        paddingBottom: 10
    }
}));
const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <NavBar />
            <div className={classes.root}>
                <Grid container >
                    <Grid item lg={5} md={5} sm={12} xm={12}>
                        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
                            <img className={classes.bannerImage} src={friends} alt="friends" />
                        </Slide>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xm={12} className={classes.grid}>
                        <div>
                            <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                                <h1 style={{fontSize:55}}>Connect With <br/> Your Community</h1>
                            </Slide>
                            <Slide direction="left" in={true} timeout={2000} mountOnEnter unmountOnExit>
                                <p></p>
                            </Slide>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default Banner;