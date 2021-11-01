import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import icon_1 from '../../images/icon-1.png';
import icon_2 from '../../images/icon-2.png';
import icon_3 from '../../images/icon-3.png';
import icon_4 from '../../images/icon-4.png';
import icon_5 from '../../images/icon-5.png';
import icon_6 from '../../images/icon-6.png';
import icon_7 from '../../images/icon-7.png';

import './style.scss';

const items = [
    {
        img: icon_1,
        title: 'Возможность подключения наушников'
    },
    {
        img: icon_2,
        title: 'Возможность обновления'
    },
    {
        img: icon_3,
        title: 'Она проста но очень познавательна'
    },
    {
        img: icon_4,
        title: 'Сделано из эко-материалов'
    },
    {
        img: icon_5,
        title: 'Она проста но очень познавательна'
    },
    {
        img: icon_6,
        title: 'Сделано из эко-материалов'
    },
    {
        img: icon_7,
        title: 'Сделано из эко-материалов'
    }
]

const ArdibukAdvantages = () => {

    return (

        <Container maxWidth="lg">
            <Box className="ardibukAdvantages">
                <h2>Преимущества Ардибука</h2>
                <Grid container spacing={2}>
                    <div className="item-book">
                            {items.map((item) => (
                                <Grid item xs={8} sm={6} md={3} className="item-book-grid">
                                    <div className="item">
                                        <div>
                                            <img src={item.img} />
                                        </div>
                                        <span>{item.title}</span>
                                    </div>
                                </Grid>
                            ))}
                    </div>
                </Grid>
            </Box>
        </Container>

    )
}

export default ArdibukAdvantages;