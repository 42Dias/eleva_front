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
  ORDERCONFIRMATION,
  BUYPRODS,
  PRODSINGLE,
  PRICENEGOTIATION,
  MYREQUESTS,
  HISTORY,
  ERRORPAGE,
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
  OrderConfirmation,
  BuyProds,
  ProdSingle,
  PriceNegotiation,
  MyRequests,
  History,
  ErrorPage,
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
        <Route path={ORDERCONFIRMATION} exact component={OrderConfirmation} />
        <Route path={BUYPRODS} exact component={BuyProds} />
        <Route path={PRODSINGLE} exact component={ProdSingle} />
        <Route path={PRICENEGOTIATION} exact component={PriceNegotiation} />
        <Route path={MYREQUESTS} exact component={MyRequests} />
        <Route path={HISTORY} exact component={History} />
        <Route path={ERRORPAGE} exact component={ErrorPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
