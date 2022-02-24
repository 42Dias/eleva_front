import { api } from "../api";



export default async function loadUserProduto(){
    return await api.get(`userProduto`)
          .then((response) => {
            console.log(response)
            let data = response.data.rows
            return data
          });
}
