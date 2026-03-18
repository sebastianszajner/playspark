// Evidence-based developmental milestones 1 month → 7 years
// Sources: CDC 2022, WHO 2020, AAP 2022, Sherborne, Orff-Schulwerk, Piaget, Vygotsky

export interface DevelopmentDomain {
  motor: string[];       // motoryka (gross + fine)
  cognitive: string[];   // poznawcze
  social: string[];      // społeczno-emocjonalne
  language: string[];    // język i komunikacja
  sensory: string[];     // sensoryczne
}

export interface ParentSection {
  activities: string[];  // co rodzic może robić
  coachingTip: string;   // wskazówka coachingowa (1 zdanie)
  watchFor: string;      // na co uważać / kiedy do lekarza
}

export interface DevelopmentMilestone {
  id: string;            // "1m", "3m", "6m", "1y", "3y" etc.
  ageMonths: number;
  label: string;         // "1 miesiąc"
  tagline: string;       // opisowe hasło etapu
  colorHex: string;      // kolor etapu
  ageRange: "infant" | "toddler" | "preschool" | "school";
  domains: DevelopmentDomain;
  parent: ParentSection;
  evidenceSource: string;
  playSpark?: {
    ages: number[];      // jakie wiek PlaySpark pokrywa ten etap
    tip: string;         // jak używać PlaySpark w tym etapie
  };
}

export const DEVELOPMENT_MILESTONES: DevelopmentMilestone[] = [
  {
    id: "1m",
    ageMonths: 1,
    label: "1 miesiąc",
    tagline: "Świat zaczyna istnieć",
    colorHex: "#A78BFA",
    ageRange: "infant",
    domains: {
      motor: [
        "Unosi głowę na chwilę podczas tummy time",
        "Refleksowe ruchy kończyn (gripping, rooting, ssanie)",
        "Porusza symetrycznie rękoma i nogami",
      ],
      cognitive: [
        "Skupia wzrok na twarzy na odległość ~20-30 cm",
        "Reaguje na bodźce wzrokowe o wysokim kontraście",
        "Pierwsze śledzenie wolno poruszającego się obiektu",
      ],
      social: [
        "Uspokaja się na znajomy głos",
        "Krótki kontakt wzrokowy z twarzą rodzica",
        "Zaczyna imitować wyrazy twarzy (proto-imitacja)",
      ],
      language: [
        "Płacze jako komunikacja (głód, ból, zmęczenie)",
        "Wydaje dźwięki gardłowe (reflexive vocalization)",
        "Wzdryga się na głośny dźwięk",
      ],
      sensory: [
        "Preferuje kontrastowe wzory (szachownica, paski)",
        "Reaguje na ciepło, zimno, dotyk",
        "Uspokaja się przy kołysaniu i rytmicznych dźwiękach",
      ],
    },
    parent: {
      activities: [
        "Skin-to-skin (kangurkowanie) — min. 30 min dziennie, reguluje temperaturę i kortyzol",
        "Tummy time — zacznij od 2-3 min, kilka razy dziennie na twardej powierzchni",
        "Mów do dziecka opisując co robisz: 'Teraz cię ubieram, zakładam rękaw'",
        "Pokazuj czarno-białe wzory i twarze z 20-25 cm odległości",
        "Śpiewaj tę samą kołysankę — mózg uczy się przewidywania rytmu",
        "Masaż niemowlęcy: ciepłe ręce, delikatne okrężne ruchy, po kąpieli",
      ],
      coachingTip: "Twoja twarz to najważniejsza zabawka — ekspresja, kontakt wzrokowy i głos kształtują fundament bezpiecznego przywiązania.",
      watchFor: "Brak reakcji na głos i dźwięki, brak skupienia wzroku na twarzy po 2 tygodniach — skonsultuj z pediatrą.",
    },
    evidenceSource: "WHO Guidelines 2020; AAP First Months of Life 2022; Feldman et al., Dev. Psychobiology 2011 (skin-to-skin)",
  },
  {
    id: "2m",
    ageMonths: 2,
    label: "2 miesiące",
    tagline: "Pierwszy uśmiech — pierwsze połączenie",
    colorHex: "#8B5CF6",
    ageRange: "infant",
    domains: {
      motor: [
        "Unosi głowę na 45° podczas tummy time",
        "Otwiera i zamyka dłonie",
        "Kopie nogami w leżeniu na plecach",
      ],
      cognitive: [
        "Śledzenie przedmiotu: lewo-prawo na osi poziomej",
        "Rozpoznaje twarz mamy i taty",
        "Reaguje na powtarzające się bodźce (zaczątki habitacji)",
      ],
      social: [
        "Uśmiech społeczny (social smile) — odpowiedź na uśmiech rodzica",
        "Wokalizacje w odpowiedzi na głos dorosłego (proto-dialog)",
        "Uspokaja się przy wzięciu na ręce",
      ],
      language: [
        "Gruchanie (cooing) — miękkie samogłoskowe dźwięki 'oo', 'aa'",
        "Różnicuje płacz (głód vs. ból vs. zmęczenie)",
        "Zatrzymuje się i słucha gdy rodzic mówi",
      ],
      sensory: [
        "Reaguje na dźwięki: odwraca głowę w kierunku źródła",
        "Chwyta palec włożony w dłoń",
        "Wykazuje preferencje do jasnych kolorów i twarzy",
      ],
    },
    parent: {
      activities: [
        "Proto-dialog: mów zdanie, zrób pauzę, czekaj na reakcję — to fundament języka",
        "Grzechotka z boku głowy: obserwuj czy dziecko obraca wzrok/głowę",
        "Nakręcana pozytywka lub spokojna muzyka — rytm kształtuje sieć słuchowo-motoryczną",
        "Tummy time z lusterkiem antyłamiącym — własna twarz jest najciekawszym bodźcem",
        "Czytaj głośno — treść nieważna, melodia zdań buduje pamięć prozodii języka",
      ],
      coachingTip: "Pauza po mówieniu do dziecka to nie cisza — to przestrzeń na jego odpowiedź. Dzieci uczą się dialogu zanim mówią.",
      watchFor: "Brak uśmiechu społecznego do 3 miesiąca, brak reakcji na znajome głosy — porozmawiaj z pediatrą.",
    },
    evidenceSource: "Trevarthen 2011 (protoconversation); CDC Milestones 2022; Trehub 2003 (music and infant brain)",
  },
  {
    id: "3m",
    ageMonths: 3,
    label: "3 miesiące",
    tagline: "Ręce odkrywają ciało",
    colorHex: "#7C3AED",
    ageRange: "infant",
    domains: {
      motor: [
        "Głowa stabilna podczas siedzenia z podporem",
        "Śledzenie przedmiotu 180° — od lewej do prawej i z góry na dół",
        "Celowe uderzanie w wiszące zabawki",
        "Odkrywa własne ręce — ogląda je z fascynacją",
      ],
      cognitive: [
        "Reaguje na zanikanie i powrót twarzy (peek-a-boo proto-reaction)",
        "Pamięć rozpoznawcza: spokojniejszy przy znajomych twarzach",
        "Zaczyna badać związki przyczynowo-skutkowe (ruch nogi = grzechotka drga)",
      ],
      social: [
        "Aktywny uśmiech i wokalizacja w odpowiedzi na kontakt",
        "Różne reakcje na różnych ludzi (selektywność społeczna)",
        "Płacze kiedy odchodzi ulubiona osoba",
      ],
      language: [
        "Wokalizuje w proto-dialogu: czeka na pauzę, odpowiada",
        "Śmieje się — pierwsze dźwięki śmiechu",
        "Reaguje na własne imię (wstępna)",
      ],
      sensory: [
        "Chwyta zabawkę podaną do ręki",
        "Nosi zabawki do ust (eksploracja oralna)",
        "Uspokaja się przy muzyce i śpiewie",
      ],
    },
    parent: {
      activities: [
        "Orff: śpiewaj prostą melodię i klaskaj do rytmu na kolanach dziecka",
        "Zawieś kolorowe przedmioty na łuku (gym mat) — niech dotyka i porusza",
        "Czytaj rymy z wyrazistą intonacją — zmieniaj tempo i głośność",
        "Sherborne: ćwiczenie 'bujanie' — dziecko na plecach, delikatne bujanie lewo-prawo",
        "Gra 'coo-coo' (peek-a-boo w wersji głosowej) — buduje oczekiwanie i zaskoczenie",
      ],
      coachingTip: "Naśladuj dźwięki dziecka i czekaj — kiedy dziecko 'odpowiada', naśladuj znowu. To pierwszy dialog i pierwsze lekcje języka.",
      watchFor: "Brak celowego sięgania do 5 miesiąca, brak śmiechu do 4 miesiąca.",
    },
    evidenceSource: "Piaget 1952 (sensorimotor stage I); Cirelli et al. 2014 (rhythmic synchrony); CDC 2022",
  },
  {
    id: "6m",
    ageMonths: 6,
    label: "6 miesięcy",
    tagline: "Siedzę, sięgam, badam",
    colorHex: "#6D28D9",
    ageRange: "infant",
    domains: {
      motor: [
        "Siada z niewielkim podporem lub samodzielnie (przez 1-2 min)",
        "Obraca się z pleców na brzuch i z powrotem",
        "Chwyta oburącz i przenosi między rękami",
        "Podpiera się na rękach w pozycji na brzuchu (wzmocnienie barków)",
      ],
      cognitive: [
        "Trwałość obiektu: szuka ukrytego przedmiotu przez chwilę",
        "Naśladuje gesty i mimikę",
        "Bada przedmioty: uderza, potrząsa, upuszcza, wkłada do ust",
      ],
      social: [
        "Strach przed obcymi (stranger anxiety) — sygnał bezpiecznego przywiązania",
        "Preferuje znane osoby, bawi się w lustrze",
        "Reaguje emocjonalnie: śmiech, gniew, strach",
      ],
      language: [
        "Gaworzenie z spółgłoskami: 'ba', 'ma', 'da'",
        "Moduluje ton głosu: 'pyta', 'oznajmia', 'woła'",
        "Reaguje na własne imię — obraca się, patrzy",
      ],
      sensory: [
        "Eksploracja tekstur: miękkie, twarde, gładkie, chropowate",
        "Wkłada wszystko do ust — norma neurorozwojowa, nie zabraniaj",
        "Potrzeba propriocepcji: lubi być mocno trzymane, bujane, kołysane",
      ],
    },
    parent: {
      activities: [
        "Pudełka sensoryczne: ryż, makaron, kawałki tkanin — pod nadzorem",
        "Peek-a-boo (schowaj twarz, odkryj) — ćwiczy trwałość obiektu i oczekiwanie",
        "Czytaj książki z kontrastowymi obrazkami i pojedynczymi słowami",
        "Śpiewaj rymowanki z gestami (Sroka-wrona, Idzie rak) — synchronizacja rytmiczna",
        "Swobodny czas na podłodze (floor time) — eksploracja bez popędzania",
        "Nosidło/chustonoszenie: propriocepcja + bliskość + kontakt werbalny",
      ],
      coachingTip: "Mówienie do dziecka podczas codziennych czynności (kąpiel, karmienie, ubieranie) buduje słownictwo szybciej niż jakiekolwiek zabawki edukacyjne.",
      watchFor: "Brak gaworzenia z spółgłoskami do 9 miesiąca, brak trwałości obiektu do 8-9 miesiąca.",
    },
    evidenceSource: "Ainsworth 1978 (attachment); Piaget 1952; WHO 2020; Hart & Risley 1995 (30 million words)",
  },
  {
    id: "9m",
    ageMonths: 9,
    label: "9 miesięcy",
    tagline: "Raczkuję i rozumiem",
    colorHex: "#5B21B6",
    ageRange: "infant",
    domains: {
      motor: [
        "Raczkowanie lub inne formy lokomocji (pełzanie, siedzenie z przesuwaniem)",
        "Podciąga się do stania, stoi z podporem",
        "Chwyt pęsetkowy: kciuk + palec wskazujący (przełom!)",
        "Celowe upuszczanie i rzucanie przedmiotów",
      ],
      cognitive: [
        "Pełna trwałość obiektu: szuka ukrytego przedmiotu pod chustą",
        "Wskazywanie: rozumie gesty wskazujące i sam wskazuje",
        "Zabawa imitacyjna: naśladuje czynności (klaskanie, machanie)",
      ],
      social: [
        "Lęk separacyjny — normalna oznaka zdrowego przywiązania",
        "Wspólna uwaga (joint attention): patrzy gdzie patrzy dorosły",
        "Rozumie 'nie' i ton emocjonalny wypowiedzi",
      ],
      language: [
        "Gaworzenie łańcuchowe: 'mamama', 'bababa', 'dadada'",
        "Rozumie kilka słów: imię, 'nie', 'papa', 'daj'",
        "Proto-słowa: specyficzne dźwięki mające stałe znaczenie",
      ],
      sensory: [
        "Aktywna eksploracja przestrzeni przez raczkowanie",
        "Wkładanie i wyjmowanie przedmiotów z pojemników",
        "Reaguje na rytm muzyki ruchem ciała",
      ],
    },
    parent: {
      activities: [
        "Kurs przez salon: stwórz tor przeszkód z poduszek — motywuj do raczkowania",
        "Wkładanie klocków do pudełka i wysypywanie — przyczyna-skutek + motoryka mała",
        "Czytaj wskazując na obrazki i nazywając: 'pies', 'auto', 'kot'",
        "Klaskaj do muzyki razem z dzieckiem — wspólny rytm buduje relację",
        "Gra w 'daj-weź': podawanie przedmiotów tam i z powrotem",
        "Wspólna uwaga: wskazuj palcem 'patrz, ptak!' i obserwuj czy dziecko podąża wzrokiem",
      ],
      coachingTip: "Raczkowanie to nie etap do pominięcia — integruje obie półkule mózgu. Nie przyspieszaj do chodzenia.",
      watchFor: "Brak lokomocji do 12 miesiąca, brak wspólnej uwagi do 12 miesiąca — omów z pediatrą.",
    },
    evidenceSource: "Piaget 1952; Tomasello 1999 (joint attention); CDC 2022; Hanscom (sensory crawling)",
  },
  {
    id: "12m",
    ageMonths: 12,
    label: "12 miesięcy",
    tagline: "Pierwsze słowa, pierwsze kroki",
    colorHex: "#4C1D95",
    ageRange: "infant",
    domains: {
      motor: [
        "Chodzi samodzielnie lub przy meblu (±2 miesiące)",
        "Wchodzi na schody raczkując",
        "Chwyt pęsetkowy doskonały — zbiera małe przedmioty",
        "Buduje wieżę z 2 klocków",
      ],
      cognitive: [
        "Funkcja symboliczna: telefon = 'rozmawia', kubek = 'pije' zabawkowo",
        "Eksperymentuje metodą prób i błędów",
        "Rozumie 50+ słów (receptive vocabulary)",
      ],
      social: [
        "Mówi 'nie' gestem (potrząsanie głową)",
        "Prosi o pomoc gestem + wokalizacją",
        "Zabawa równoległa: bawi się obok, obserwuje inne dzieci",
      ],
      language: [
        "1-5 słów ze zrozumieniem (mama, tata, hau-hau, nie)",
        "Rozumie proste polecenia: 'podaj', 'chodź', 'zostaw'",
        "Gestykulacja: wskazuje, macha na do widzenia",
      ],
      sensory: [
        "Aktywna eksploracja przez chodzenie — nowy proprioceptywny świat",
        "Reaguje na różne tekstury stopami — chodzenie boso ważne",
        "Bawi się z wodą, piaskiem, plasteliną",
      ],
    },
    parent: {
      activities: [
        "Kosz skarbów (Heuristic Play): różnorodne materiały — drewno, metal, tkanina, kamień",
        "Czytaj książki z teksturami (touchy-feely books)",
        "Śpiewaj z gestami: Głowa, ramiona, kolana, stopy",
        "Chodzenie boso po różnych powierzchniach (trawa, piasek, drewno)",
        "Zabawy w wodzie z kubeczkami — wlewanie i wylewanie",
        "Proste polecenia z gestami: 'klaśnij', 'pokaż nos'",
      ],
      coachingTip: "Nie poprawiaj słów dziecka bezpośrednio — zamiast 'nie 'ba', to piłka', powiedz 'Tak, piłka! Ładna piłka.' Modelowanie jest skuteczniejsze od korekty.",
      watchFor: "Brak pojedynczych słów do 16 miesiąca, utrata nabytych słów — skontaktuj się z logopedą.",
    },
    evidenceSource: "CDC 2022; Vygotsky 1978 (ZPD); Goldstein et al. 2003 (language modeling)",
  },
  {
    id: "18m",
    ageMonths: 18,
    label: "18 miesięcy",
    tagline: "Eksplozja słów i woli",
    colorHex: "#2563EB",
    ageRange: "toddler",
    domains: {
      motor: [
        "Bieganie (niestabilne, upadanie — norma)",
        "Wchodzi i schodzi ze schodów przy ścianie",
        "Buduje wieżę z 3-4 klocków",
        "Rysuje kredką: bazgroty, ślad na kartce",
      ],
      cognitive: [
        "Zabawa symboliczna (symbolic play): karmi lalkę, 'gotuje' w kuchence zabawkowej",
        "Rozwiązuje problemy metodą testowania: co się stanie jak...?",
        "Sortuje przedmioty wg 1 cechy (kolor lub kształt)",
      ],
      social: [
        "Pierwsze 'bunty' — próba autonomii (normalny etap!)",
        "Empatia emocjonalna: podchodzi do płaczącego dziecka",
        "Zazdrość i zazdrość o uwagę rodzica",
      ],
      language: [
        "Słownik: 10-50 słów (eksplozja słownikowa po 18 mies.)",
        "Wskazuje na obrazek gdy pytasz: 'Gdzie jest...?'",
        "Rozumie proste zdania: 'Idź po buty'",
      ],
      sensory: [
        "Potrzeba intensywnego propriocepcji: lubi wspinanie, turlanie, ściskanie",
        "Zabawy z masami plastycznymi (plastelina, ciasto solne)",
        "Aktywna eksploracja — nie blokuj, asekuruj",
      ],
    },
    parent: {
      activities: [
        "Gotowanie razem: mieszanie, wsypywanie, ugniatanie — sensoryka + sprawczość",
        "Tor z poduszek, materacy, tuneli — propriocepcja i planowanie motoryczne",
        "Woda w misce z kubeczkami, łyżkami — lejemy, mieszamy, 'gotujemy'",
        "Zabawy z masą solną (2 szkl. mąki + 1 szkl. soli + woda) — 0 kosztów",
        "Proste zabawy ruchowe: berka, chowanego, toczenie piłki",
        "Nazwij emocje: 'Jesteś zły, bo zabrałem zabawkę. Rozumiem.' — fundament EQ",
      ],
      coachingTip: "Bunty 18-miesięczne to nie 'psujenie' — to pierwsze testy autonomii. Twoja spokojna obecność, nie kapitulacja i nie kara, buduje przyszłą samoregulację.",
      watchFor: "Słownik poniżej 6 słów w 18 mies., brak wskazywania — skontaktuj się z logopedą.",
    },
    evidenceSource: "Gopnik et al. 1999 (scientist in the crib); CDC 2022; Sroufe 2005 (autonomy development)",
  },
  {
    id: "24m",
    ageMonths: 24,
    label: "2 lata",
    tagline: "Zdania, zabawa i silna wola",
    colorHex: "#1D4ED8",
    ageRange: "toddler",
    domains: {
      motor: [
        "Biega płynnie, zmienia kierunek",
        "Skacze obunóż (debut!)",
        "Wchodzi-schodzi ze schodów naprzemiennie",
        "Buduje wieżę 6+ klocków, trzyma kredkę palcami",
      ],
      cognitive: [
        "Dwustopniowe polecenia: 'Weź kubek i postaw na stole'",
        "Sortuje po kolorze, kształcie i rozmiarze",
        "Rozumie 'jeden' i 'wiele'",
        "Zabawa równoległa przechodzi w zabawy obok siebie z kopiowaniem",
      ],
      social: [
        "Zazdrość, frustracja, duma — pełna paleta emocji",
        "Coraz częstsze 'moje!' — granice własności",
        "Empatia: pociesza płaczące dziecko, podaje chusteczkę",
      ],
      language: [
        "Zdania 2-słowne: 'Mama daj', 'Duży pies'",
        "Słownik 50-200 słów (boom!)",
        "Pyta 'co to?' — nie przerywaj, odpowiadaj zawsze",
      ],
      sensory: [
        "Malowanie palcami, stemplowanie, rysowanie — ekspresja przez ruch",
        "Zabawa w piasku, błocie, wodzie — niezbędna dla SI",
        "Muzyka = ruch: kołysze się, tupie, klaska",
      ],
    },
    parent: {
      activities: [
        "Malowanie palcami na dużym arkuszu — bez hamowania, z gazetami pod spodem",
        "Zabawy naśladowcze: gotujemy obiad, idziemy do sklepu, jedziemy pociągiem",
        "Razem: skocz na trampolinie, wal pięściami w poduszkę (propriocepcja)",
        "Puzzle 2-4 elementowe: doskonalenie chwytania i przestrzeni",
        "Czytaj te same książki wielokrotnie — mózg 2-latka kocha repetycję",
        "Spacer bez celu: niech dziecko prowadzi — wzmacnia inicjatywę",
      ],
      coachingTip: "Kiedy dziecko pyta 'co to?' setny raz dzisiaj — to nie irytacja, to nauka słownika. Każda Twoja odpowiedź to +1 nowe słowo w banku.",
      watchFor: "Brak zdań 2-słownych do 24 mies., brak wskazywania do 14 mies. — skontaktuj się z logopedą.",
    },
    evidenceSource: "Vygotsky 1978; CDC 2022; Hart & Risley 1995; WHO 2020",
  },
  {
    id: "3y",
    ageMonths: 36,
    label: "3 lata",
    tagline: "Wyobraźnia bez granic",
    colorHex: "#0284C7",
    ageRange: "preschool",
    domains: {
      motor: [
        "Jedzie na rowerku biegowym lub trójkołowym",
        "Stoi na jednej nodze przez 2-3 sekundy",
        "Rysuje kółka, linie, zaczątki postaci",
        "Trzyma nożyczki, wycina proste kształty",
      ],
      cognitive: [
        "Zabawa udawana (pretend play): leczenie misiów, gotowanie, sklep",
        "Rozumie przeszłość i przyszłość: 'wczoraj', 'jutro'",
        "Myślenie magiczne (Piaget: preoperational) — pełna fantazja",
        "Sortuje po 2 cechach jednocześnie",
      ],
      social: [
        "Zabawa asocjacyjna: razem, z podobnym tematem",
        "Pierwsze przyjaźnie: 'to mój przyjaciel'",
        "Zaczyna negocjować i kompromitować (z pomocą)",
      ],
      language: [
        "Zdania 3-4 słowne, pytania: 'dlaczego?', 'kiedy?'",
        "Słownik 1000+ słów",
        "Opowiada krótką historię ze swoimi słowami",
      ],
      sensory: [
        "Intensywna potrzeba propriocepcji i vestibularna (wspinanie, kręcenie)",
        "Zabawy z wodą, piaskiem, ziemią, śniegiem",
        "Ruch jest myśleniem: dzieci 3-letnie myślą przez ciało",
      ],
    },
    parent: {
      activities: [
        "PlaySpark: cały zakres aktywności od 3 lat dostępny!",
        "Zabawy tematyczne: zbuduj sklep, szpital, warsztat — wejdź w rolę razem",
        "Wyprawa badawcza: idź do parku i szukajcie 'wszystkiego czarnego'",
        "Ciasto solne, glina, masa papierowa — ekspresja i motoryka mała",
        "Rowerek biegowy lub zwykły spacer z 'zadaniem detektywa'",
        "Czytaj i pytaj: 'Co się stanie potem? Jak myślisz?'",
      ],
      coachingTip: "Pytanie 'dlaczego?' 3-latka nie ma na celu dowiedzenia się — to test czy Ty też budujesz ciekawość. Odpowiadaj i odwzajemniaj pytanie.",
      watchFor: "Brak zabawy udawanej do 3,5 roku, brak zdań do 3 roku — omów z logopedą/pediatrą.",
    },
    evidenceSource: "Piaget 1952; Vygotsky 1978; Lillard et al. 2013 (pretend play meta-analysis); CDC 2022",
    playSpark: {
      ages: [3],
      tip: "3-latki kochają zabawy narracyjne i ruch — zacznij od 'narracja' i 'ruch' w PlaySpark.",
    },
  },
  {
    id: "4y",
    ageMonths: 48,
    label: "4 lata",
    tagline: "Reguły, rywalizacja i relacje",
    colorHex: "#0369A1",
    ageRange: "preschool",
    domains: {
      motor: [
        "Skacze na jednej nodze, podskakuje",
        "Łapie piłkę obiema rękoma",
        "Jedzie na rowerze z pomocniczymi kółkami",
        "Rysuje człowieka z głową, rękoma, nogami",
      ],
      cognitive: [
        "Rozumie reguły prostych gier (chociaż często je zmienia w swoją korzyść — normalnie)",
        "Liczy do 10, zna kolory i kształty",
        "Teorii umysłu (false belief): 'Co Kasia myśli, że jest w pudełku?'",
      ],
      social: [
        "Zabawa współpracy (cooperative play): wspólny projekt, role",
        "Rozumie poczucie sprawiedliwości: 'To nie fair!'",
        "Pierwsze kłótnie o reguły z rówieśnikami — ważne dla rozwoju",
      ],
      language: [
        "Opowiada historię z początkiem, środkiem i końcem",
        "Zdania złożone: 'Jeśli pada, to nie wyjdziemy'",
        "Pyta o znaczenie słów, rozumie ironię",
      ],
      sensory: [
        "Lubi sporty: jazda na rowerze, wspinanie, pływanie",
        "Integracja sensoryczna dojrzewa — mniej wrażliwy na bodźce",
        "Zabawa w błocie i piasku buduje odporność sensoryczną",
      ],
    },
    parent: {
      activities: [
        "Kalambury, zgadywanki, gry planszowe proste (Chińczyk, memo)",
        "Projekt budowania: domek z klocków, fort z krzeseł i koców",
        "Rysowanie mapy: narysujcie razem mapę pokoju lub ogrodu",
        "Eksperyment: co pływa, a co tonie? Co się topi w gorącej wodzie?",
        "Teatrzyk kukiełkowy: zrób kukiełkę z skarpetki i zagrajcie historię",
      ],
      coachingTip: "4-latki kłamią — to dobry znak: wymaga teorii umysłu, wyobraźni i planowania. Zamiast karać, ciekawie spytaj o historię.",
      watchFor: "Brak teorii umysłu po 5 roku, brak zabawy kooperatywnej po 5 roku — omów ze specjalistą.",
    },
    evidenceSource: "Wellman et al. 2011 (ToM meta-analysis); CDC 2022; Lillard 2013",
    playSpark: {
      ages: [4],
      tip: "4-latki rozwijają teorię umysłu — 'kalambury' i 'zgadywanki' są idealne na ten etap.",
    },
  },
  {
    id: "5y",
    ageMonths: 60,
    label: "5 lat",
    tagline: "Logika, współpraca i wielkie projekty",
    colorHex: "#047857",
    ageRange: "preschool",
    domains: {
      motor: [
        "Jeździ na rowerze bez bocznych kółek",
        "Chodzi po krawężniku, po balansie",
        "Wycina nożyczkami krzywe linie",
        "Piszę litery drukowane (przygotowanie do szkoły)",
      ],
      cognitive: [
        "Konserwacja (Piaget): rozumie że ilość nie zmienia się gdy zmienia forma",
        "Planuje wieloetapowe zadania",
        "Myślenie przyczynowo-skutkowe: 'bo', 'dlatego', 'jeśli-to'",
        "Funkcje wykonawcze (EF): hamowanie impulsów, pamięć robocza, elastyczność",
      ],
      social: [
        "Przyjaźnie selektywne: 'najlepszy przyjaciel'",
        "Gra w rolę przez długi czas (1h+ zabawy tematycznej)",
        "Rozumie zasady i negocjuje zmiany",
      ],
      language: [
        "Pełne zdania złożone, gramatyka niemal dorosła",
        "Opowiada szczegółową historię z przyczynami i konsekwencjami",
        "Rozumie żarty i gry słowne",
      ],
      sensory: [
        "Regulacja sensoryczna lepsza — toleruje różne tekstury i dźwięki",
        "Sport i aktywność fizyczna kluczowe dla koncentracji (BDNF)",
        "Potrzebuje min. 60 min ruchu dziennie (WHO)",
      ],
    },
    parent: {
      activities: [
        "Cały PlaySpark — wiek 5 lat to pełne spektrum możliwości!",
        "Eksperymenty naukowe: wulkan z sodą i octem, hodowanie fasoli",
        "Zbudujcie razem coś z kartonu, kleju i taśmy — bez instrukcji",
        "Czytaj i dyskutuj: 'Dlaczego bohater tak zrobił? Ty byś zrobił inaczej?'",
        "Gry planszowe z regułami: Uno, Chińczyk, Bingo — uczy przegrywać",
        "Wspólne gotowanie: dziecko robi coś samodzielnie (kanapka, sałatka)",
      ],
      coachingTip: "5-latek gotowy do funkcji wykonawczych — zamiast mówić 'uważaj', powiedz 'co możesz zrobić żeby to działało lepiej?' Autonomia poznawcza buduje szkolną gotowość.",
      watchFor: "Trudności z funkcjami wykonawczymi (impulsywność, brak planowania) — rozmawiaj z psychologiem przed pójściem do szkoły.",
    },
    evidenceSource: "Piaget 1952; Diamond 2013 (executive functions); CDC 2022; WHO 2020 (60 min activity)",
    playSpark: {
      ages: [5],
      tip: "5-latki mają rozwinięte EF — 'budowanie', 'poznawcze' i 'obserwacja' dadzą im pełne wyzwanie.",
    },
  },
  {
    id: "6y",
    ageMonths: 72,
    label: "6 lat",
    tagline: "Szkoła, zasady i pierwsze sukcesy",
    colorHex: "#065F46",
    ageRange: "school",
    domains: {
      motor: [
        "Pełna koordynacja: skacze, wspina, kopie i łapie piłkę",
        "Pisze litery i cyfry z zachowaniem liniatury",
        "Wycina złożone kształty, klei, składa origami",
        "Jeździ na hulajnodze, rolkach",
      ],
      cognitive: [
        "Myślenie operacyjne (Piaget): rozumie odwracalność, szeregowanie",
        "Czyta i rozumie proste teksty",
        "Działa według wieloetapowych instrukcji",
        "Metapoznanie: 'Nie wiem jak to zrobić — co powinienem spróbować?'",
      ],
      social: [
        "Złożone przyjaźnie z lojalnością i konfliktami",
        "Rozumie reguły gier i stosuje je uczciwie",
        "Wrażliwy na ocenę rówieśników — pierwsze kryzysy 'chcę być jak inni'",
      ],
      language: [
        "Czyta samodzielnie proste teksty",
        "Opowiada długie, szczegółowe narracje",
        "Rozumie humor językowy, metafory",
      ],
      sensory: [
        "Pełna integracja sensoryczna u większości dzieci",
        "BDNF: 20 min ruchu = 2h lepszej koncentracji w szkole",
        "Ekrany zaczynają konkurować z ruchem — balans kluczowy",
      ],
    },
    parent: {
      activities: [
        "Projekty długoterminowe: hodowanie rośliny, budowanie latawca, album fotograficzny",
        "Gry planszowe strategiczne: Kacper i Hopsa, proste szachy, Osadnicy (uproszczone)",
        "Sport regularny: pływanie, jazda na rowerze, tenis stołowy",
        "Gotowanie samodzielne: dziecko robi kolację dla rodziny",
        "Rozmowy o szkole: 'Co było najtrudniejsze? Co chciałbyś zmienić?'",
        "PlaySpark aktywności dla 6-latków: 'rytm', 'ruch', 'obserwacja'",
      ],
      coachingTip: "Szkoła przynosi porównania — twoje 'co próbowałeś?' zamiast 'dostałeś piątkę?' buduje growth mindset, nie lęk przed oceną.",
      watchFor: "Trudności z czytaniem po pół roku szkoły, izolacja społeczna, silny lęk szkolny — skontaktuj się z pedagogiem.",
    },
    evidenceSource: "Piaget 1952; Dweck 2006 (growth mindset); CDC 2022; Hillman 2008 (BDNF + attention)",
    playSpark: {
      ages: [6],
      tip: "6-latki kochają wyzwania z zasadami — 'zgadywanka', 'kalambury' i 'rytm' będą hitem.",
    },
  },
  {
    id: "7y",
    ageMonths: 84,
    label: "7 lat",
    tagline: "Niezależność i myślenie krytyczne",
    colorHex: "#064E3B",
    ageRange: "school",
    domains: {
      motor: [
        "Pełna kontrola motoryczna: sporty zespołowe, pływanie, gimnastyka",
        "Precyzja motoryki małej: kaligrafja, origami, składanie modeli",
        "Koordynacja wzrokowo-ruchowa: łowi, rzuca precyzyjnie",
      ],
      cognitive: [
        "Myślenie logiczne: rozwiązuje zadania matematyczne, łamigłówki",
        "Klasyfikuje i hierarchizuje: klasy, podklasy",
        "Myślenie hipotetyczne: 'Co by się stało gdyby...'",
      ],
      social: [
        "Złożone relacje rówieśnicze z hierarchią i rolami",
        "Rozumie perspektywę innej osoby (zaawansowana ToM)",
        "Zaczyna budować tożsamość: 'Kim jestem, czego chcę'",
      ],
      language: [
        "Czyta płynnie, rozumie teksty narracyjne i informacyjne",
        "Pisze krótkie opowiadania i listy",
        "Bogate słownictwo abstrakcyjne",
      ],
      sensory: [
        "Min. 60 min aktywności fizycznej dziennie (WHO) — coraz trudniej wyegzekwować",
        "Sport jako regulator emocjonalny i społeczny",
        "Ekrany: max 2h dziennie wg AAP — ustanów zasady teraz",
      ],
    },
    parent: {
      activities: [
        "Projekt rodzinny: coś razem zbudujcie, naprawcie, zasadzcie",
        "Sport regularny: wybierzcie razem dyscyplinę sezonową",
        "Gry strategiczne: warcaby, szachy, Catan",
        "Projektowanie komiksu lub gry: kreatywność + planowanie + narracja",
        "Rozmowy przy kolacji o szkole, rówieśnikach, marzeniach",
        "PlaySpark: cały zakres 7-latka — 'hotwheels', 'narracja', 'budowanie'",
      ],
      coachingTip: "7-latek buduje tożsamość. Twoje pytanie 'Co Cię dziś zaskoczyło?' jest ważniejsze niż 'Jak było w szkole?' — otwiera głębszą refleksję.",
      watchFor: "Izolacja społeczna, nagłe zmiany zachowania, silna awersja do szkoły — nie ignoruj, rozmawiaj z wychowawcą i psychologiem.",
    },
    evidenceSource: "Piaget 1952; CDC 2022; AAP 2016 (screen time); Dweck 2006",
    playSpark: {
      ages: [7],
      tip: "7-latki są gotowe na zaawansowane wyzwania — 'poznawcze' i 'budowanie' rozwiną ich najsilniej.",
    },
  },
];

export const DOMAIN_META = {
  motor: { label: "Motoryka", emoji: "🏃", color: "#22C55E", bg: "#DCFCE7", darkColor: "#4ADE80", darkBg: "#052e16" },
  cognitive: { label: "Poznawcze", emoji: "🧠", color: "#3B82F6", bg: "#DBEAFE", darkColor: "#60A5FA", darkBg: "#0c1445" },
  social: { label: "Społeczne & Emocje", emoji: "🤝", color: "#F59E0B", bg: "#FEF3C7", darkColor: "#FCD34D", darkBg: "#1c1200" },
  language: { label: "Język", emoji: "💬", color: "#EC4899", bg: "#FCE7F3", darkColor: "#F472B6", darkBg: "#2d0a1e" },
  sensory: { label: "Sensoryczne", emoji: "✨", color: "#A855F7", bg: "#F3E8FF", darkColor: "#C084FC", darkBg: "#1a0533" },
};

export const AGE_RANGE_META = {
  infant: { label: "Niemowlę", sublabel: "0–12 mies.", color: "#8B5CF6" },
  toddler: { label: "Maluch", sublabel: "12–24 mies.", color: "#3B82F6" },
  preschool: { label: "Przedszkolak", sublabel: "2–5 lat", color: "#0EA5E9" },
  school: { label: "Szkolny", sublabel: "6–7 lat", color: "#047857" },
};

export function getMilestoneByAge(months: number): DevelopmentMilestone | undefined {
  return DEVELOPMENT_MILESTONES.find(m => m.ageMonths === months);
}

export function getMilestoneIndex(id: string): number {
  return DEVELOPMENT_MILESTONES.findIndex(m => m.id === id);
}
