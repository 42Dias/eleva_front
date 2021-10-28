import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerMyRequests = styled.div`
  padding: 40px 15px;

  h1 {
    color: ${theme.colors.neutral[0]};
    font-size: 24px;
  }

  a.history {
    width: 45px;
    height: 40px;
    border-radius: 5px;
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }

  a.history svg {
    color: ${theme.colors.white};
    font-size: 22px;
  }
`

export const GridMyRequest = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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

export const PedidosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px;
  background: ${theme.colors.white};
  margin-top: 8px;
  p {
    margin-left: 90px;
    color: ${theme.colors.neutral[400]};
    font-size: 14px;
  }

  .status-approve {
    color: ${theme.colors.green};
    background: rgba(5, 222, 189, 0.15);
    padding: 8px 8px;
    border-radius: 5px;
  }

  .status-await {
    color: ${theme.colors.red};
    background: rgba(170, 35, 35, 0.15);
    padding: 8px 8px;
    border-radius: 5px;
  }

  .status-packaging {
    color: ${theme.colors.yellow};
    background: rgba(183, 149, 30, 0.15);
    padding: 8px 8px;
    border-radius: 5px;
  }
`

export const ContentIconsPedidos = styled.div`
  display: flex;
  a.eye svg {
    color: ${theme.colors.neutral[400]};
    font-size: 15px;
  }

  a.flag {
    margin-left: 20px;
  }

  a.flag svg {
    color: ${theme.colors.red};
    font-size: 15px;
  }
`
