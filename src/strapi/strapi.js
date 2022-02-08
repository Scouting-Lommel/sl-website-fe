import { useMutation } from "@apollo/client";
import decodeJWT from "jwt-decode"
import { loginQuery } from "./queries";





export async function login(username, password) {

    const [loginFunction, { data, loading, error }] = useMutation(loginQuery());

    loginFunction({variables: {username: username, password: password}})

    console.log(data)
    console.log(loading)
    console.log(error)

    // const { data } = await client.query({
    //     query: loginQuery(username, password)
    // })   

    setJwtToken(data.jwt)
    console.log(data.jwt)
    console.log(decodeJWT(data.jwt))

}

export function getJwtToken() {
    return sessionStorage.getItem("jwt")
}

export function setJwtToken(token) {
    sessionStorage.setItem("jwt", token)
}

export function isLoggedIn(){
    const jwtToken = getJwtToken();
    return jwtToken ? true : false
}

export function getHeaders() {
    const headers = {}
    const token = getJwtToken()
    if (token) headers["Authorization"] = `Bearer ${token}`
    return headers
}