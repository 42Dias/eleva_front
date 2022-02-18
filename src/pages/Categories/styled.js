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
    font-size: 22px;
  }
`

export const ContentApproveUser = styled.div`
  width: 98%;
  min-height: 126px;
  background: ${theme.colors.neutral[50]};
  border-radius: 5px;
  padding-right: 15px;
  display: flex;
  padding: 15px;
  flex-direction: column;
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
export const FormContainer = styled.form`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

  input{
    margin-right:50px !important
  }
`

export const ChangeContainer = styled.button`
border: 0;
background: tranparent;
background: transparent !important;
display: flex;
align-self: center;
align-items: center;
justify-content:center;

  .button{
    margin-left: 5px;
  }

`


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

export const ModalContainer = styled.div`
  display: flex;
`;

export const ModalFlex = styled.div`
  display: flex;
`;

export const ModalContent = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  h3 {
    padding: 20px 0;
    font-size: 24px;
  }

  p {
    color: #4A4A4A;
    max-width: 420px;
    padding: 20px 0;
  }

  .buttonsNew {
    display: flex;
    cursor: pointer;
  }

  .buttonsNew button {
    cursor: pointer;

    width: 165px;
    height: 40px;

    border-radius: 5px;
    color: black;
    border: 1px solid rgba(16, 16, 16, 1);
    text-decoration: none;
  
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;

    @media (max-width: 768px) {
      width: 50%;
    }
  }
  .buttonsNew button:nth-child(2) {
    /*
    width: 165px;
    height: 40px;
    
    background: #101010;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    */
    
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border: 0;
  }

  img {
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const ContentFormNew = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 48px;
    width: 466px;
    border-radius: 4px;
    border: 0;
    background: #F2F2F2 !important;
    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  
  textarea {
    resize: vertical;
    height: 125px;
    width: 466px;
    border-radius: 4px;
    border: 0;
    font: 14px 'Poppins',sans-serif;
    background: #F2F2F2 !important;
    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  select {
    height: 48px;
    width: 466px;
    border-radius: 4px;
    border: 0;
    background: #F2F2F2 !important;
    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  label {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 20px;
  }
` 

export const Btn = styled.button`
  background: white;
  text-align: left;
  padding: 10px 0 40px 0;
  transition: .5s;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalContainerText = styled.div`
  padding-left: 25%;
  padding-right: 25%;

  padding-top: 2.5%;
  padding-bottom: 2.5%;
  

  text-align: justify;
  `