import styles from "./Gallery.module.css";
import type { galleryPhoto } from "./types";

type Props = {
  photosRowData: galleryPhoto[];
};

export default function GalleryRow({ photosRowData }: Props) {
  return (
    <div className={styles.galleryRow}>
      {photosRowData.map((photo, i) => (
        <div key={i} className={styles.galleryPhoto}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
}
