import "./../styles/footersub.css"
function Footersub(props){
    return(
        <>
        <div className="fs fs2">
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
        </div>
        </>
    )
}
export default Footersub