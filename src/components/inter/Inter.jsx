import React from 'react'
// ReactHook
import { useContext } from 'react'
// Css
import './inter.css'
// Context
import { Context } from '../../context/Context'
// Img
import img1 from '../../images/inter-img/img.png'
import img2 from '../../images/inter-img/img1.png'
import img3 from '../../images/inter-img/img2.png'
import img4 from '../../images/inter-img/img3.png'

const Inter = () => {

    const {img, AiOutlineClose, dark, langu, inter, integ, light, thin} = useContext(Context)

  return (
    <div className='inter'>
        <div className="container">
            <div className="inter_main">
                <div className="inter_main_div">
                    <div className="inter_main_div_photos">
                        <div className="inter_main_div_photos_div">
                            <div className="inter_main_div_photos_img">
                                <img src={img} alt="" />
                                <AiOutlineClose className='inter_main_div_photos_img_icon'/>
                            </div>
                            <div className="inter_main_div_photos_img">
                                <img src={img1} alt="" />
                                <AiOutlineClose className='inter_main_div_photos_img_icon'/>
                            </div>
                            <div className="inter_main_div_photos_img">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="inter_main_div_photos_text">
                            <p className={dark ? 'inter_main_div_photos_text_p text_black': 'inter_main_div_photos_text_p'}>{inter[langu]}</p>
                        </div>
                    </div>
                    <p className='inter_main_div_p'>{integ[langu]}</p>
                </div>

                <div className="inter_main_div">
                    <div className="inter_main_div_photos">
                        <div className="inter_main_div_photos_div">
                            <div className="inter_main_div_photos_img">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="inter_main_div_photos_text">
                            <p className='inter_main_div_photos_text_p'>{light[langu]}</p>
                        </div>
                    </div>
                    <p className='inter_main_div_p'>{thin[langu]}</p>
                </div>

                <div className="inter_main_div">
                    <div className="inter_main_div_photos">
                        <div className="inter_main_div_photos_div">
                            <div className="inter_main_div_photos_img">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="inter_main_div_photos_text">
                            <p className='inter_main_div_photos_text_p'>{inter[langu]}</p>
                        </div>
                    </div>
                    <p className='inter_main_div_p'>{integ[langu]}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inter