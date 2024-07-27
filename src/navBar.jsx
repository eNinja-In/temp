import navStyle from "./style/navBar.module.css"
import facebook from "./logo/facebook.png"
import instagram from "./logo/instagram.png"
import youtube from "./logo/youtube.png"
import { Link } from "react-router-dom"

function NavBar(){
    return (
        <div className={navStyle.navBar}>
            <div className={navStyle.navLeft}><a href="/"><h2>JS-Agro</h2></a></div>
            <div className={navStyle.navCentre}>
              <ul className={navStyle.navigationList}>
                <Link to="/" style={{ "--i": 1 }}><li>Home</li></Link>
                <Link to="/about" style={{ "--i": 2 }}><li>About</li></Link>
                <Link to="/product" style={{ "--i": 3 }}><li>Product</li></Link>
                <Link to="/gallery" style={{ "--i": 4 }}><li>Gallery</li></Link>
                <Link to="/contact" style={{ "--i": 5 }}><li>Contact</li></Link>
              </ul>
            </div>
            <div className={navStyle.navRight}>
                <ul className={navStyle.socialLinks}>
                    <a href="/" style={{ "--i": 1 }}><img src={facebook} alt="facebook" /></a>
                    <a href="/" style={{ "--i": 2 }}><img src={instagram} alt="instagram" /></a>
                    <a href="/" style={{ "--i": 3 }}><img src={youtube} alt="youtube" /></a>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;