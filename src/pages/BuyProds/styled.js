import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerApprove = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 15px;

  .add {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    width: 55px;
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

  .flex-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      height: 40px;
      width: 198px;
      border: 0;
      margin: 20px;

      border-radius: 5px;
    }
  }
  h2 {
    color: ${theme.colors.neutral[0]};
    font-size: 24px;
    padding: 20px 0;
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

export const Container = styled.form`
  button.buttonSecondModal {
    width: 100% !important;
    text-align: left !important;
    border: 0;
    transition: 0.7s;
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
    &:hover {
      opacity: 70%;
    }
    &:focus {
      border: 1px solid ${theme.colors.green};
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
    font-size: 1rem;

    transition: 0.6s;

    &:focus {
      border: 1px solid ${theme.colors.green};
    }
  }
`

export const BtnsContent = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 24px;
  }

  button {
    width: 165px;
    height: 40px;

    border: 0;
    color: white;

    background: #05debd;

    border-radius: 5px;
  }
`
