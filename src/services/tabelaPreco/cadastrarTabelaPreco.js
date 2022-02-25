/*
Função usada no cadastro
*/

import {api} from '../api'
import responseHandler from '../../utils/responseHandler'
import servidorErrorMessage from '../../utils/servidorErrorMessage'
import { toast } from 'react-toastify'


export default async function cadastrarTabelaPreco(data) {
    return await api.post('tabela-preco-negociado', {
      data
      })
      .then((response) => {
        console.log(response)
        let status = response.status
        let mensagemOk = 'Preco Negociado criado com sucesso! :)'
        let mensagemNaoOK = 'Algo deu errado :('
        responseHandler(status, mensagemOk, mensagemNaoOK)
        if (response.status == 200) {
          //first check the http response, returning the result to user
          return 'ok'
        }

      })
      .catch(() => {
        toast.error("CNPJ não cadastrado!")
      })
  }