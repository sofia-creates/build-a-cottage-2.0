import imagePath from "../assets/haunted-house-7508035_1280.jpg"
import styles from "./cottagePhoto.module.scss"

const CottagePhoto = () => {
  return (
    <div className={styles["cottage-photo-container"]}>
        <div>CottagePhoto</div>
        <img src={imagePath} alt="Your cottage!" /> 
    </div>
  )
}



export default CottagePhoto