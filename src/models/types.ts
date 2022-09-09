
export interface Regist{
    firstName:string
    lastName:string
    email:string
    password:string
    phone:string
    role:string
}

export interface UserLogin{
    email:string
    password:string
}

export interface Token{
    token:string
}


export interface ProductCart{
    id:number
    quantity:number
}

export interface PurchInfo{
    street: string
    colony:string
    zipCode:number
    city: string
    references: string
}