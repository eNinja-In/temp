import galleryStyle from "./style/gallery.module.css"
function Gallery(){
    return(
        <>
        <div className={galleryStyle.main}>
            <h1>Gallery</h1>
        </div>
        <div className={galleryStyle.gal}></div>
        </>
    )
}
export default Gallery;