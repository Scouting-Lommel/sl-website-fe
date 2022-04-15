import Link from "next/link";

export default function Social({args}){
    let pictogram = "";
    switch (args.attributes.Label) {
        case "Facebook":
            pictogram = "fa fa-facebook";
            break;
        case "Instagram":
            pictogram = "fa fa-instagram";
            break;
        default:
            break;
    }
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <style>{`
        .fa {
        padding: 5px;
        font-size: 20px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        margin: 2py 2px;
        }

        .fa:hover {
            opacity: 0.7;
        }

        .fa-facebook {
        color: black;
        }

        .fa-instagram {
        color: black;
        }
        `}
        </style>
        <div className="px-2">
            <div className="rounded-full border-black border-2">
                <Link href={args.attributes.Link}>
                    <a className={pictogram}></a>
                </Link>
            </div>
        </div>
        </>
    )
}