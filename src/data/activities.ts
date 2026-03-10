import type { Activity } from "./types";

export const ACTIVITIES: Activity[] = [
  // TYP: zgadywanka
  { id: 1, name: "Co to za dźwięk?", type: "zgadywanka", place: ["dom", "podróż", "poczekalnia"], competencies: ["słuchanie", "koncentracja", "słownictwo"], topics: ["zwierzęta", "natura", "codzienność"], age: "3-5", method: "montessori" },
  { id: 2, name: "Dotknij i zgadnij", type: "zgadywanka", place: ["dom", "poczekalnia"], competencies: ["sensoryka", "koncentracja", "słownictwo"], topics: ["codzienność", "natura"], age: "3-5", method: "SI" },
  { id: 3, name: "Co znikło ze stołu?", type: "zgadywanka", place: ["dom", "restauracja"], competencies: ["pamięć", "koncentracja"], topics: ["codzienność", "jedzenie"], age: "4-7", method: "montessori" },
  { id: 4, name: "Zgadnij zwierzę po ruchu", type: "zgadywanka", place: ["dom", "park", "poczekalnia"], competencies: ["myślenie logiczne", "słownictwo", "kreatywność"], topics: ["zwierzęta", "natura"], age: "4-7", method: "laban" },
  { id: 5, name: "20 pytań: co to jest?", type: "zgadywanka", place: ["dom", "podróż", "restauracja"], competencies: ["myślenie logiczne", "słownictwo", "koncentracja"], topics: ["codzienność", "jedzenie", "sport"], age: "5-7", method: "klasyczna" },
  { id: 6, name: "Zgadnij emocję z miny", type: "zgadywanka", place: ["dom", "poczekalnia"], competencies: ["empatia", "rozpoznawanie emocji", "słownictwo"], topics: ["emocje", "codzienność"], age: "3-6", method: "montessori" },

  // TYP: rysowanie
  { id: 7, name: "Rysuj na plecach rodziców", type: "rysowanie", place: ["dom", "podróż"], competencies: ["sensoryka", "komunikacja", "koncentracja"], topics: ["codzienność", "litery", "kształty"], age: "3-7", method: "SI" },
  { id: 8, name: "Dokończ rysunek", type: "rysowanie", place: ["dom", "restauracja", "poczekalnia"], competencies: ["kreatywność", "wyobraźnia", "motoryka mała"], topics: ["codzienność", "zwierzęta", "kształty"], age: "3-6", method: "orff" },
  { id: 9, name: "Rysuj z zamkniętymi oczami", type: "rysowanie", place: ["dom", "poczekalnia"], competencies: ["motoryka mała", "wyobraźnia", "koncentracja"], topics: ["codzienność", "kształty"], age: "4-7", method: "laban" },
  { id: 10, name: "Kolektywna kartka", type: "rysowanie", place: ["dom", "restauracja"], competencies: ["współpraca", "kreatywność", "motoryka mała"], topics: ["codzienność", "natura"], age: "3-7", method: "klasyczna" },

  // TYP: kalambury
  { id: 11, name: "Kalambury ruchowe", type: "kalambury", place: ["dom", "park", "poczekalnia"], competencies: ["ekspresja ciała", "kreatywność", "współpraca"], topics: ["zwierzęta", "sport", "codzienność"], age: "4-7", method: "laban" },
  { id: 12, name: "Kalambury z dźwiękiem", type: "kalambury", place: ["dom", "poczekalnia"], competencies: ["ekspresja", "słuchanie", "kreatywność"], topics: ["zwierzęta", "natura", "muzyka"], age: "3-6", method: "orff" },
  { id: 13, name: "Zamrożone zwierzę", type: "kalambury", place: ["dom", "park"], competencies: ["ekspresja ciała", "równowaga", "koncentracja"], topics: ["zwierzęta", "natura"], age: "3-6", method: "sherborne" },
  { id: 14, name: "Zawód w ruchu", type: "kalambury", place: ["dom", "park", "poczekalnia"], competencies: ["ekspresja ciała", "myślenie logiczne", "słownictwo"], topics: ["praca", "codzienność"], age: "5-7", method: "laban" },

  // TYP: ruch / aktywność
  { id: 15, name: "Tunel ze stołków", type: "ruch", place: ["dom"], competencies: ["motoryka duża", "koordynacja", "śmiałość"], topics: ["sport", "przygoda"], age: "3-5", method: "sherborne" },
  { id: 16, name: "Rzeka z poduszek", type: "ruch", place: ["dom"], competencies: ["równowaga", "motoryka duża", "wyobraźnia"], topics: ["natura", "przygoda"], age: "3-6", method: "SI" },
  { id: 17, name: "Echo ruchowe", type: "ruch", place: ["dom", "park", "poczekalnia"], competencies: ["naśladowanie", "koncentracja", "motoryka duża"], topics: ["codzienność", "sport"], age: "3-5", method: "orff" },
  { id: 18, name: "Posąg i rzeźbiarz", type: "ruch", place: ["dom", "park"], competencies: ["równowaga", "zaufanie", "współpraca"], topics: ["sztuka", "codzienność"], age: "5-7", method: "sherborne" },
  { id: 19, name: "Spacer jak zwierzę", type: "ruch", place: ["dom", "park"], competencies: ["motoryka duża", "wyobraźnia", "sensoryka"], topics: ["zwierzęta", "natura"], age: "3-5", method: "SI" },
  { id: 20, name: "Balonowy taniec", type: "ruch", place: ["dom"], competencies: ["motoryka duża", "rytm", "koordynacja"], topics: ["muzyka", "codzienność"], age: "3-7", method: "orff" },

  // TYP: muzyczno-rytmiczne
  { id: 21, name: "Perkusja ciała", type: "rytm", place: ["dom", "podróż", "poczekalnia"], competencies: ["rytm", "koncentracja", "słuchanie"], topics: ["muzyka", "codzienność"], age: "3-7", method: "orff" },
  { id: 22, name: "Echo rytmiczne", type: "rytm", place: ["dom", "podróż", "poczekalnia"], competencies: ["rytm", "pamięć", "słuchanie"], topics: ["muzyka"], age: "3-6", method: "orff" },
  { id: 23, name: "Taniec luster", type: "rytm", place: ["dom", "park"], competencies: ["naśladowanie", "rytm", "empatia"], topics: ["muzyka", "emocje"], age: "4-7", method: "laban" },
  { id: 24, name: "Zaśpiewaj historię", type: "rytm", place: ["dom", "podróż"], competencies: ["język", "kreatywność", "rytm"], topics: ["codzienność", "muzyka"], age: "4-7", method: "orff" },

  // TYP: opowiadanie / narracja
  { id: 25, name: "Kontynuuj historię", type: "narracja", place: ["dom", "podróż", "poczekalnia"], competencies: ["język", "wyobraźnia", "słuchanie"], topics: ["przygoda", "zwierzęta", "fantazja"], age: "4-7", method: "montessori" },
  { id: 26, name: "Historia z przypadkowych słów", type: "narracja", place: ["dom", "podróż"], competencies: ["wyobraźnia", "język", "myślenie logiczne"], topics: ["fantazja", "codzienność"], age: "5-7", method: "montessori" },
  { id: 27, name: "Opowiedz przez ruchy", type: "narracja", place: ["dom", "park"], competencies: ["ekspresja ciała", "język", "wyobraźnia"], topics: ["przygoda", "emocje"], age: "4-7", method: "laban" },
  { id: 28, name: "Film bez słów", type: "narracja", place: ["dom", "poczekalnia"], competencies: ["ekspresja", "empatia", "koncentracja"], topics: ["emocje", "codzienność"], age: "4-7", method: "laban" },

  // TYP: budowanie / konstruowanie
  { id: 29, name: "Wieża z czegokolwiek", type: "budowanie", place: ["dom", "restauracja"], competencies: ["motoryka mała", "myślenie logiczne", "cierpliwość"], topics: ["kształty", "codzienność"], age: "3-6", method: "montessori" },
  { id: 30, name: "Dom dla zwierzątka", type: "budowanie", place: ["dom"], competencies: ["motoryka mała", "wyobraźnia", "planowanie"], topics: ["zwierzęta", "natura"], age: "4-7", method: "montessori" },
  { id: 31, name: "Mostek z kart / papieru", type: "budowanie", place: ["dom", "restauracja", "poczekalnia"], competencies: ["motoryka mała", "myślenie logiczne", "cierpliwość"], topics: ["kształty", "inżynieria"], age: "5-7", method: "montessori" },

  // TYP: obserwacja / uważność
  { id: 32, name: "Znajdź 5 kolorów", type: "obserwacja", place: ["park", "podróż", "restauracja", "poczekalnia"], competencies: ["uważność", "koncentracja", "słownictwo"], topics: ["natura", "kolory"], age: "3-5", method: "montessori" },
  { id: 33, name: "Ile kroków do drzewa?", type: "obserwacja", place: ["park"], competencies: ["liczenie", "szacowanie", "koncentracja"], topics: ["natura", "matematyka"], age: "4-7", method: "montessori" },
  { id: 34, name: "Nieruchomy jak kamień", type: "obserwacja", place: ["dom", "park", "poczekalnia"], competencies: ["samokontrola", "koncentracja", "równowaga"], topics: ["natura", "codzienność"], age: "4-7", method: "SI" },
  { id: 35, name: "Zmiany w otoczeniu", type: "obserwacja", place: ["dom", "podróż", "poczekalnia"], competencies: ["pamięć", "koncentracja", "uważność"], topics: ["codzienność"], age: "4-7", method: "montessori" },
];
