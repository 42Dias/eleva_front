import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'ui'
import { LOGIN, MYPRODUCTS } from 'routes'
import { Login, MyProducts } from 'pages'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={LOGIN} exact component={Login} />
        <Route path={MYPRODUCTS} component={MyProducts} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
