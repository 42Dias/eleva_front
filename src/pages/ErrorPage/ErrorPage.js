import React from 'react'
import { Link } from 'react-router-dom'
import imageError from '../../assets/image-error.svg'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function ErrorPage() {
  return (
    <>
      <Navbar />
      <S.ContainerError>
        <S.ErrorPage>
          <img src={imageError} alt='' />
          <Link to='/home' className='btnError'>
            Voltar ao início
          </Link>
        </S.ErrorPage>
      </S.ContainerError>
    </>
  )
}
