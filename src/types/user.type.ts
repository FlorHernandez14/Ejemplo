export interface GetUser{
    id: number
    name: string
    lastName: string
    age: number
    gender: string
    email: string
    password: string
    isActive: boolean
    rol:{
        id: number
        rol: string
        isActive: Boolean

    }
    rolId: number
}

export interface CreateUser{
    name: string
    lastName: string
    age: number
    gender: string
    email: string
    password: string
    rolId: number

}

export interface UpdateUser{
    id: number
    name: string
    lastName: string
    age: number
    gender: string
    email: string
    rolId: number
}
