import { Markup } from 'interweave';

const Address = ({info}) => {
    return(
        <>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">{info.Title}</h2>
            <div className="text-gray-400 mb-4">{info.Email}</div>
            <div className="text-gray-400 mb-4"> <Markup content={info.Address}/></div>
        </div>
        </>
    )
}

export {Address}