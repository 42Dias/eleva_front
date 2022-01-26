/*
Aqui ficará o tratamento da resposta usando toast
*/
import { toast } from 'react-toastify';



export default async function responseHandler(
    responseStatus, mensagemSeOk, mensagemSeNaoOk
    ) {
    if(responseStatus == 200 ){
        mensagemSeOk ? toast.info(mensagemSeOk) : toast.info("Ação feita com sucesso!") 
    }
    else if(responseStatus != 200 ){
        mensagemSeNaoOk ? toast.error(mensagemSeNaoOk) : toast.info("Algo deu errado :(") 
    }

}