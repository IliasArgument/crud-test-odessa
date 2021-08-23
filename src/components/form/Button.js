import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    root: {
        margin: '2px',
        fontSize: '12px'
    },
    btn: {
        width: '120px',
        height: '30px',
        fontSize: '12px'
    }
}));

export default function ContainedButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant='contained' color={props.color} onClick={props.onClick} type={props.type} className={classes.btn}>
                {props.title}
            </Button>
        </div>
    );
}