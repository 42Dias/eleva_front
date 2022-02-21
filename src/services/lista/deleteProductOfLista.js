import { toast } from 'react-toastify';
import { api } from '../api'
import responseHandler from '../../utils/responseHandler';

export default async function deleteProductOfLista(productAlreadyInLista, setUpdate){
      const response = api.delete(`listaProdutoOne/${productAlreadyInLista.id}`, { productAlreadyInLista })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status, "Produto removido com sucesso!", "Erro :(")
          if(response.status == 200){

            setUpdate(prevValue => {
              return prevValue-1	
               })
          }
          return response.data

        }
      )

      return response 
    }