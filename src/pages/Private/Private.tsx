import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/routes"
import PageNotFound from "../NotFound/PageNotFound"
import Cart from "../views/Cart"
import Home from "../views/Home"

const Private=()=>{
  return (
    <PageNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.CART}/>}/>
        <Route path={PrivateRoutes.CART} element={<Cart/>}/>
     </PageNotFound>
  )
}
export default Private