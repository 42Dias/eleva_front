import responseHandler from '../../utils/responseHandler'
import {api} from '../api'


export default async function changeUserProduto(id, data){

    console.log(id)
    console.log(data)
    return await api.put(`userProduto/${id}`, data).then(
        (res) => {
            let status = res.status;
            let mensagemOk = 'userProduto modificada com sucesso :)';
            let mensagemNaoOK = 'Algo deu errado :(';

            responseHandler(status, mensagemOk, mensagemNaoOK);
            if(status == 200){
                return 'ok'
            }
        }
    
    )
}