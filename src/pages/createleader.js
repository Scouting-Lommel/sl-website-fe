import { useMutation } from "@apollo/client";
import { getGeneralData } from "@/lib/api/general/queries";
import client from "@/lib/api/apollo/client";
import { createNewLeader } from "@/lib/api/register/mutations";
import BaseLayout from "@/layouts/Base";  

export default function Createleader({ general }) {

    const [createUserFunc, { loading, error, data }] = useMutation(createNewLeader, {
        variables: {
          username: "placeholder",
          email: "placeholder",
          password: "placeholder",
        },
        onCompleted(data) {
          alert("Succes")
          document.getElementById("username").value = ""
          document.getElementById("email").value = ""
          document.getElementById("password1").value = ""
          document.getElementById("password2").value = ""
        },
        onError(fin) {
          console.error(fin);
        },
      });
    return (
        <BaseLayout generalData={general} title="Create leader" noIndex={true}>
            <div className="flex flex-row justify-center py-32">
        <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center max-w-lg">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              type="text"
              placeholder="testuser@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password1"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password1"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password2"
            >
              Retype password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password2"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="grid grid-rows-2">
              {!loading && (
                <button
                  className="bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => {
                    if(document.getElementById("password1").value != document.getElementById("password2").value){
                        alert("passwords do not match");
                        return;
                    }
                    createUserFunc({
                      variables: {
                        username: document.getElementById("username").value,
                        password: document.getElementById("password1").value,
                        email: document.getElementById("email").value,
                      },
                    });
                  }}
                >
                  Sign In
                </button>
              )}
              {loading && <div>Loading</div>}
              {error && (
                <div className="text-red-600">An error occured, check console</div>
              )}
            </div>
          </div>
        </div>
      </div>
        </BaseLayout>
    )
}


export async function getStaticProps() {
    const layoutData = await client.query({
      query: getGeneralData(),
    });
  
    let general = layoutData.data.generalData.data.attributes.GeneralData;
  
    return {
      props: { general },
      revalidate: 86400, // 60*60*24 = every 24 hours
    };
  }