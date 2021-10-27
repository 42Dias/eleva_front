import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerApprove = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 15px;
  h2 {
    color: ${theme.colors.neutral[0]};
    font-size: 24px;
    padding: 20px 0;
  }
`

export const StoreUserApprove = styled.div`
  p {
    font-size: 14px;
    color: ${theme.colors.neutral[400]};
    display: inline-flex;
    padding: 0 20px 0 0;
  }
`

export const GridValidation = styled.div`
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
