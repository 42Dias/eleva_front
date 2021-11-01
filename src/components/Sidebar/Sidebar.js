import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { SidebarData } from './SidebarData'
import './Navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className='navbar'>
          <div>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars
                value={{ color: '#05DEBD' }}
                onClick={showSidebar}
              />
            </Link>

            <input type='text' placeholder='Pesquise o seu produto' />
            <button>
              <FaIcons.FaSearch />
            </button>
          </div>

          <div className='user'>
            <span className='bell'>
              <FaIcons.FaRegBell />
            </span>
            <span className='userIcon'>
              <FaIcons.FaRegUser />
            </span>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-menu-items' onClick={showSidebar}>
            <img src={logo} alt='' />
            <div className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </div>

            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
