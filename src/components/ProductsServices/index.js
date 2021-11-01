import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { ReactComponent as Favourite } from '../../icons/favourite.svg';
import book_1 from '../../images/book-1.png';
import book_2 from '../../images/book-2.png';
import book_3 from '../../images/book-3.png';

import './style.scss';

const items = [
    {
        img: book_1,
    },
    {
        img: book_2,
    },
    {
        img: book_3,
    }
]


const ProductsServices = () => {

    return (
        <Container maxWidth="lg">
            <Box className="productsServices">
                <h2>Продукция</h2>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {items.map((item) => (
                        <Grid item xs={4} md={4}>
                            <div className="item-book">
                                <img src={item.img} />
                                <p className="title">Набор Ардибук 3 в 1</p>
                                <p className="sub-title">48 000 драм</p>
                                <div className="icons">
                                    <button>Купить</button>
                                    <div className="icon"><Favourite /></div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                <div className="link"><a href="#">Все продукты</a></div>
            </Box>

        </Container>

    )
}

export default ProductsServices;