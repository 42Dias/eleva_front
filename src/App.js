import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './ui'
import {
  LOGIN,
  MYPRODUCTS,
  ENTERAS,
  BUY,
  PRODUCTS,
  REGISTERPRODUCT,
  REGISTER,
  ACCEPTTERMS,
  REGISTERSUPPLIER,
  APPROVEUSER,
  SALEDETAILS,
  APPROVEORDERS,
  BUYPRODS,
} from './routes'
import {
  Login,
  MyProducts,
  EnterAs,
  Buy,
  Products,
  RegisterProduct,
  Register,
  AcceptTerms,
  RegisterSupplier,
  ApproveUser,
  SaleDetails,
  ApproveOrders,
  BuyProds,
} from './pages'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ENTERAS} exact component={EnterAs} />
        <Route path={LOGIN} exact component={Login} />
        <Route path={MYPRODUCTS} exact component={MyProducts} />
        <Route path={BUY} exact component={Buy} />
        <Route path={PRODUCTS} exact component={Products} />
        <Route path={REGISTERPRODUCT} exact component={RegisterProduct} />
        <Route path={REGISTER} exact component={Register} />
        <Route path={ACCEPTTERMS} exact component={AcceptTerms} />
        <Route path={REGISTERSUPPLIER} exact component={RegisterSupplier} />
        <Route path={APPROVEUSER} exact component={ApproveUser} />
        <Route path={SALEDETAILS} exact component={SaleDetails} />
        <Route path={APPROVEORDERS} exact component={ApproveOrders} />
        <Route path={BUYPRODS} exact component={BuyProds} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
