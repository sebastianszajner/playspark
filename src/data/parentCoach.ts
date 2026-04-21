import type { ActivityType } from "./types";

export interface ParentCoachEntry {
  brainNetwork: string;
  brainNetworkDetail: string;
  coachingQuestions: [string, string, string];
  parentLearning: string;
  evidence: string;
  evidenceSource: string;
}

export const PARENT_COACH_DATA: Record<ActivityType, ParentCoachEntry> = {
  zgadywanka: {
    brainNetwork: "Sieć uwagi i funkcje wykonawcze",
    brainNetworkDetail: "Zadania zgadywania ćwiczą pamięć roboczą i elastyczność poznawczą — dziecko musi jednocześnie pamiętać wcześniejsze wskazówki i testować nowe hipotezy.",
    coachingQuestions: [
      "Co pomogło Ci zgadnąć? Skąd wiedziałeś/aś?",
      "Jak myślisz — czym różni się ta rzecz od tamtej?",
      "Gdybyś miał/a nauczyć kogoś tej gry, co byś powiedział/a?"
    ],
    parentLearning: "Ćwiczysz cierpliwość do 'wolnego myślenia' — dzieci potrzebują 5-10 sekund na odpowiedź. Dorośli zwykle przerywają po 2 sekundach, co zatrzymuje proces rozumowania dziecka.",
    evidence: "Gry oparte na kategoryzowaniu i eliminacji hipotez poprawiają myślenie logiczne u dzieci 4-7 lat bardziej niż aplikacje edukacyjne.",
    evidenceSource: "Lillard et al., Psychological Bulletin 2013; AAP Play Guidelines 2018"
  },
  rysowanie: {
    brainNetwork: "Sieć trybu domyślnego (DMN) + kontrola motoryczna",
    brainNetworkDetail: "Swobodne rysowanie aktywuje DMN — sieć wyobraźni i narracji wewnętrznej, identyczną jak podczas słuchania audiobooka. Mózg sam buduje obrazy zamiast je pasywnie odbierać.",
    coachingQuestions: [
      "Opowiedz mi o tym rysunku — co się tu dzieje?",
      "Co chciałeś/aś narysować, ale było trudno? Co zrobisz inaczej następnym razem?",
      "Jak się czułeś/aś kiedy rysowałeś/aś?"
    ],
    parentLearning: "Uczysz się obserwować bez oceniania — komentarz 'ładne!' zamyka rozmowę. Pytanie 'opowiedz mi o tym' otwiera narrację i buduje słownictwo dziecka.",
    evidence: "Swobodne rysowanie aktywuje sieci wyobraźni wzrokowej identycznie jak słuchanie opowieści audio — obie aktywności budują zdolność wizualizacji mentalnej.",
    evidenceSource: "Cincinnati Children's Hospital, fMRI study, Brain Connectivity 2019"
  },
  kalambury: {
    brainNetwork: "Sieć języka + teoria umysłu (ToM)",
    brainNetworkDetail: "Komunikacja bez słów aktywuje korę przedczołową odpowiedzialną za przewidywanie myśli innych — fundament empatii i rozumienia perspektywy.",
    coachingQuestions: [
      "Skąd wiedziałeś/aś, co próbuję pokazać? Co dało Ci wskazówkę?",
      "Co było najtrudniejsze do pokazania bez słów?",
      "Jak się czułeś/aś, kiedy ktoś Cię dobrze rozumiał?"
    ],
    parentLearning: "Rozwijasz zdolność 'czytania' dziecka bez słów. Ta umiejętność przekłada się na trafniejszą reakcję na emocje dziecka w trudnych momentach dnia.",
    evidence: "Zabawy angażujące teorię umysłu u dzieci 4-6 lat przyspieszają rozwój empatii i redukują agresję reaktywną o 28%.",
    evidenceSource: "Wellman et al., Child Development meta-analiza 178 badań, 2011"
  },
  ruch: {
    brainNetwork: "Kora motoryczna + hipokamp (pamięć i uczenie się)",
    brainNetworkDetail: "Ruch fizyczny stymuluje produkcję BDNF — białka dosłownie budującego nowe połączenia synaptyczne w hipokampie. 20 minut aktywności = 2 godziny lepszej koncentracji.",
    coachingQuestions: [
      "Co czułeś/aś w ciele podczas tej zabawy? Gdzie konkretnie?",
      "Co było najtrudniejsze — i jak sobie poradziłeś/aś?",
      "Gdybyś mógł/a dodać jedną nową zasadę do tej gry, jaka by była?"
    ],
    parentLearning: "Uczysz się tolerancji na chaos i głośność. Zabawy ruchowe są z natury nieprzewidywalne — Twoja regulacja własnych emocji jest najważniejszym modelem dla dziecka.",
    evidence: "20 minut aktywności fizycznej zwiększa koncentrację silniej niż przerwa siedząca. BDNF wzrasta o 200-300% po intensywnym ruchu u dzieci.",
    evidenceSource: "Hillman et al., Nature Reviews Neuroscience 2008; Ratey & Hagerman, Spark 2008"
  },
  rytm: {
    brainNetwork: "Sieć słuchowo-motoryczna (synchronizacja obu półkul)",
    brainNetworkDetail: "Rytm synchronizuje oscylacje neuronalne w całym mózgu — jeden z nielicznych bodźców aktywujących jednocześnie lewą i prawą półkulę oraz móżdżek.",
    coachingQuestions: [
      "Pokaż mi dźwięk, który najbardziej lubisz robić — dlaczego właśnie ten?",
      "Jak czujesz rytm — w nogach, rękach, brzuchu?",
      "Czy możemy razem zrobić rytm, który opowiada jakąś historię?"
    ],
    parentLearning: "Synchronizacja rytmiczna z dzieckiem (wspólne tempo, rytm) to jeden z najsilniejszych neurologicznych sygnałów bezpieczeństwa relacyjnego. Reguluje układ nerwowy obojga.",
    evidence: "Wspólne muzykowanie rodzic-dziecko zwiększa miary bezpiecznego przywiązania i obniża kortyzol u obu uczestników.",
    evidenceSource: "Cirelli et al., Developmental Science 2014; Trehub, Annals NY Academy of Sciences 2003"
  },
  narracja: {
    brainNetwork: "Sieć językowa + DMN + wyobraźnia narracyjna",
    brainNetworkDetail: "Tworzenie historii aktywuje identyczną konfigurację sieci co słuchanie audiobooka. Badania fMRI: te same obszary mózgu przy czytaniu i słuchaniu opowieści.",
    coachingQuestions: [
      "Co się stanie z bohaterem za 5 minut? A za rok?",
      "Dlaczego bohater zrobił to właśnie teraz — co czuł w środku?",
      "Gdybyś mógł/a zmienić jedno zdarzenie w historii, co by to było?"
    ],
    parentLearning: "Narracja wspólna (co-narration) to najsilniej zbadana technika rozwijania słownictwa Tier-2/3 — słów abstrakcyjnych, których dzieci nie spotykają w mowie codziennej.",
    evidence: "Słuchanie narracji i tworzenie historii eksponuje dzieci na 40% więcej zaawansowanego słownictwa niż samodzielne czytanie lub rozmowa codzienna.",
    evidenceSource: "Journal of Educational Psychology 2022; Urban Institute 2023; Cincinnati fMRI 2019"
  },
  budowanie: {
    brainNetwork: "Przestrzenna sieć ciemieniowo-czołowa + funkcje wykonawcze",
    brainNetworkDetail: "Konstruowanie 3D aktywuje rotację mentalną i planowanie sekwencyjne — obszary kluczowe dla matematyki przestrzennej i myślenia inżynierskiego.",
    coachingQuestions: [
      "Co chciałeś/aś zbudować, zanim zacząłeś/aś? Co zmieniło się po drodze?",
      "Kiedy coś się posypało — co zrobiłeś/aś najpierw?",
      "Jak sprawdzisz, że to jest stabilne?"
    ],
    parentLearning: "Uczysz się być 'cicho obecny/a' — zabawy konstrukcyjne wymagają od rodzica tolerancji ciszy i oporu przed dawaniem gotowych rozwiązań.",
    evidence: "Swobodna zabawa klockami 15+ minut dziennie przez 6 tygodni poprawia wyniki testów przestrzennych i wczesnej matematyki u dzieci 3-6 lat.",
    evidenceSource: "Verdine et al., Journal of Cognition and Development 2014, n=102"
  },
  obserwacja: {
    brainNetwork: "Kora wzrokowa + sieć uwagi selektywnej",
    brainNetworkDetail: "Uważna obserwacja ćwiczy uwagę 'oddolną' — tę kontrolowaną przez środowisko, nie przez algorytm. Buduje zdolność do cierpliwości i zauważania detali.",
    coachingQuestions: [
      "Co widzisz, czego ja jeszcze nie zauważyłem/am?",
      "Jak to się zmieniło od kiedy zaczęliśmy patrzeć?",
      "Gdybyś miał/a opisać to komuś, kto tego nie widzi, co powiesz?"
    ],
    parentLearning: "Ćwiczysz uważność bez aplikacji — wspólna obserwacja natury reguluje autonomiczny układ nerwowy silniej niż wiele technik relaksacyjnych.",
    evidence: "20 minut obserwacji natury obniża markery stresu (kortyzol) u dzieci i dorosłych silniej niż 20 minut spaceru w środowisku miejskim.",
    evidenceSource: "Kuo & Taylor, American Journal of Public Health 2004; Li et al., Environment International 2019"
  },
  poznawcze: {
    brainNetwork: "Kora przedczołowa + funkcje wykonawcze (EF)",
    brainNetworkDetail: "Zadania logiczne ćwiczą trzy komponenty EF: pamięć roboczą, hamowanie impulsów i elastyczność poznawczą. To najlepszy znany predyktor sukcesu szkolnego — silniejszy niż IQ.",
    coachingQuestions: [
      "Jak do tego doszedłeś/aś? Pokaż mi swój tok myślenia.",
      "Czy istnieje inny sposób rozwiązania tego samego problemu?",
      "Co by się stało, gdybyś zmienił/a jedną zasadę?"
    ],
    parentLearning: "Uczysz się zadawać pytania otwarte zamiast korygować — 'Hmm, co o tym myślisz?' zamiast 'Nie, to nie tak' buduje autonomię poznawczą i pewność siebie dziecka.",
    evidence: "Zabawa offline z rozmową z rodzicem daje efekty na EF 3x silniejsze niż aplikacje edukacyjne. Fantastyczna animacja pogarsza EF nawet po 9 minutach ekspozycji.",
    evidenceSource: "Hinten et al., meta-analiza 1297 dzieci, Developmental Psychology 2025; Lillard lab 2015"
  },
  hotwheels: {
    brainNetwork: "Sieć narracji + reprezentacja przestrzenna + zabawa symboliczna",
    brainNetworkDetail: "Zabawa samochodzikami angażuje spontaniczną narrację — dziecko tworzy historię, co aktywuje te same sieci mózgu co słuchanie lub czytanie opowieści.",
    coachingQuestions: [
      "Opowiedz mi, dokąd jedzie ten samochód i po co.",
      "Co się wydarzyło przed tym wypadkiem/wyścigiem?",
      "Gdyby ten samochód mógł mówić, co by teraz powiedział?"
    ],
    parentLearning: "Uczysz się wchodzić w narrację dziecka bez jej przejmowania — pytanie 'a co potem?' podtrzymuje historię bez narzucania kierunku.",
    evidence: "Zabawa symboliczna z figurkami i pojazdami to jeden z najsilniejszych predyktorów rozwoju języka i teorii umysłu u dzieci 3-7 lat.",
    evidenceSource: "Lillard et al., Psychological Bulletin meta-analiza 154 badań, 2013"
  },
  relaks: {
    brainNetwork: "Układ przywspółczulny + kora przedczołowa",
    brainNetworkDetail: "Ćwiczenia mindfulness i oddechowe aktywują nerw błędny i obniżają reaktywność ciała migdałowatego — centrum alarmowego mózgu. Dziecko uczy się przechodzić ze stanu 'walcz/uciekaj' do stanu spokoju przez świadomą regulację.",
    coachingQuestions: [
      "Jak się czujesz w środku teraz? Ciepło, zimno, lekko, ciężko?",
      "Co pomogło Ci się uspokoić — oddech, ruch, coś innego?",
      "Gdzie w ciele czujesz spokój? Pokaż mi to miejsce."
    ],
    parentLearning: "Uczysz się regulować własny układ nerwowy razem z dzieckiem — nie za dziecko. Twój spokój jest biologicznym sygnałem bezpieczeństwa dla mózgu dziecka (koregulacja).",
    evidence: "Mindfulness-based programy dla dzieci w wieku przedszkolnym zmniejszają reaktywność emocjonalną o 32% i poprawiają zdolność do samoregulacji według meta-analizy 37 badań.",
    evidenceSource: "Zoogman et al., Mindfulness 2015; Porges, Polyvagal Theory 2011"
  }
};

export function getParentCoach(type: ActivityType): ParentCoachEntry {
  return PARENT_COACH_DATA[type];
}

export const PARENT_PROFILES: Record<ActivityType, { emoji: string; label: string; desc: string }> = {
  ruch: { emoji: "🏃", label: "Ekspert Ruchu", desc: "Twoje dziecko uwielbia aktywność fizyczną — budujesz BDNF i fundament zdrowia." },
  narracja: { emoji: "📖", label: "Mistrz Opowieści", desc: "Rozwijasz słownictwo i wyobraźnię — efekt identyczny jak audiobooki." },
  budowanie: { emoji: "🏗️", label: "Inżynier Zabawy", desc: "Ćwiczysz myślenie przestrzenne i funkcje wykonawcze." },
  rysowanie: { emoji: "🎨", label: "Kreator Wyobraźni", desc: "Budujesz sieć wyobraźni i ekspresję — mózg w trybie tworzenia." },
  rytm: { emoji: "🥁", label: "Maestro Rytmu", desc: "Synchronizujesz obie półkule mózgu — fundament języka i muzyki." },
  kalambury: { emoji: "🎭", label: "Mistrz Komunikacji", desc: "Rozwijasz teorię umysłu i empatię przez zabawę." },
  poznawcze: { emoji: "🧠", label: "Trener Myślenia", desc: "Wzmacniasz funkcje wykonawcze — najsilniejszy predyktor sukcesu szkolnego." },
  zgadywanka: { emoji: "🔍", label: "Detektyw Zabawy", desc: "Ćwiczysz logikę i kategoryzację przez ciekawość." },
  obserwacja: { emoji: "🌿", label: "Uważny Odkrywca", desc: "Budujesz koncentrację i uważność — razem z dzieckiem." },
  hotwheels: { emoji: "🚗", label: "Narrator na Torze", desc: "Zamieniasz zabawki w scenę narracyjną — świetny fundament języka." },
  relaks: { emoji: "🌿", label: "Mistrz Wyciszenia", desc: "Uczysz dziecko regulacji emocji i świadomego oddechu — umiejętności na całe życie." },
};

export const WEEKLY_INSIGHTS = [
  { text: "Rodzic jako 'scaffolding' — Twoja obecność podczas zabawy zwiększa jej efekty neurologiczne nawet 3x.", source: "Vygotsky ZPD; AAP Play Guidelines 2018" },
  { text: "20 minut offline play bez ekranów aktywuje sieć wyobraźni identycznie jak audiobooki — mózg sam buduje obrazy.", source: "Cincinnati Children's Hospital fMRI, 2019" },
  { text: "Pytanie 'jak to zrobiłeś?' zamiast 'brawo!' buduje growth mindset — skupia dziecko na procesie, nie wyniku.", source: "Dweck, Psychological Science 2007" },
  { text: "Dzieci uczą się słów z prawdziwej rozmowy 50% efektywniej niż z ekranu. Twój głos to najlepsze narzędzie edukacyjne.", source: "JAMA Pediatrics, meta-analiza 42 badań, 2024" },
  { text: "Wspólny rytm (bębnienie, klaskanie) obniża kortyzol u rodzica i dziecka jednocześnie — reguluje układ nerwowy obojga.", source: "Cirelli et al., Developmental Science 2014" },
  { text: "Fantastyczna animacja (magia, superbohaterowie) pogarsza funkcje wykonawcze dziecka nawet po 9 minutach. Offline play to antidotum.", source: "Hinten et al., meta 1297 dzieci, 2025" },
  { text: "Zabawa klockami 15 min dziennie przez 6 tygodni poprawia wczesną matematykę bardziej niż aplikacje edukacyjne.", source: "Verdine et al., Journal of Cognition 2014" },
];
