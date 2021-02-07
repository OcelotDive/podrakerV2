import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../images/podraker.png';
import SoundBars from './SoundBars';
import { findByLabelText } from '@testing-library/react';


const useStyles = makeStyles({
    header: {
        background: '#ffffff',
        alignItems: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        justifyContent: 'center',
        paddingTop: '20px',
    },
    logo: {
        width: '150px',
        zIndex: '999',
        padding: 'none'
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.header}>
                <img src={logo} className={classes.logo}/>
                <SoundBars />
            </Container>
        </>
    )
}

export default Header;