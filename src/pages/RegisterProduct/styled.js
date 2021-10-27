import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const BoxImage = styled.div`
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

  &[type='radio'] {
    height: 10px;
    width: 10px;
  }
`
export const ContainerRegisterSupplier = styled.aside`
  max-width: 780px;
  margin: 0 auto;

  a {
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    background: ${theme.colors.green};
    margin: 0 0 0 35px;
    color: ${theme.colors.white};
  }
`

export const RegisterSupplier = styled.div`
  padding: 0 20px;

  h2 {
    font-size: 24px;
    color: ${theme.colors.neutral[0]};
    padding: 30px 0;
  }
`

export const RegisterSupplierForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  input {
    width: 345px;
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

export const ContentSupplierForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }
`

export const ContentLeadTime = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

export const LeadTime = styled.div`
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

export const ContentSupplierFormRadio = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  span {
    color: ${theme.colors.neutral[0]};
    font-size: 13px;
  }
`

export const Radio = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px 15px;
`

export const RadioContainer = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: start;
  align-items: center;

  p {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }

  input[type='radio'] {
    margin-right: 10px;
  }
`

export const SelectItems = styled.form`
  padding: 0 15px 40px 15px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }

  select {
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 15px;
    border: 0;
    background: ${theme.colors.white};
  }

  input {
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
    background: ${theme.colors.white};
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`
