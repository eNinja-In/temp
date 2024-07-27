import aboutStyle from "./style/about.module.css"
function About(){
    return(
        <>
        <div className={aboutStyle.intro}>
            <h1>About</h1>
        </div>
        <div className={aboutStyle.overview}></div>
        <div className={aboutStyle.team}></div>
        <div className={aboutStyle.mission}></div>
        <div className={aboutStyle.SocialLinks}></div>
        </>
    )
}
export default About;