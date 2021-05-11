const Note = ({note,modify})=>{
    const label = note.important?'make no important':'make important'
    return (
        <>
            <li>{note.content}
                <button onClick = {modify} >{label}</button>
            </li>
        </>
    )
}
export default Note