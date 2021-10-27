import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerProdSingle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`

export const ProdImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto 0 auto;

  img {
    padding: 30px 0;
  }

  h1,
  strong {
    color: ${theme.colors.neutral[0]};
    font-size: 24px;
  }
`

export const ProdDetailsSingle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    color: ${theme.colors.neutral[0]};
    font-size: 22px;
    padding: 40px 0;
  }

  p {
    color: ${theme.colors.neutral[400]};
    padding: 20px 0;
    font-size: 18px;
  }

  li {
    list-style-type: disc;
    color: ${theme.colors.neutral[400]};
    font-size: 16px;
  }

  h3 {
    color: ${theme.colors.neutral[0]};
    font-size: 18px;
    padding: 15px 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: 16px;
    margin: 40px 0;
    width: 335px;
    height: 50px;
    background: ${theme.colors.green};
    border-radius: 5px;
    margin: 50px auto;
  }
`
