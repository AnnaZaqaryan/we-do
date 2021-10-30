import React from 'react';
import { Box, Grid } from '@material-ui/core';
import image from '../../images/image.png';
import './style.scss';

const Main = () => {

    return (
        <Box className="main">
            <Grid container >
                <Grid item xs={5} md={5}>
                
                </Grid>
                <Grid item xs={5} md={6}>
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
