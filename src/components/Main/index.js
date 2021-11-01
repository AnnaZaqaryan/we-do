import React from 'react';
import { Box, Grid } from '@material-ui/core';
import image from '../../images/image.png';
import mainImage from '../../images/main-image.png'
import './style.scss';

const Main = () => {

    return (
        <Box className="main">
         
            <Grid container  justifyContent="center">
                <Grid item xs={10} sm={10} md={6}>
                    <div className="main-image">
                        <img src={mainImage} />
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={6}>
                    <div className="main-text">
                        <h1>Интерактивно <br />развивающая книга</h1>
                        <p>Первая интерактивно развивающая книга на армянском <br /> языке… чтобы наши дети говорили по армянский</p>
                        <button>Купить</button>
                    </div>
                    <div className="coming-soon">
                        <img src={image} />
                        <div className="coming-soon-text">
                            <p>Скоро в продаже!</p>
                            <span>Lorem ipsum — классический текст-«рыба». <br /> Является искажённым отрывком из.</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main;
