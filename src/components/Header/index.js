import React, { useState, Fragment } from 'react';
import { Box, Grid, Modal } from '@material-ui/core';
import { ReactComponent as HeaderLogo } from '../../icons/header-logo.svg';
import { ReactComponent as Favourite } from '../../icons/favourite.svg';
import { ReactComponent as Basket } from '../../icons/basket.svg';
import { ReactComponent as Profile } from '../../icons/profile.svg';
import Burger from '../../images/burger.png'
import './style.scss';
import Select from '../Select';
const Header = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box className="header">
            <Grid container spacing={2} justify="center">
                <Grid item xs={5} md={4} className="header-logo">
                    <HeaderLogo />
                </Grid>
                {/* <div>
                        <img src={Burger} />
                    </div> */}

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
                            <div onClick={handleOpen} className="play-btn"></div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box style={{
                                    background: '#fff', height: '401px', width: '800px', margin: '132px auto'
                                }}>
                                    <div className="video-responsive">
                                        <iframe
                                            width="800"
                                            height="400"
                                            src={`https://www.youtube.com/embed/`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                    </div>
                                </Box>
                            </Modal>
                            <Favourite />
                            <Basket />
                            <Profile />
                            <Select />
                        </div>
                    </Grid>
            </Grid>
        </Box>
    )
}

export default Header;
