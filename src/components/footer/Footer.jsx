// ReactHook
import React, { useContext } from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './footer.css'
// Context
import { Context } from '../../context/Context'
// Img
import img from '../../images/footer-img/img.png'
import img1 from '../../images/footer-img/img1.png'
// Icon
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {MdNightlight} from 'react-icons/md'

const Footer = () => {
    const {logo, dark, setDark, product, langu, database, authen, storage, functionn, coming, pricing, support, resourse, cases, system, terms, developers, docum, refer, guides, comp, blog, open, law} = useContext(Context)

    const handleDark = () => setDark(!dark)
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer_main">
                <div className="footer_main_photos">
                    <div className="footer_main_photos_img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer_main_photos_div">
                        <div className="footer_main_photos_img1">
                            <img src={img} alt="" />
                        </div> 
                        <div className="footer_main_photos_img1">
                            <img src={img1} alt="" />
                        </div> 
                    </div>
                </div>
                <div className="footer_main_links">
                    <div className="footer_main_links_div">
                        <p className='footer_main_links_div_p'>{product[langu]}</p>
                        <Link to='/' className='footer_main_links_div_link'>{database[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{authen[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{storage[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{functionn[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{coming[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{pricing[langu]}</Link>
                    </div>
                    <div className="footer_main_links_div">
                        <p className='footer_main_links_div_p'>{resourse[langu]}</p>
                        <Link to='/' className='footer_main_links_div_link'>{support[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{cases[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{system[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{terms[langu]}</Link>
                    </div>
                    <div className="footer_main_links_div">
                        <p className='footer_main_links_div_p'>{developers[langu]}</p>
                        <Link to='/' className='footer_main_links_div_link'>{docum[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{refer[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{guides[langu]}</Link>
                    </div>
                    <div className="footer_main_links_div">
                        <p className='footer_main_links_div_p'>{comp[langu]}</p>
                        <Link to='/' className='footer_main_links_div_link'>{blog[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>{open[langu]}</Link>
                        <Link to='/' className='footer_main_links_div_link'>Humans.txt</Link>
                        <Link to='/' className='footer_main_links_div_link'>{law[langu]}</Link>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p className='footer_bottom_p'>© Supabase Inc</p>
                <div className='footer_bottom_div' onClick={handleDark}>
                    {
                        dark ? 
                        <MdNightlight className='footer_bottom_div_i footer_bottom_div_i1'/> :
                        <BsFillBrightnessHighFill className='footer_bottom_div_i' />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer