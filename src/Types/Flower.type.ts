export interface IFlower {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
  category: FlowerCategory;
  FlowerType: FlowerType;
  stock: number;
  discount?: number;
  isAvailable: boolean;
  rating?: number;
  likes?: number;
  commments: string[];
  createdById?: string;
  createdAt: string;
  updatedAt: string;
}

export enum FlowerCategory {
  HAPPY_MOMENTS = "HAPPY_MOMENTS",
  LOVE_AND_ROMANCE = "LOVE_AND_ROMANCE",
  BIRTHDAY_SPECIALS = "BIRTHDAY_SPECIALS",
  CONGRATULATIONS = "CONGRATULATIONS",
  GET_WELL_SOON = "GET_WELL_SOON",
  SYMPATHY_AND_CONDOLENCES = "SYMPATHY_AND_CONDOLENCES",
  THANK_YOU = "THANK_YOU",
  FRIENDSHIP = "FRIENDSHIP",
  NEW_BABY = "NEW_BABY",
  ANNIVERSARY_CELEBRATIONS = "ANNIVERSARY_CELEBRATIONS",
}

export enum FlowerType {
  PREMIUM = "PREMIUM",
  REGULAR = "REGULAR",
  SPECIAL = "SPECIAL",
  LIMITED = "LIMITED",
}

export interface IFlowerFilter {
  page?: number;
  limit?: number;
  selectedRating?: string | null;
  minPrice?: string | null;
  maxPrice?: string | null;
  searchInput?: string | null;
  selectedColor?: string | null;
  selectedSort?: string | null;
  selectedType?: string | null;
  selectedCategory?: string | null;
}
