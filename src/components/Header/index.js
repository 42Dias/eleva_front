import React from 'react'
import { Link } from 'react-router-dom'
import {
  FiLock,
  FiAlignJustify,
  FiSearch,
  FiBell,
  FiUser,
} from 'react-icons/fi'
import logo from './../../assets/logo.png'
import * as S from './styled'

export default function Header() {
  return (
    <>
      <S.Menu>
        <S.MenuWrapper>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
          <div>
            <h2>
              <FiLock />
            </h2>
          </div>
        </S.MenuWrapper>
      </S.Menu>

      <S.HeaderContent>
        <S.Container>
          <S.GridHeader>
            <S.ContainerMenu>
              <S.MenuBtn>
                <FiAlignJustify />
              </S.MenuBtn>
              <S.SearchContainer>
                <input
                  placeholder='Pesquise seu produto'
                  type='text'
                  name=''
                  id=''
                />
                <button>
                  <FiSearch />
                </button>
              </S.SearchContainer>
            </S.ContainerMenu>

            <S.Icons>
              <S.IconsActions>
                <S.IconsLeft>
                  <a href=''>
                    <FiBell size={15} />
                  </a>
                </S.IconsLeft>
                <S.IconUser>
                  <a href=''>
                    <FiUser />
                  </a>
                </S.IconUser>
              </S.IconsActions>
            </S.Icons>
          </S.GridHeader>
        </S.Container>
      </S.HeaderContent>
    </>
  )
}
