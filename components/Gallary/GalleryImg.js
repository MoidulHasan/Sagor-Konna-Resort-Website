import Image from 'next/image'
import galleryStyles from '../../styles/galleryImg.module.css'
const GalleryImg = ({ imgData }) => {
    return (
        <div className={`${galleryStyles.gallery}`}>
            {imgData.map((item, i) => (
                <div className={`${galleryStyles.pics}`} key={i}>
                    <Image src={item.img} alt="" />
                    {/* sizes='100vw' */}
                </div>
            ))}
        </div>
    )
}

export default GalleryImg

