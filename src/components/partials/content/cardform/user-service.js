import jwtDecode from "jwt-decode"

const getUser = () => {
    const token = localStorage.getItem('token')
    const user = jwtDecode(token)
    const userID = user.user_id
    return userID
}

export default getUser