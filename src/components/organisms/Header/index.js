import Link from "next/link";
import Image from "@/components/atoms/Image";
import { useAuthContext } from "@/lib/api/security/security";
import { Navigation } from "@/components/organisms/Navigation";

const Header = ({ info }) => {
  const loginBtn = {
    Href: "/login",
    IsButton: false,
    Title: "Login",
  };
  const [auth, setAuth] = useAuthContext();
  return (
    <>
      <div className="flex flex-row pr-5 py-2 border-b-2 border-black pl-5">
        <Link href="/">
          <a className=" h-14 w-1/12 relative">
            <Image src={info.Logo.data.attributes.url} alt="image" />
          </a>
        </Link>

        <div className="grow"></div>
        {info.NavigationItems.map((item, i) => {
          return <Navigation info={item} key={"Headernav" + i} />;
        })}
        {!auth.loggedIn && (
          <Link href={loginBtn.Href}>
            <a className="flex flex-col justify-center px-4">
              <i className="fa-solid fa-key text-xl"></i>
            </a>
          </Link>
        )}
      </div>
    </>
  );
};

export { Header };
