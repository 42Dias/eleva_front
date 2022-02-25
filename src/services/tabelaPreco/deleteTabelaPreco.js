import responseHandler from '../../utils/responseHandler'
import {api} from '../api'


export default async function deleteTabelaPreco(id){
    // return await api.get(`user?filter%5B${filter}%5D=${valor}`).then(
    return await api.delete(`tabela-preco-negociado/${id}`).then(
    // await api.get(`empresa?`).then(
        (res) => {
            let status = res.status 
            let mensagemOk = 'Preco Negociado deletado com sucesso!'
            let mensagemNaoOK = 'Algo deu errado :('

            responseHandler(status, mensagemOk, mensagemNaoOK)
            console.log(res)
        }
    
    )
}