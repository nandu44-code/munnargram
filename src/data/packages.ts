export type PackageCategory =
  | "Weekend Escape"
  | "Adventure"
  | "Beach"
  | "Hill Station"
  | "International";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

export interface TravelPackage {
  id: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  category: PackageCategory;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export const packages: TravelPackage[] = [
  {
    id: "munnar-escape",
    name: "Munnar Escape",
    location: "Munnar, Kerala",
    duration: "2 Days / 1 Night",
    price: 4999,
    category: "Hill Station",
    shortDescription:
      "Experience the beauty of misty mountains, tea plantations and breathtaking views.",
    description:
      "Escape into the beautiful hills of Munnar with a memorable trip through lush tea gardens, mist-covered mountains and stunning viewpoints.",
    coverImage: "/images/munnar.jpg",
    gallery: [
      "/images/munnar.jpg",
      "/images/munnar-2.jpg",
      "/images/munnar-3.jpg",
    ],
    highlights: [
      "Tea plantation visit",
      "Scenic mountain viewpoints",
      "Mattupetty Dam",
      "Photo stops",
      "Relaxing mountain experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Munnar Sightseeing",
        description: "Arrive in Munnar and explore the beautiful hill station.",
        activities: [
          "Tea plantations",
          "Mattupetty Dam",
          "Echo Point",
          "Photo stops",
        ],
      },
      {
        day: 2,
        title: "Explore & Departure",
        description:
          "Enjoy the morning mountain atmosphere and visit nearby attractions before departure.",
        activities: ["Morning sightseeing", "Local attractions", "Departure"],
      },
    ],
    inclusions: [
      "Accommodation",
      "Sightseeing",
      "Transportation as per package",
    ],
    exclusions: ["Food unless specified", "Personal expenses", "Entry tickets"],
    featured: true,
  },

  {
    id: "wayanad-adventure",
    name: "Wayanad Adventure",
    location: "Wayanad, Kerala",
    duration: "2 Days / 1 Night",
    price: 3499,
    category: "Adventure",
    shortDescription:
      "Discover waterfalls, forests, caves and the adventurous beauty of Wayanad.",
    description:
      "Explore the natural beauty of Wayanad with scenic waterfalls, forest landscapes, caves and unforgettable adventure experiences.",
    coverImage: "/images/wayanad.jpg",
    gallery: [
      "/images/wayanad.jpg",
      "/images/wayanad-2.jpg",
      "/images/wayanad-3.jpg",
    ],
    highlights: [
      "Edakkal Caves",
      "Waterfall visits",
      "Scenic viewpoints",
      "Nature exploration",
    ],
    itinerary: [
      {
        day: 1,
        title: "Wayanad Exploration",
        description:
          "Explore some of Wayanad's popular attractions and enjoy the natural scenery.",
        activities: [
          "Waterfall visit",
          "Nature sightseeing",
          "Local attractions",
        ],
      },
      {
        day: 2,
        title: "Adventure & Departure",
        description:
          "Enjoy the remaining sightseeing and return after a memorable trip.",
        activities: ["Edakkal Caves", "Scenic viewpoints", "Departure"],
      },
    ],
    inclusions: [
      "Accommodation",
      "Sightseeing",
      "Transportation as per package",
    ],
    exclusions: ["Food unless specified", "Personal expenses", "Entry tickets"],
  },

  {
    id: "goa-beach-escape",
    name: "Goa Beach Escape",
    location: "Goa, India",
    duration: "3 Days / 2 Nights",
    price: 8999,
    category: "Beach",
    shortDescription:
      "Enjoy golden beaches, sunsets, vibrant nightlife and a relaxing coastal escape.",
    description:
      "Experience the charm of Goa with beautiful beaches, relaxing sunsets, coastal exploration and a perfect holiday atmosphere.",
    coverImage: "/images/goa.jpg",
    gallery: ["/images/goa.jpg", "/images/goa-2.jpg", "/images/goa-3.jpg"],
    highlights: [
      "Beach hopping",
      "Sunset views",
      "Portuguese architecture",
      "Relaxing beach experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Arrive in Goa, check in and enjoy the beach atmosphere.",
        activities: ["Hotel check-in", "Beach visit", "Sunset experience"],
      },
      {
        day: 2,
        title: "Goa Sightseeing",
        description: "Explore popular beaches and local attractions.",
        activities: ["Beach hopping", "Local sightseeing", "Explore Goa"],
      },
      {
        day: 3,
        title: "Relax & Departure",
        description: "Enjoy your final morning in Goa before departure.",
        activities: ["Morning beach visit", "Check-out", "Departure"],
      },
    ],
    inclusions: [
      "Accommodation",
      "Sightseeing",
      "Transportation as per package",
    ],
    exclusions: [
      "Food unless specified",
      "Personal expenses",
      "Flight or train tickets",
    ],
  },

  {
    id: "kolukkumalai-trip",
    name: "Kolukkumalai Sunrise",
    location: "Kolukkumalai, Kerala",
    duration: "1 Day",
    price: 2999,
    category: "Adventure",
    shortDescription:
      "Witness one of the most magical sunrise experiences above the clouds.",
    description:
      "Experience an unforgettable sunrise adventure to the beautiful Kolukkumalai hills and its famous tea plantations.",
    coverImage: "/images/kolukkumalai.jpg",
    gallery: ["/images/kolukkumalai.jpg", "/images/kolukkumalai-2.jpg"],
    highlights: [
      "Sunrise above the clouds",
      "Jeep safari",
      "Tea plantations",
      "Mountain viewpoints",
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunrise Adventure",
        description:
          "Start early in the morning and experience the breathtaking sunrise at Kolukkumalai.",
        activities: [
          "Early morning jeep ride",
          "Sunrise viewpoint",
          "Tea plantation visit",
          "Return journey",
        ],
      },
    ],
    inclusions: ["Jeep safari", "Sightseeing", "Guide assistance"],
    exclusions: ["Food", "Personal expenses", "Additional activities"],
    featured: true,
  },

  {
    id: "meesapulimala-trek",
    name: "Meesapulimala Trek",
    location: "Meesapulimala, Kerala",
    duration: "2 Days / 1 Night",
    price: 5999,
    category: "Adventure",
    shortDescription:
      "Challenge yourself with an unforgettable trek through beautiful mountain landscapes.",
    description:
      "Discover the beauty of Meesapulimala through scenic trekking routes, misty mountains, grasslands and breathtaking panoramic views.",
    coverImage: "/images/meesapulimala.jpg",
    gallery: ["/images/meesapulimala.jpg", "/images/meesapulimala-2.jpg"],
    highlights: [
      "Mountain trekking",
      "Grassland landscapes",
      "Panoramic views",
      "Adventure experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Preparation",
        description:
          "Arrive near the trekking location, settle in and prepare for the adventure.",
        activities: ["Check-in", "Trek preparation", "Relaxation"],
      },
      {
        day: 2,
        title: "Trekking Adventure",
        description:
          "Experience the mountain trek and enjoy breathtaking landscapes.",
        activities: [
          "Early morning trek",
          "Mountain viewpoints",
          "Return journey",
        ],
      },
    ],
    inclusions: [
      "Accommodation",
      "Trekking assistance",
      "Transportation as per package",
    ],
    exclusions: [
      "Food unless specified",
      "Personal expenses",
      "Additional activities",
    ],
  },

  {
    id: "alleppey-backwater",
    name: "Alleppey Backwater Escape",
    location: "Alleppey, Kerala",
    duration: "2 Days / 1 Night",
    price: 4499,
    category: "Weekend Escape",
    shortDescription:
      "Experience peaceful backwaters, houseboats and the charm of Kerala's waterways.",
    description:
      "Take a relaxing trip through Alleppey's beautiful backwaters, surrounded by coconut trees, peaceful villages and scenic waterways.",
    coverImage: "/images/alleppey.jpg",
    gallery: ["/images/alleppey.jpg", "/images/alleppey-2.jpg"],
    highlights: [
      "Backwater cruise",
      "Houseboat experience",
      "Village scenery",
      "Relaxing getaway",
    ],
    itinerary: [
      {
        day: 1,
        title: "Backwater Experience",
        description:
          "Explore Alleppey's waterways and enjoy the beautiful backwater scenery.",
        activities: ["Arrival", "Backwater cruise", "Houseboat experience"],
      },
      {
        day: 2,
        title: "Relax & Departure",
        description:
          "Enjoy a relaxing morning surrounded by the backwaters before departure.",
        activities: ["Morning cruise", "Breakfast", "Departure"],
      },
    ],
    inclusions: [
      "Accommodation",
      "Backwater experience",
      "Transportation as per package",
    ],
    exclusions: [
      "Food unless specified",
      "Personal expenses",
      "Additional activities",
    ],
  },
];
