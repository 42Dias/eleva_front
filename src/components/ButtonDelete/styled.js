import styled from "styled-components";


export const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 41px;
    text-decoration: none;
    background: #EA1C24;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    button:last-child {
        background: black;
        width: 120px;
        margin-left: 20px;
    }
`