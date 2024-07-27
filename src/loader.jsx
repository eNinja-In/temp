import loaderImg from "./logo/loader.gif"
function Loader(){
    return(
        <div className="Loader">
            <div className="loaderMain">
                <img src={loaderImg} alt="Loader" />
            </div>
        </div>
    )
}
export default Loader;