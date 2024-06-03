import React from 'react'
// ReactHook
import { useContext } from 'react'
// Css
import './simple.css'
// Img
import img from '../../images/simple1-img/img.png'
// Icon
import {BsArrowUpRight} from 'react-icons/bs'
// Context
import { Context } from '../../context/Context'


// react-router-dom
import { Link } from 'react-router-dom'

const Simple = () => {
    const {dark, langu, integ1, lev, store1, expore, pub, pub1, authe} = useContext(Context)
  return (
    <div className='simple simple1'>
        <div className="container">
            <div className="simple_main">
                <div className="simple_main_text">
                    <p className={dark ? 'simple_main_text_p text_black' : 'simple_main_text_p'}>{integ1[langu]}</p>
                    <p className={dark ? 'simple_main_text_p1 text_black' : 'simple_main_text_p1'}>{lev[langu]}</p>
                    <p className={dark ? 'simple_main_text_p2 text_black' : 'simple_main_text_p2'}>{store1[langu]}</p>
                    <Link to='/' className='simple_main_text_btn'><BsArrowUpRight className='simple_main_text_btn_icon'/> {expore[langu]}</Link>
                </div>
                <div className="simple_main_img">
                    <div className="sleek_main_div_img_btns">
                        <button className='sleek_main_div_img_btn sleek_main_div_img_btn_active'>{pub[langu]}</button>
                        <button className='sleek_main_div_img_btn'>{pub1[langu]}</button>
                        <button className='sleek_main_div_img_btn'>{authe[langu]}</button>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Simple;