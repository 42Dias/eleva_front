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
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    span {
      margin-right: 10px;
      color: white;
    }
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


export const BtnsContent = styled.div`
  padding: 30px 0;
  display: flex;

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
  .add {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    width: 55px !important;
    height: 40px;
    border: 0;
    margin: 20px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${theme.colors.white};
    }
  }

  div {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
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