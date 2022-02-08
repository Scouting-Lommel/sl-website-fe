import client from "../apollo-client";
import { getGroupNameFromUserId } from "./queries";

const ISSERVER = typeof window === "undefined";

export function getJwtToken() {
    if(!ISSERVER) {
        return sessionStorage.getItem("jwt")
    }
    return undefined
}

export function setJwtToken(token) {
    if(!ISSERVER) {
        sessionStorage.setItem("jwt", token)
    }
}

async function setUserGroup(UID){
    const { data } = await client.query({
        query: getGroupNameFromUserId(UID)
    })
    
    console.log(data)

    if(!ISSERVER) {
        sessionStorage.setItem("UserGroup", data.usersPermissionsUsers.data[0].attributes.leader.data.attributes.group.data.attributes.name)
    }
}

export function getUserGroup(){
    if(!ISSERVER) {
        return sessionStorage.getItem("UserGroup")
    }
    return undefined
}

export async function setUserID(id){
    // with the users id we also want the group name it is part of
    if(!ISSERVER) {
        setUserGroup(id)
        sessionStorage.setItem("UID", id)
    }
}

export function getUserID(){
    if(!ISSERVER) {
        return sessionStorage.getItem("UID")
    }
    return undefined
}

export function isLoggedIn(){
    const jwtToken = getJwtToken();
    return jwtToken ? true : false
}