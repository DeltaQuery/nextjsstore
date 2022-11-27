import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { checkExpToken } from 'utils/checkExpToken'

export const useAuth = () => {
    const [auth, setAuth] = useState(false)
    const router = useRouter()
    const token = checkExpToken()
    
    useEffect(() => {
      if(!token) {
        router.push("/admin/login")
      } else {
        setAuth(true)
      }
    },[])

    return {
        auth
      }
}
