export type NavigationLocale = {
  projects: string;
  services: string;
  about: string;
  gallery: string;
  contact: string;
  quote: string;
};

export type HeroLocale = {
  tagline: string;
  title: string;
  description: string;
  imageAlt: string;
  primaryBtn: string;
  secondaryBtn: string;
  experience: string;
  finishedProjects: string;
  clientSatisfaction: string;
};

export type FeaturedProjectsLocale = {
  tagline: string;
  title: string;
  viewGallery: string;
};

export type ServicesLocale = {
  tagline: string;
  title: string;
  description: string;
};

export type AboutMeLocale = {
  imageAlt: string;
  experienceBatch: string;
  tagline: string;
  title: string;
  aboutMeText: string;
};

export type GalleryPreviewLocale = {
  tagline: string;
  title: string;
  description: string;
  viewGallery: string;
};

export type GalleryHeader = {
  quote: string;
};

export type GalleryLocale = {
  //! TODO: Refactor the intro since it's not even good, it's just there for demo.
  introTitle: string;
  introDescription: string;
  introButtonLabel: string;

  gridTitle: string;
  gridDescription: string;

  loadMoreLabel: string;
  noPhotosMessage: string;
};
