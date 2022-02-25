import { api } from "../api";



export default async function loadTabelaPreco(){
    return await api.get(`tabela-preco-negociado`)
          .then((response) => {
            console.log(response)
            let data = response.data.rows
            return data
          });
}
