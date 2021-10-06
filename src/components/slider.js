import "./../styles/slider.css"
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { IconContext } from "react-icons/lib";
import Profile from "./profile";
function Slider(){
    return(
        <> 
           <div className="slider-main">
              <div className="slider-sub">
               <IconContext.Provider value={{className:"icons"}}> 
               <MdKeyboardArrowLeft />
               </IconContext.Provider>
               <Profile />
               <IconContext.Provider value={{className:"icons"}}>
               <MdKeyboardArrowRight />
               </IconContext.Provider>
              </div>
           </div>
        </>
    )
}
export default Slider;