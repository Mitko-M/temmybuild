import type { ReactElement } from "react";
import galleryData from "../../data/gallery.json";
import styles from "./Gallery.module.css";
import GalleryRow from "./GalleryRow";
import type { galleryPhoto } from "./types";

const PHOTOS_PER_GRID_ROW = 4;
const INITIAL_ROW_COUNT = 2;

//! TODO: Remove the ? when the data is passed and we don't need demo data
type Props = {
  data?: galleryPhoto[];
};

const rows: ReactElement[] = [];

for (let i = 0; i < INITIAL_ROW_COUNT; i++) {
  rows.push(
    <GalleryRow
      photosRowData={galleryData.slice(
        i * PHOTOS_PER_GRID_ROW,
        PHOTOS_PER_GRID_ROW * (i + 1),
      )}
    />,
  );
}

export default function GalleryGrid({ data = galleryData }: Props) {
  return (
    <div className={styles.galleryGridWrapper}>
      <h2>Featured Collection</h2>
      <p>Some random description this whole thing will be made multilingual</p>
      <div className={styles.galleryGrid}>{rows}</div>
      <button>Load more</button>
    </div>
  );
}
