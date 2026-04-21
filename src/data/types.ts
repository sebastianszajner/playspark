export type ActivityType =
  | "zgadywanka"
  | "rysowanie"
  | "kalambury"
  | "ruch"
  | "rytm"
  | "narracja"
  | "budowanie"
  | "obserwacja"
  | "poznawcze"
  | "hotwheels"
  | "relaks";

export type Place = "dom" | "park" | "podróż" | "restauracja" | "poczekalnia";

export type Competency =
  | "kreatywność"
  | "motoryka duża"
  | "motoryka mała"
  | "koncentracja"
  | "współpraca"
  | "rytm"
  | "język"
  | "pamięć"
  | "równowaga"
  | "empatia"
  | "sensoryka"
  | "myślenie logiczne"
  | "słownictwo"
  | "wyobraźnia"
  | "słuchanie"
  | "komunikacja"
  | "ekspresja ciała"
  | "ekspresja"
  | "śmiałość"
  | "naśladowanie"
  | "zaufanie"
  | "koordynacja"
  | "samokontrola"
  | "cierpliwość"
  | "planowanie"
  | "uważność"
  | "rozpoznawanie emocji"
  | "liczenie"
  | "szacowanie"
  | "regulacja emocji"
  | "oddychanie"
  | "relaksacja";

export type Topic =
  | "zwierzęta"
  | "natura"
  | "codzienność"
  | "muzyka"
  | "jedzenie"
  | "sport"
  | "emocje"
  | "fantazja"
  | "kształty"
  | "litery"
  | "przygoda"
  | "praca"
  | "sztuka"
  | "inżynieria"
  | "kolory"
  | "matematyka";

export type Method =
  | "montessori"
  | "SI"
  | "laban"
  | "orff"
  | "sherborne"
  | "klasyczna"
  | "mindfulness";

export type SortOption = "name" | "age-asc" | "age-desc" | "type" | "duration";

export interface ChildNeeds {
  why: string;
  goals: string[];
  emotions: string[];
}

export interface Activity {
  id: number;
  name: string;
  type: ActivityType;
  place: Place[];
  competencies: string[];
  topics: string[];
  age: number[];
  method: Method;
  duration: string;
  description: string;
  childNeeds: ChildNeeds;
  steps: string[];
  tip: string;
  whyItWorks: string;
  prep: string[];
  phrases: string[];
  tellChild: string;
}

export interface TypeMeta {
  bg: string;
  accent: string;
  icon: string;
}

export const TYPE_META: Record<ActivityType, TypeMeta> = {
  zgadywanka: { bg: "#FFF0C2", accent: "#F59E0B", icon: "magnifier" },
  rysowanie: { bg: "#FFE4F0", accent: "#EC4899", icon: "pencil" },
  kalambury: { bg: "#E0F2FF", accent: "#3B82F6", icon: "masks" },
  ruch: { bg: "#DCFCE7", accent: "#22C55E", icon: "runner" },
  rytm: { bg: "#F3E8FF", accent: "#A855F7", icon: "drum" },
  narracja: { bg: "#FEF3C7", accent: "#F97316", icon: "book" },
  budowanie: { bg: "#CFFAFE", accent: "#06B6D4", icon: "blocks" },
  obserwacja: { bg: "#F0FDF4", accent: "#10B981", icon: "eye" },
  poznawcze: { bg: "#FFF7ED", accent: "#EA580C", icon: "brain" },
  hotwheels: { bg: "#FFE4E8", accent: "#E11D48", icon: "car" },
  relaks: { bg: "#E0F7F4", accent: "#0D9488", icon: "leaf" },
};

export const METHOD_META: Record<Method, { label: string; color: string; description: string }> = {
  montessori: { label: "Montessori", color: "#8B5CF6", description: "Samodzielne odkrywanie przez zmysły" },
  SI: { label: "Integracja Sensoryczna", color: "#EC4899", description: "Stymulacja i regulacja zmysłowa" },
  laban: { label: "Laban", color: "#06B6D4", description: "Ruch twórczy i ekspresja ciała" },
  orff: { label: "Orff", color: "#F59E0B", description: "Muzyka i rytm jako ekspresja" },
  sherborne: { label: "Sherborne", color: "#22C55E", description: "Relacja przez ruch i dotyk" },
  klasyczna: { label: "Klasyczna", color: "#64748B", description: "Sprawdzone zabawy tradycyjne" },
  mindfulness: { label: "Mindfulness", color: "#0D9488", description: "Uważność i regulacja emocji" },
};

export const PLACE_ICONS: Record<Place, string> = {
  dom: "home",
  park: "tree",
  podróż: "car",
  restauracja: "plate",
  poczekalnia: "clock",
};

export const AGE_COLORS: Record<number, string> = {
  3: "#FF6B6B",
  4: "#FF8E53",
  5: "#4ECDC4",
  6: "#45B7D1",
  7: "#96CEB4",
};

export const ALL_AGES = [3, 4, 5, 6, 7];

export const MOOD_FILTERS = [
  { id: "radość", label: "radość" },
  { id: "śmiech", label: "śmiech" },
  { id: "bliskość", label: "bliskość" },
  { id: "ekscytacja", label: "ekscytacja" },
  { id: "skupienie", label: "skupienie" },
  { id: "odwaga", label: "odwaga" },
  { id: "flow", label: "flow" },
  { id: "duma", label: "duma" },
  { id: "spokój", label: "spokój" },
  { id: "wyciszenie", label: "wyciszenie" },
];

export const MOOD_ICONS: Record<string, string> = {
  "radość": "😊",
  "śmiech": "😂",
  "bliskość": "🫂",
  "ekscytacja": "⚡",
  "skupienie": "🧘",
  "odwaga": "💪",
  "flow": "🌊",
  "duma": "🏆",
  "spokój": "🌙",
  "wyciszenie": "🌿",
};

export const ALL_TYPES: ActivityType[] = [
  "zgadywanka",
  "rysowanie",
  "kalambury",
  "ruch",
  "rytm",
  "narracja",
  "budowanie",
  "obserwacja",
  "poznawcze",
  "hotwheels",
  "relaks",
];

export const ALL_PLACES: Place[] = [
  "dom",
  "park",
  "podróż",
  "restauracja",
  "poczekalnia",
];

export const ALL_METHODS: Method[] = [
  "montessori",
  "SI",
  "laban",
  "orff",
  "sherborne",
  "klasyczna",
  "mindfulness",
];

export const FILTER_COMPETENCIES = [
  "kreatywność",
  "motoryka duża",
  "motoryka mała",
  "koncentracja",
  "współpraca",
  "rytm",
  "język",
  "pamięć",
  "równowaga",
  "empatia",
  "sensoryka",
  "myślenie logiczne",
  "słuchanie",
  "wyobraźnia",
  "komunikacja",
  "koordynacja",
  "samokontrola",
  "cierpliwość",
  "uważność",
  "regulacja emocji",
  "oddychanie",
  "relaksacja",
];

export const FILTER_TOPICS = [
  "zwierzęta",
  "natura",
  "codzienność",
  "muzyka",
  "jedzenie",
  "sport",
  "emocje",
  "fantazja",
  "kształty",
  "litery",
  "przygoda",
  "sztuka",
  "matematyka",
  "kolory",
  "inżynieria",
];

export const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: "name", label: "A-Z" },
  { id: "age-asc", label: "Wiek ↑" },
  { id: "age-desc", label: "Wiek ↓" },
  { id: "type", label: "Typ" },
  { id: "duration", label: "Czas" },
];

// Helper: parse duration string to minutes for sorting
export function parseDuration(d: string): number {
  const match = d.match(/(\d+)/);
  return match ? parseInt(match[1]) : 10;
}

// Helper: get unique values from activities
export function getUniqueCompetencies(activities: Activity[]): string[] {
  const set = new Set<string>();
  activities.forEach((a) => a.competencies.forEach((c) => set.add(c)));
  return Array.from(set).sort();
}

export function getUniqueTopics(activities: Activity[]): string[] {
  const set = new Set<string>();
  activities.forEach((a) => a.topics.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getUniqueMethods(activities: Activity[]): Method[] {
  const set = new Set<Method>();
  activities.forEach((a) => set.add(a.method));
  return Array.from(set);
}
