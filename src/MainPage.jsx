import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchComponet from './components/SearchComponent';
import FeaturedStrip from './components/FeaturedStrip';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
        justifyContent: 'center',
        paddingTop: '20px',
    },
})

const MainPage = () => {
    const classes = useStyles();
    const [featuredArray, setFeaturedArray] = useState([]);

    useEffect(() => {
        axios.get('https://api.spreaker.com/v2/explore/lists/108/items?limit=6').then((response)=>{
            setFeaturedArray(response.data.response.items);      
        })
    })

    return (
        <Container className={classes.root}>
           <Header />
           <SearchComponet />
           <FeaturedStrip featuredArray={ featuredArray }/>
        </Container>
    )
}

export default MainPage;