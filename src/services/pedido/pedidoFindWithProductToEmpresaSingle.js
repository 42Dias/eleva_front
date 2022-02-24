import { api, apiWithTenantAndWithToken } from "../api";



export default async function pedidoFindWithProductToEmpresaSingle(empresaId){
    return await api.get(`pedidoUser?filter=[pedidoId]=${empresaId}`)
          .then((response) => {
            // console.log(response)
            let productData = response.data
            return productData
          });
}
