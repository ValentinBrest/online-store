import React from 'react';
import cl from './Footer.module.css'

const Footer = () => {
	return (
        <div className={cl.footer}>
            <div className="container">
                <div className={cl.footer__wrap}>
                    <div className={cl.footer__box}>
                        <div>©</div>
                        <div>2022</div>
                        <a href="https://github.com/ValentinBrest">github</a>
                    </div>

                    <a href="https://rs.school/js-stage0/" className={cl.footer__rss}>
                        Rolling Scopes School
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;