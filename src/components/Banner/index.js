import React from 'react';
import { Box, Container } from '@material-ui/core';

import banner from '../../images/book-cover.png';
// import bannerMobile from '../../images/banner-mobile.png';
import './style.scss';

const Banner = () => {
    return (
        <Container maxWidth="lg">
            <Box className="banner">
                <div className="coming-soon-text">
                    <img src={banner} className="main-image" />
                    <div className="text">
                        <p>Скоро в продаже!</p>
                        <span>Lorem ipsum — классический текст-«рыба».<br /> Является искажённым отрывком из философского<br /> трактата Марка Туллия Цицерона.</span>
                    </div>
                </div>
            </Box>
        </Container >

    )
}

export default Banner;