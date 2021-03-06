import { toast } from 'react-toastify';
import responseHandler from '../../utils/responseHandler';
import { api } from '../api'


export default async function addInSuprimento(product, quantidade, suprimento, setUpdate){
      const response = await api.post(`suprimentoProduto/`, { data: { product, 'quantidade': quantidade, suprimento: suprimento} })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao suprimento com sucesso!",  "Erro na adição do produto")
          if(response.status == 200){
            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      return response
    }