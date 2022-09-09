

export const getConfigur=()=>({
    headers:{
        Authorization:`Bearer ${localStorage.getItem("user")}`
    }
})