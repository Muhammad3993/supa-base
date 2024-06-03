import React from 'react'
// ReactHook
import { useContext } from 'react'
// Css
import './simple1.css'

// Img
import img from '../../images/simple-img/img.png'
import img1 from '../../images/simple-img/img1.png'
import img2 from '../../images/simple-img/img2.png'
// Context
import { Context } from '../../context/Context'


// react-router-dom
import { Link } from 'react-router-dom'

const Simple1 = () => {
    const {dark, langu, simpl, built, fasts, integ2, serve, coming, auoto, resizes, file1, file2, file3, file4, file5} = useContext(Context)
    return (
        <div className='simple'>
            <div className="container">
                <div className="simple_main">
                    <div className="simple_main_text">
                        <p className={dark ? 'simple_main_text_p text_black': 'simple_main_text_p'}>{simpl[langu]}</p>
                        <p className={dark ? 'simple_main_text_p1 text_black': 'simple_main_text_p1'}>{built[langu]}</p>
                        <p className={dark ? 'simple_main_text_p2 text_black': 'simple_main_text_p2'}>{fasts[langu]}</p>
                        <div className="simple_main_text_div">
                            <div className="simple_main_text_div1">
                                <div className="simple_main_text_div1_img">
                                    <img src={img} alt="" />
                                </div>
                                <p className='simple_main_text_div1_p'>{integ2[langu]}</p>
                                <p className='simple_main_text_div1_p1'>{serve[langu]}</p>
                                <Link to='/' className='simple_main_text_div1_btn'>{coming[langu]}</Link>
                            </div>
                            <div className="simple_main_text_div1">
                                <div className="simple_main_text_div1_img">
                                    <img src={img1} alt="" />
                                </div>
                                <p className='simple_main_text_div1_p'>{auoto[langu]}</p>
                                <p className='simple_main_text_div1_p1'>{resizes[langu]}</p>
                                <Link to='/' className='simple_main_text_div1_btn'>{coming[langu]}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="simple_main_img">
                        <div className="sleek_main_div_img_btns">
                            <button className='sleek_main_div_img_btn sleek_main_div_img_btn_active'>{file1[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{file2[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{file3[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{file4[langu]}</button>
                            <button className='sleek_main_div_img_btn'>{file5[langu]}</button>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Simple1;