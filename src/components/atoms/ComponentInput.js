export default function ComponentInput({args}){
    return(
        <>
        <input
            type={args.type}
            name={args.name}
            id={args.id}
            defaultValue={args.defaultValue}
        />
        </>
    )
}