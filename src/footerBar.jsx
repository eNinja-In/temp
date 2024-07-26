import footerStyle from "./style/footerBar.module.css"
import JSlogo from "./logo/logo1.jpeg" 
function FooterBar(){
    return(
    <>
    <div className={footerStyle.footer}>
        <div className={footerStyle.footerLeft}><div><img src={JSlogo} alt="logo" /></div></div>
        <div className={footerStyle.footerRight}>
            <div className={footerStyle.rightUpper}>
                <ul className={footerStyle.upperlist1}>
                    <h3>header</h3>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                </ul>
                <ul className={footerStyle.upperlist3}>
                    <h3>header</h3>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                </ul>
                <ul className={footerStyle.upperlist3}>
                    <h3>header</h3>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                    <a href="/"><li>list</li></a>
                </ul>
            </div>
            <div className={footerStyle.rightlower}>
                <ul className={footerStyle.HeadOffice}>
                    <h3>HeadQuater</h3>
                    <li><a href="/">Phone : +918814830805</a></li>
                    <li><a href="https://mail.google.com/mail/u/0/#search/jsagroequipment%40gmail.com?compose=new" target="_blank">Email : jsagroequipment@gmail.com </a></li>
                    <li>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="currentColor"/></svg> */}
                        <a href="https://maps.app.goo.gl/aXuHoUXn56kX46Pz6" target="_blank">JS AGRO EQUIPMENT,<br/>Near Sonalika agency St, 8, Bhuna Rd, Fatehabad, Haryana 125050</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className={footerStyle.footerCopyRight}><p>Copyright ©:eNinja-In 2024</p></div>
    </>
    )
}
export default FooterBar;