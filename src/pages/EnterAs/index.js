import React, { useLayoutEffect } from 'react'
import { FiUser, FiBriefcase, FiTruck, FiGlobe } from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'
import * as S from './styled'
import logo from './../../assets/logo.png'
import { Email, tenantId } from '../../services/api'

export default function EnterAs() {

  let history = useHistory();

  function goHome() {
    history.push("/home");
  }

  useLayoutEffect(
  () => {
    console.log(Email)
    if(Email || tenantId){
      goHome()
    }
  }, []

  )
  AOS.init()
  return (
    <S.Home>
      <S.ContentEnterAs>
        <img
          src={logo}
          alt=''
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        />
        <S.ContentBorder
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='1600'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <S.Border />
          <strong>entrar como</strong>
          <S.Border />
        </S.ContentBorder>

        <S.ContentLinks
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='1900'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <Link 
          to='/login'
          onClick={() => {
            localStorage.setItem('chosedRole', '1')
          }}
          >
            <S.IconContent>
              <FiUser />
            </S.IconContent>
            <span>Cliente</span>
          </Link>

          <Link to='/login'
          onClick={() => {
            localStorage.setItem('chosedRole', '2')
          }}
          >
            <S.IconContent>
              <FiBriefcase />
            </S.IconContent>
            <span>Administrador</span>
          </Link>

          <Link 
          to='/login'
          onClick={() => {
            localStorage.setItem('chosedRole', '3')
          }}
          >
            <S.IconContent>
              <FiTruck />
            </S.IconContent>
            <span>Fornecedor</span>
          </Link>

          <Link
          to='/login'
          onClick={() => {
            localStorage.setItem('chosedRole', '4')
          }}>
            <S.IconContent>
              <FiGlobe />
            </S.IconContent>
            <span>Rede</span>
          </Link>
        </S.ContentLinks>
      </S.ContentEnterAs>
    </S.Home>
  )
}
