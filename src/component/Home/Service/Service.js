import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import happyFriends from '../../../image/happy-friends.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 80,
        marginBottom: 80,
    },
    image: {
        width: 400,
    },
    grid: {
        margin: 60,
    }
}));

const Service = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item lg ={5} md={5} sm={12} xm={12}>
                    <img src={happyFriends} alt="" className={classes.image} />
                </Grid>
                <Grid item lg ={5} md={5} sm={12} xm={12} className={classes.grid}>
                    <div> <h1>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium architecto ad nihil ipsum perferendis reprehenderit iste. A tenetur sint deserunt?</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Service;