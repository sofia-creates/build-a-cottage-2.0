import imagePath from "../assets/haunted-house-7508035_1280.jpg"
import styles from "./cottagePhoto.module.scss"

const CottagePhoto = () => {
  return (
        <img  className={styles.cottagePhotoContainer} src={imagePath} alt="Your cottage!" /> 
  )
}



export default CottagePhoto