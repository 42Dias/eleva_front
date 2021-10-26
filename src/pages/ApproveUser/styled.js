import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerApprove = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  h1 {
    color: ${theme.colors.neutral[0]};
    font-size: 24px;
    padding: 30px 0;
  }

  .back {
    width: 45px;
    height: 40px;
    border-radius: 5px;
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back svg {
    color: ${theme.colors.white};
    font-size: 22px;
  }
`

export const ContentApproveUser = styled.div`
  width: 98%;
  height: 126px;
  background: ${theme.colors.neutral[50]};
  border-radius: 5px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 35px;
`

export const IconsActionsApprove = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Check = styled.div`
  a {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a svg {
    color: ${theme.colors.white};
    font-size: 18px;
  }
`

export const Trash = styled.div`
  a {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background: ${theme.colors.red};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }

  a svg {
    color: ${theme.colors.white};
    font-size: 18px;
  }
`

export const StoreUser = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr;
  padding: 0 15px;
  justify-items: start;
  align-items: center;
  p {
    font-size: 14px;
    color: ${theme.colors.neutral[700]};
    font-weight: 600;
  }
`
