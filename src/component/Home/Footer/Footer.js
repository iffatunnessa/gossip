import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(180deg, rgba(69,2,251,1) 0%, rgba(111,35,187,1) 0%, rgba(112,36,189,1) 0%, rgba(107,24,194,1) 39%, rgba(108,119,230,1) 100%)',
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