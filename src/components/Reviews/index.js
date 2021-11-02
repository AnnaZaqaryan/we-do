import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Ellipse_1 from '../../images/Ellipse-1.png';
import Ellipse_2 from '../../images/Ellipse-2.png';
import Ellipse_3 from '../../images/Ellipse-3.png';

import './style.scss';

const items = [
  {
    img: Ellipse_1,
    link: 'Читать все'
  },
  {
    img:  Ellipse_2,
    link: 'Читать все'
  },
  {
    img: Ellipse_3,
    link: 'Читать все'
  },
]

function Reviews() {

  return (
    <Container maxWidth="lg">
      <Box className="reviews">
        <h2>Отзывы</h2>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {items.map((item) => (
            <Grid item xs={4} md={4}>
              <div className="item-book">
                <div className="reviews-icons">
                  <div><img src={item.img} /></div>
                  <p className="title">Имя Фамилия</p>
                </div>
                <p className="sub-title">The book is wonderful, very colorful and informative, would make a perfect gift for your 
                curious little ones. And if by any reason Armenian is their second language, these books will motivate 
                your children to improve their knowledge...</p>
                <div className="reviews-link"><a href="#">{item.link}</a></div>
              </div>
            </Grid>
          ))}
        </Grid>
    
      </Box>

    </Container>
  );
}

export default Reviews;