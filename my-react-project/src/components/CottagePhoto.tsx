import imagePath from "../assets/cottagePhoto-1.jpg"
import styles from "./cottagePhoto.module.scss"

const CottagePhoto = () => {
  //importera Level från app?
  //let currentImagePath = ../assets/cottagePhoto-{level}
  return (
        <img  className={styles.cottagePhoto} src={imagePath} alt="`Your cottage, level ${}`" /> 
  )
}



export default CottagePhoto