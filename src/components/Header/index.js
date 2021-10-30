import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ReactComponent as HeaderLogo } from '../../icons/header-logo.svg';
import { ReactComponent as Favourite } from '../../icons/favourite.svg';
import { ReactComponent as Basket } from '../../icons/basket.svg';
import { ReactComponent as Profile } from '../../icons/profile.svg';
import { ReactComponent as Play } from '../../icons/play.svg';
import './style.scss';

const Header = () => {

    return (
        <Box className="header">
            <Grid container spacing={2} justify="center">
                <Grid item xs={5} md={4} className="header-logo">
                    <HeaderLogo />
                </Grid>
                <Grid item xs={5} md={3}>
                    <div className="header-links">
                        <a href="#">Продукция</a>
                        <a href="#">Обновления</a>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>
                    </div>
                </Grid>
                <Grid item xs={5} md={4}>
                    <div className="header-icons">
                        <div className="play-button">
                            <Play />
                        </div>
                        <Favourite />
                        <Basket />
                        <Profile />
                    </div>
                  
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header;
