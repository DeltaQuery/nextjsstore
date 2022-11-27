export const checkExpToken = () => {
    const JWT = typeof window !== "undefined" ? localStorage.getItem("nextStore-token") : null
    if (!JWT) return false

    const jwtPayload = JSON.parse(window.atob(JWT.split('.')[1]))
    if (jwtPayload * 1000 < new Date().getTime()) {
        return false
    } else {
        return true
    }
}