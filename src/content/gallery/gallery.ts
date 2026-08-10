import { bgPreview } from "./bg";
import { enPreview } from "./en";

//! TODO: Updated demo data with real data
export function createGalleryPreviewData(localeType: string) {
  return localeType === "bg" ? bgPreview : enPreview;
}
