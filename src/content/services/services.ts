import { bg } from "./bg";
import { en } from "./en";

//! TODO: Updated demo data with real data

export function createServicesData(locale: string) {
  return locale === "bg" ? bg : en;
}
