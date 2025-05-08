import photo1 from "../assets/cottagePhoto-1.jpg"
import photo2 from "../assets/cottagePhoto-2.jpg"
import styles from "./cottagePhoto.module.scss"



type Props = { level: number };

const CottagePhoto = ({ level }: Props) => {
  let currentImagePath = "{../assets/cottagePhoto-{level}.jpg}"
  return (
        <img  className={styles.cottagePhoto} src={currentImagePath} alt={`Your cottage, level ${level}`} /> 
  )
}



export default CottagePhoto