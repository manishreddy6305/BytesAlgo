import { IconContext } from 'react-icons/lib';
import './../styles/footer.css'
import Footersub from './footersub'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
import {TiSocialGooglePlus} from 'react-icons/ti'
function Footer(){
    return(
        <>
        <div className="footer-main">
            <div className="footer-sub">
                 <Footersub heading="ABOUT COMPANY" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
                 <div className="fs">
                   <h2>QUICK LINKS</h2>
                   <p className="Ql">Home</p>
                   <p className="Ql Ql2">Products</p>
                   <p className="Ql Ql2">Pricing</p>
                   <p className="Ql Ql2">Contact</p>
                  </div>
                  <div className="fs">
                   <h2>CONTACT US</h2>
                   <p className="info info2">info@company.com</p>
                   <p className="info">+91 0796000450</p>
                   <div className="ic">
                   <IconContext.Provider value={{className:"handles"}}>
                   <FaFacebookF />
                   </IconContext.Provider>
                   <IconContext.Provider value={{className:"handles"}}>
                   <CgTwitter />
                   </IconContext.Provider>
                   <IconContext.Provider value={{className:"handles"}}>
                   <TiSocialGooglePlus />    
                   </IconContext.Provider>
                   </div>
                  </div>
            </div>
        </div>
        <div className="copyright">
        <p>Copyright © 1996 Jane Doe</p>
        </div>
        </>
    )
}
export default Footer;