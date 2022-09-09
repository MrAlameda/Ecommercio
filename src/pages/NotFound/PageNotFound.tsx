import { Route, Routes } from "react-router-dom"
import NotFound from "../views/NotFound"

interface Props{
    children:JSX.Element[] | JSX.Element
}

const PageNotFound=({children}:Props) =>{
    return (
        <Routes>
                {children}
                <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default PageNotFound