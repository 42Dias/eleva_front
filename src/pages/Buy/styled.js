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

export const ContainerBuy = styled.div`
`

export const BoxBuy = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;

  .imageList {
    margin: 20px auto;
    width: 100%;
    height: 323px;
    object-fit: contain;
    display: block;
    padding: 0 20px;
  }
`

export const ContainerPurchases = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1280px;
  margin: 0 auto;
`

export const BoxProd = styled.div`
  width: 250px;
  height: 400px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 15px;

  margin: 10px 30px;

  h3 {
    color: ${theme.colors.blue};
    font-size: 18px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow-wrap: break-word;
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
    object-fit: cover;
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




export const BtnsContent = styled.div`
  justify-content: center;
  padding: 30px 0;
  display: flex;
  margin: 0 auto;

  button {
    width: 165px;
    height: 40px;

    border: 0;
    color: white;

    background: #aa2323;
    border-radius: 5px;

    &:last-child {
      background: #05debd;
    }
  }
`


export const Container = styled.form`
display: flex;
flex-direction: column;
align-items: center;

  .add {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    width: 55px !important;
    height: 40px;
    border: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;

    svg {
      color: ${theme.colors.white};
    }
  }

  div {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }

  input[type='checkbox'] {
    border-radius: 50% !important;
    width: 20px;
    height: 20px;
  }

  input {
    width: 375px;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #f2f2f2;
    background: white;
    border-radius: 5px;
    font-weight: 400;

    transition: 0.6s;

    &:focus {
      border: 1px solid ${theme.colors.green};
    }
  }

  textarea {
    width: 375px;
    padding: 0 1.5rem;
    height: 6rem;
    border-radius: 0.25rem;
    padding: 10px;
    font-size: 1.4rem;
    margin-top: 10px;

    border: 1px solid #f2f2f2;
    background: white;
    border-radius: 5px;
    font-weight: 400;

    transition: 0.6s;

    &:focus {
      border: 1px solid ${theme.colors.green};
    }
  }

  button.buttonSecondModal {
    width: 100% !important;
    text-align: left !important;
    border: 0;
    transition: 0.7s;
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
    background: #F5F5F5;
    &:hover {
      opacity: 70%;
    }
    &:focus {
      border: 1px solid ${theme.colors.green};
    }
    
    a {
      width: 100% !important;
      display: block;
      text-decoration: none;
      color: #000;
    }
  }

  h4 {
    padding: 40px 0 10px 0;
  }

  div {
    margin: 10px 0;
  }

  thead:first-child {
    display: table-row-group;
    background-color: ${theme.colors.neutral[50]};
    border-radius: 5px !important;
    height: 70px;

    tr {
      margin: 50px !important;
    }

    th {
      padding: 20px;
      font-size: 14px;
      font-weight: 400;
      color: ${theme.colors.neutral[400]};
    }
  }

  tbody {
    justify-items: center;
    align-items: center;
    color: ${theme.colors.neutral[400]};
    background: ${theme.colors.neutral[200]};
    border-radius: 5px;
    height: 120px;
    font-size: 14px;
    tr {
      gap: 20px;
      margin-top: 10px !important;
      padding: 20px;
      td {
        padding: 20px;
        margin-top: 10px !important;
        margin-left: 20px;
      }
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    text-align: left;
  }

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

  input[type='checkbox'] {
    border-radius: 50% !important;
    width: 20px;
    height: 20px;
  }

  input {
    width: 375px;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #f2f2f2;
    background: white;
    border-radius: 5px;
    font-weight: 400;

    transition: 0.6s;

    &:focus {
      border: 1px solid ${theme.colors.green};
    }
  }
`