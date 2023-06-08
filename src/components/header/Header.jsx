import React, { useEffect, useRef } from 'react'
import './header.scss'
import { Container, Row } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from'../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'


const nav__links=[
  {
    path:'home',
    display:'Home',
  },
  {
    path:'shop',
    display:'Shop',
  },
  {
    path:'cart',
    display:'Cart',
  }
]


const Header = () => {

const menuRef=useRef(null)
const menuToggle=()=> menuRef.current.classList.toggle("active__menu")

const headerRef=useRef(null)
const stickyHeaderFunc=()=>{
  window.addEventListener("scroll",function(){
    if(document.body.scrollTop > 80
      || document.documentElement.scrollTop>80
      ){
     headerRef.current.classList.add("active__header")
    }
    else{
      headerRef.current.classList.remove("active__header")
    }
  })
}
useEffect(()=>{
  stickyHeaderFunc()
},[])




return (
  <>
    <header ref={headerRef}>
     <Container>
          <Row>
               <div className="nav__wrapper">

           <Link to={"/"}>
               <div className="logo">
                <img src={logo} alt="" />
                <h1>SLIVERSTORE</h1>
               </div>
          </Link>
              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className='menu'>
                  {
                    nav__links.map((item, index)=>{
                      return(
                        <li className='nav__item'key={index}>
                          <NavLink to={item.path} className={(navClass)=>
                          navClass.isActive?"nav__active":""
                          }>
                            {item.display}
                          </NavLink>
                        </li>
                      )
                    })

                  }
                </ul>
              </div>

              <div className="nav__icons">
                <div className="fav__icon">
                <i class="ri-heart-3-fill"></i>
                <span className="badge">1</span>
                </div>
                <div className="cart__icon">
                  <i className='ri-shopping-basket-2-line'></i>
                  <span className="badge">1</span>
                </div>
                <span>
                  <motion.img src={userIcon} whileTap={{scale:1.2}}  alt="" />
                </span>
                  <div className="mobile__menu">
                  <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                  </span>
                  </div>
              </div>
             </div>  
          </Row>
     </Container>
    </header>
    </>
  )
}

export default Header