import imagePath from "../assets/cottagePhoto-1.jpg"
import styles from "./cottagePhoto.module.scss"

type Props = { level: number };

const CottagePhoto = ({ level }: Props) => {
  //importera Level från app?
  //let currentImagePath = ../assets/cottagePhoto-{level}
  return (
        <img  className={styles.cottagePhoto} src={imagePath} alt={`Your cottage, level ${level}`} /> 
  )
}



export default CottagePhoto