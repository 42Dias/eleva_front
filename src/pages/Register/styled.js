import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerRegister = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.colors.darkBlue};
  display: flex;
`

export const ContentRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    color: ${theme.colors.white};
  }
`

export const FormRegister = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 335px;
  label {
    text-align: left !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    color: white;
    font-size: 15px;
    margin-top: 12px;
  }

  a {
    text-align: center;
    margin: 0 auto;
  }

  input[type='text'] {
    margin-top: 12px;
    width: 335px;
    height: 48px;
    background: transparent;
    border: 1px solid ${theme.colors.green};
    padding: 0 7px;
    color: ${theme.colors.green};
    border-radius: 5px;
  }

  input[type='text']::placeholder {
    color: ${theme.colors.green};
  }

  input[type='email'] {
    margin-top: 12px;
    width: 335px;
    height: 48px;
    background: white;
    border: 0;
    padding: 0 7px;
    color: ${theme.colors.gray};
    border-radius: 5px;
  }

  input[type='email']::placeholder {
    color: ${theme.colors.gray};
  }

  input[type='password'] {
    margin-top: 12px;
    width: 335px;
    height: 48px;
    background: white;
    border: 0;
    padding: 0 7px;
    color: ${theme.colors.gray};
    border-radius: 5px;
  }

  input[type='password']::placeholder {
    color: ${theme.colors.gray};
  }

  .checkbox {
    display: flex;
    padding: 20px 0;
    color: white;
  }

  .checkbox p {
    padding-left: 5px;
  }

  .checkbox a {
    color: ${theme.colors.green};
  }

  .link {
    background: ${theme.colors.green};
    color: ${theme.colors.white};
    width: 335px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border-radius: 5px;
  }
`
