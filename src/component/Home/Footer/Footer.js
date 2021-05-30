import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "blue",
        padding:80,
        color: "white",
        textAlign: "center"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                   Create Your Own Community!
                </Grid>
            </Grid> 
            <small >@ALL RIGHTS RESERVE TO GOSSIP</small>
        </div>
    );
};

export default Footer;