const CommingSoon = ({item}) => {
    return (
        <div className="flex flex-col justify-center border-2 py-14">
            <h1 className="text-6xl flex justify-center">Comming Soon:</h1> 
            <h3 className="text-4xl flex justify-center pt-3">{item}</h3>
        </div>
    )
}

export { CommingSoon }