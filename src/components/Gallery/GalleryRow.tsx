import styles from "./Gallery.module.css";
import type { galleryPhoto } from "./types";

type Props = {
  photosRowData: galleryPhoto[];
};

export default function GalleryRow({ photosRowData }: Props) {
  return (
    <div className={styles.galleryRow}>
      {photosRowData.map((photo) => (
        <div key={photo.src} className={styles.galleryPhoto}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
