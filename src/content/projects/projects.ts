import { bg } from "./bg";
import { en } from "./en";

//! TODO: Updated demo data with real data

export function createProjectData(locale: string) {
  return locale === "bg" ? bg : en;
}
