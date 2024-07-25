import navStyle from "./navBar.module.css"
import facebook from "./logo/facebook.png"
import instagram from "./logo/facebook.png"
import youtube from "./logo/facebook.png"
import gmail from "./logo/facebook.png"
import whatsapp from "./logo/facebook.png"
function NavBar(){
    return (
        <div className={navStyle.navBar}>
            <div className={navStyle.navLeft}><a href="/"><h2>JS-Agro</h2></a></div>
            <div className={navStyle.navCentre}>
              <ul className={navStyle.navigationList}>
                <a href="/"><li>Home</li></a>
                <a href="/"><li>Product</li></a>
                <a href="/"><li>Gallery</li></a>
                <a href="/"><li>About</li></a>
              </ul>
            </div>
            <div className={navStyle.navRight}>
                <ul className={navStyle.socialLinks}>
                    <a href="/"><img src={facebook} alt="facebook" /></a>
                    <a href="/"><img src={youtube} alt="youtube" /></a>
                    <a href="/"><img src={instagram} alt="instagram" /></a>
                    <a href="/"><img src={gmail} alt="github" /></a>
                    <a href="/"><img src={whatsapp} alt="whatsapp" /></a>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;