import { useContext } from "react"
import { RegisterHost } from "../../pages/RegisterHost"
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useContext(AuthContext)

    if(!auth.user) {
        return <RegisterHost/>
    }
    
    return children
}