import { api, apiWithTenantAndWithToken } from "../api";

/*
userProduto-codigo/:id
*/

export default async function findUserProduto(productId){
    return await api.get(`userProduto-codigo/${productId}`)
          .then((response) => {
            let productData = response.data.records
            return productData
          });
}
