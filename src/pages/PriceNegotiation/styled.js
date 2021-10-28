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

  a {
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    background: ${theme.colors.green};
    margin: 10px 0 0 10px;
    color: ${theme.colors.white};

    :hover {
      opacity: 85%;
    }
  }
`

export const ContentSupplierForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  label {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }
`

export const Price = styled.div`
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
