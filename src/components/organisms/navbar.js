import Contact from "../molecules/navbar/contact";
import Home from "../molecules/navbar/home";
import Info from "../molecules/navbar/info";
import Inschrijven from "../molecules/navbar/inschrijven";
import ScoutingLommel from "../molecules/navbar/scoutingLommel";
import Takken from "../molecules/navbar/takken";
import Verhuur from "../molecules/navbar/verhuur";

export default function Navbar() {
    return (
      <>
      <div className="flex h-14 items-center justify-center">
        <ScoutingLommel></ScoutingLommel>
        <div className="flex-1"></div>
        <Home></Home>
        <Takken></Takken>
        <Verhuur></Verhuur>
        <Info></Info>
        <Inschrijven></Inschrijven>
        <Contact></Contact>
      </div>
      </>
    )
}