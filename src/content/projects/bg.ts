import type { ProjectType } from "./types";

export const bg: ProjectType[] = [
  {
    id: "carrara-marble-bathroom",
    title: "Баня от карарски мрамор",
    location: "Мосман, Сидни",
    category: "Жилищен",
    year: "2024",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop&auto=format",
    spanLarge: true,
  },
  {
    id: "herringbone-entry",
    title: "Входна зала с рибена кост",
    location: "Падингтън, Сидни",
    category: "Жилищен",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&auto=format",
    spanLarge: false,
  },
  {
    id: "pool-terrace",
    title: "Тераса и покриване на басейна",
    location: "Палм Бийч, Сидни",
    category: "Луксозни жилищни",
    year: "2023",
    img: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop&auto=format",
    spanLarge: false,
  },
] as const;
