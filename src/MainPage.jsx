import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchComponet from './components/SearchComponent';

import Container from '@material-ui/core/Container';
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
    },
    logo: {
        width: '150px',
        zIndex: '999',
        padding: 'none'
    }
})

const MainPage = () => {
    const classes = useStyles();
    const [featuredArray, setFeaturedArray] = useState([]);

    useEffect(() => {
        axios.get('https://api.spreaker.com/v2/explore/lists/108/items?limit=6').then((response)=>{
            setFeaturedArray(response.data.response.items);
            console.log(featuredArray)        
        })
    })

    return (
        <Container>
           <Header />
           <SearchComponet />
        </Container>
    )
}

export default MainPage;