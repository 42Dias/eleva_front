import styled from 'styled-components/macro'
import banner from '../../assets/bannerLogin.png'
import { theme } from '../../ui/styles/theme'

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${banner});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

  button {
    border: 0;
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
