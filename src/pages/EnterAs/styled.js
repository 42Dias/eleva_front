import styled from 'styled-components'
import { theme } from '../../ui/styles/theme'

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.blue};
  display: flex;
`

export const ContentEnterAs = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`

export const ContentBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    padding: 20px 10px;
    color: ${theme.colors.neutral[500]};
  }
`

export const Border = styled.div`
  width: 84px;

  border: 1px solid ${theme.colors.neutral[500]};
`

export const ContentLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    color: ${theme.colors.white};
  }

  span {
    padding-left: 30px;
    font-weight: regular;
    font-size: 14px;
  }
`

export const IconContent = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background-color: ${theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.green};
  }
`
