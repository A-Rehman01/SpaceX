import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '35px'
    },
    Progress: {
        color: 'black'
    }
}));

export function Progress() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.Progress} />
        </div>
    );
}
