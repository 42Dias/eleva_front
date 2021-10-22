import styled from 'styled-components'
import { theme } from '../../ui/styles/theme'

export const Container = styled.div`
  padding: 0 2%;
  margin: 0 auto;
`

export const Menu = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  padding: 10px 0;
  position: fixed;
  left: 0;
  top: 0;
  background: ${theme.colors.darkBlue};
  float: left;
  width: 250px;
`

export const MenuWrapper = styled.div`
  width: 250px;

  img {
    width: 170px;
    object-fit: cover;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const HeaderContent = styled.header`
  position: relative;
  left: 250px;
  padding: 10px 0;
  background: ${theme.colors.neutral[100]};
  width: calc(100% - 250px);
`

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const MenuBtn = styled.div`
  cursor: pointer;
  font-size: 23px;
  color: ${theme.colors.green};
`

export const SearchContainer = styled.div`
  margin-left: 100px;
  display: flex;

  input[type='text'] {
    width: 400px;
    height: 48px;
    outline: 0;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px 0 0 5px;
    color: ${theme.colors.neutral[400]};

    &::placeholder {
      color: ${theme.colors.neutral[400]};
    }
  }

  button {
    width: 66px;
    height: 48px;
    outline: 0;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: ${theme.colors.green};
  }

  button svg {
    color: ${theme.colors.white};
    font-size: 16px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const IconsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`

export const IconsLeft = styled.div`
  a {
    padding: 0 12px;
    text-decoration: none;
    color: ${theme.colors.gray};
    background: ${theme.colors.white};
    border-radius: 5px;
    margin-left: 11px;
  }
`

export const IconUser = styled.div`
  a {
    margin-left: 44px;
    width: 40px;
    height: 40px;
    background: ${theme.colors.neutral[600]};
    border-radius: 50%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a svg {
    font-size: 22px;
    color: ${theme.colors.white};
  }
`
