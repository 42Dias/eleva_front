/*
Aqui ficará o loadUser
*/

import HandleLocalStorageData from '../utils/handleLocalStorage'
import {apiWithoutTenantAndWithToken} from './api'

export default async function loadUser(token) {
    const response = await apiWithoutTenantAndWithToken.get(`auth/me`)
    .then(response => {
      return response.data;
    })

    let newRoleLocal = response.tenants[0].roles[0]
    let newTenatId = response.tenants[0].tenant.id
    let newId = response.id
    let newStatus = response.tenants[0].status
    HandleLocalStorageData(newRoleLocal, newTenatId, newId, newStatus, token)
  }