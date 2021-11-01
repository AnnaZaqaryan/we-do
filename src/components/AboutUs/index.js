import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import aboutImage from '../../images/about-us.png';
import './style.scss';

const AboutUs = () => {
    return (
        <Container maxWidth="lg">
            <Box className="about-us">
                <h2>Немного о нас</h2>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={8}>
                        <img src={aboutImage} className="about" />
                        <a className="play-btn" href="#"></a>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default AboutUs;