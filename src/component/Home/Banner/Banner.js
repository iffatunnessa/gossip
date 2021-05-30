import React from 'react';
import './Banner.css';
import friends from "../../../image/friends-banner.jpg";
import NavBar from '../AppBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        paddingLeft :20,
    }
}));
const Banner = () => {
    const classes = useStyles();
    return (
        <div className="banner">
            <NavBar />
            <div className={classes.root}>
                <Grid container >
                    <Grid item lg={5} md={5} sm={12} xm={12}>
                        <img className="banner-image" src={friends} alt="friends" />
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xm={12} className={classes.grid} spacing={2}>
                        <div> <h1>Lorem ipsum dolor sit.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium architecto ad nihil ipsum perferendis reprehenderit iste. A tenetur sint deserunt?</p>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </div>
    );
};

export default Banner;