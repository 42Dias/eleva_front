import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './ui'
import { LOGIN, MYPRODUCTS, ENTERAS, BUY } from './routes'
import { Login, MyProducts, EnterAs, Buy } from './pages'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ENTERAS} exact component={EnterAs} />
        <Route path={LOGIN} exact component={Login} />
        <Route path={MYPRODUCTS} exact component={MyProducts} />
        <Route path={BUY} exact component={Buy} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
