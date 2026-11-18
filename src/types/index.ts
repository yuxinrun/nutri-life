export type ContentKind =
  | "article"
  | "nutrient"
  | "food"
  | "recipe"
  | "book"
  | "resource"
  | "research"
  | "guide"
  | "topic";

export interface Reference {
  title: string;
  publisher?: string;
  url: string;
  note?: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  callout?: { type: "science" | "tip" | "caution" | "case"; text: string };
  table?: { head: string[]; rows: string[][] };
}

export interface BaseContent {
  slug: string;
  kind: ContentKind;
  title: string;
  subtitle?: string;
  summary: string;
  category: string;
  tags: string[];
  updatedAt: string;
  readingMinutes?: number;
  illustration?: string;
  sections: ContentSection[];
  references: Reference[];
  related: { label: string; href: string }[];
}

export interface Article extends BaseContent {
  kind: "article";
  keyPoints: string[];
  author: string;
  featured?: boolean;
}

export interface Nutrient extends BaseContent {
  kind: "nutrient";
  group: "宏量营养素" | "微量营养素" | "水与膳食纤维";
  aliases: string[];
  keyPoints: string[];
}

export interface FoodCategory {
  slug: string;
  name: string;
  description: string;
}

export interface NutrientValues {
  energyKcal?: number;
  proteinG?: number;
  fatG?: number;
  carbsG?: number;
  fiberG?: number;
  sugarG?: number;
  sodiumMg?: number;
  calciumMg?: number;
  ironMg?: number;
  potassiumMg?: number;
  magnesiumMg?: number;
  vitaminCMg?: number;
  vitaminAUG?: number;
  vitaminDUG?: number;
  vitaminB12UG?: number;
  folateUG?: number;
  zincMg?: number;
}

export interface Food extends BaseContent {
  kind: "food";
  categorySlug: string;
  categoryName: string;
  state: string;
  ediblePortion: string;
  measurement: string;
  nutritionPer100g: NutrientValues;
  nutritionSource: Reference;
  highlights: string[];
  selection: string[];
  storage: string[];
  cooking: string[];
  pairings: string[];
  myths: { claim: string; correction: string }[];
}

export interface RecipeIngredient {
  name: string;
  amount: string;
  foodSlug?: string;
  optional?: boolean;
}

export interface Recipe extends BaseContent {
  kind: "recipe";
  categorySlug: string;
  categoryName: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  ingredients: RecipeIngredient[];
  steps: string[];
  nutritionNote: string;
  nutritionEstimate?: NutrientValues & { basis: string };
  allergens: string[];
  substitutes: string[];
  storage: string[];
  tips: string[];
}

export interface Book extends BaseContent {
  kind: "book";
  originalTitle: string;
  author: string;
  publisher: string;
  year: string;
  edition: string;
  audience: string;
  coreIdea: string;
  notablePoints: string[];
  evaluation: string;
  readingAdvice: string;
  coverStyle: string;
  language: "英文" | "中文";
  caution?: string;
}

export interface WebResource extends BaseContent {
  kind: "resource";
  organization: string;
  region: string;
  organizationType: string;
  focus: string;
  officialUrl: string;
  bestFor: string[];
  language: string;
}

export interface ResearchItem extends BaseContent {
  kind: "research";
  question: string;
  design: string;
  population: string;
  findings: string[];
  limitations: string[];
  implication: string;
  evidenceLevel: "强" | "中等" | "有限" | "低";
  paper: Reference;
}

export interface HealthTopic extends BaseContent {
  kind: "topic";
  keyPoints: string[];
  evidenceNote: string;
}

export interface Guide extends BaseContent {
  kind: "guide";
  keyPoints: string[];
}

export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  kind: ContentKind;
  keywords: string;
}
