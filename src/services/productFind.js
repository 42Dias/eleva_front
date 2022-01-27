import { api } from "./api";



export default async function productFind(productId){
    return await api.get(`produto/${productId}`)
          .then((response) => {
            let productData = response.data
            return productData
          });
}
