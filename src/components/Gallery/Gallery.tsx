import type { GalleryLocale } from "@/content/locales/types";
import galleryBackground from "@public/images/gallery/gallery-bg.webp";
import styles from "./Gallery.module.css";
import GalleryGrid from "./GalleryGrid";

type Props = {
  locale: GalleryLocale;
};

export default function Gallery({ locale }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryIntro}>
        <img src={galleryBackground.src} alt="Gallery intro background" />
        <h1>{locale.introTitle}</h1>
        <p>{locale.introDescription}</p>
        <a href="#gallery-grid">{locale.introButtonLabel}</a>
      </div>
      <GalleryGrid locale={locale} />
    </div>
  );
}
