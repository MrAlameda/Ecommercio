import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { Regist } from '../../models/types'
import { registerUser } from '../../services/api'

function Register() {

    const navigate=useNavigate()

    const [user, setuser] = useState<Regist>({
        firstName:"",
        lastName:"",
        email:   "",
        password:"",
        phone:   "",
        role:    ""
    })

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await registerUser(user)
        setuser({
            firstName:"",
            lastName:"",
            email:   "",
            password:"",
            phone:   "",
            role:    "Admin"
        })
        navigate(`/${PublicRoutes.LOGIN}`)
    }

    return (
        <div className='registContent'>
            <div>
                <Link to={`/`}>Cancel</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={user.firstName}
                    onChange={e=>setuser({...user,"firstName":e.target.value})} 
                    placeholder="Nombre"
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Enter User Name Here')}
                    onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    required/>
                <input
                    value={user.lastName}
                    onChange={e=>setuser({...user,"lastName":e.target.value})} 
                    placeholder="Apellido"
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Enter User Lastname Here')}
                    onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    required/>
                <input
                    value={user.email}
                    onChange={e=>setuser({...user,"email":e.target.value})}
                    placeholder="email"
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Enter User email Here')}
                    onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    required/>
                <input  
                    value={user.password}
                    onChange={e=>setuser({...user,"password":e.target.value})} 
                    // type="password" 
                    placeholder="Password"
                    minLength={8}
                    maxLength={10}
                    required/>
                <input
                    value={user.phone}
                    onChange={e=>setuser({...user,"phone":e.target.value})}   
                    placeholder="Telefono"
                    minLength={10}
                    required/>
                
                <button type='submit'>Login</button>
            </form>
           
        </div>
    )
}

export default Register