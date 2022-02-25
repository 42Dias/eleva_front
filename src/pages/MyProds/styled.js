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
    -webkit-line-clamp: 2;
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

  input[type='radio'] {
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

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: row !important;
  justify-content: space-evenly;

`

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  width: 200px;
  height: 48px;
  background: ${theme.colors.white};
  border-radius: 4px;
  border: none;
  color: ${theme.colors.blue};
  padding: 0 0 0 10px;
  margin: 0 0 20px 0;

  &[type='radio'] {
    height: 10px;
    width: 10px;
  }
`
export const ContainerRegisterSupplier = styled.form`
  max-width: 780px;
  margin: 0 auto;

  a {
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    background: ${theme.colors.green};
    margin: 0 0 0 35px;
    color: ${theme.colors.white};
  }
`

export const RegisterSupplier = styled.div`
  padding: 0 20px;

  h2 {
    font-size: 24px;
    color: ${theme.colors.neutral[0]};
    padding: 30px 0;
  }
`
export const ImageInput = styled.div`

.image-upload>input {
  display: none;
  align-items: center;
  justify-content: center;
}
.inputImage {
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  object-fit: cover;
}

`

export const RegisterSupplierForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  input {
    width: 345px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`

export const ContentSupplierForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
 
  input[type=number] {
    -moz-appearance: textfield;
  }
`

/*

  .flex-holder{
    display: flex;
  }
  .flex-holder .current-measure{
    align-self: center;
    padding-top: 15px;
    -webkit-border-top-right-radius:    5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-topright:        5px;
    -moz-border-radius-bottomright:     5px;
    border-top-right-radius:            5px;
    border-bottom-right-radius:         5px;
    transform: translateX(-20px);
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkBlue};
  }


  input:focus .flex-holder .current-measure{
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }

*/

export const ContentLeadTime = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

export const LeadTime = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    width: 710px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`

export const ContentSupplierFormRadio = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  span {
    color: ${theme.colors.neutral[0]};
    font-size: 13px;
  }
`

export const Radio = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px 15px;
`

export const RadioContainer = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;

  p {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }

  input[type='radio'] {
    margin-right: 10px;
  }
`

export const SelectItems = styled.form`
  padding: 0 15px 40px 15px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutral[0]};
  }

  select {
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 15px;
    border: 0;
    background: ${theme.colors.white};
  }

  input {
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 0;
    background: ${theme.colors.white};
  }

  input:focus {
    border: 1px solid ${theme.colors.green};
    background: transparent;
    color: ${theme.colors.green};
  }
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;


  button {
    padding: 10px 20px;
    font-size: 15px;
    border: 0;
    text-decoration: none;
    color: ${theme.colors.white};
    background: ${theme.colors.green};
    border-radius: 5px;
    margin: 35px 0 0 0;
    width: 256px;
    height: 48px;
    text-align: center;
  }

  button :hover {
    opacity: 70%;
    transition: 0.5s;
  }


  
`