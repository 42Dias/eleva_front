import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
`

export const GridLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
`

export const BoxImage = styled.div`
  background-color: ${theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
  }
`
export const BoxLogin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.colors.blue};

  svg {
    color: ${theme.colors.green};
  }

  a {
    color: ${theme.colors.neutral[300]};

    :hover {
      opacity: 70%;
      transition: 0.5s;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: left;
    display: flex;
    align-items: left;
    justify-content: left;
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    color: ${theme.colors.white};
  }

  label {
    color: ${theme.colors.white};
    font-size: 14px;
    font-weight: normal;
    margin: 15px 0 0 0;
  }

  input {
    width: 337px !important;
    height: 48px;
    margin-top: 8px;
    color: ${theme.colors.blue};
    border: 1px solid ${theme.colors.white};
    background: ${theme.colors.white};
    border-radius: 5px;
    padding-left: 35px;
    padding-right: 26px;

    &:focus {
      border: 2px solid ${theme.colors.green};
      background: none;
      color: ${theme.colors.green};
    }
  }

  svg {
    position: absolute;
    margin-top: 22.5rem;
    margin-left: 10px;
    color: ${theme.colors.green};
  }

  a {
    padding: 10px 20px;
    font-size: 15px;
    text-decoration: none;
    color: ${theme.colors.white};
    background: ${theme.colors.green};
    border-radius: 5px;
    margin: 20px 0 0 0;
    width: 335px;
    height: 48px;
    text-align: center;
  }
`

export const ContentBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${theme.colors.neutral[400]};
    opacity: 15%;
  }
`

export const Border = styled.div`
  width: 100px;
  border: 0.5px solid ${theme.colors.neutral[400]};
  opacity: 15%;
  margin: 15px;
`

export const ContentCreateAccount = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
