import photo1 from "../assets/cottage_level_1.png"
import photo2 from "../assets/cottage_level_2.png"
import photo3 from "../assets/cottage_level_3.png"
import photo4 from "../assets/cottage_level_4.png"
import photo5 from "../assets/cottage_level_5.png" 

import styles from "./cottagePhoto.module.scss"


const imageMap: Record<number, string> = {
  1: photo1,
  2: photo2,
  3: photo3,
  4: photo4,
  5: photo5,
};

const CottagePhoto = ({ level }: { level: number }) => {
  let currentImagePath = imageMap[level]
  return (
        <img  className={styles.cottagePhoto} src={currentImagePath} alt={`Your cottage, level ${level}`} /> 
  )
}



export default CottagePhoto