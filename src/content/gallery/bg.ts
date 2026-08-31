import type { GalleryType } from "./types";

//! TODO: Replace demo data with real photos
export const bgPreview: GalleryType[] = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop&auto=format",
    alt: "Бяла мраморна баня със златни смесители",
    cols: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format",
    alt: "Модерна душ ниша от черен шисти",
    cols: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format",
    alt: "Кухненски гръб тип рибена кост от плочки тип метро в цвят слонова кост",
    cols: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop&auto=format",
    alt: "Външна басейнова тераса от травертин",
    cols: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=800&fit=crop&auto=format",
    alt: "Луксозна самостоятелна баня с каменна облицовка от пода до тавана",
    cols: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop&auto=format",
    alt: "Геометричен десен на пода във входното антре",
    cols: "col-span-1 row-span-1",
  },
] as const;
