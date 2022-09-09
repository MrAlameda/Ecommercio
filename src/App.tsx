import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./models/routes"
import PageNotFound from "./pages/NotFound/PageNotFound"
import LockGuard from "./pages/guard/lockguard"
import Private from "./pages/Private/Private"
import Login from "./pages/views/Login"
import Products from "./pages/public/Products"
import ProductId from "./pages/components/ProductId"
import Register from "./pages/components/Register"

function App() {
  return (
    <div className="App">
      <PageNotFound>
        <Route path="/" element={<Navigate to={PublicRoutes.PRODUCTS}/>}/>
        <Route path={PublicRoutes.PRODUCTS} element={<Products/>}/>
        <Route path={`${PublicRoutes.PRODUCTS}/:id`} element={<ProductId/>}/>
        <Route path={`${PublicRoutes.LOGIN}`} element={<Login/>}/>
        <Route path={PublicRoutes.REGISTER} element={<Register/>}/>
        <Route element={<LockGuard/>}>
            <Route path={`${PrivateRoutes.HOME}/*`} element={<Private/>}/>
        </Route>
      </PageNotFound>
    </div>
  )
}

export default App
