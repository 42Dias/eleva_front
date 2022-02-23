import { toast } from 'react-toastify';
import responseHandler from '../../utils/responseHandler';
import { api } from '../api'


export default async function addManyInLista(lista, idsDosProdutos){
  
  // console.log(idsDosProdutos)
  
  idsDosProdutos.map(
    /*  
    
      listaId: data.lista.id,
      produtoId: data.produtoId,

  */
    async (prodId) => {

      // console.log(prodId)
      const response = await api.post(`listaProduto/`, { data: { produtoId: prodId, lista: lista} })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao lista com sucesso!",  "Erro na adição do produto")
          if(response.status == 200){
    
            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      // return response
      // console.log( "response" )
      // console.log( response )
      
    }
  ) 
    
    }