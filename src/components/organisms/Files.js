import File from '../molecules/File'

export default function Files({files}){
    return (
        <div className="grid-cols-2">
            <div className="text-4xl text-center">
                Bestanden
            </div>
            <div className="px-10 py-1">
                <div className="flex flex-row justify-center">
                        {files.map(file => <File info={file}/>)}
                </div>                                      
            </div>
        </div>
    )
}