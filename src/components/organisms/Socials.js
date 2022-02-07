import Facebook from "../molecules/Facebook";
import Instagram from "../molecules/Instagram";

export default function Socials(){
    return (
        <div className="pl-10 pr-10 pb-14 pt-14 bg-slate-400">
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 text-3xl">Vind ons op sociale media</div>
            <div className="col-span-2 grid grid-cols-4">
                <div className="col-span-1"></div>
                <div className="col-span-1"><Facebook/></div>
                <div className="col-span-1 pl-2"><Instagram/></div>
            </div>
        </div>
        </div>)
}