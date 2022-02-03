/*import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerBuy = styled.div``

export const BoxBuy = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  .imageList {
    margin: 20px auto;
    width: 80%;
    object-fit: cover;
    padding: 0 20px;
  }
`

export const ContainerPurchases = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1280px;
  margin: 0 auto;
`

export const BoxProd = styled.div`
  width: 250px;
  height: 377px;
  margin: 0 21px;
  background: #ffffff;
  border-radius: 5px;

  h3 {
    color: ${theme.colors.blue};
    font-size: 22px;
    padding: 0 20px;
  }

  p {
    color: ${theme.colors.neutral[700]};
    padding: 0 20px;
  }

  img {
    width: 250px;
    height: 180px;
    left: 0px;
    top: 0px;
    border-radius: 5px 5px 0px 0px;
  }

  span {
    margin-left: 0;
    color: ${theme.colors.green};
    font-weight: bold;
    padding: 0 20px;
    margin-bottom: 10px;
  }

  .btnContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    button {
      width: 142px;
      height: 35px;
      border-radius: 5px;
      background: ${theme.colors.green};
      justify-content: center;
      border: 0;
      color: white;
      display: flex;
      align-items: center;

      svg {
        margin-left: 10px;
      }
    }
  }
`
*/
import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerBuy = styled.div``

export const BoxBuy = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  .imageList {
    margin: 20px auto;
    width: 80%;
    object-fit: cover;
    padding: 0 20px;
  }
`

export const ContainerPurchases = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1280px;
  margin: 0 auto;
`

export const BoxProd = styled.div`
  width: 250px;
  height: 377px;
  margin: 0 21px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;

  h3 {
    color: ${theme.colors.blue};
    font-size: 18px;

    padding: 0 20px;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: ${theme.colors.neutral[700]};
    padding: 0 20px;
  }

  img {
    width: 250px;
    height: 180px;
    left: 0px;
    top: 0px;
    border-radius: 5px 5px 0px 0px;
  }

  span {
    margin-left: 0;
    color: ${theme.colors.green};
    font-weight: bold;
    padding: 0 20px;
    margin-bottom: 10px;
  }

  .btnContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    button {
      width: 142px;
      height: 35px;
      border-radius: 5px;
      background: ${theme.colors.green};
      justify-content: center;
      border: 0;
      color: white;
      display: flex;
      align-items: center;

      svg {
        margin-left: 10px;
      }
    }
  }
`


