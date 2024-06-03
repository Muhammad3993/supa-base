import React from 'react'
// Css
import './navbar.css'
// ReactHook
import { useState } from 'react'
import { useContext } from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Context
import { Context } from '../../context/Context'
// Icon
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {IoPersonCircleSharp} from 'react-icons/io5'

const Navbar = () => {
    const {logo, AiOutlineClose, langu, setLangu, product, developers, beta, pricing, start, sign} = useContext(Context);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const [color, setColor] = useState(false) 
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)

    const [bol, setBol] = useState(false)
    const handleBol = () => setBol(!bol)



  return (
    <div className={color ? 'navbar navbar_active' : 'navbar'}>
        <div className="container">
            <div className="navbar_main">
                <div className="navbar_main_div">
                    <Link to='/' className="navbar_main_img">
                        <img src={logo} alt="" />
                    </Link>
                    <div className={show ? "navbar_main_links active" : "navbar_main_links"}>
                        <Link to='/' className='navbar_main_link'>{product[langu]}<MdOutlineKeyboardArrowDown className='navbar_link_icon'/></Link>
                        <Link to='/' className='navbar_main_link'> {developers[langu]}<MdOutlineKeyboardArrowDown className='navbar_link_icon'/></Link>
                        <Link to='/' className='navbar_main_link'>{beta[langu]}</Link>
                        <Link to='/' className='navbar_main_link'>{pricing[langu]}</Link>
                    </div>
                </div>
                <div className="navbar_main_sign">
                    <Link to='/' className='btn'> <span>{start[langu]}</span></Link>
                    <Link to='/login' className='navbar_main_sign_in'><span className='navbar_main_sign_span'>{sign[langu]}</span> <IoPersonCircleSharp className='navbar_main_sign_icon'/></Link>
                    <div className="language" onClick={handleBol}>
                        {
                            !bol ? <div onClick={()=>setLangu(0)}>En</div> : <div onClick={()=>setLangu(1)}>Uz</div>
                        }
                    </div>
                </div>
                <div className="navbar_main_toggle" onClick={handleShow}>
                    {
                        !show ? <AiOutlineMenuUnfold/> : <AiOutlineClose/>
                    }  
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar;