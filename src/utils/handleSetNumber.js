import { toast } from "react-toastify"

export default function handleSetNumber(number, setFunction){
  console.log("number")
  console.log(number)
    if(number == ''){
      number = 0
      return setFunction(number) 

    }
    else if(number != ''){
      let checkNumber = parseFloat(number)
      console.log(checkNumber)
      const isCheckoutNumberNaN = isNaN(checkNumber)
      if(!isCheckoutNumberNaN){
        return setFunction(checkNumber)  
      }
      else{
        toast.error("Inválido!") 
        number = 0
      }
    }
    else{
      toast.error("Inválido!")
    }
    }
  