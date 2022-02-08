import SmallLeader from '../molecules/SmallLeader'

export default function Leaders({leaders}){
    return (
        <div className="grid-cols-2">
            <div className="text-4xl text-center">
                Onze Leiding
            </div>
            <div className="px-10 py-4">
                <div className="flex flex-row justify-evenly">
                        {leaders.map(leader => <SmallLeader info={leader}/>)}
                </div>                                      
            </div>
        </div>
    )
}