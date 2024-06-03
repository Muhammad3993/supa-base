import React from 'react'
// ReactHook
import { useContext } from 'react'
// Css
import './hero.css'
// Context
import { Context } from '../../context/Context'
// Img
import img1 from '../../images/hero-img/img1.png'
// react-router-dom
import { Link } from 'react-router-dom'

const Hero = () => {
    const {img, dark, langu, storage, store, an, withh, start1} = useContext(Context)
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero_main">
                <div className="hero_main_text">
                    <div className="hero_main_text_delet">
                        <img src={img} alt="" />
                        <p className={dark ? 'hero_main_text_delet_p text_black' : 'hero_main_text_delet_p'}>{storage[langu]}</p>
                    </div>
                    <p className={dark ? 'hero_main_text_p text_black   ' :'hero_main_text_p'}>{store[langu]}</p>
                    <p className={dark ? 'hero_main_text_p1 text_black' : 'hero_main_text_p1'}>{an[langu]}</p>
                    <p className={dark ? 'hero_main_text_p2 text_black' : 'hero_main_text_p2'}>{withh[langu]}</p>
                    <Link to='/' className='btn'>{start1[langu]}</Link>
                </div>
                <div className="hero_main_img">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero