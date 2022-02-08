import { useMutation } from "@apollo/client";
import { loginQuery } from "../strapi/queries";
import { setJwtToken, setUserID } from "../strapi/strapi";
import decodeJWT from "jwt-decode"
import Layout from "./styles/Layout";

export default function login(){
    const [loginFunc, { loading, error }] = useMutation(loginQuery, {
        variables: {
            username: "placeholder",
            password: "placeholder",
          },
        onCompleted(fin){
            setUserID(decodeJWT(fin.login.jwt).id);
            setJwtToken(fin.login.jwt);
            window.location.href = '/';
        },
        onError(fin){
            console.error(fin);
        },
    });

  return (
      <Layout>
      <div className="flex flex-row justify-center py-32">
    <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center max-w-lg">
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
            </div>
        <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
        </div>
            <div className="flex flex-row justify-evenly">
                <div className="grid grid-rows-2">
                {!loading && <button className="bg-blue-800 text-white font-bold py-2 px-4 rounded" type="button"
                    onClick={() =>{
                        loginFunc({
                            variables: {
                                username: document.getElementById("username").value,
                                password: document.getElementById("password").value
                            },
                        })
                    }
                    }>
                    Sign In
                </button> }
                {loading && <div>Loading</div>}
                {error && <div className="text-red-600">Incorrect credentials</div>}  
            </div>
        </div>
    </div>
    </div>
    </Layout>
  );
}