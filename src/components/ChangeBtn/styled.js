import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'


export const Change = styled.button`
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 41px;
    background: ${theme.colors.green};
    text-decoration: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    button:last-child {
        background: black;
        width: 120px;
        margin-left: 20px;
    }

  svg {
    color: ${theme.colors.white};
    font-size: 18px;
  }

`
