import responseHandler from '../../utils/responseHandler'
import {api} from '../api'


export default async function deleteCodigoDeBarras(id){
    // return await api.get(`user?filter%5B${filter}%5D=${valor}`).then(
    return await api.delete(`codigo-de-barra/${id}`).then(
    // await api.get(`empresa?`).then(
        (res) => {
            let status = res.status 
            let mensagemOk = 'CodigoDeBarras deletada com sucesso!'
            let mensagemNaoOK = 'Algo deu errado :('

            responseHandler(status, mensagemOk, mensagemNaoOK)
            console.log(res)
        }
    
    )
}