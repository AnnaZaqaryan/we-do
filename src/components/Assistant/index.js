import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { ReactComponent as Play } from '../../icons/play.svg';
import image_1 from '../../images/image_1.png';
import image_2 from '../../images/image_2.png';
import image_3 from '../../images/image_3.png';

import './style.scss';

const items = [
    {
        img: image_1,
        title: 'Lorem ipsum —  классический текст-рыба».',
        icon: <Play />
    },
    {
        img: image_2,
        title: 'orem ipsum dolor sit amet',
        icon: <Play />
    },
    {
        img: image_3,
        title: 'Lorem ipsum',
        icon: <Play />
    },
]

const Assistant = () => {
    return (

        <Container maxWidth="lg">
            <Box className="assistant">
                <h2>Видео помощник</h2>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {items.map((item) => (
                        <Grid item xs={5} md={4}>
                            <div className="item">
                                <img src={item.img} />
                                <div className="play-button">{item.icon}</div>
                                <p>{item.title}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>

    )
}

export default Assistant;