import decodeJWT from "jwt-decode";
import { createContext, useContext, useState } from "react";
import client from "@/lib/api/apollo/client";
import { getDataFromUserId } from "@/lib/api/security/queries";

const ISSERVER = typeof window === "undefined";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    loggedIn: false,
    group: undefined,
    groupLeader: false,
  });
  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}

async function UpdateAuth() {
  const [auth, setAuth] = useAuthContext();
  if (
    auth.group != getUserGroup() ||
    auth.loggedIn != isLoggedIn() ||
    auth.groupLeader != getGroupLeader()
  ) {
    setAuth({
      loggedIn: isLoggedIn(),
      group: getUserGroup(),
      groupLeader: getGroupLeader(),
    });
  }
}

async function setCredentials(jwt) {
  if (!ISSERVER) {
    const id = decodeJWT(jwt).id;
    await client
      .query({
        query: getDataFromUserId(id),
      })
      .then((res) => {
        console.log("jwt: " + jwt)
        console.log("User info: ")
        console.log(res);
        SetJwtToken(jwt);
        SetUserGroup(
          res.data.usersPermissionsUser.data.attributes.leader.data.attributes
            .group.data.attributes.Name
        );
        SetGroupLeader(
          res.data.usersPermissionsUser.data.attributes.leader.data.attributes
            .IsGroupLeader
        );
        setUserID(res.data.usersPermissionsUser.data.attributes.leader.data.id);
        window.location.href = "/";
      });
  }
}

function SetGroupLeader(groupleader) {
  if (!ISSERVER) {
    sessionStorage.setItem("groupLeader", groupleader);
  }
}

function getGroupLeader() {
  if (!ISSERVER) {
    return sessionStorage.getItem("groupLeader") == "true" ? true : false;
  }
  return undefined;
}

function getJwtToken() {
  if (!ISSERVER) {
    return sessionStorage.getItem("jwt");
  }
  return undefined;
}

function SetJwtToken(token) {
  if (!ISSERVER) {
    sessionStorage.setItem("jwt", token);
  }
}

function SetUserGroup(name) {
  if (!ISSERVER) {
    sessionStorage.setItem("UserGroup", name);
  }
}

function getUserGroup() {
  if (!ISSERVER) {
    return sessionStorage.getItem("UserGroup");
  }
  return undefined;
}

function setUserID(id) {
  if (!ISSERVER) {
    sessionStorage.setItem("UID", id);
  }
}

function getUserID() {
  if (!ISSERVER) {
    return sessionStorage.getItem("UID");
  }
  return undefined;
}

function isLoggedIn() {
  const jwtToken = getJwtToken();
  return jwtToken ? true : false;
}

export {
  getJwtToken,
  getUserID,
  getUserGroup,
  getGroupLeader,
  setCredentials,
  UpdateAuth,
  isLoggedIn,
};
