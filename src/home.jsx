import homeStyle from "./style/home.module.css"
import tracter from "./assets/tracter.png"
function Home(){
    return (
        <div className={homeStyle.homeSection}>
            <div className={homeStyle.homeUpper}>
                <div className={homeStyle.homeUpperLeft}>
                    <h2>Welcome to JS-Agro Equipment</h2>
                    <h3>Discover the Future of Farming</h3>
                    <p>At JS Agro Equipment, we are dedicated to revolutionizing agriculture with innovative solutions. Established in 2020, our mission is to empower farmers and agricultural businesses with cutting-edge equipment and technology. We believe in enhancing productivity, sustainability, and efficiency through our state-of-the-art products and exceptional customer service.</p>
                    <button>Know More</button>
                </div>
                <div className={homeStyle.homeUpperRight}>
                    <div className="upperRightDiv">
                        <img src={tracter} alt="tracter" />
                    </div>
                </div>
            </div>
            <div className={homeStyle.homeMain}></div>
            <div className={homeStyle.homeLower}></div>
        </div>
    )
}
export default Home;