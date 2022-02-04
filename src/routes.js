import { Switch, Route, HashRouter } from 'react-router-dom'
// import Home from './pages/Home'
import Login from './pages/Login'
import MyProducts from './pages/MyProducts'
import EnterAs from './pages/EnterAs'
import Buy from './pages/Buy'
import Products from './pages/Products'
import RegisterProduct from './pages/RegisterProduct'
import Register from './pages/Register'
import AcceptTerms from './pages/AcceptTerms'
import RegisterSupplier from './pages/RegisterSupplier'
import RegisterUserSupplier from './pages/RegisterUserSupplier'
import ApproveUser from './pages/ApproveUser'
import SaleDetails from './pages/SaleDetails'
import ApproveOrders from './pages/ApproveOrders'
import OrderConfirmation from './pages/OrderConfirmation'
import BuyProds from './pages/BuyProds'
import ProdSingle from './pages/ProdSingle'
import PriceNegotiation from './pages/PriceNegotiation'
import MyRequests from './pages/MyRequests'
import History from './pages/History'
import ErrorPage from './pages/ErrorPage'
import Supplies from './pages/Supplies'
import Categories from './pages/Categories'
import Redes from './pages/Redes'
import Especialidades from './pages/Especialidades'
import CodigoDeBarras from './pages/CodigoDeBarras'

const Routes = () => {
  return (
    <HashRouter>
      <HashRouter basename=''>
        <Switch>
          <Route path='/' exact component={EnterAs} />
          <Route path='/login'  exact component={Login} />
          <Route path='/comece-a-comprar' exact component={MyProducts} />
          {/* <Route path='/CONFIGURATION_REQUESTS' exact component={Home} /> */}
          <Route path='/listar-produtos' exact component={Buy} />
          <Route path='/products' exact component={Products} />
          <Route path='/cadastrar-produto' exact component={RegisterProduct} />
          <Route path='/register' exact component={Register} />
          <Route path='/aceitar-termos' exact component={AcceptTerms} />
          <Route path='/cadastrar-fornecedor' exact component={RegisterSupplier} />
          <Route path='/cadastrar-dados-empresa' exact component={RegisterUserSupplier} />
          <Route path='/aprovar-usuario' exact component={ApproveUser} />
          <Route path='/detalhes-da-venda/:id' exact component={SaleDetails} />
          <Route path='/aprovar-produtos' exact component={ApproveOrders} />
          <Route path='/confirmacao-dos-pedidos' exact component={OrderConfirmation} />
          <Route path='/comprar' exact component={BuyProds} />
          <Route path='/produto/:id' exact component={ProdSingle} />
          <Route path='/precos-negociados' exact component={PriceNegotiation} />
          <Route path='/meus-pedidos' exact component={MyRequests} />
          <Route path='/historico-de-pedidos' exact component={History} />
          <Route path='/home' exact component={Supplies} />
          <Route path='/categorias' exact component={Categories} />
          <Route path='/redes' exact component={Redes} />
          <Route path='/especialidades' exact component={Especialidades} />
          <Route path='/CodigoDeBarras' exact component={CodigoDeBarras} />
          <Route path='*' exact component={ErrorPage} />
        </Switch>
      </HashRouter>
    </HashRouter>
  )
}

export default Routes



// export const ENTERAS = '/'
// export const LOGIN = '/login'
// export const MYPRODUCTS = '/comece-a-comprar'
// export const CONFIGURATION_REQUESTS = '/CONFIGURATION_REQUESTS'
// export const BUY = '/listar-produtos'
// export const PRODUCTS = '/products'
// export const REGISTERPRODUCT = '/cadastrar-produto'
// export const REGISTER = '/register'
// export const ACCEPTTERMS = '/aceitar-termos'
// export const REGISTERSUPPLIER = '/cadastrar-fornecedor'
// export const APPROVEUSER = '/aprovar-usuario'
// export const SALEDETAILS = '/detalhes-da-venda'
// export const APPROVEORDERS = '/aprovar-produtos'
// export const ORDERCONFIRMATION = '/confirmacao-dos-pedidos'
// export const BUYPRODS = '/comprar'
// export const PRODSINGLE = '/produto-1'
// export const PRICENEGOTIATION = '/precos-negociados'
// export const MYREQUESTS = '/meus-pedidos'
// export const HISTORY = '/historico-de-pedidos'
// export const SUPPLIES = '/home'
// export const ERRORPAGE = '*'

