import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link }  from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';
import { Container, Typography, Paper, Card, CardContent } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '95%',
        padding: '50px',
        paddingTop: '10px',
        
    },
    strip: {
        minWidth: '100%',
        display: 'flex',   
    },
    featuredPod: {
        margin: '14px',
        marginBottom: '0',
        minWidth: 255,
        padding: '0',
        background: '#fefefe',
    },
    podImage: {
        boxShadow: '5px 5px 5px #444444',
        "&:hover, &:focus": {
            transform: 'scale(1.2)',    
        },
        transition: 'all 0.5s ease-in-out',
        
    }
})

const FeaturedStrip = ({ featuredArray }) => {
  
    const classes = useStyles();

    const featuredPodCasts = featuredArray.map((pod, ind) => {
        return(         
            <Card className={classes.featuredPod} variant="outlined">
                <CardContent>   
                    <Link to={ `/player${ind}`} key={`${pod.title}${ind}`}>
                        <ReactTooltip />
                        <div className={classes.featuredPod} data-tip={pod.title}>
                            <img src={pod.image_url} className={classes.podImage}/>
                        </div>
                    </Link>
                </CardContent>
            </Card>
        ) 
    })

    return (
        <Paper className={classes.root}>  
            <Typography variant="h4">Featured Podcasts</Typography>
            <Scrollbar style={ {width: '100%', minHeight: 290} } >
            <Container className={classes.strip}>
                {featuredPodCasts}
            </Container>

            </Scrollbar>  
        </Paper>
    )
}

export default FeaturedStrip;