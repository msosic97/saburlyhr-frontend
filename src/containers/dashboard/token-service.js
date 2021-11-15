import jwtDecode from "jwt-decode"

const checkToken = () => {
    const token = localStorage.getItem('token')
    console.log(jwtDecode(token))
}

export default checkToken