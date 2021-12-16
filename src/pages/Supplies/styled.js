import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

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
    margin: 10px 0;
    a {
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      height: 40px;
      width: 198px;
      border: 0;
      margin: 20px;
      padding: 10px 40px;

      border-radius: 5px;
    }

    button {
      width: 55px;
      height: 40px;
      border: 0;

      svg {
        color: white;
      }

      background: #05debd;
      border-radius: 5px;
    }
  }

  .ant-switch-checked {
    background-color: #05debd !important;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    margin-top: 30px;
    width: 120px;
    height: 40px;
  }

  .ant-switch-checked .ant-switch-handle {
    left: calc(100% - 25px - 10px);
  }

  .ant-switch-handle::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    transition: all 0.2s ease-in-out;
    content: '';
  }

  .ant-switch-handle {
    width: 32px;
    height: 32px;
    top: 4px;
    border-radius: 50%;
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
    height: 320px;
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

//

export const Container = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
  justify-content: center;

  button {
    width: 165px;
    height: 40px;

    border: 0;
    color: white;

    background: #aa2323;
    border-radius: 5px;

    &:last-child {
      background: #05debd;
      margin: 0 20px;
    }
  }
`
