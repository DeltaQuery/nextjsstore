export const token = typeof window !== "undefined" ? window.localStorage.getItem("nextStore-token") : null

export const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}