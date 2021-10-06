import Mainp from "./mainposter";
import Product from "./product";
import './../styles/home.css'
import chess from "./../images/chess.jpg"
import Slider from "./slider";
function Home(){
    return(
        <>
         <Mainp />
         <div className="Product-main">
             <h2 className="op">OUR PRODUCT</h2>
             <div className="ps">
             <Product heading="SEO"/>
             <Product heading="BRANDING" />
             <Product heading="LOGO" />
             </div>
        </div>
        <div className="Aboutus-main">
            <div className="Abt-sub">
                <div className="Abt-con">
                <h2>ABOUT US</h2>
                <p className="ap">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="Abt-img">
                <img src={chess} className="chess"></img>
                </div>
            </div>
        </div>
        <Slider />
        <div className="email">
            <div className="subs">
           <input type="email" className="ei" placeholder="Email ID"></input>
           <button className="click">Subscribe</button>
           </div>
        </div>
        </>
    )
}
export default Home;