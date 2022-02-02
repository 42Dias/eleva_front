import { toast } from "react-toastify"

export default function handleSetNumber(number, setFunction){
    if(number == ''){
      number = 0
    }
      if(number){
        let checkNumber = parseInt(number)
        console.log(checkNumber)
        const isCheckoutNumberNaN = isNaN(checkNumber)
        if(!isCheckoutNumberNaN){
          return setFunction(checkNumber)  
        }
        else{
          toast.error("Inválido!") 
        }
      }
      else{
        toast.error("Inválido!")
      }
    }
  