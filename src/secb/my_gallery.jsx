import gCss from "./my_gallery.module.css"
import Cake from "../assets/a.jpeg"
import Ticket from "../assets/b.png"
const MyGallery = ()=>{
    return(
        <div>
            <h3>My Gallery</h3>
            <div className={gCss.gallery}>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                    <div className={gCss.info}>
                        <p>Image Title</p>
                        <i>Image Description</i>
                    </div>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
                <div className={gCss.galleryCard}>
                    <img src={Cake} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default MyGallery