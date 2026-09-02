import galleryBackground from "../../../public/images/gallery/gallery-bg.webp";
import styles from "./Gallery.module.css";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryIntro}>
        <img src={galleryBackground.src} alt="Gallery intro background" />
        <h1>Discover beautiful photography</h1>
        <p>Browse, zoom, and share images from our curated collection.</p>
        <a href="#">Browser gallery</a>
      </div>
      <GalleryGrid />
    </div>
  );
}
