import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Mask from '../../images/Mask.png';
import icon_8 from '../../images/icon-8.png';
import icon_9 from '../../images/icon-9.png';
import icon_10 from '../../images/icon-10.png';

import './style.scss';

const Ardipen = () => {
    return (
        <Container maxWidth="lg">
            <Box className="root">
                <Grid container spacing={3}>
                    <Grid item xs={5} md={6} justifyContent="center" alignItems="center">
                        <h2>Ардипен</h2>
                        <p>Ардипен – это техническое многофункциональное устройство, условно называемое нами магической ручкой,
                            без которого прочтение Ардибука практически невозможно. Возможность использования наушников и встроенные
                            в Ардипен специальные устройства, позволяют распознать и воспроизвести текст на грамотном и доступном
                            армянском языке. Говорящая ручка Ардипен – это ключ к прочтению всех книг Ардибук, а так же атласа,
                            который будет издан в ближайшем будущем. Для этого необходимо всего лишь приобрести Ардипен
                            и периодически, посещая наш сайт, бесплатно обновлять устройство для прочтения очередного Ардибука.</p>
                        <div className="ardipen-items">
                            <div className="ardipen-item">
                            <img src={icon_8} />
                            <p>Поднесите сюда Ардипен, а затем держите у любого изображения, чтобы узнать, что это такое.</p>
                            </div>
                            <div className="ardipen-item">
                            <img src={icon_9} />
                            <p>Поднесите сюда Ардипен, а затем держите у любого изображения, чтобы узнать, что это такое.</p>
                             </div>
                             <div className="ardipen-item">
                            <img src={icon_10} />
                            <p>Поднесите сюда Ардипен, а затем держите у любого изображения, чтобы узнать, что это такое.</p>
                            </div>
                            {/* <div className="ardipen-item">
                            <img src={icon_8} />
                            <p>Поднесите сюда Ардипен, а затем держите у любого изображения, чтобы узнать, что это такое.</p>
                            <img src={icon_9} />
                            <p>Поднесите сюда Ардипен, а затем держите у любого изображения, чтобы узнать, что это такое.</p>
                            </div> */}
                        </div>
                    </Grid>
                    <Grid item xs={5} md={6}>
                        <img src={Mask} />
                        <button>Купить</button>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default Ardipen;