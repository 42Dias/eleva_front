import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

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
  }
`

export const Content = styled.div`
  width: 100%;
  height: 160px;
  background: ${theme.colors.neutral[300]};
  border-radius: 5px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 35px;
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr;
  padding: 0 15px;
  justify-items: start;
  align-items: center;

  p {
    font-size: 14px;
    color: ${theme.colors.blue};
    font-weight: 600;
  }

  li {
    color: ${theme.colors.neutral[500]};
    margin: 0px 5px 0px 0;
    padding: 4px;
  }

  strong {
    color: ${theme.colors.green};
    font-weight: bold;
  }

  img {
    width: 100px;
    height: 100px;
  }
`
