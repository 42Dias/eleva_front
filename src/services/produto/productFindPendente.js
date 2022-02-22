import { api, apiWithTenantAndWithToken } from "../api";



export default async function productFindPendente(){
    return await api.get(`produto?filter%5Bstatus%5D=false`)
          .then((response) => {
            // console.log(response)
            let productData = response.data
            return productData
          });
}
