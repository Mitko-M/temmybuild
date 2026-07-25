//! TODO: Updated demo data with real data and add locales for them too
export const projects = [
  {
    id: 'carrara-marble-bathroom',
    title: 'Carrara Marble Bathroom',
    location: 'Mosman, Sydney',
    category: 'Residential',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop&auto=format',
    spanLarge: true,
  },
  {
    id: 'herringbone-entry',
    title: 'Herringbone Entry Hall',
    location: 'Paddington, Sydney',
    category: 'Residential',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&auto=format',
    spanLarge: false,
  },
  {
    id: 'pool-terrace',
    title: 'Pool Terrace & Coping',
    location: 'Palm Beach, Sydney',
    category: 'Luxury Residential',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop&auto=format',
    spanLarge: false,
  },
] as const;