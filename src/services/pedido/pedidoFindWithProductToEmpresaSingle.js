import { api, apiWithTenantAndWithToken } from "../api";



export default async function pedidoFindWithProductToEmpresaSingle(id){
    return await api.get(`pedidoUser?filter=[pedidoProdutoId]=${id}`)
          .then((response) => {
            // console.log(response)
            let productData = response.data
            return productData
          });
}
