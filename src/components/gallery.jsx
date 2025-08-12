import gallerycss from "./gallery.module.css"
import CakeImage from "../assets/a.jpeg"
const Gallery = ()=>{
    return(
        <>
            <h1 className={gallerycss.title}>My Gallery</h1>
            <div className={gallerycss.container}>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                    <div className={gallerycss}>
                        <p>Image title</p>
                        <i>Image description</i>
                    </div>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
                <div className={gallerycss.galleryCard}>
                    <img src={CakeImage} alt="Cake Image"></img>
                </div>
            </div>
        </>
    )
}
export default Gallery