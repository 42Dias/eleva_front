import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerConfirmation = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 15px;

  h2 {
    color: ${theme.colors.blue};
    font-size: 24px;
    padding: 20px 0;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.blue};
    font-size: 24px;
    padding: 20px 0;
  }
`

export const StoreUserConfirmation = styled.div`
  p {
    font-size: 14px;
    color: ${theme.colors.neutral[400]};
    display: inline-flex;
    padding: 0 20px 0 0;
  }
`

export const GridConfirmation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  background-color: ${theme.colors.neutral[50]};
  padding: 20px 0;
  border-radius: 5px;

  span {
    font-size: 14px;
    color: ${theme.colors.neutral[400]};
  }
`

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background: none;
    width: 115px;
    height: 70px;
    border-radius: 5px;

    &:focus {
      border: 2px solid ${theme.colors.green};
    }
  }

  img {
    cursor: pointer;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  width: 200px;
  height: 48px;
  background: ${theme.colors.white};
  border-radius: 4px;
  border: none;
  color: ${theme.colors.blue};
  padding: 0 0 0 10px;
  margin: 0 0 20px 0;
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    width: 710px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`
