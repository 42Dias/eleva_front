import responseHandler from '../../utils/responseHandler'
import {api} from '../api'


export default async function changeRedes(id, data){

    console.log(id)
    console.log(data)
    return await api.put(`rede/${id}`, data).then(
        (res) => {
            let status = res.status;
            let mensagemOk = 'Rede modificada com sucesso :)';
            let mensagemNaoOK = 'Algo deu errado :(';

            responseHandler(status, mensagemOk, mensagemNaoOK);
            if(status == 200){
                return 'ok'
            }
        }
    
    )
}