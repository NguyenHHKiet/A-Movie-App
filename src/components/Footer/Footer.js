import React from 'react'
import logo from '../../assets/tmovie.png'
import bg from '../../assets/footer-bg.jpg'
import '../Footer/Footer.scss'

function Footer() {
  return (
    <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <a href="/">tMovies</a>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <a href="/">Home</a>
                        <a href="/">Contact us</a>
                        <a href="/">Term of services</a>
                        <a href="/">About us</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="/">Live</a>
                        <a href="/">FAQ</a>
                        <a href="/">Premium</a>
                        <a href="/">Pravacy policy</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="/">You must watch</a>
                        <a href="/">Recent release</a>
                        <a href="/">Top IMDB</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer