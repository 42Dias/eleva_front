import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './ui'
import {
  LOGIN,
  MYPRODUCTS,
  ENTERAS,
  BUY,
  REGISTER,
  ACCEPTTERMS,
} from './routes'
import { Login, MyProducts, EnterAs, Buy, Register, AcceptTerms } from './pages'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ENTERAS} exact component={EnterAs} />
        <Route path={LOGIN} exact component={Login} />
        <Route path={MYPRODUCTS} exact component={MyProducts} />
        <Route path={BUY} exact component={Buy} />
        <Route path={REGISTER} exact component={Register} />
        <Route path={ACCEPTTERMS} exact component={AcceptTerms} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
