import decodeJWT from "jwt-decode";
import { createContext, useContext, useState } from "react";
import client from "@/lib/api/apollo/client";
import { getDataFromUserId } from "@/lib/api/security/queries";

const ISSERVER = typeof window === "undefined";

const authContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    loggedIn: false,
    leader: undefined,
    group: undefined,
    groupLeader: false,
  });
  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
}

function useAuthContext() {
  return useContext(authContext);
}

const logout = async () => {
  sessionStorage.clear();
  location.reload();
};

async function UpdateAuth() {
  const [auth, setAuth] = useAuthContext();
  if (
    auth.group != getUserGroup() ||
    auth.loggedIn != isLoggedIn() ||
    auth.groupLeader != getGroupLeader()
  ) {
    setAuth({
      loggedIn: isLoggedIn(),
      leader: getLeader(),
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
        setJwtToken(jwt);
        setUserGroup(
          res.data.usersPermissionsUser.data.attributes.leader.data.attributes
            .group.data.attributes.name
        );
        setLeader(
          res.data.usersPermissionsUser.data.attributes.leader.data.attributes
        );
        setGroupLeader(
          res.data.usersPermissionsUser.data.attributes.leader.data.attributes
            .isGroupLeader
        );
        setUserID(res.data.usersPermissionsUser.data.attributes.leader.data.id);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  }
}

function setGroupLeader(groupleader) {
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

function setJwtToken(token) {
  if (!ISSERVER) {
    sessionStorage.setItem("jwt", token);
  }
}

function setLeader(leader) {
  if (!ISSERVER) {
    sessionStorage.setItem("Leader", JSON.stringify(leader));
  }
}

function getLeader() {
  if (!ISSERVER) {
    return JSON.parse(sessionStorage.getItem("Leader"));
  }
  return undefined;
}

function setUserGroup(name) {
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
  getLeader,
  getGroupLeader,
  setCredentials,
  UpdateAuth,
  AuthProvider,
  useAuthContext,
  logout,
};
