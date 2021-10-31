import React from 'react';
import { Box, Grid } from '@material-ui/core';
import PhoneCall from '../../images/phone-call.png';
import Email from '../../images/email.png';
import Facebook_footer from '../../images/facebook-footer.png';
import Instagram from '../../images/instagram.png';
import Youtube from '../../images/youtube.png';
import './style.scss';


const Footer = () => {
    return (

        <Box className="footer">
            <Grid container justifyContent="center" alignItems="baseline">
                <Grid item xs={10} sm={10} md={3}>
                    <p>Контакты</p>
                    <p>ЧаВО</p>
                    <p>Политика конфиденциальности</p>
                    <p>Условия оплаты</p>
                    <p>Условия возврата и доставка</p>
                </Grid>
                <Grid item  xs={10} sm={10} md={3}>
                    <div className="footer-item">
                        <div><img src={PhoneCall} /></div>
                        <span>+374 93 80 89 30</span>
                    </div>
                    <div className="footer-item">
                        <div><img src={Email} /></div>
                        <span>info@ardibook.am</span>
                    </div>
                    <div className="footer-item">
                        <img src={Facebook_footer} />
                        <img src={Instagram} />
                        <img src={Youtube} />
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={3}>
                    <p className="footer-text">Подпишитесь и узнавайте новости первыми.</p>
                    <div className="footer-line">
                        <p>Напишите ваш е-mail</p>
                        <p className="footer-text">Отправить</p>
                    </div>
                </Grid>
                <Grid  item md={9} className="footer-bottom">
                    <p>© 2020 ARDIBOOK | All Rights Reserved</p>
                    <p className="footer-right">Powered by WEDO Creative Solutions</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;