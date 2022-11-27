import React from 'react'
import { Main } from 'styles/View/ViewStyles'
import { Footer } from 'layout/Footer/Footer'
import { loginService } from 'services/authService'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuth'

const Login = () => {
    const router = useRouter()
    const { auth } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()
        const user = {
            user: e.target.user.value,
            password: e.target.password.value,
        }
        try {
            await loginService(user)
            router.push("/admin/dashboard")
        }
        catch (err) {
            console.log(err)
        }
    }

    if (auth) router.push("/admin/dashboard")

    return (
        <Main>
            {auth ?
                <div>Checking auth state...</div>
                :
                <form onSubmit={handleSubmit} className="w-full" style={{ maxWidth: "400px", margin: "auto" }}>
                    <h1 className="mb-6 text-center">Login</h1>
                    <div className="mb-6">
                        <label htmlFor="user" className=" block mb-2 font-medium text-gray-900 dark:text-white">Your username</label>
                        <input type="text" id="user" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" defaultValue="marateca" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="****" defaultValue={"marateca2022"} required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full" style={{ width: "100%" }}>Submit</button>
                </form>
            }


        </Main>
    )
}

export default Login

Login.getLayout = function getLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
