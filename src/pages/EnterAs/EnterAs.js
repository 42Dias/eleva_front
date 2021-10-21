import React from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiBriefcase, FiTruck } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as S from './styled'
import logo from './../../assets/logo.png'

export function EnterAs() {
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
          <Link to='/login'>
            <S.IconContent>
              <FiUser />
            </S.IconContent>
            <span>Cliente</span>
          </Link>

          <Link to='/login'>
            <S.IconContent>
              <FiBriefcase />
            </S.IconContent>
            <span>Administrador</span>
          </Link>

          <Link to='/login'>
            <S.IconContent>
              <FiTruck />
            </S.IconContent>
            <span>Fornecedor</span>
          </Link>
        </S.ContentLinks>
      </S.ContentEnterAs>
    </S.Home>
  )
}
