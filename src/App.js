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
} from './routes'
import {
  Login,
  MyProducts,
  EnterAs,
  Buy,
  Products,
  RegisterProduct,
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
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
