export type ActivityType =
  | "zgadywanka"
  | "rysowanie"
  | "kalambury"
  | "ruch"
  | "rytm"
  | "narracja"
  | "budowanie"
  | "obserwacja";

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
  | "szacowanie";

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
  | "klasyczna";

export interface Activity {
  id: number;
  name: string;
  type: ActivityType;
  place: Place[];
  competencies: string[];
  topics: string[];
  age: string;
  method: Method;
}

export interface TypeMeta {
  bg: string;
  accent: string;
  icon: string;
}

export const TYPE_META: Record<ActivityType, TypeMeta> = {
  zgadywanka: { bg: "#FFF0C2", accent: "#F59E0B", icon: "🔍" },
  rysowanie: { bg: "#FFE4F0", accent: "#EC4899", icon: "✏️" },
  kalambury: { bg: "#E0F2FF", accent: "#3B82F6", icon: "🎭" },
  ruch: { bg: "#DCFCE7", accent: "#22C55E", icon: "🏃" },
  rytm: { bg: "#F3E8FF", accent: "#A855F7", icon: "🥁" },
  narracja: { bg: "#FEF3C7", accent: "#F97316", icon: "📖" },
  budowanie: { bg: "#CFFAFE", accent: "#06B6D4", icon: "🏗️" },
  obserwacja: { bg: "#F0FDF4", accent: "#10B981", icon: "👁️" },
};

export const PLACE_ICONS: Record<Place, string> = {
  dom: "🏠",
  park: "🌳",
  podróż: "🚗",
  restauracja: "🍽️",
  poczekalnia: "⏳",
};

export const AGE_COLORS: Record<string, string> = {
  "3-5": "#FF6B6B",
  "3-6": "#FF8E53",
  "3-7": "#4ECDC4",
  "4-7": "#45B7D1",
  "5-7": "#96CEB4",
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
];

export const ALL_PLACES: Place[] = [
  "dom",
  "park",
  "podróż",
  "restauracja",
  "poczekalnia",
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
];
