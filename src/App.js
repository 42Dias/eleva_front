import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './ui'
import { LOGIN, MYPRODUCTS, ENTERAS } from './routes'
import { Login, MyProducts, EnterAs } from './pages'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ENTERAS} exact component={EnterAs} />
        <Route path={LOGIN} exact component={Login} />
        <Route path={MYPRODUCTS} exact component={MyProducts} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
