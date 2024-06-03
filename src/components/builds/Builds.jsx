import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './builds.css'
// Context
import { Context } from '../../context/Context'
import { useContext } from 'react'

const Builds = () => {

  const {dark, langu, buiders, start} = useContext(Context);

  return (
    <div className='builds'>
        <div className="container">
            <div className="builds_main">
                <p className={dark ? 'builds_main_p text_black' : 'builds_main_p'}>{buiders[langu]}</p>
                <Link to='/' className='btn builds_main_btn'>{start[langu]}</Link>
            </div>
        </div>
    </div>
  )
}

export default Builds