
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE
export const getUsers = async () => {
    try{
        const response = await fetch(API_URL_BASE + '/users/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if(!response.ok){
            throw new Error('fallo al obtener los usuario')
        }
        return await response.json()
    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }

}