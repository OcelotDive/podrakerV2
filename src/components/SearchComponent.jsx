/* eslint-disable no-use-before-define */
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        background: '#ffffff',
        alignItems: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        justifyContent: 'center',
        paddingTop: '20px',
        marginTop: '15px',
        marginBottom: '10px',
        paddingBottom: '30px'
    },
  
})


export default function FreeSolo() {
    const classes = useStyles();
  return (
 
      <Container className={classes.root}>
          <TextField
          label="Search input"
          margin="normal"
          variant="outlined"
          />

      </Container>

  );
}

