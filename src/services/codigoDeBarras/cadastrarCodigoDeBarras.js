/*
Função usada no cadastro
*/

import {api} from '../api'
import responseHandler from '../../utils/responseHandler'
import servidorErrorMessage from '../../utils/servidorErrorMessage'


export default async function cadastrarCodigoDeBarras(data) {
    return await api.post('codigo-de-barra', {
      data
      })
      .then((response) => {
        let status = response.status
        let mensagemOk = 'CodigoDeBarras criada com sucesso! :)'
        let mensagemNaoOK = 'Algo deu errado :('
        responseHandler(status, mensagemOk, mensagemNaoOK)
        if (response.status == 200) {
          //first check the http response, returning the result to user
          return 'ok'
        }

      })
      .catch(() => {
        servidorErrorMessage()
      })
  }