import photo1 from "../assets/cottagePhoto-1.jpg"
import photo2 from "../assets/cottagePhoto-2.jpg"
import styles from "./cottagePhoto.module.scss"


const imageMap: Record<number, string> = {
  1: photo1,
  2: photo2,
};

const CottagePhoto = ({ level }: { level: number }) => {
  let currentImagePath = imageMap[level]
  return (
        <img  className={styles.cottagePhoto} src={currentImagePath} alt={`Your cottage, level ${level}`} /> 
  )
}



export default CottagePhoto