import React from 'react'
// ReactHook
import { useContext } from 'react'
// Css
import './sleek.css'
// Img
import img from '../../images/sleek-img/img.png'
// Context
import { Context } from '../../context/Context'
// react-router-dom
import { Link } from 'react-router-dom'
// Icon
import {RiArrowUpSFill} from 'react-icons/ri'

const Sleek = () => {
    const {logo, dark, langu, sleek, objec, drag, file, column, list, multi, pat, any, out, prof, upda, creat, manag, dep} = useContext(Context)
  return (
    <div className='sleek'>
        <div className="container">
            <div className="sleek_main">
                <p className={dark ? 'sleek_main_p text_black': 'sleek_main_p'}>{sleek[langu]}</p>
                <p className={dark ? 'sleek_main_p1 text_black': 'sleek_main_p1'}>{objec[langu]}</p>
                <p className={dark ? 'sleek_main_p2 text_black': 'sleek_main_p2'}>{drag[langu]}</p>
                <div className="sleek_main_div">
                    <div className="sleek_main_div_img">
                        <div className="sleek_main_div_img_btns">
                            <button className='sleek_main_div_img_btn sleek_main_div_img_btn_active'>{file[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{column[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{list[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{multi[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{pat[langu]}</button>
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <div className="sleek_main_div_text">
                        <p className='sleek_main_div_text_p'>{file[langu]}</p>
                        <p className='sleek_main_div_text_p1'>{any[langu]}</p>
                        <p className='sleek_main_div_text_p2'>{out[langu]}</p>
                        <div className="sleek_main_div_text_div">
                            <p className='sleek_main_div_text_div_p'>{prof[langu]}</p>
                            <p className='sleek_main_div_text_div_p1'>{upda[langu]}</p>
                            <div className='sleek_main_div_text_div_text'>
                                <p className='sleek_main_div_text_div_text_p'>{creat[langu]}</p>
                                <img src={logo} alt="" className='img'/>
                            </div>
                        </div>
                        <p className='sleek_main_div_text_div_p2'>{manag[langu]}</p>
                        <Link to='/' className='sleek_main_div_text_div_btn'><span className='sleek_main_div_text_div_btn_icon'><RiArrowUpSFill/></span><span className='sleek_main_div_text_div_btn_span'>{dep[langu]}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sleek