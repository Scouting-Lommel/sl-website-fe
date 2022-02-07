import Takpagina from './takpagina';

export default function Welpen() {
    // get data from backend
    let data = {}
    data.leaders = ["a", "b", "c", "d", "e"];
    data.info = "Info over deze tak blablablatttttttttttttttttttttttttttttttt ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt";
    data.files = "filenamen enzo dingen";
    data.activities = [{date:"morgen", info:"die activiteit dinges"}, {date:"andere keer", info:"Ja nog zo een activiteit dinges"}];
    
    // check access rights, something like this (I know this is not how it works, but just for demo purposes):
    // if(cookie.acces == "welpen" || "groepsleiding"){
    //     return (
    //         <TakAdminpagina tak={"Welpen"} data={data}></TakAdminpagina>
    //     );
    // }
    return (
        <Takpagina tak={"Welpen"} data={data}></Takpagina>
    );
}    