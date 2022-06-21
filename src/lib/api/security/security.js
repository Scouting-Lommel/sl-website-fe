import client from "../apollo/client";
import { getDataFromUserId } from "./queries";
import decodeJWT from "jwt-decode"

const ISSERVER = typeof window === "undefined";

async function setCredentials(jwt){
    if(!ISSERVER){
        const id = decodeJWT(jwt).id
        const { data } = await client.query({
            query: getDataFromUserId(id)
        })
        setJwtToken(jwt);
        setUserGroup(data.usersPermissionsUser.data.attributes.leader.data.attributes.group.data.attributes.Name)
        setGroupLeader(data.usersPermissionsUser.data.attributes.leader.data.attributes.IsGroupLeader)
        setUserID(data.usersPermissionsUser.data.attributes.leader.data.id)
    }
}

async function setGroupLeader(groupleader){
    if(!ISSERVER) {
        sessionStorage.setItem("groupLeader", groupleader)
    }
}

function getGroupLeader(){
    if(!ISSERVER) {
        return sessionStorage.getItem("groupLeader")
    }
    return undefined
}

function getJwtToken() {
    if(!ISSERVER) {
        return sessionStorage.getItem("jwt")
    }
    return undefined
}

function setJwtToken(token) {
    if(!ISSERVER) {
        sessionStorage.setItem("jwt", token)
    }
}

async function setUserGroup(name){
    if(!ISSERVER) {
        sessionStorage.setItem("UserGroup", name)
    }
}

function getUserGroup(){
    if(!ISSERVER) {
        return sessionStorage.getItem("UserGroup")
    }
    return undefined
}

async function setUserID(id){
    if(!ISSERVER) {
        sessionStorage.setItem("UID", id)
    }
}

function getUserID(){
    if(!ISSERVER) {
        return sessionStorage.getItem("UID")
    }
    return undefined
}

function isLoggedIn(){
    const jwtToken = getJwtToken();
    return jwtToken ? true : false
}

export{getJwtToken, getUserID, getUserGroup, getGroupLeader, isLoggedIn, setCredentials}