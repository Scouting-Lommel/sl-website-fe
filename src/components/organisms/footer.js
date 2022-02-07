import Facebook from "../molecules/Facebook";
import Instagram from "../molecules/Instagram";

export default function Footer() {
    return (
      <div className="pl-10 pr-10 pt-10 grid grid-rows-6 gap-5">
        <div className="row-span-5 pb-10 grid grid-cols-6 gap-5">
          <div className="col-span-1">Image</div>
          <div className="col-span-3 grid grid-rows-4 gap-5">
            <div className="row-span-1">Scouting sint-pieter lommel</div>
            <div className="row-span-1">info@scoutinglommel.be</div>
            <div className="row-span-1">Nieuwe Kopen 4, 3920 Lommel</div>
            <div className="row-span-1 grid grid-cols-5 gap-2">
              <div className="col-span-1"><Facebook/></div>
              <div className="col-span-1"><Instagram/></div>
            </div>
          </div>
          <div className="col-span-1">Hopper</div>
          <div className="col-span-1">Scouts en gidsen vlaanderen</div>
        </div>
        <div className="row-span-1">copyright scouting lommel</div>
      </div>
    )
}