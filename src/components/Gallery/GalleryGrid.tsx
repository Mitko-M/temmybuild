import { useEffect, useState, type ReactElement } from "react";
import galleryData from "../../data/gallery.json";
import styles from "./Gallery.module.css";
import GalleryRow from "./GalleryRow";
import type { galleryPhoto } from "./types";

const PHOTOS_PER_GRID_ROW = 4;
const ROWS_TO_LOAD = 2;
const NO_PHOTOS_MESSAGE = "There are no photos";

//! TODO: Remove the ? when the data is passed and we don't need demo data
type Props = {
  data?: galleryPhoto[];
};

export default function GalleryGrid({ data = galleryData }: Props) {
  const [photos, setPhotos] = useState<galleryPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [hasMore, setHasMore] = useState(data.length > 0);

  //! TODO: Add useEffect hook when the gallery API is done.
  function loadMorePhotos() {
    if (isLoading || !hasMore) {
      return;
    }

    setIsLoading(true);

    const nextIndex = index + ROWS_TO_LOAD * PHOTOS_PER_GRID_ROW;
    const chunk = data.slice(index, nextIndex);

    setPhotos((prev) => [...prev, ...chunk]);
    setHasMore(nextIndex < data.length);
    setIndex(nextIndex);

    setIsLoading(false);
  }

  function getRows() {
    const rows: ReactElement[] = [];

    for (let i = 0; i < photos.length; i += PHOTOS_PER_GRID_ROW) {
      rows.push(
        <GalleryRow
          key={i}
          photosRowData={photos.slice(i, i + PHOTOS_PER_GRID_ROW)}
        />,
      );
    }

    return rows;
  }

  useEffect(() => {
    loadMorePhotos();
  }, []);

  return (
    <div id="gallery-grid" className={styles.galleryGridWrapper}>
      <h2>Featured Collection</h2>
      <p>Some random description this whole thing will be made multilingual</p>
      <div className={styles.galleryGrid}>
        {photos.length ? getRows() : NO_PHOTOS_MESSAGE}
      </div>
      {hasMore && (
        <button className={styles.loadMoreBtn} onClick={loadMorePhotos}>
          Load more
        </button>
      )}
    </div>
  );
}
