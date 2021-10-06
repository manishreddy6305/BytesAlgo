import './../styles/profile.css'
import pp from './../images/pp.jfif'
function Profile(){
    return(
        <>
         <div className="profile-main">
             <div className="profile-photo">
             <img src={pp} className="me"></img>
             </div>
             <div className="profile-con">
             <h3 style={{marginTop:"10px"}}>JON DEO</h3>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div>
         </div>
        </>
    )
}
export default Profile;