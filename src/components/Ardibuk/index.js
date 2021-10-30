import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import ardibook from '../../images/ardibook.png'
import './style.scss';

const Ardibuk = () => {

    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={5} md={6}>
                    <h2>Что такое Ардибук?</h2>
                    <p>Ардибук – это интерактивная познавательная аудиокнига, содержащая в себе большое количество персонажей,
                        фотографий и аудио материалов. Книга предназначена для детей младшего возраста (от 3-х лет).
                        <br />
                        <br />
                        Благодаря волшебной ручке Ардипен, способной общаться или дать ознакомительную информацию о любом персонаже из
                        Ардибук простым и понятным текстом, Ваш ребенок становится одновременно наблюдателем и участником, и игры, и обучения.
                        Простота текстов аудио воспроизведения делает доступным
                        <br />
                        <br />
                        Ардибук для детей, не умеющих читать. Ардибук – Ваш лучший помощник в
                        вопросе общего развития и грамотного обучения Вашего ребенка.</p>
                    <button >Больше о нас</button>
                </Grid>
                <Grid item xs={5} md={6}>
                    <img src={ardibook} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Ardibuk;