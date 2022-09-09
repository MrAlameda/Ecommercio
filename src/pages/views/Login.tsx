import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"
import { UserLogin } from "../../models/types"
import { adUser, reset } from "../../Redux/Slices/userSlice"
import { existUser } from "../../services/api"

const Login=()=> {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const [userLogin, setUserLogin] = useState<UserLogin>({
        email:"",
        password:""
    })
    const setUser=async()=>{
        const res=await existUser(userLogin)
        if(res?.data.data.token){
            dispatch(reset())
            dispatch(adUser(res?.data.data.token))
            navigate(`/${PublicRoutes.PRODUCTS}`)
        }
    }

  return (
    <div className="loginContainer">
        <div>
            <Link to={`/${PublicRoutes.PRODUCTS}`}>Cancel</Link>
        </div>
        <div className="textLogin">
            Login
        </div>
        <div>

            <input
            className="inputName"
            value={userLogin.email}
            placeholder="email"
            onChange={e=>setUserLogin({...userLogin,"email":e.target.value})}
            />
            <input
            className="inputName"
            value={userLogin.password}
            placeholder="password"
            type="password"
            onChange={e=>setUserLogin({...userLogin,"password":e.target.value})}
            />
        <button 
        className="btn"
        onClick={()=>setUser()}>
            Login
        </button>
        </div>
        <div>

            <Link to={`/${PublicRoutes.REGISTER}`}>Register</Link>
        </div>
    </div>
  )
}

export default Login