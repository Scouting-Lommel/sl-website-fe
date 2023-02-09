// import Head from "next/head";
import { useMutation } from "@apollo/client";
import { getGeneralData } from "@/lib/api/general";
import client from "@/lib/api/apollo/client";
import { loginQuery } from "@/lib/api/login/mutations";
import { setCredentials } from "@/lib/api/security/security";
import BaseLayout from "@/layouts/base";

export default function Login() {
  const [loginFunc, { loading, error }] = useMutation(loginQuery, {
    variables: {
      username: "placeholder",
      password: "placeholder",
    },
    onCompleted(data) {
      setCredentials(data.login.jwt);
    },
    onError(err) {
      console.error(err);
    },
  });

  return (
    <BaseLayout pageTitle="Login" noIndex={true} slug="login">
      <form>
        <label htmlFor="username">
          <span>Username</span>
          <input
            id="username"
            type="text"
            placeholder="Username"
            autoComplete="username"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="******************"
          />
        </label>
        {!loading && (
          <button
            type="submit"
            onClick={() => {
              loginFunc({
                variables: {
                  username: document.getElementById("username").value,
                  password: document.getElementById("password").value,
                },
              });
            }}
          >
            Sign In
          </button>
        )}
        {loading && <div>Loading</div>}
        {error && <div>Incorrect credentials</div>}
      </form>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });

  if (!general?.data?.generalData) {
    return notFound;
  }

  return {
    props: { general: general.data.generalData.data.attributes },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
