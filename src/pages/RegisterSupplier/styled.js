import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerRegisterSupplier = styled.aside`
  max-width: 780px;
  margin: 0 auto;
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
    transition: 0.4s;
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
    transition: 0.4s;
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`

export const ContentResponsavel = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    padding: 10px 10px;
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }
`

export const Responsavel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

export const ContainerResponsavel = styled.div`
  background: ${theme.colors.white};
  width: 710px;
  height: 271px;

  background: ${theme.colors.white};
  border-radius: 4px;
`

export const StoreResponsavel = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    padding: 20px 0 4px 0;
    color: ${theme.colors.neutral[0]};
  }
  input {
    width: 326px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
    transition: 0.4s;
    background: ${theme.colors.neutral[150]};
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`

export const ResponsavelAlone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  label {
    font-size: 14px;
    padding: 30px 0 4px 0;
    color: ${theme.colors.neutral[0]};
  }
  input {
    width: 680px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
    transition: 0.4s;
    background: ${theme.colors.neutral[150]};
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`

export const ContentSupplierFormCheckbox = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  span {
    color: ${theme.colors.neutral[0]};
    font-size: 14px;
  }
`

export const Check = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px 15px;
`

export const CheckContainer = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  p {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }

  input[type='checkbox'] {
    margin-right: 20px;
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
    padding: 0 7px;
    border: 0;
    transition: 0.4s;
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
    transition: 0.4s;
    background: ${theme.colors.white};
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`
