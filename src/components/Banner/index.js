import React from 'react';
import { Box, Container } from '@material-ui/core';

import banner from '../../images/book-cover.png';

import './style.scss';

const Banner = () => {
    return (
        <Container maxWidth="lg">
            <Box className="banner">
                <div className="coming-soon-text">
                    <div className="text">
                    <p>Скоро в продаже!</p>
                    <span>Lorem ipsum — классический текст-«рыба».<br/> Является искажённым отрывком из философского<br/> трактата Марка Туллия Цицерона.</span>
                    </div>
                </div>
                <img src={banner} />
            </Box>
        </Container >

    )
}

export default Banner;