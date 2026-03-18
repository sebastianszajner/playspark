import type { Activity } from "./types";

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    name: "Co to za dźwięk?",
    type: "zgadywanka",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["słuchanie", "koncentracja", "słownictwo"],
    topics: ["zwierzęta", "natura", "codzienność"],
    age: [3, 4, 5],
    method: "montessori",
    duration: "5-10 min",
    description:
      "Rodzic odtwarza lub naśladuje dźwięki z otoczenia, a dziecko zgaduje, co je wydaje. Zabawa uczy uważnego słuchania i rozbudowuje słownictwo.",
    childNeeds: {
      why: "Dzieci w wieku 3-5 lat intensywnie rozwijają percepcję słuchową, która jest fundamentem nauki mowy i czytania. Rozpoznawanie dźwięków ćwiczy koncentrację i buduje połączenia między zmysłami. To naturalna potrzeba eksploracji świata przez zmysły.",
      goals: [
        "Rozwijanie umiejętności rozróżniania dźwięków",
        "Wzbogacanie słownictwa opisującego otoczenie",
        "Ćwiczenie skupienia uwagi na jednym zmyśle"
      ],
      emotions: ["radość", "ekscytacja", "duma"]
    },
    steps: [
      "Powiedz dziecku, że zagracie w grę dźwięków i poproś, żeby zamknęło oczy.",
      "Wydaj dźwięk (klaskanie, stukanie w stół, szelest papieru, naśladowanie zwierzęcia).",
      "Dziecko zgaduje, co wydało ten dźwięk. Daj chwilę na zastanowienie.",
      "Zamieńcie się rolami - dziecko wydaje dźwięk, a Ty zgaduj."
    ],
    tip: "Zacznij od łatwych, wyraźnych dźwięków (klaskanie, pukanie) i stopniowo przechodź do trudniejszych. Przy młodszych dzieciach dawaj podpowiedzi.",
    whyItWorks:
      "Metoda Montessori kładzie nacisk na izolowanie zmysłów w nauce. Badania Marii Montessori (1912) wykazały, że ćwiczenia sensoryczne znacząco poprawiają zdolności percepcyjne i koncentrację u małych dzieci.",
    prep: ["zero prep"],
    phrases: [
      "Zamknij oczka i posłuchaj uważnie!",
      "Co to mogło być? Słyszałeś coś podobnego?",
      "Super! A teraz Twoja kolej - zaskocz mnie dźwiękiem!",
      "Brawo, masz fantastyczny słuch!"
    ],
    tellChild:
      "Zagramy w grę, w której będziesz detektywem dźwięków! Zamkniesz oczka, a ja wydam jakiś dźwięk, a Ty zgadniesz, co to było."
  },
  {
    id: 2,
    name: "Dotknij i zgadnij",
    type: "zgadywanka",
    place: ["dom", "poczekalnia"],
    competencies: ["sensoryka", "koncentracja", "słownictwo"],
    topics: ["codzienność", "natura"],
    age: [3, 4, 5],
    method: "SI",
    duration: "5-10 min",
    description:
      "Dziecko z zamkniętymi oczami dotyka przedmiotów i zgaduje, co to jest. Zabawa rozwija zmysł dotyku i wzbogaca słownictwo opisujące tekstury.",
    childNeeds: {
      why: "Integracja sensoryczna u dzieci 3-5 lat wymaga regularnej stymulacji dotykowej. Rozpoznawanie przedmiotów przez dotyk angażuje procesy poznawcze na wyższym poziomie niż rozpoznawanie wzrokowe. Dziecko uczy się nazywać to, co czuje - gładkie, szorstkie, miękkie, twarde.",
      goals: [
        "Rozwijanie percepcji dotykowej i stereognozji",
        "Budowanie słownictwa opisującego tekstury i kształty",
        "Ćwiczenie koncentracji bez wsparcia wzroku"
      ],
      emotions: ["ekscytacja", "radość", "duma"]
    },
    steps: [
      "Przygotuj 5-8 różnych przedmiotów o zróżnicowanych fakturach (piłeczka, szyszka, łyżka, skarpetka).",
      "Dziecko zamyka oczy lub zakładasz mu opaskę na oczy.",
      "Podawaj przedmioty jeden po drugim - dziecko dotyka i zgaduje, co to jest.",
      "Po każdym trafnym zgadnięciu porozmawiajcie o tym, jakie to było w dotyku."
    ],
    tip: "Wybieraj przedmioty bezpieczne i dobrze znane dziecku. Dla 3-latków zacznij od 3-4 łatwych obiektów.",
    whyItWorks:
      "Badania Jean Ayres (1972) nad integracją sensoryczną wykazały, że ćwiczenia dotykowe bez kontroli wzroku znacząco wspierają rozwój percepcji i przetwarzania sensorycznego u dzieci w wieku przedszkolnym.",
    prep: ["5-8 przedmiotów o różnych fakturach", "opaska na oczy (opcjonalnie)"],
    phrases: [
      "Dotknij powoli i opowiedz mi, co czujesz.",
      "Jakie to jest? Gładkie czy szorstkie?",
      "Doskonale! A teraz coś trudniejszego...",
      "Świetna robota! Masz bardzo czułe rączki."
    ],
    tellChild:
      "Zagramy w grę, w której Twoje rączki będą detektywami! Zamkniesz oczka i samym dotykiem zgadniesz, co trzymasz."
  },
  {
    id: 3,
    name: "Co znikło ze stołu?",
    type: "zgadywanka",
    place: ["dom", "restauracja"],
    competencies: ["pamięć", "koncentracja"],
    topics: ["codzienność", "jedzenie"],
    age: [4, 5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description:
      "Na stole leży kilka przedmiotów. Dziecko zapamiętuje je, odwraca się, a rodzic chowa jeden. Dziecko zgaduje, co zniknęło. Doskonałe ćwiczenie pamięci krótkotrwałej.",
    childNeeds: {
      why: "Pamięć robocza jest kluczowa dla nauki szkolnej i codziennego funkcjonowania. U dzieci 4-7 lat intensywnie dojrzewa kora przedczołowa odpowiedzialna za zapamiętywanie. Regularne ćwiczenia pamięci w formie zabawy budują tę zdolność naturalnie.",
      goals: [
        "Ćwiczenie pamięci krótkotrwałej i roboczej",
        "Rozwijanie uwagi na szczegóły",
        "Budowanie strategii zapamiętywania"
      ],
      emotions: ["skupienie", "ekscytacja", "duma"]
    },
    steps: [
      "Połóż na stole 5-8 przedmiotów (dla młodszych 4-5, dla starszych 7-8).",
      "Daj dziecku 20-30 sekund na zapamiętanie wszystkich przedmiotów.",
      "Dziecko zamyka oczy lub odwraca się, a Ty chowasz jeden przedmiot.",
      "Dziecko otwiera oczy i zgaduje, co zniknęło. Stopniowo chowaj 2-3 naraz."
    ],
    tip: "Zacznij od mniejszej liczby przedmiotów i zwiększaj trudność. Używaj przedmiotów, które dziecko zna i potrafi nazwać.",
    whyItWorks:
      "Zgodnie z metodą Montessori ćwiczenia pamięci wzrokowej wspierają rozwój koncentracji i porządkowania informacji. Badania Gathercole i Alloway (2008) potwierdzają, że trening pamięci roboczej u przedszkolaków przekłada się na lepsze wyniki w nauce.",
    prep: ["5-8 małych przedmiotów (zabawki, sztućce, owoce)"],
    phrases: [
      "Popatrz uważnie - zapamiętaj wszystko, co leży na stole!",
      "Coś zniknęło! Co to było?",
      "Blisko! Spróbuj jeszcze raz, przejrzyj w głowie, co widziałeś.",
      "Wow, masz pamięć jak słoń!"
    ],
    tellChild:
      "Zagrasz w grę magika! Na stole leżą przedmioty, a ja jeden wyczaruję. Musisz zapamiętać wszystko i powiedzieć mi, co zniknęło."
  },
  {
    id: 4,
    name: "Zgadnij zwierzę po ruchu",
    type: "zgadywanka",
    place: ["dom", "park", "poczekalnia"],
    competencies: ["myślenie logiczne", "słownictwo", "kreatywność"],
    topics: ["zwierzęta", "natura"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "10-15 min",
    description:
      "Jedna osoba pokazuje ruchem ciała wybrane zwierzę, a pozostali zgadują. Zabawa łączy ekspresję ciała z wiedzą o świecie przyrody i rozwija wyobraźnię ruchową.",
    childNeeds: {
      why: "Dzieci naturalnie uczą się przez ruch i naśladownictwo. Odtwarzanie sposobu poruszania się zwierząt wymaga obserwacji, analizy i kreatywnego przekładu wiedzy na ruch ciała. To angażuje jednocześnie ciało i umysł.",
      goals: [
        "Rozwijanie ekspresji ruchowej i świadomości ciała",
        "Wzbogacanie wiedzy przyrodniczej o zwierzętach",
        "Ćwiczenie myślenia logicznego przez analizę ruchu"
      ],
      emotions: ["śmiech", "radość", "ekscytacja"]
    },
    steps: [
      "Ustalcie, kto pierwszy pokazuje zwierzę. Wybierz zwierzę (szepnij je lub pomyśl).",
      "Pokazuj ruchem ciała, jak porusza się to zwierzę - bez wydawania dźwięków.",
      "Pozostali zgadują, jakie to zwierzę. Mogą zadawać pytania: duże czy małe? Ma futro?",
      "Kto odgadnie, pokazuje następne zwierzę."
    ],
    tip: "Przygotuj listę zwierząt na karteczkach, z których dziecko losuje - to dodaje elementu niespodzianki. Dla młodszych dzieci podpowiadaj cechy zwierzęcia.",
    whyItWorks:
      "Metoda Labana kładzie nacisk na analizę ruchu pod kątem ciężaru, przestrzeni, czasu i przepływu. Badania Labana (1948) wykazały, że ruchowa ekspresja wspiera rozwój poznawczy i emocjonalny dziecka.",
    prep: ["zero prep"],
    phrases: [
      "Pokaż mi to zwierzę całym ciałem - jak chodzi, jak je?",
      "Hmm, to coś dużego... czy małego?",
      "Fantastycznie pokazujesz! Prawie widzę to zwierzę!",
      "Teraz Twoja kolej - wylosuj karteczkę!"
    ],
    tellChild:
      "Będziemy odgadywać zwierzęta! Pokażesz mi ruchem ciała jakieś zwierzę, a ja będę zgadywać. Potem ja Ci pokażę."
  },
  {
    id: 5,
    name: "20 pytań: co to jest?",
    type: "zgadywanka",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["myślenie logiczne", "słownictwo", "koncentracja"],
    topics: ["codzienność", "jedzenie", "sport"],
    age: [5, 6, 7],
    method: "klasyczna",
    duration: "10-15 min",
    description:
      "Jedna osoba myśli o przedmiocie, a druga zadaje pytania zamknięte (tak/nie), aby odgadnąć. Maksymalnie 20 pytań. Klasyczna gra rozwijająca logiczne myślenie i strategię.",
    childNeeds: {
      why: "Zadawanie pytań zamkniętych wymaga od dziecka kategoryzowania świata i budowania strategii eliminacji. To fundament myślenia naukowego i dedukcyjnego. Gra uczy cierpliwości i planowania kolejnych kroków.",
      goals: [
        "Rozwijanie myślenia dedukcyjnego i kategoryzacji",
        "Ćwiczenie formułowania precyzyjnych pytań",
        "Budowanie strategii rozwiązywania problemów"
      ],
      emotions: ["skupienie", "ekscytacja", "duma"]
    },
    steps: [
      "Jedna osoba myśli o konkretnym przedmiocie i mówi: gotowe!",
      "Druga osoba zadaje pytania, na które można odpowiedzieć tylko tak lub nie.",
      "Liczcie pytania - macie maksymalnie 20, żeby odgadnąć.",
      "Po odgadnięciu (lub po 20 pytaniach) zamieńcie się rolami."
    ],
    tip: "Na początku pomóż dziecku formułować pytania ogólne (Czy to jest żywe? Czy można to jeść?), zamiast strzelać konkretnymi odpowiedziami.",
    whyItWorks:
      "Gra 20 pytań jest klasycznym narzędziem w psychologii poznawczej. Badania Mosher i Hornsby (1966) wykazały, że zdolność zadawania pytań ograniczających pole odpowiedzi rozwija się między 5 a 7 rokiem życia i jest wskaźnikiem dojrzałości myślenia.",
    prep: ["zero prep"],
    phrases: [
      "Myślę o czymś... Zadaj mi pytanie!",
      "Dobre pytanie! Tak, to jest duże.",
      "Zostało Ci 10 pytań - zastanów się, o co zapytać.",
      "Brawo! Odgadłeś w 12 pytaniach - to świetny wynik!"
    ],
    tellChild:
      "Pomyślę o jakiejś rzeczy, a Ty będziesz detektywem! Możesz zadać mi 20 pytań, ale tylko takich, na które odpowiem tak albo nie. Spróbuj zgadnąć!"
  },
  {
    id: 6,
    name: "Zgadnij emocję z miny",
    type: "zgadywanka",
    place: ["dom", "poczekalnia"],
    competencies: ["empatia", "rozpoznawanie emocji", "słownictwo"],
    topics: ["emocje", "codzienność"],
    age: [3, 4, 5, 6],
    method: "montessori",
    duration: "5-10 min",
    description:
      "Rodzic lub dziecko pokazuje miną emocję, a druga osoba zgaduje, co to za uczucie. Zabawa uczy rozpoznawania i nazywania emocji, co jest kluczowe dla rozwoju inteligencji emocjonalnej.",
    childNeeds: {
      why: "Rozpoznawanie emocji z wyrazu twarzy to fundament empatii i kompetencji społecznych. Dzieci w wieku 3-6 lat dopiero budują słownik emocjonalny. Nazywanie uczuć pomaga je regulować - badania pokazują, że samo nazwanie emocji obniża jej intensywność.",
      goals: [
        "Rozwijanie umiejętności rozpoznawania emocji u innych",
        "Budowanie słownictwa emocjonalnego",
        "Ćwiczenie empatii i wczuwania się w stany innych"
      ],
      emotions: ["radość", "śmiech", "bliskość"]
    },
    steps: [
      "Ustalcie zasady: jedna osoba pokazuje miną emocję, druga zgaduje.",
      "Zacznij od podstawowych emocji: radość, smutek, złość, strach, zaskoczenie.",
      "Osoba zgadująca nazywa emocję i opowiada, kiedy sama tak się czuła.",
      "Zamieńcie się rolami. Stopniowo dodawajcie trudniejsze emocje: duma, wstyd, ekscytacja."
    ],
    tip: "Nie oceniaj emocji jako dobrych lub złych. Każda emocja jest OK - ważne, co z nią robimy. To świetna okazja do rozmowy o uczuciach.",
    whyItWorks:
      "Badania Gottmana (1997) nad coachingiem emocjonalnym wykazały, że dzieci, których rodzice regularnie rozmawiają z nimi o emocjach, lepiej radzą sobie z regulacją emocji i mają wyższe kompetencje społeczne.",
    prep: ["zero prep"],
    phrases: [
      "Popatrz na moją twarz - jak myślisz, co czuję?",
      "A kiedy Ty się tak czujesz?",
      "Pokaż mi swoją najsmutniejszą minę!",
      "Świetnie! Potrafisz czytać emocje jak prawdziwy ekspert."
    ],
    tellChild:
      "Zagramy w grę min! Będziemy pokazywać sobie różne miny, a druga osoba zgadnie, jakie to uczucie. Gotowy?"
  },
  {
    id: 7,
    name: "Rysuj na plecach rodziców",
    type: "rysowanie",
    place: ["dom", "podróż"],
    competencies: ["sensoryka", "komunikacja", "koncentracja"],
    topics: ["codzienność", "litery", "kształty"],
    age: [3, 4, 5, 6, 7],
    method: "SI",
    duration: "5-10 min",
    description:
      "Dziecko rysuje palcem kształty lub litery na plecach rodzica, a rodzic zgaduje. Potem zamiana ról. Zabawa doskonale stymuluje zmysł dotyku i ćwiczy komunikację niewerbalną.",
    childNeeds: {
      why: "Rysowanie na plecach angażuje propriocepcję i zmysł dotyku jednocześnie. Dla dziecka rysującego to ćwiczenie motoryki małej i planowania ruchów, a dla odbierającego - dekodowania informacji dotykowej. Zabawa buduje też bliskość fizyczną z rodzicem.",
      goals: [
        "Stymulowanie percepcji dotykowej i proprioceptywnej",
        "Ćwiczenie motoryki małej i precyzji ruchów",
        "Budowanie komunikacji niewerbalnej i bliskości"
      ],
      emotions: ["bliskość", "śmiech", "radość"]
    },
    steps: [
      "Usiądźcie wygodnie - dziecko za Twoimi plecami.",
      "Dziecko rysuje palcem na Twoich plecach prosty kształt (koło, trójkąt, serce).",
      "Zgaduj, co narysowało. Jeśli nie zgadłeś - rysuje jeszcze raz, wolniej.",
      "Zamieńcie się: Ty rysujesz na plecach dziecka, ono zgaduje."
    ],
    tip: "Zacznij od prostych, dużych kształtów. Starsze dzieci mogą rysować litery lub proste słowa. Ważne, żeby rysować powoli i wyraźnie.",
    whyItWorks:
      "Terapia integracji sensorycznej (Ayres, 1972) wskazuje, że stymulacja dotykowa pleców aktywuje system proprioceptywny i wspiera integrację bodźców sensorycznych, co jest fundamentem dla rozwoju koordynacji ruchowej.",
    prep: ["zero prep"],
    phrases: [
      "Narysuj mi coś na plecach - zgadnę!",
      "Hmm, czuję coś okrągłego... to słońce?",
      "Rysuj powoli, żebym dobrze poczuł każdą linię.",
      "Teraz ja narysuję Ci coś na plecach - gotowy?"
    ],
    tellChild:
      "Zagramy w rysowanie na plecach! Narysujesz mi coś palcem na plecach, a ja zgadnę co to. Potem ja Ci coś narysuję!"
  },
  {
    id: 8,
    name: "Dokończ rysunek",
    type: "rysowanie",
    place: ["dom", "restauracja", "poczekalnia"],
    competencies: ["kreatywność", "wyobraźnia", "motoryka mała"],
    topics: ["codzienność", "zwierzęta", "kształty"],
    age: [3, 4, 5, 6],
    method: "orff",
    duration: "10-15 min",
    description:
      "Rodzic rysuje początek rysunku (np. koło, falę, zygzak), a dziecko dokańcza go w dowolny sposób. Zabawa rozwija kreatywność i daje dziecku poczucie sprawczości twórczej.",
    childNeeds: {
      why: "Dzieci potrzebują otwartych zadań twórczych, które nie mają jednej poprawnej odpowiedzi. Dokańczanie rysunku uczy, że z prostego kształtu może powstać nieskończenie wiele obrazów. To buduje elastyczność myślenia i pewność twórczą.",
      goals: [
        "Rozwijanie kreatywności i myślenia dywergencyjnego",
        "Ćwiczenie motoryki małej i koordynacji oko-ręka",
        "Budowanie pewności siebie w tworzeniu"
      ],
      emotions: ["radość", "duma", "flow"]
    },
    steps: [
      "Narysuj na kartce prosty element: koło, linię falistą, zygzak lub kilka kropek.",
      "Podaj kartkę dziecku i powiedz: dokończ ten rysunek - niech powstanie coś fajnego!",
      "Nie podpowiadaj i nie oceniaj w trakcie rysowania. Pozwól dziecku tworzyć.",
      "Gdy skończy, zapytaj o rysunek: co to jest? Opowiedz mi o tym!"
    ],
    tip: "Nigdy nie mów, że rysunek jest zły lub dziwny. Każda interpretacja jest dobra. Zapytaj o historię rysunku - dzieci chętnie opowiadają.",
    whyItWorks:
      "Koncepcja Orffa podkreśla znaczenie swobodnej ekspresji twórczej. Badania Guilforda (1967) nad myśleniem dywergencyjnym wykazały, że otwarte zadania twórcze budują zdolność generowania wielu rozwiązań jednego problemu.",
    prep: ["kartka", "kredki lub długopis"],
    phrases: [
      "Patrz, narysowałem coś - jak myślisz, co z tego może powstać?",
      "Dokończ ten rysunek tak, jak chcesz! Nie ma złych odpowiedzi.",
      "Wow, nie spodziewałem się tego! Opowiedz mi o swoim rysunku.",
      "Pięknie! A może teraz Ty zaczniesz, a ja dokończę?"
    ],
    tellChild:
      "Zaczynam rysunek, ale go nie kończę - to Twoje zadanie! Dokończ go tak, jak chcesz. Może z tego kółka powstanie robot, a może pizza?"
  },
  {
    id: 9,
    name: "Rysuj z zamkniętymi oczami",
    type: "rysowanie",
    place: ["dom", "poczekalnia"],
    competencies: ["motoryka mała", "wyobraźnia", "koncentracja"],
    topics: ["codzienność", "kształty"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "5-10 min",
    description:
      "Dziecko rysuje wybrany przedmiot z zamkniętymi oczami, polegając wyłącznie na wyobraźni przestrzennej i pamięci ruchowej. Śmieszne efekty gwarantowane!",
    childNeeds: {
      why: "Rysowanie bez kontroli wzroku zmusza mózg do korzystania z pamięci proprioceptywnej i wyobraźni przestrzennej. To wyzwanie, które jednocześnie bawi i rozwija. Dziecko uczy się, że niedoskonałość jest OK i że warto próbować nowych rzeczy.",
      goals: [
        "Rozwijanie wyobraźni przestrzennej i pamięci ruchowej",
        "Ćwiczenie akceptacji niedoskonałości",
        "Wzmacnianie koordynacji ręka-umysł bez wsparcia wzroku"
      ],
      emotions: ["śmiech", "odwaga", "radość"]
    },
    steps: [
      "Daj dziecku kartkę i kredkę. Ustalcie, co będzie rysować (np. dom, kota, samochód).",
      "Dziecko zamyka oczy i rysuje wybrany przedmiot na pamięć.",
      "Po skończeniu otwiera oczy i razem oglądacie efekt - zwykle jest bardzo zabawny!",
      "Spróbuj sam z zamkniętymi oczami - dziecko zobaczy, że dorosłym też wychodzą śmieszne rysunki."
    ],
    tip: "To nie konkurs rysowania! Chodzi o zabawę i śmiech z efektów. Rysuj razem z dzieckiem - pokażesz, że niedoskonałość jest OK.",
    whyItWorks:
      "Metoda Labana zwraca uwagę na świadomość ciała w przestrzeni. Rysowanie bez wzroku aktywuje inne ścieżki neuronalne niż typowe rysowanie, co wspiera plastyczność mózgu (Kellogg, 1969).",
    prep: ["kartka", "kredki"],
    phrases: [
      "Zamknij oczka i narysuj... kota!",
      "Nie podglądaj! Ręka pamięta lepiej niż myślisz.",
      "Otwórz oczy! Ha, zobaczmy co wyszło!",
      "Teraz moja kolej - zobaczysz, jakie śmieszne wyjdzie mi."
    ],
    tellChild:
      "Spróbujesz narysować coś z zamkniętymi oczami? To mega śmieszna zabawa! Twoja ręka będzie rysować z pamięci, bez patrzenia."
  },
  {
    id: 10,
    name: "Kolektywna kartka",
    type: "rysowanie",
    place: ["dom", "restauracja"],
    competencies: ["współpraca", "kreatywność", "motoryka mała"],
    topics: ["codzienność", "natura"],
    age: [3, 4, 5, 6, 7],
    method: "klasyczna",
    duration: "10-15 min",
    description:
      "Każdy rysuje fragment na wspólnej kartce - po 30 sekundach kartka przechodzi do następnej osoby. Na końcu powstaje wspólne dzieło sztuki. Świetna zabawa dla całej rodziny.",
    childNeeds: {
      why: "Współtworzenie uczy dziecko współpracy, elastyczności i akceptacji cudzych pomysłów. Dziecko doświadcza, że wspólne dzieło jest bogatsze niż indywidualne. To buduje kompetencje społeczne i otwartość na innych.",
      goals: [
        "Rozwijanie umiejętności współpracy i dzielenia się przestrzenią",
        "Ćwiczenie elastyczności twórczej i adaptacji do cudzego stylu",
        "Budowanie poczucia wspólnoty rodzinnej przez wspólne tworzenie"
      ],
      emotions: ["radość", "śmiech", "bliskość"]
    },
    steps: [
      "Daj każdej osobie jedną kartkę i kredki. Każdy zaczyna rysować cokolwiek.",
      "Po 30 sekundach (lub minucie) powiedz: zamiana! Każdy przekazuje kartkę w lewo.",
      "Kontynuujcie rysowanie na otrzymanej kartce - dorysowijcie, co chcecie.",
      "Po 4-5 rundach obejrzyjcie razem wszystkie kartki i opowiedzcie, co widzicie."
    ],
    tip: "Nie ustalajcie tematu - niech kartki ewoluują organicznie. Im więcej osób bierze udział, tym ciekawsze efekty. Można też robić to z jedną wspólną kartką.",
    whyItWorks:
      "Wspólne tworzenie wspiera rozwój teorii umysłu (Wellman, 1990) - dziecko uczy się brać pod uwagę perspektywę drugiej osoby i budować na cudzych pomysłach, co jest fundamentem współpracy społecznej.",
    prep: ["kartki", "kredki lub flamastry"],
    phrases: [
      "Każdy zaczyna rysować, co chce! Za chwilę zamienimy kartki.",
      "Zamiana! Dorysuj coś do tego, co widzisz.",
      "Zobaczmy, co nam wyszło! Kto opowie historię tego rysunku?",
      "Super współpraca! Razem stworzyliśmy coś wyjątkowego."
    ],
    tellChild:
      "Będziemy rysować razem! Każdy zacznie na swojej kartce, a potem będziemy je zamieniać i dorysowywać. Zobaczymy, co nam wyjdzie!"
  },
  {
    id: 11,
    name: "Kalambury ruchowe",
    type: "kalambury",
    place: ["dom", "park", "poczekalnia"],
    competencies: ["ekspresja ciała", "kreatywność", "współpraca"],
    topics: ["zwierzęta", "sport", "codzienność"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "10-15 min",
    description:
      "Klasyczne kalambury, ale pokazywane wyłącznie ruchem ciała - bez słów i dźwięków. Świetna zabawa grupowa, która rozwija ekspresję ruchową i umiejętność komunikacji bez słów.",
    childNeeds: {
      why: "Komunikacja niewerbalna stanowi ponad 60% ludzkiej komunikacji. Dzieci, które ćwiczą ekspresję ciała, lepiej rozumieją mowę ciała innych i potrafią skuteczniej wyrażać siebie. Kalambury dają bezpieczną przestrzeń do bycia w centrum uwagi.",
      goals: [
        "Rozwijanie komunikacji niewerbalnej i ekspresji ciała",
        "Ćwiczenie kreatywnego myślenia pod presją czasu",
        "Budowanie pewności siebie w występowaniu przed innymi"
      ],
      emotions: ["śmiech", "ekscytacja", "odwaga"]
    },
    steps: [
      "Przygotujcie karteczki z hasłami dopasowanymi do wieku (zwierzęta, zawody, czynności).",
      "Pierwsza osoba losuje karteczkę i pokazuje hasło ruchem - bez słów i dźwięków.",
      "Pozostali zgadują. Kto odgadnie, pokazuje następne hasło.",
      "Dla starszych dzieci dodajcie limit czasu (1 minuta na hasło)."
    ],
    tip: "Przygotuj hasła o różnym stopniu trudności. Młodsze dzieci mogą wydawać dźwięki. Zachęcaj i chwal odwagę pokazywania, nie tylko trafność zgadywania.",
    whyItWorks:
      "Analiza ruchu Labana (1948) wykazała, że świadome wykorzystanie ciała do komunikacji rozwija inteligencję kinestetyczną. Badania Gardnera (1983) potwierdzają, że ćwiczenie różnych form ekspresji wspiera wieloraką inteligencję.",
    prep: ["karteczki z hasłami"],
    phrases: [
      "Wylosuj karteczkę i pokaż to ciałem!",
      "Pamiętaj - ani słowa, ani dźwięku!",
      "Brawo za odwagę! Świetnie to pokazałeś!",
      "Prawie! Pokaż jeszcze raz, może inaczej?"
    ],
    tellChild:
      "Zagramy w kalambury! Wylosujesz karteczkę i pokażesz ruchem, co na niej jest - ale nie wolno mówić ani wydawać dźwięków. My będziemy zgadywać!"
  },
  {
    id: 12,
    name: "Kalambury z dźwiękiem",
    type: "kalambury",
    place: ["dom", "poczekalnia"],
    competencies: ["ekspresja", "słuchanie", "kreatywność"],
    topics: ["zwierzęta", "natura", "muzyka"],
    age: [3, 4, 5, 6],
    method: "orff",
    duration: "5-10 min",
    description:
      "Wariant kalamburów, w którym hasło pokazuje się wyłącznie za pomocą dźwięków - głosem, klaskaniem, tupaniem. Bez słów i gestów. Zabawa rozwija ekspresję dźwiękową i kreatywność muzyczną.",
    childNeeds: {
      why: "Tworzenie i naśladowanie dźwięków to naturalny sposób ekspresji dzieci. Zabawa dźwiękami rozwija percepcję słuchową, poczucie rytmu i kreatywność. Dziecko odkrywa, ile informacji można przekazać bez słów, samym dźwiękiem.",
      goals: [
        "Rozwijanie ekspresji dźwiękowej i muzycznej",
        "Ćwiczenie kreatywnego wykorzystania głosu i ciała jako instrumentu",
        "Budowanie uważnego słuchania"
      ],
      emotions: ["śmiech", "radość", "ekscytacja"]
    },
    steps: [
      "Ustalcie zasady: pokazujemy hasło TYLKO dźwiękiem - głosem, klaskaniem, tupaniem. Bez słów i gestów.",
      "Pierwsza osoba naśladuje dźwięk hasła (np. mruczenie kota, odgłos deszczu, dźwięk samochodu).",
      "Pozostali zgadują, co to za dźwięk. Można dawać podpowiedzi: zwierzę? pogoda?",
      "Kto odgadnie, robi następny dźwięk."
    ],
    tip: "Dla młodszych dzieci zacznij od łatwych dźwięków zwierząt. Starsze mogą naśladować dźwięki abstrakcyjne: burza, morze, las.",
    whyItWorks:
      "Metoda Orffa opiera się na naturalnej muzyczności dziecka. Badania Orffa (1930-1950) wykazały, że eksploracja dźwięków wspiera rozwój percepcji słuchowej i kreatywności, będąc fundamentem edukacji muzycznej.",
    prep: ["zero prep"],
    phrases: [
      "Zrób dźwięk tego, co wylosowałeś - ale bez słów!",
      "Hmm, słyszę coś ciekawego... to zwierzę?",
      "Super dźwięk! Prawie jakbym tam był!",
      "Kto chce teraz pokazać dźwiękiem?"
    ],
    tellChild:
      "Zagramy w dźwiękowe kalambury! Będziesz robić dźwięki głosem, rączkami, nóżkami - a ja będę zgadywać, co to jest. Ale słowa to nie dźwięki - tych nie wolno!"
  },
  {
    id: 13,
    name: "Zamrożone zwierzę",
    type: "kalambury",
    place: ["dom", "park"],
    competencies: ["ekspresja ciała", "równowaga", "koncentracja"],
    topics: ["zwierzęta", "natura"],
    age: [3, 4, 5, 6],
    method: "sherborne",
    duration: "5-10 min",
    description:
      "Dziecko porusza się jak wybrane zwierzę, a na hasło zamiera w bezruchu jak posąg. Pozostali zgadują, jakie to zwierzę po zamrożonej pozycji. Zabawa łączy ruch z samokontrolą.",
    childNeeds: {
      why: "Umiejętność hamowania ruchu (kontrola inhibicyjna) jest jedną z kluczowych funkcji wykonawczych mózgu. Dzieci 3-6 lat intensywnie ją rozwijają. Zabawa typu stop-start ćwiczy tę zdolność w bezpieczny, zabawny sposób.",
      goals: [
        "Rozwijanie kontroli inhibicyjnej i samokontroli ruchowej",
        "Ćwiczenie równowagi statycznej w różnych pozycjach",
        "Budowanie ekspresji ciała i świadomości postawy"
      ],
      emotions: ["śmiech", "radość", "skupienie"]
    },
    steps: [
      "Dziecko wybiera zwierzę (lub losuje) i zaczyna poruszać się jak to zwierzę.",
      "Gdy krzykniesz: zamarzam! - dziecko zastyga w bezruchu jak posąg.",
      "Pozostali zgadują, jakie to zwierzę, patrząc na zamrożoną pozę.",
      "Po odgadnięciu kolejna osoba wybiera swoje zwierzę."
    ],
    tip: "Podkreślaj, że zamrożenie musi być naprawdę nieruchome - żadnych drgań! To ćwiczy samokontrolę. Młodsze dzieci mogą zamierać krócej (5 sekund).",
    whyItWorks:
      "Metoda Ruchu Rozwijającego Sherborne kładzie nacisk na kontrolę ciała i świadomość przestrzeni. Badania Diamond (2012) wykazały, że gry wymagające hamowania ruchów (stop-start) znacząco wspierają rozwój funkcji wykonawczych u przedszkolaków.",
    prep: ["zero prep"],
    phrases: [
      "Poruszaj się jak Twoje zwierzę... i... ZAMARZAM!",
      "Ani drgnij! Jesteś posągiem!",
      "Hmm, ta poza wygląda jak... lew?",
      "Super zamrożenie! Byłeś nieruchomy jak skała!"
    ],
    tellChild:
      "Będziesz poruszać się jak zwierzę, a jak krzyknę zamarzam - musisz zastygać jak posąg! My zgadniemy, jakie to zwierzę."
  },
  {
    id: 14,
    name: "Zawód w ruchu",
    type: "kalambury",
    place: ["dom", "park", "poczekalnia"],
    competencies: ["ekspresja ciała", "myślenie logiczne", "słownictwo"],
    topics: ["praca", "codzienność"],
    age: [5, 6, 7],
    method: "laban",
    duration: "10-15 min",
    description:
      "Jedna osoba pokazuje ruchem ciała wybrany zawód, a pozostali zgadują. Zabawa wzbogaca wiedzę o świecie dorosłych i rozwija ekspresję ruchową.",
    childNeeds: {
      why: "Dzieci w wieku 5-7 lat intensywnie interesują się światem dorosłych i zawodami. Pokazywanie zawodu ruchem wymaga analizy: co ta osoba robi, jakich narzędzi używa, jak się porusza? To buduje myślenie analityczne i wiedzę o społeczeństwie.",
      goals: [
        "Wzbogacanie wiedzy o zawodach i rolach społecznych",
        "Rozwijanie ekspresji ruchowej i pantomimy",
        "Ćwiczenie myślenia analitycznego i obserwacji"
      ],
      emotions: ["ekscytacja", "śmiech", "duma"]
    },
    steps: [
      "Przygotujcie karteczki z zawodami: lekarz, strażak, kucharz, nauczyciel, pilot, fryzjer.",
      "Pierwsza osoba losuje karteczkę i pokazuje zawód ruchem - bez słów.",
      "Pozostali zgadują. Można zadawać pytania zamknięte: czy pracuje na zewnątrz?",
      "Kto odgadnie, losuje następny zawód."
    ],
    tip: "Wybieraj zawody, które dziecko zna z codziennego życia. To świetna okazja do rozmowy: co robi lekarz? Dlaczego strażak jest ważny?",
    whyItWorks:
      "Metoda Labana analizuje ruch pod kątem jakości (ciężar, czas, przestrzeń). Pokazywanie zawodów wymaga od dziecka syntezy wiedzy o ruchu zawodowym, co wspiera rozwój poznawczy zgodnie z teorią schematów Piageta (1952).",
    prep: ["karteczki z nazwami zawodów"],
    phrases: [
      "Pokaż nam ten zawód! Co ta osoba robi w pracy?",
      "Hmm, używa czegoś okrągłego... to kucharz?",
      "Świetne pokazywanie! Dokładnie tak robi fryzjer!",
      "A jak myślisz, co jest najfajniejsze w tym zawodzie?"
    ],
    tellChild:
      "Zagramy w zgadywanie zawodów! Wylosujesz karteczkę i pokażesz ruchem, co robi ta osoba w pracy. My będziemy zgadywać!"
  },
  {
    id: 15,
    name: "Tunel ze stołków",
    type: "ruch",
    place: ["dom"],
    competencies: ["motoryka duża", "koordynacja", "śmiałość"],
    topics: ["sport", "przygoda"],
    age: [3, 4, 5],
    method: "sherborne",
    duration: "10-15 min",
    description:
      "Z krzeseł i koców powstaje tunel, przez który dziecko przechodzi, pełza lub się czołga. Prosta budowla, która staje się wielką przygodą! Rozwija motorykę dużą i daje poczucie osiągnięcia.",
    childNeeds: {
      why: "Czołganie i pełzanie w ograniczonej przestrzeni stymuluje układ proprioceptywny i przedsionkowy. Dzieci 3-5 lat potrzebują takich wyzwań motorycznych, żeby budować schemat ciała i przestrzenną orientację. Pokonanie tunelu daje poczucie odwagi i sprawstwa.",
      goals: [
        "Rozwijanie motoryki dużej i koordynacji ruchowej",
        "Stymulowanie układu proprioceptywnego przez ograniczoną przestrzeń",
        "Budowanie odwagi i poczucia sprawczości"
      ],
      emotions: ["ekscytacja", "odwaga", "duma"]
    },
    steps: [
      "Ustaw 3-4 krzesła w rząd i przykryj je kocem lub prześcieradłem - powstanie tunel.",
      "Pokaż dziecku wejście i powiedz, że na końcu czeka przygoda (maskotka, naklejka).",
      "Dziecko przechodzi przez tunel - może czołgać się, pełzać lub iść na czworaka.",
      "Rozbudujcie tunel: dodajcie zakręty, poduszki jako przeszkody, latarkę na końcu."
    ],
    tip: "Jeśli dziecko się boi ciasnej przestrzeni - zacznij od krótkiego tunelu z jednego krzesła. Siedź przy wyjściu i zachęcaj. Nigdy nie zmuszaj.",
    whyItWorks:
      "Metoda Sherborne Developmental Movement podkreśla znaczenie doświadczeń ciała w relacji z przestrzenią. Badania Sherborne (1990) wykazały, że pokonywanie wyzwań motorycznych w bezpiecznym środowisku buduje pewność siebie i zaufanie do własnego ciała.",
    prep: ["3-4 krzesła", "koc lub prześcieradło", "poduszki (opcjonalnie)"],
    phrases: [
      "Zbudowaliśmy tajemny tunel! Odważysz się przejść?",
      "Pełzaj powoli - na końcu czeka niespodzianka!",
      "Brawo, przeszedłeś! Jesteś odważny jak lew!",
      "Chcesz jeszcze raz? Może tym razem z latarką?"
    ],
    tellChild:
      "Zbudowaliśmy prawdziwy tunel z krzeseł! Twoim zadaniem jest przejść przez niego na czworaka. Na końcu czeka niespodzianka!"
  },
  {
    id: 16,
    name: "Rzeka z poduszek",
    type: "ruch",
    place: ["dom"],
    competencies: ["równowaga", "motoryka duża", "wyobraźnia"],
    topics: ["natura", "przygoda"],
    age: [3, 4, 5, 6],
    method: "SI",
    duration: "10-15 min",
    description:
      "Poduszki rozłożone na podłodze stają się kamieniami na rzece. Dziecko skacze z poduszki na poduszkę, nie dotykając podłogi (lawy!). Fantastyczne ćwiczenie równowagi i planowania ruchów.",
    childNeeds: {
      why: "Skakanie po niestabilnym podłożu intensywnie stymuluje układ przedsionkowy i proprioceptywny. Dziecko musi planować każdy krok, utrzymywać równowagę i kontrolować siłę skoku. To kompleksowe ćwiczenie, które angażuje całe ciało i mózg jednocześnie.",
      goals: [
        "Rozwijanie równowagi dynamicznej i statycznej",
        "Stymulowanie integracji sensorycznej przez niestabilne podłoże",
        "Ćwiczenie planowania motorycznego i koordynacji"
      ],
      emotions: ["ekscytacja", "odwaga", "radość"]
    },
    steps: [
      "Rozłóż poduszki na podłodze w nieregularnych odstępach - to kamienie na rzece.",
      "Podłoga to rzeka z krokodylami (lub lawa!) - nie wolno jej dotykać!",
      "Dziecko skacze z poduszki na poduszkę, próbując przejść na drugą stronę.",
      "Zwiększaj trudność: większe odstępy, mniejsze poduszki, skakanie na jednej nodze."
    ],
    tip: "Zacznij od bliskich odstępów i dużych poduszek. Bądź obok młodszego dziecka na wypadek utraty równowagi. Możesz trzymać za rękę.",
    whyItWorks:
      "Terapia integracji sensorycznej (Ayres, 1972) wskazuje, że ćwiczenia na niestabilnym podłożu aktywują układ przedsionkowy, co jest kluczowe dla rozwoju równowagi, koordynacji ruchowej i uwagi.",
    prep: ["5-8 poduszek różnej wielkości"],
    phrases: [
      "Uważaj, podłoga to rzeka z krokodylami! Skacz po kamieniach!",
      "Super skok! Jeszcze trzy kamienie do drugiego brzegu!",
      "Ups, prawie wpadłeś! Spróbuj jeszcze raz.",
      "Udało się! Przeszedłeś całą rzekę! Brawo!"
    ],
    tellChild:
      "Podłoga zamieniła się w rzekę, a poduszki to kamienie! Musisz przejść na drugą stronę, skacząc po kamieniach. Nie dotykaj wody!"
  },
  {
    id: 17,
    name: "Echo ruchowe",
    type: "ruch",
    place: ["dom", "park", "poczekalnia"],
    competencies: ["naśladowanie", "koncentracja", "motoryka duża"],
    topics: ["codzienność", "sport"],
    age: [3, 4, 5],
    method: "orff",
    duration: "5-10 min",
    description:
      "Rodzic wykonuje ruch, a dziecko powtarza go jak echo. Potem zamiana - dziecko prowadzi, rodzic naśladuje. Prosta zabawa, która nie wymaga żadnych rekwizytów.",
    childNeeds: {
      why: "Naśladowanie ruchów to podstawowy mechanizm uczenia się u małych dzieci. Neurony lustrzane aktywują się zarówno przy wykonywaniu, jak i obserwowaniu ruchu. Gdy dziecko prowadzi, ćwiczy inicjatywę i kreatywność ruchową.",
      goals: [
        "Rozwijanie zdolności naśladowania i koordynacji ruchowej",
        "Ćwiczenie uwagi i szybkości reakcji",
        "Budowanie inicjatywy ruchowej przez zamianę ról"
      ],
      emotions: ["radość", "śmiech", "bliskość"]
    },
    steps: [
      "Stańcie naprzeciwko siebie. Wyjaśnij: ja zrobię ruch, a Ty powtórzysz jak echo!",
      "Zacznij od prostych ruchów: klaśnij, podskocz, dotknij nosa, machnij ręką.",
      "Stopniowo kombinuj ruchy: klaśnij i podskocz, machnij ręką i tupnij.",
      "Zamieńcie się: teraz dziecko pokazuje ruchy, a Ty je naśladujesz."
    ],
    tip: "Zacznij powoli i stopniowo przyspieszaj - to dodaje zabawie dynamiki. Celowo popełniaj błędy, gdy dziecko prowadzi - to daje mu poczucie sprawczości.",
    whyItWorks:
      "Metoda Orffa wykorzystuje naśladownictwo jako fundament muzyczno-ruchowej edukacji. Badania Rizzolattiego (1996) nad neuronami lustrzanymi wykazały, że naśladowanie ruchów aktywuje te same obszary mózgu co ich wykonywanie, wspierając uczenie się.",
    prep: ["zero prep"],
    phrases: [
      "Patrz na mnie i powtarzaj! Jesteś moim echem!",
      "Szybciej! Klaśnij-podskocz-klaśnij!",
      "Teraz Ty jesteś szefem - pokaż mi, co mam robić!",
      "Oj, pomyliłem się! Pokaż jeszcze raz!"
    ],
    tellChild:
      "Zagramy w echo! Ja zrobię jakiś ruch, a Ty powtórzysz dokładnie tak samo. Potem Ty będziesz pokazywać, a ja będę Twoim echem!"
  },
  {
    id: 18,
    name: "Posąg i rzeźbiarz",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["równowaga", "zaufanie", "współpraca"],
    topics: ["sztuka", "codzienność"],
    age: [5, 6, 7],
    method: "sherborne",
    duration: "10-15 min",
    description:
      "Jedna osoba jest posągiem (stoi nieruchomo), a druga rzeźbiarzem - delikatnie ustawia ręce, nogi i głowę posągu w wybraną pozę. Zabawa buduje zaufanie i świadomość ciała.",
    childNeeds: {
      why: "Bycie posągiem wymaga zaufania do drugiej osoby i oddania kontroli nad swoim ciałem. To głębokie doświadczenie relacyjne. Dziecko jako rzeźbiarz ćwiczy delikatność, planowanie i wyobraźnię przestrzenną.",
      goals: [
        "Budowanie zaufania w relacji rodzic-dziecko",
        "Rozwijanie świadomości ciała i równowagi statycznej",
        "Ćwiczenie delikatności dotyku i planowania przestrzennego"
      ],
      emotions: ["bliskość", "skupienie", "duma"]
    },
    steps: [
      "Ustalcie role: kto jest posągiem (stoi nieruchomo), kto rzeźbiarzem.",
      "Rzeźbiarz delikatnie układa posąg w wymyśloną pozę - przesuwa ręce, nogi, głowę.",
      "Posąg trzyma pozę przez 10-15 sekund. Rzeźbiarz mówi, jaki to posąg (np. bohater, tancerz).",
      "Zamieńcie się rolami. Porównajcie posągi - który był trudniejszy do utrzymania?"
    ],
    tip: "Podkreśl zasadę delikatności: rzeźbiarz przesuwa ciało posągu powoli i łagodnie. Jeśli posąg mówi stop - natychmiast przestajemy.",
    whyItWorks:
      "Metoda Sherborne (1990) opisuje relacje z ciałem drugiej osoby jako fundament budowania zaufania i bezpieczeństwa. Zabawa posąg-rzeźbiarz aktywuje zarówno propriocepcję, jak i kompetencje społeczne dziecka.",
    prep: ["zero prep"],
    phrases: [
      "Stoisz nieruchomo jak posąg - ja Cię urzeźbię!",
      "Delikatnie przesuwam Twoją rękę... i teraz stoisz jak bohater!",
      "Wow, jaki piękny posąg! Potrafisz go utrzymać?",
      "Teraz Ty jesteś rzeźbiarzem - urzeźb mnie!"
    ],
    tellChild:
      "Zagramy w rzeźbiarza i posąg! Jedna osoba stoi nieruchomo, a druga delikatnie układa ją w pozę - jak prawdziwy artysta. Kto chce być pierwszy posągiem?"
  },
  {
    id: 19,
    name: "Spacer jak zwierzę",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["motoryka duża", "wyobraźnia", "sensoryka"],
    topics: ["zwierzęta", "natura"],
    age: [3, 4, 5],
    method: "SI",
    duration: "5-10 min",
    description:
      "Dziecko chodzi po pokoju lub parku naśladując sposób poruszania się różnych zwierząt: misia, żaby, węża, kraba. Każdy wzorzec ruchowy angażuje inne grupy mięśni i zmysły.",
    childNeeds: {
      why: "Naśladowanie ruchów zwierząt to doskonałe ćwiczenie proprioceptywne, które angażuje całe ciało w nietypowy sposób. Chodzenie jak krab ćwiczy koordynację bilateralną, skakanie jak żaba wzmacnia nogi, a pełzanie jak wąż stymuluje układ dotykowy.",
      goals: [
        "Rozwijanie różnych wzorców ruchowych (pełzanie, skakanie, czołganie)",
        "Stymulowanie integracji sensorycznej przez nietypowe pozycje ciała",
        "Budowanie wiedzy o świecie zwierząt przez doświadczenie ruchowe"
      ],
      emotions: ["radość", "śmiech", "ekscytacja"]
    },
    steps: [
      "Zaproponuj dziecku pierwsze zwierzę: chodź jak niedźwiedź! (na czworakach, ciężko).",
      "Po 30 sekundach zmieńcie zwierzę: teraz jesteś żabą! (skacz z przysiadu).",
      "Kolejne zwierzęta: krab (bokiem), wąż (pełzanie na brzuchu), flaming (na jednej nodze).",
      "Niech dziecko wymyśli własne zwierzę - pokaże, a Ty zgadniesz i naśladujesz."
    ],
    tip: "Upewnij się, że podłoże jest bezpieczne (bez ostrych krawędzi). Baw się razem z dzieckiem - to motywuje i daje dużo śmiechu.",
    whyItWorks:
      "Badania Ayres (1979) wykazały, że różnorodne wzorce ruchowe (szczególnie pełzanie, skakanie, ruch bilateralny) są fundamentem integracji sensorycznej i wspierają dojrzewanie układu nerwowego u małych dzieci.",
    prep: ["zero prep"],
    phrases: [
      "Teraz jesteś niedźwiedziem! Pokaż, jak chodzi po lesie!",
      "Hop, hop! Żaba skacze do stawu!",
      "Krab chodzi bokiem - potrafisz tak?",
      "Wymyśl swoje zwierzę! Jakie będzie?"
    ],
    tellChild:
      "Będziemy chodzić jak zwierzęta! Najpierw jak miś, potem jak żaba, a potem jak krab. Gotowy na zwierzęcy spacer?"
  },
  {
    id: 20,
    name: "Balonowy taniec",
    type: "ruch",
    place: ["dom"],
    competencies: ["motoryka duża", "rytm", "koordynacja"],
    topics: ["muzyka", "codzienność"],
    age: [3, 4, 5, 6, 7],
    method: "orff",
    duration: "10-15 min",
    description:
      "Dziecko tańczy z balonem przy muzyce, starając się nie pozwolić mu spaść na podłogę. Można podbijać rękami, głową, kolanami. Przy stopie muzyki - balon zamiera w powietrzu (łapiemy go).",
    childNeeds: {
      why: "Utrzymywanie balona w powietrzu przy muzyce łączy koordynację oko-ręka z poczuciem rytmu. Balon spada powoli, co daje dziecku czas na reakcję i buduje poczucie sukcesu. To idealne ćwiczenie dla dzieci w każdym wieku.",
      goals: [
        "Rozwijanie koordynacji oko-ręka i całego ciała",
        "Ćwiczenie poczucia rytmu i synchronizacji z muzyką",
        "Budowanie motoryki dużej w radosnej, muzycznej atmosferze"
      ],
      emotions: ["radość", "ekscytacja", "flow"]
    },
    steps: [
      "Nadmuchaj balon i włącz ulubioną muzykę dziecka.",
      "Podrzuć balon w górę - dziecko tańczy i podbija go, nie pozwalając spaść na ziemię.",
      "Gdy muzyka się zatrzymuje - dziecko łapie balon i zamiera w bezruchu.",
      "Dodajcie wyzwania: podbijaj tylko głową, tylko kolanami, tylko lewą ręką."
    ],
    tip: "Balon to bezpieczna alternatywa dla piłki - wolno spada, nie boli i nie niszczy. Idealny do zabawy w domu. Miej zapasowe balony - pękają!",
    whyItWorks:
      "Metoda Orffa łączy ruch z muzyką jako naturalną formę ekspresji. Badania Zentner i Eerola (2010) wykazały, że dzieci od urodzenia synchronizują ruchy z rytmem muzyki, a ćwiczenie tej zdolności wspiera rozwój koordynacji ruchowej.",
    prep: ["balon (2-3 na zapas)", "muzyka (telefon lub głośnik)"],
    phrases: [
      "Muzyka gra - tańcz i nie pozwól balonowi spaść!",
      "Stop! Złap balon i zamrożenie!",
      "Teraz tylko głową - dasz radę?",
      "Super taniec! Muzyka i Ty - doskonały duet!"
    ],
    tellChild:
      "Włączamy muzykę i tańczymy z balonem! Podbijaj go w górę i nie pozwól mu spaść. Jak muzyka się zatrzyma - łap balon i stój jak posąg!"
  },
  // === Muzyczno-rytmiczne ===
  {
    id: 21,
    name: "Perkusja ciała",
    type: "rytm",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["rytm", "koncentracja", "słuchanie"],
    topics: ["muzyka", "codzienność"],
    age: [3, 4, 5, 6, 7],
    method: "orff",
    duration: "5-10 min",
    description: "Dziecko tworzy rytmy używając własnego ciała: klaskanie, tupanie, klepanie kolan, pstrykanie palcami. Rodzic pokazuje wzór, a dziecko powtarza i tworzy własne kombinacje.",
    childNeeds: {
      why: "Dzieci naturalnie reagują na rytm i potrzebują ekspresji przez ruch. Perkusja ciała łączy aktywność fizyczną z koncentracją słuchową, co pomaga regulować pobudzenie. To także świetny sposób na rozładowanie energii bez potrzeby przestrzeni czy rekwizytów.",
      goals: ["Rozwijanie poczucia rytmu i koordynacji ruchowej", "Wzmacnianie uwagi słuchowej i pamięci sekwencyjnej", "Budowanie pewności siebie przez tworzenie muzyki"],
      emotions: ["radość", "ekscytacja", "duma", "flow"]
    },
    steps: [
      "Pokaż dziecku 4 sposoby wydawania dźwięków ciałem: klaskanie, tupanie, klepanie kolan, pstrykanie palcami.",
      "Zacznij od prostego wzoru 2-3 dźwięków i poproś dziecko o powtórzenie.",
      "Stopniowo wydłużaj sekwencje i przyspieszaj tempo.",
      "Zamieńcie się rolami — dziecko wymyśla rytm, a Ty powtarzasz."
    ],
    tip: "Zacznij od bardzo wolnego tempa. Dla 3-latków wystarczą 2 dźwięki, dla 6-7-latków możesz wprowadzić sekwencje 6-8 elementowe.",
    whyItWorks: "Metoda Orffa zakłada, że ciało jest pierwszym instrumentem dziecka. Badania Zentner i Eerola (2010) potwierdzają, że dzieci już od niemowlęctwa spontanicznie synchronizują ruchy z rytmem.",
    prep: ["zero prep"],
    phrases: [
      "Posłuchaj, jaki rytm zrobię — powtórz go!",
      "A teraz Ty wymyśl rytm dla mnie!",
      "Wow, to był trudny rytm i dałeś radę!",
      "Spróbujmy szybciej — gotowa?"
    ],
    tellChild: "Będziemy robić muzykę naszym ciałem! Każda część ciała wydaje inny dźwięk — posłuchaj."
  },
  {
    id: 22,
    name: "Echo rytmiczne",
    type: "rytm",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["rytm", "pamięć", "słuchanie"],
    topics: ["muzyka"],
    age: [3, 4, 5, 6],
    method: "orff",
    duration: "5-10 min",
    description: "Rodzic wyklaskuje lub wystukuje krótki wzór rytmiczny, a dziecko powtarza go jak echo. Z każdą rundą wzory stają się dłuższe i bardziej złożone.",
    childNeeds: {
      why: "Powtarzanie wzorców rytmicznych rozwija pamięć roboczą, która jest kluczowa dla nauki czytania i matematyki. Dzieci uwielbiają przewidywalność zabawy echo — wiedzą, co mają robić, a jednocześnie każda runda przynosi nowe wyzwanie. To buduje poczucie kompetencji.",
      goals: ["Trenowanie pamięci słuchowej krótkoterminowej", "Rozwijanie poczucia metryki i tempa", "Ćwiczenie uważnego słuchania i reagowania"],
      emotions: ["skupienie", "radość", "duma", "ekscytacja"]
    },
    steps: [
      "Wyklaskaj prosty wzór 3-4 klasków (np. klask-klask-pauza-klask).",
      "Powiedz: echo! — to sygnał, że dziecko powtarza.",
      "Po 3-4 udanych powtórkach wydłuż wzór o 1-2 elementy.",
      "Zamieńcie się — dziecko tworzy wzór, Ty jesteś echem."
    ],
    tip: "Jeśli dziecko się myli, nie poprawiaj od razu — powtórz wzór jeszcze raz wolniej. Dla najmłodszych używaj klaskania, dla starszych dodaj tupanie i pstrykanie.",
    whyItWorks: "Badania Patel (2011) wykazały silny związek między przetwarzaniem rytmu a rozwojem językowym. Echo rytmiczne trenuje te same obwody neuronowe, które odpowiadają za segmentację mowy.",
    prep: ["zero prep"],
    phrases: [
      "Echo! Twoja kolej!",
      "Uważnie słuchaj, bo ten jest trudniejszy!",
      "Super echo! Dokładnie tak samo!",
      "Teraz Ty jesteś mistrzem rytmu — ja powtarzam!"
    ],
    tellChild: "Gramy w echo! Ja wyklaskuję rytm, a Ty powtarzasz dokładnie tak samo. Gotowa?"
  },
  {
    id: 23,
    name: "Taniec luster",
    type: "rytm",
    place: ["dom", "park"],
    competencies: ["naśladowanie", "rytm", "empatia"],
    topics: ["muzyka", "emocje"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "5-15 min",
    description: "Jedna osoba tańczy lub porusza się, a druga naśladuje jej ruchy jak lustrzane odbicie. Zabawa rozwija uważność na drugą osobę i synchronizację ruchową.",
    childNeeds: {
      why: "Lustrzane naśladowanie ruchów to fundament empatii — mózg dziecka uczy się odczytywać intencje i emocje drugiej osoby przez ciało. Neurony lustrzane aktywują się zarówno przy wykonywaniu, jak i obserwowaniu ruchu. Dzieci czują bliskość z rodzicem, gdy poruszają się razem.",
      goals: ["Rozwijanie empatii i umiejętności odczytywania mowy ciała", "Wzmacnianie koordynacji i płynności ruchowej", "Budowanie więzi rodzic-dziecko przez synchronizację"],
      emotions: ["bliskość", "radość", "śmiech", "flow"]
    },
    steps: [
      "Stańcie naprzeciwko siebie. Rodzic zaczyna jako lider — wykonuje powolne ruchy.",
      "Dziecko naśladuje każdy ruch jak lustrzane odbicie (prawa ręka lidera = lewa ręka lustra).",
      "Po 2-3 minutach zamieńcie się rolami — dziecko prowadzi.",
      "Na koniec spróbujcie tańczyć synchronicznie bez lidera — kto kogo naśladuje?"
    ],
    tip: "Zacznij od bardzo wolnych ruchów, by dziecko mogło nadążyć. Puść spokojną muzykę w tle — pomaga utrzymać płynność. Uśmiechaj się — kontakt wzrokowy jest kluczowy.",
    whyItWorks: "Laban Movement Analysis podkreśla, że świadomy ruch buduje samoświadomość ciała. Badania Chartrand i Bargh (1999) pokazują, że wzajemne naśladowanie wzmacnia poczucie bliskości i sympatii.",
    prep: ["opcjonalnie: muzyka w tle"],
    phrases: [
      "Jesteś moim lustrem — rób dokładnie to, co ja!",
      "Pięknie! Poruszasz się zupełnie jak ja!",
      "Teraz Ty prowadzisz, a ja naśladuję.",
      "Zobaczmy, czy potrafimy tańczyć razem bez lidera!"
    ],
    tellChild: "Będziemy tańczącymi lustrami! Stań przede mną i naśladuj każdy mój ruch, jakbyś był moim odbiciem."
  },
  {
    id: 24,
    name: "Zaśpiewaj historię",
    type: "rytm",
    place: ["dom", "podróż"],
    competencies: ["język", "kreatywność", "rytm"],
    topics: ["codzienność", "muzyka"],
    age: [4, 5, 6, 7],
    method: "orff",
    duration: "5-10 min",
    description: "Zamiast opowiadać — śpiewamy! Dziecko i rodzic wymyślają prostą melodię i śpiewają historię o tym, co robili dzisiaj lub co widzą za oknem.",
    childNeeds: {
      why: "Śpiewanie angażuje obie półkule mózgu jednocześnie — lewą (język) i prawą (melodia). Dzieci, które mają trudności z opowiadaniem, często łatwiej wyrażają się przez śpiew. Melodia daje strukturę, która pomaga organizować myśli i budować dłuższe wypowiedzi.",
      goals: ["Rozwijanie płynności językowej i budowania zdań", "Łączenie ekspresji muzycznej z narracją", "Wzmacnianie kreatywności i spontaniczności"],
      emotions: ["radość", "śmiech", "ekscytacja", "duma"]
    },
    steps: [
      "Wybierzcie prostą, znaną melodię (np. Wlazł kotek na płotek) lub wymyślcie własną.",
      "Rodzic zaczyna śpiewać 1-2 linijki o czymś codziennym: o śniadaniu, spacerze, pogodzie.",
      "Dziecko kontynuuje historię śpiewem — nieważne czy rymuje się.",
      "Śpiewajcie na zmianę, budując coraz dłuższą i bardziej absurdalną historię."
    ],
    tip: "Nie poprawiaj melodii ani tekstu — chodzi o swobodę i radość, nie o perfekcję. Im głupsza historia, tym więcej śmiechu. Świetnie działa w samochodzie.",
    whyItWorks: "Metoda Orffa traktuje mowę, ruch i muzykę jako jedność. Badania Tallal i Gaab (2006) wykazały, że trening muzyczny wspiera rozwój umiejętności fonologicznych kluczowych dla czytania.",
    prep: ["zero prep"],
    phrases: [
      "Zaśpiewajmy historię o naszym dniu!",
      "Teraz Twoja kolej — co się dzieje dalej?",
      "Ha, to najśmieszniejsza piosenka, jaką słyszałem!",
      "A gdybyśmy zaśpiewali to szybciej?"
    ],
    tellChild: "Dzisiaj nie opowiadamy historii — śpiewamy je! Wymyślimy piosenkę o czymkolwiek chcesz."
  },

  // === Narracja ===
  {
    id: 25,
    name: "Kontynuuj historię",
    type: "narracja",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["język", "wyobraźnia", "słuchanie"],
    topics: ["przygoda", "zwierzęta", "fantazja"],
    age: [4, 5, 6, 7],
    method: "montessori",
    duration: "5-15 min",
    description: "Rodzic zaczyna opowiadać historię i zatrzymuje się w kluczowym momencie. Dziecko kontynuuje — potem znów rodzic. Historia rośnie z każdą zmianą narratora.",
    childNeeds: {
      why: "Współtworzenie historii daje dziecku poczucie sprawczości i partnerstwa z rodzicem. Musi uważnie słuchać, by kontynuować wątek, a jednocześnie używać wyobraźni do budowania fabuły. To ćwiczenie łączy recepcję (słuchanie) z produkcją (mówienie) w naturalny sposób.",
      goals: ["Rozwijanie umiejętności narracyjnych i budowania fabuły", "Ćwiczenie aktywnego słuchania i utrzymywania uwagi", "Wzmacnianie wyobraźni i kreatywnego myślenia"],
      emotions: ["ekscytacja", "radość", "flow", "duma"]
    },
    steps: [
      "Zacznij historię: pewnego dnia mały jeż znalazł w lesie dziwną mapę...",
      "Po 3-4 zdaniach zatrzymaj się w ciekawym momencie i powiedz: co było dalej?",
      "Dziecko kontynuuje tak długo, jak chce, potem oddaje głos Tobie.",
      "Zakończcie historię wspólnie — niech dziecko zdecyduje, jak się kończy."
    ],
    tip: "Nie poprawiaj logiki historii dziecka — absurdy i zwroty akcji to zaleta, nie wada. Jeśli dziecko się zacina, zadaj pytanie pomocnicze: a kogo spotkał po drodze?",
    whyItWorks: "Narratologia rozwojowa (Bruner, 1990) wskazuje, że umiejętność opowiadania historii jest kluczowa dla rozumienia świata i budowania tożsamości. Wspólne opowiadanie wspiera rozwój teorii umysłu.",
    prep: ["zero prep"],
    phrases: [
      "Pewnego dnia... i co było dalej?",
      "O nie! I co on wtedy zrobił?",
      "Super pomysł! Tego się nie spodziewałem!",
      "Jak myślisz, jak powinna się skończyć ta historia?"
    ],
    tellChild: "Opowiemy razem historię! Ja zacznę, a potem Ty kontynuujesz. Może być o czymkolwiek chcesz."
  },
  {
    id: 26,
    name: "Historia z przypadkowych słów",
    type: "narracja",
    place: ["dom", "podróż"],
    competencies: ["wyobraźnia", "język", "myślenie logiczne"],
    topics: ["fantazja", "codzienność"],
    age: [5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description: "Każdy mówi losowe słowo (np. parasol, dinozaur, lody), a potem wspólnie wymyślacie historię, w której WSZYSTKIE te słowa muszą się pojawić.",
    childNeeds: {
      why: "Łączenie niepowiązanych pojęć to fundament kreatywnego myślenia. Dziecko musi znaleźć logiczne (lub absurdalnie logiczne) połączenia między słowami, co rozwija elastyczność poznawczą. Losowość elementów sprawia, że nie ma złej odpowiedzi — każde rozwiązanie jest twórcze.",
      goals: ["Rozwijanie myślenia dywergencyjnego i twórczego łączenia pojęć", "Wzmacnianie umiejętności budowania spójnych narracji", "Ćwiczenie elastyczności myślenia i improwizacji"],
      emotions: ["śmiech", "ekscytacja", "duma", "radość"]
    },
    steps: [
      "Każdy podaje 2-3 zupełnie losowe słowa. Możecie wskazywać przedmioty dookoła.",
      "Zapiszcie lub zapamiętajcie wszystkie słowa (6-9 łącznie).",
      "Zacznijcie budować historię, w której każde słowo musi się pojawić.",
      "Na koniec sprawdźcie — czy użyliście wszystkich słów?"
    ],
    tip: "Dla 5-latków wystarczą 4-5 słów. Im bardziej absurdalne połączenia, tym śmieszniejsza historia. Możesz podpowiedzieć: a gdyby dinozaur mieszkał w parasolu?",
    whyItWorks: "Technika losowych słów Edwarda de Bono (1970) jest uznana za jedną z najskuteczniejszych metod stymulowania kreatywności. Wymuszanie połączeń między odległymi pojęciami aktywuje sieć trybu domyślnego mózgu.",
    prep: ["zero prep"],
    phrases: [
      "Podaj mi 3 najdziwniejsze słowa, jakie przyjdą Ci do głowy!",
      "Jak połączymy parasol z dinozaurem? Masz pomysł?",
      "Genialne! Nikt by na to nie wpadł!",
      "Sprawdźmy — ile słów już użyliśmy?"
    ],
    tellChild: "Wymyślimy najdziwniejszą historię na świecie! Najpierw podajemy losowe słowa, a potem musimy je wszystkie wpleść w jedną opowieść."
  },
  {
    id: 27,
    name: "Opowiedz przez ruchy",
    type: "narracja",
    place: ["dom", "park"],
    competencies: ["ekspresja ciała", "język", "wyobraźnia"],
    topics: ["przygoda", "emocje"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "5-15 min",
    description: "Jeden opowiada historię, a drugi pokazuje ją ciałem — bez słów. Narrator dostosowuje tempo opowieści do aktora, który musi oddać emocje, postacie i wydarzenia ruchem.",
    childNeeds: {
      why: "Dzieci często lepiej rozumieją i zapamiętują treści, gdy angażują ciało. Ruchowa interpretacja historii uczy odczytywania emocji, buduje świadomość ciała i rozwija ekspresję niewerbalną. Wspólna zabawa narrator-aktor wzmacnia relację i wymaga uważności na drugą osobę.",
      goals: ["Rozwijanie ekspresji ciała i komunikacji niewerbalnej", "Łączenie narracji z ruchem dla głębszego przetwarzania", "Ćwiczenie empatii i synchronizacji z partnerem"],
      emotions: ["radość", "ekscytacja", "bliskość", "flow"]
    },
    steps: [
      "Ustalcie role: narrator (opowiada) i aktor (pokazuje ciałem). Rodzic zaczyna jako narrator.",
      "Narrator opowiada powoli: szedł sobie mały kotek... był bardzo zmęczony...",
      "Aktor pokazuje ciałem każdy element historii — chodzi jak kotek, ziewa, kuli się.",
      "Po historii zamieńcie się rolami — dziecko opowiada, rodzic pokazuje."
    ],
    tip: "Opowiadaj powoli i z pauzami, dając dziecku czas na interpretację ruchową. Podkreślaj emocje postaci — to najtrudniejszy i najcenniejszy element do pokazania ciałem.",
    whyItWorks: "Laban Movement Analysis wskazuje, że ruch jest podstawowym medium ekspresji u dzieci. Badania Goldin-Meadow (2003) wykazały, że gestykulacja i ruch wspierają rozumienie i zapamiętywanie treści.",
    prep: ["zero prep"],
    phrases: [
      "Pokaż mi ciałem, jak wyglądał ten smutny smok!",
      "Wspaniale! Dokładnie widzę, że jest zmęczony!",
      "Teraz Ty opowiadasz — ja pokazuję!",
      "A co czuł bohater, gdy znalazł skarb?"
    ],
    tellChild: "Opowiem Ci historię, a Ty pokażesz ją całym ciałem! Będziesz aktorem — bez słów, tylko ruchem."
  },
  {
    id: 28,
    name: "Film bez słów",
    type: "narracja",
    place: ["dom", "poczekalnia"],
    competencies: ["ekspresja", "empatia", "koncentracja"],
    topics: ["emocje", "codzienność"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "5-10 min",
    description: "Dziecko lub rodzic odgrywa krótką scenę z codziennego życia bez użycia słów — mimiką i gestami. Drugi zgaduje, co się dzieje i co czuje bohater.",
    childNeeds: {
      why: "Rozpoznawanie emocji z mowy ciała to kluczowa umiejętność społeczna. Dzieci uczą się, że komunikacja to nie tylko słowa — mimika, gesty i postawa ciała przekazują ogromną ilość informacji. Zabawa uczy uważnego patrzenia na drugą osobę i nazywania stanów emocjonalnych.",
      goals: ["Rozwijanie umiejętności rozpoznawania emocji z mowy ciała", "Ćwiczenie ekspresji niewerbalnej i pantomimy", "Budowanie empatii i uważności na stany innych osób"],
      emotions: ["skupienie", "śmiech", "radość", "bliskość"]
    },
    steps: [
      "Rodzic pokazuje krótką scenkę bez słów: np. ktoś szuka kluczy, jest coraz bardziej zdenerwowany.",
      "Dziecko zgaduje: co robił bohater? Co czuł?",
      "Dziecko odgrywa własną scenkę — rodzic zgaduje.",
      "Na koniec porozmawiajcie: po czym poznaliście emocje bohatera?"
    ],
    tip: "Przesadzaj z mimiką i gestami — dzieci potrzebują wyraźnych sygnałów. Dla młodszych dzieci wybieraj proste, jednoznaczne sytuacje. Dla starszych — bardziej złożone emocje.",
    whyItWorks: "Badania Denham i in. (2003) wykazały, że umiejętność rozpoznawania emocji w wieku przedszkolnym jest predyktorem późniejszych kompetencji społecznych i sukcesów w relacjach rówieśniczych.",
    prep: ["zero prep"],
    phrases: [
      "Obejrzyj mój film bez słów — co się dzieje?",
      "A co czuł bohater? Po czym to poznałeś?",
      "Teraz Ty jesteś reżyserem! Pokaż mi scenę.",
      "Wow, świetna mimika! Od razu wiedziałem, że jest zaskoczony!"
    ],
    tellChild: "Gramy w film bez słów! Pokażę Ci krótką scenkę bez mówienia, a Ty zgadniesz, co się dzieje i co czuje bohater."
  },

  // === Budowanie ===
  {
    id: 29,
    name: "Wieża z czegokolwiek",
    type: "budowanie",
    place: ["dom", "restauracja"],
    competencies: ["motoryka mała", "myślenie logiczne", "cierpliwość"],
    topics: ["kształty", "codzienność"],
    age: [3, 4, 5, 6],
    method: "montessori",
    duration: "5-15 min",
    description: "Budowanie najwyższej możliwej wieży z tego, co jest pod ręką: podkładki pod piwo, cukierki, karty, monety, kredki. Liczy się wysokość i stabilność.",
    childNeeds: {
      why: "Budowanie wieży to naturalne laboratorium fizyki dla dziecka — uczy się równowagi, ciężkości i stabilności przez próby i błędy. Każde zawalenie się wieży to lekcja wytrwałości i radzenia sobie z frustracją. Używanie nietypowych materiałów rozwija kreatywne myślenie.",
      goals: ["Rozwijanie precyzji ruchów i motoryki małej", "Ćwiczenie cierpliwości i radzenia sobie z porażką", "Intuicyjne poznawanie zasad fizyki (równowaga, środek ciężkości)"],
      emotions: ["skupienie", "ekscytacja", "duma", "radość"]
    },
    steps: [
      "Rozejrzyjcie się i zbierzcie przedmioty do budowania: podkładki, karty, monety, kredki.",
      "Ustalcie cel: kto zbuduje wyższą wieżę? Albo: ile pięter uda się postawić?",
      "Budujcie — każdy swoją wieżę lub jedną wspólną.",
      "Zmierzcie wynik (np. ile elementów, ile cm) i spróbujcie pobić rekord."
    ],
    tip: "Gdy wieża się zawali, powiedz: o, dowiedzieliśmy się, że ten element jest za ciężki na górze! Co spróbujesz inaczej? Uczysz dziecko, że porażka to informacja, nie koniec.",
    whyItWorks: "Montessori podkreśla uczenie się przez doświadczenie sensoryczne. Badania Kamii i DeVries (1978) wykazały, że konstruowanie fizyczne rozwija myślenie logiczno-matematyczne szybciej niż abstrakcyjne ćwiczenia.",
    prep: ["dowolne przedmioty do budowania (karty, podkładki, monety, kredki)"],
    phrases: [
      "Z czego zbudujemy wieżę? Rozejrzyj się!",
      "Ooo, aż 7 pięter! Damy radę więcej?",
      "Przewróciła się — co zrobimy inaczej?",
      "Spróbuj położyć cięższe elementy na dole."
    ],
    tellChild: "Zbudujemy najwyższą wieżę na świecie! Ale z tych rzeczy, które mamy teraz pod ręką."
  },
  {
    id: 30,
    name: "Dom dla zwierzątka",
    type: "budowanie",
    place: ["dom"],
    competencies: ["motoryka mała", "wyobraźnia", "planowanie"],
    topics: ["zwierzęta", "natura"],
    age: [4, 5, 6, 7],
    method: "montessori",
    duration: "10-20 min",
    description: "Dziecko projektuje i buduje dom, norę lub schronienie dla wybranego zwierzątka (prawdziwego lub zabawkowego) z dostępnych materiałów: poduszek, koców, pudełek, klocków.",
    childNeeds: {
      why: "Projektowanie domu dla zwierzątka łączy empatię (co potrzebuje to zwierzę?) z planowaniem i konstrukcją. Dziecko musi się zastanowić nad potrzebami innej istoty, co rozwija perspektywę. Fizyczne budowanie z różnych materiałów angażuje motorykę i myślenie przestrzenne.",
      goals: ["Rozwijanie empatii i umiejętności przyjmowania perspektywy innej istoty", "Ćwiczenie planowania, projektowania i realizacji pomysłu", "Wzmacnianie motoryki małej i myślenia przestrzennego"],
      emotions: ["skupienie", "duma", "radość", "flow"]
    },
    steps: [
      "Wybierzcie zwierzątko (zabawkowe lub wymyślone). Porozmawiajcie: czego potrzebuje? Gdzie lubi spać?",
      "Zbierzcie materiały budowlane z domu: pudełka, koce, poduszki, klocki, papier.",
      "Dziecko projektuje i buduje — Ty pomagasz tylko gdy poprosi.",
      "Wspólnie oceńcie: czy zwierzątko będzie tu szczęśliwe? Co można dodać?"
    ],
    tip: "Nie buduj za dziecko. Zadawaj pytania zamiast dawać rozwiązania: jak myślisz, czy chomik potrzebuje okna? Pozwól na niedoskonałości — liczy się proces, nie efekt.",
    whyItWorks: "Projektowanie z perspektywą innej istoty rozwija teorię umysłu (Wellman, 2002). Montessori podkreśla, że prace praktyczne życia codziennego budują niezależność i pewność siebie.",
    prep: ["pudełka, koce, poduszki, klocki lub inne materiały budowlane", "zabawkowe zwierzątko lub maskotka"],
    phrases: [
      "Jaki dom potrzebuje Twój chomik? Duży czy mały?",
      "Świetny pomysł z tym dachem z pudełka!",
      "Czy zwierzątko potrzebuje okna? A może drzwi?",
      "Pokaż mi oprowadzanie po domu — co jest w każdym pokoju?"
    ],
    tellChild: "Twoje zwierzątko potrzebuje domu! Zaprojektuj i zbuduj mu najlepsze schronienie z tego, co mamy."
  },
  {
    id: 31,
    name: "Mostek z kart / papieru",
    type: "budowanie",
    place: ["dom", "restauracja", "poczekalnia"],
    competencies: ["motoryka mała", "myślenie logiczne", "cierpliwość"],
    topics: ["kształty", "inżynieria"],
    age: [5, 6, 7],
    method: "montessori",
    duration: "10-15 min",
    description: "Wyzwanie inżynierskie: zbuduj mostek z kart, papieru lub serwetek, który utrzyma małą zabawkę lub monetę. Liczy się wytrzymałość i pomysłowość.",
    childNeeds: {
      why: "Wyzwania inżynierskie uczą dziecko systematycznego rozwiązywania problemów. Mostek musi utrzymać ciężar — to wymaga eksperymentowania, testowania i modyfikowania. Dziecko doświadcza cyklu projektowego: pomysł, realizacja, test, poprawka. To buduje odporność na porażkę i radość z rozwiązania problemu.",
      goals: ["Rozwijanie myślenia inżynierskiego i rozwiązywania problemów", "Ćwiczenie cierpliwości i systematycznego podejścia do wyzwań", "Intuicyjne poznawanie zasad konstrukcji (zginanie, składanie, podpieranie)"],
      emotions: ["skupienie", "duma", "ekscytacja", "flow"]
    },
    steps: [
      "Postawcie 2 kubki lub szklanki w odległości 10-15 cm. To filary mostu.",
      "Z kart, papieru lub serwetek zbudujcie mostek między nimi.",
      "Test: połóżcie na mostku monetę lub małą zabawkę. Wytrzymał?",
      "Jeśli nie — modyfikujcie. Jeśli tak — zwiększcie odległość lub ciężar."
    ],
    tip: "Podpowiedź (daj dziecku czas, zanim ją podasz): zginanie papieru w harmonijkę lub literę V zwiększa wytrzymałość. To świetny moment, by powiedzieć: inżynierowie też próbują wiele razy!",
    whyItWorks: "Metoda prób i błędów (Piaget, 1952) jest naturalnym sposobem uczenia się dzieci. Wyzwania konstrukcyjne STEM rozwijają myślenie przestrzenne i zdolności matematyczne (Newcombe, 2010).",
    prep: ["karty do gry, papier lub serwetki", "2 kubki lub szklanki", "moneta lub mała zabawka do testu wytrzymałości"],
    phrases: [
      "Jak zbudować mostek, który nie runie?",
      "Spróbuj — co się stanie? Obserwujmy!",
      "Nie wytrzymał — co możemy zmienić?",
      "Wow, utrzymał monetę! A dwie monety?"
    ],
    tellChild: "Mamy wyzwanie inżynierskie! Zbuduj mostek z papieru między dwoma kubkami, który utrzyma monetę."
  },

  // === Obserwacja ===
  {
    id: 32,
    name: "Znajdź 5 kolorów",
    type: "obserwacja",
    place: ["park", "podróż", "restauracja", "poczekalnia"],
    competencies: ["uważność", "koncentracja", "słownictwo"],
    topics: ["natura", "kolory"],
    age: [3, 4, 5],
    method: "montessori",
    duration: "3-5 min",
    description: "Dziecko szuka wokół siebie 5 przedmiotów w konkretnym kolorze. Proste, szybkie i doskonałe jako ćwiczenie uważności w każdym miejscu.",
    childNeeds: {
      why: "Szukanie kolorów zmienia tryb dziecka z rozkojarzenia na uważną obserwację. To naturalna forma mindfulness — dziecko skupia się na tu i teraz, skanując otoczenie. Nazywanie przedmiotów i ich kolorów rozwija słownictwo i kategoryzację.",
      goals: ["Ćwiczenie uważnej obserwacji otoczenia", "Rozwijanie słownictwa opisowego i kategoryzacji", "Uspokajanie i skupianie uwagi w nowym miejscu"],
      emotions: ["skupienie", "radość", "duma"]
    },
    steps: [
      "Wybierz kolor: znajdź mi 5 rzeczy, które są czerwone!",
      "Dziecko rozgląda się i wskazuje przedmioty, nazywając je.",
      "Po znalezieniu 5 — zmieńcie kolor. Albo dziecko wybiera kolor dla Ciebie.",
      "Wariant trudniejszy: znajdź coś w kolorze, którego tu prawie nie ma."
    ],
    tip: "Dla 3-latków zacznij od 3 przedmiotów i łatwych kolorów. Dla starszych dodaj odcienie: nie czerwony, a bordowy albo malinowy. Świetnie działa jako technika uspokajania niespokojnego dziecka.",
    whyItWorks: "Techniki oparte na uważnym skanowaniu otoczenia (5-4-3-2-1) są potwierdzone jako skuteczne metody redukcji lęku u dzieci (Schonert-Reichl i Lawlor, 2010).",
    prep: ["zero prep"],
    phrases: [
      "Znajdź mi 5 rzeczy, które są niebieskie!",
      "Brawo, trzy znalezione! Jeszcze dwa!",
      "Ooo, nie zauważyłem tego zielonego! Świetne oko!",
      "Teraz Ty wybierasz kolor dla mnie!"
    ],
    tellChild: "Gra na spostrzegawczość! Rozejrzyj się i znajdź 5 rzeczy w kolorze, który Ci podam."
  },
  {
    id: 33,
    name: "Ile kroków do drzewa?",
    type: "obserwacja",
    place: ["park"],
    competencies: ["liczenie", "szacowanie", "koncentracja"],
    topics: ["natura", "matematyka"],
    age: [4, 5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description: "Dziecko szacuje, ile kroków dzieli je od wybranego obiektu (drzewo, ławka, fontanna), a potem sprawdza licząc kroki. Kto był bliżej?",
    childNeeds: {
      why: "Szacowanie odległości łączy percepcję wzrokową z myśleniem matematycznym. Dzieci uczą się, że mogą przewidywać i sprawdzać swoje przewidywania — to fundament myślenia naukowego. Porównywanie szacunków z rzeczywistością uczy pokory i ciekawości.",
      goals: ["Rozwijanie umiejętności szacowania i intuicji matematycznej", "Ćwiczenie liczenia w kontekście ruchu i przestrzeni", "Budowanie myślenia naukowego: hipoteza, eksperyment, wynik"],
      emotions: ["ekscytacja", "duma", "radość", "skupienie"]
    },
    steps: [
      "Wskaż obiekt w parku (drzewo, ławkę, latarnię). Zapytaj: ile kroków stąd do tamtego drzewa?",
      "Oboje podajecie swoje szacunki.",
      "Dziecko idzie i liczy kroki na głos.",
      "Porównajcie: kto był bliżej? Spróbujcie z innym obiektem — czy szacunki się poprawiają?"
    ],
    tip: "Nie chodzi o to, kto wygra — chodzi o proces szacowania i weryfikowania. Dla starszych dzieci dodaj wariant: ile kroków dużych, a ile malutkich? Dlaczego wyniki są inne?",
    whyItWorks: "Montessori podkreśla uczenie matematyki przez ruch i doświadczenie konkretne. Badania Siegler i Booth (2004) wykazały, że szacowanie jest kluczową umiejętnością numeryczną, która rozwija się przez praktykę.",
    prep: ["zero prep"],
    phrases: [
      "Ile kroków stąd do tamtej ławki? Zgaduj!",
      "Ja mówię 15! A Ty?",
      "Licz na głos — sprawdźmy!",
      "Byłeś bliżej niż ja! Masz lepszy oko-miar!"
    ],
    tellChild: "Gramy w zgadywanie odległości! Powiesz mi, ile kroków do tamtego drzewa, a potem sprawdzimy."
  },
  {
    id: 34,
    name: "Nieruchomy jak kamień",
    type: "obserwacja",
    place: ["dom", "park", "poczekalnia"],
    competencies: ["samokontrola", "koncentracja", "równowaga"],
    topics: ["natura", "codzienność"],
    age: [4, 5, 6, 7],
    method: "SI",
    duration: "3-5 min",
    description: "Kto dłużej wytrzyma bez ruchu? Dziecko zamiera w wybranej pozycji i stara się nie poruszyć. Świetne ćwiczenie samokontroli i propriocepcji.",
    childNeeds: {
      why: "Umiejętność zatrzymania się i kontrolowania ciała jest fundamentem samoregulacji. Dzieci, które potrafią świadomie zahamować ruch, lepiej radzą sobie z kontrolą impulsów w innych sytuacjach. Nieruchomość wymaga też uważności — dziecko zaczyna zauważać drobne sygnały z ciała.",
      goals: ["Ćwiczenie samokontroli i hamowania impulsów ruchowych", "Rozwijanie propriocepcji i świadomości ciała", "Budowanie umiejętności regulacji pobudzenia"],
      emotions: ["skupienie", "duma", "śmiech", "radość"]
    },
    steps: [
      "Ustalcie zasady: na hasło kamień! zamieramy w pozycji, w jakiej jesteśmy.",
      "Liczycie (lub rodzic liczy) sekundy. Kto się pierwszy poruszy — przegrywa.",
      "Po rundzie — zmieńcie pozycje: na jednej nodze, z rękami w górze, w przysiadzie.",
      "Wariant: jeden próbuje rozśmieszyć drugiego (bez dotykania!)."
    ],
    tip: "Nie rywalizuj za mocno — pozwól dziecku wygrywać. Dla dzieci z trudnościami z siedzeniem w miejscu, zacznij od 10 sekund i stopniowo wydłużaj. Chwal wysiłek, nie tylko wynik.",
    whyItWorks: "Integracja sensoryczna (Ayres, 1972) podkreśla, że kontrola posturalna i propriocepcja są fundamentem wyższych funkcji poznawczych. Badania Diamond i Lee (2011) potwierdzają, że gry wymagające hamowania ruchowego rozwijają funkcje wykonawcze.",
    prep: ["zero prep"],
    phrases: [
      "Kamień! Zamieramy!",
      "Wow, 20 sekund! Rekord!",
      "Teraz spróbuj na jednej nodze — kamień!",
      "Będę próbował Cię rozśmieszyć, a Ty ani drgaj!"
    ],
    tellChild: "Gramy w kamień! Na hasło zamierasz i nie ruszasz się ani milimetr. Zobaczmy, ile wytrzymasz!"
  },
  {
    id: 35,
    name: "Zmiany w otoczeniu",
    type: "obserwacja",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["pamięć", "koncentracja", "uważność"],
    topics: ["codzienność"],
    age: [4, 5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description: "Dziecko zamyka oczy, a rodzic zmienia coś w otoczeniu (przestawia przedmiot, zdejmuje zegarek, rozpina guzik). Dziecko otwiera oczy i szuka zmian.",
    childNeeds: {
      why: "Zauważanie zmian wymaga uważnej obserwacji i porównywania z mentalnym obrazem. To ćwiczenie pamięci roboczej i uwagi selektywnej — umiejętności kluczowych dla nauki szkolnej. Dzieci uwielbiają rolę detektywa, co dodaje motywacji.",
      goals: ["Rozwijanie pamięci wzrokowej i porównywania", "Ćwiczenie uwagi na detale i uważnej obserwacji", "Wzmacnianie umiejętności tworzenia mentalnych obrazów"],
      emotions: ["ekscytacja", "skupienie", "duma", "radość"]
    },
    steps: [
      "Powiedz dziecku: przyjrzyj się uważnie temu, co widzisz. Masz 10 sekund.",
      "Dziecko zamyka oczy (lub odwraca się). Zmień 1-3 rzeczy.",
      "Dziecko otwiera oczy i szuka zmian: co się zmieniło?",
      "Zamieńcie się rolami — dziecko zmienia, Ty szukasz (i czasem celowo nie znajduj!)."
    ],
    tip: "Zacznij od 1 dużej, oczywistej zmiany (np. przestawiony kubek). Stopniowo wprowadzaj subtelniejsze zmiany (np. podwinięty rękaw). Pozwól dziecku ukrywać trudne zmiany dla Ciebie — to wzmacnia poczucie sprawczości.",
    whyItWorks: "Badania Rensink i in. (1997) nad zmianami ślepotą (change blindness) pokazują, że uważna obserwacja to umiejętność trenowalna. Montessori akcentuje ćwiczenie zmysłów jako fundament poznania.",
    prep: ["zero prep"],
    phrases: [
      "Zamknij oczy! Coś się zaraz zmieni...",
      "Otwieraj! Co jest inaczej?",
      "Blisko! Spójrz jeszcze raz na stół...",
      "Twoja kolej — zmień coś, a ja będę szukał!"
    ],
    tellChild: "Będziesz detektywem! Zamknij oczy, ja coś zmienię, a Ty znajdziesz co."
  },

  // === Poznawcze ===
  {
    id: 36,
    name: "Jeden dzień bez czegoś",
    type: "poznawcze",
    place: ["dom", "park", "podróż"],
    competencies: ["myślenie logiczne", "wyobraźnia", "język"],
    topics: ["codzienność", "emocje"],
    age: [5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description: "Eksperyment myślowy: jak wyglądałby dzień bez wody? Bez grawitacji? Bez kolorów? Dziecko wyobraża sobie konsekwencje i opowiada, co by się zmieniło.",
    childNeeds: {
      why: "Eksperymenty myślowe uczą dziecko myślenia przyczynowo-skutkowego i dostrzegania rzeczy, które traktuje jako oczywiste. Pytanie: co by było, gdyby czegoś nie było wymusza analizę funkcji przedmiotów i zjawisk. To fundament krytycznego myślenia.",
      goals: ["Rozwijanie myślenia przyczynowo-skutkowego", "Ćwiczenie wdzięczności i dostrzegania tego, co oczywiste", "Wzmacnianie zdolności budowania argumentacji"],
      emotions: ["ekscytacja", "skupienie", "radość", "śmiech"]
    },
    steps: [
      "Zaproponuj temat: wyobraź sobie, że jutro znika cała woda z Ziemi. Co się dzieje?",
      "Dziecko opisuje konsekwencje. Zadawaj pytania pogłębiające: a co z rybami? A jak byś się umył?",
      "Wymieńcie się — dziecko wybiera, co znika (np. grawitacja, kolory, dźwięki).",
      "Podsumujcie: okazuje się, że ta rzecz jest ważniejsza, niż myśleliśmy!"
    ],
    tip: "Nie oceniaj odpowiedzi jako prawidłowych lub nie — chodzi o proces myślenia, nie o poprawność. Najlepsze tematy to te, które prowadzą do zaskakujących wniosków. Dla młodszych: co by było bez butów? Dla starszych: bez elektryczności.",
    whyItWorks: "Eksperymenty myślowe (thought experiments) są od Galileusza narzędziem nauki. Badania Gopnik (2012) wskazują, że dzieci naturalnie tworzą i testują hipotezy — ta zabawa wspiera ten wrodzony mechanizm.",
    prep: ["zero prep"],
    phrases: [
      "Wyobraź sobie: jutro znika cała woda. Co się dzieje?",
      "A co z roślinami? Jak przeżyłyby?",
      "Hm, nie pomyślałem o tym! Świetne spostrzeżenie!",
      "Teraz Ty wybierasz, co znika z naszego świata!"
    ],
    tellChild: "Zagramy w wyobraźnię! Wyobraź sobie, że coś ważnego nagle znika z naszego świata — i opowiesz mi, co się wtedy dzieje."
  },
  {
    id: 37,
    name: "Co by było, gdyby?",
    type: "poznawcze",
    place: ["dom", "podróż", "restauracja", "poczekalnia"],
    competencies: ["kreatywność", "język", "myślenie logiczne"],
    topics: ["fantazja", "codzienność"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Gra w absurdalne hipotezy: co by było, gdyby psy latały? Gdyby deszcz padał do góry? Gdybyś był wielkości mrówki? Im dziwniej, tym lepiej.",
    childNeeds: {
      why: "Pytania hipotetyczne rozwijają myślenie kontrfaktyczne — umiejętność wyobrażania sobie alternatywnych rzeczywistości. To kluczowy element kreatywności i planowania. Dzieci, które regularnie ćwiczą myślenie hipotetyczne, lepiej rozwiązują problemy i przewidują konsekwencje swoich działań.",
      goals: ["Rozwijanie myślenia kontrfaktycznego i kreatywności", "Ćwiczenie budowania złożonych wypowiedzi i argumentacji", "Wzmacnianie elastyczności poznawczej"],
      emotions: ["śmiech", "ekscytacja", "radość", "flow"]
    },
    steps: [
      "Zadaj pytanie: co by było, gdyby ludzie mieli skrzydła?",
      "Dziecko odpowiada — pozwól mu rozwinąć temat. Zadawaj pytania: a szkoły? A domy?",
      "Dziecko zadaje pytanie Tobie — odpowiadaj z pełną powagą na absurdalne scenariusze.",
      "Wybierzcie najśmieszniejszą odpowiedź dnia."
    ],
    tip: "Odpowiadaj serio na każdy scenariusz — to uczy dziecko, że jego pomysły są wartościowe. Nie mów: to niemożliwe. Mów: o, ciekawe! A co jeszcze by się wtedy zmieniło?",
    whyItWorks: "Badania Buchsbaum i in. (2012) wykazały, że dzieci w wieku 4-6 lat naturalnie angażują się w myślenie kontrfaktyczne. Regularne ćwiczenie tej umiejętności wzmacnia funkcje wykonawcze i kreatywność.",
    prep: ["zero prep"],
    phrases: [
      "Co by było, gdyby koty umiały mówić?",
      "A jak wyglądałaby szkoła, gdyby...?",
      "To najlepszy pomysł, jaki dziś słyszałem!",
      "Teraz Ty wymyśl najdziwniejsze pytanie!"
    ],
    tellChild: "Gramy w najdziwniejsze pytania na świecie! Pytamy: co by było, gdyby... i wymyślamy, jak wyglądałby taki świat."
  },
  {
    id: 38,
    name: "Wymyśl nowe zwierzę",
    type: "poznawcze",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["kreatywność", "wyobraźnia", "język"],
    topics: ["zwierzęta", "fantazja"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-15 min",
    description: "Dziecko projektuje zwierzę, które nie istnieje: łączy cechy znanych zwierząt, wymyśla nazwę, dietę, habitat. Bonus: można je narysować!",
    childNeeds: {
      why: "Tworzenie nowego zwierzęcia wymaga syntezy wiedzy o świecie przyrody z wyobraźnią. Dziecko musi pomyśleć o funkcjach (do czego służą skrzydła? dlaczego niedźwiedź ma futro?) i kreatywnie je połączyć. To ćwiczenie łączy wiedzę przyrodniczą z twórczym myśleniem.",
      goals: ["Rozwijanie kreatywności kombinatorycznej — łączenia istniejących elementów na nowe sposoby", "Utrwalanie wiedzy o cechach i adaptacjach zwierząt", "Ćwiczenie opisywania i prezentowania swoich pomysłów"],
      emotions: ["radość", "duma", "ekscytacja", "flow"]
    },
    steps: [
      "Zapytaj: gdybyś mógł połączyć 2-3 zwierzęta w jedno, które byś wybrał?",
      "Dziecko opisuje swoje zwierzę: jak wygląda, co je, gdzie mieszka, jak się nazywa.",
      "Zadawaj pytania: czy jest szybkie? Jak się broni? Czy żyje w stadzie?",
      "Opcjonalnie: narysujcie to zwierzę razem."
    ],
    tip: "Nie wymagaj biologicznej poprawności — latająca żyrafa z płetwami to świetny pomysł! Pytaj o funkcje: dlaczego ma płetwy? To uczy myślenia przyczynowego bez ograniczania wyobraźni.",
    whyItWorks: "Kreatywność kombinatoryczna (Boden, 2004) polega na łączeniu znanych elementów w nowe całości. To jeden z najważniejszych typów twórczości, który można trenować od dzieciństwa.",
    prep: ["opcjonalnie: kartka i kredki do rysowania"],
    phrases: [
      "Gdybyś mógł wymyślić nowe zwierzę — jakie by było?",
      "Jak się nazywa? Gdzie mieszka?",
      "Czy jest groźne, czy przyjazne? Co je na obiad?",
      "Narysujemy je? Chcę zobaczyć, jak wygląda!"
    ],
    tellChild: "Dzisiaj jesteś naukowcem-odkrywcą! Wymyśl zwierzę, które jeszcze nie istnieje — Ty decydujesz, jak wygląda i jak żyje."
  },
  {
    id: 39,
    name: "Sortuj po kolei",
    type: "poznawcze",
    place: ["dom", "restauracja"],
    competencies: ["myślenie logiczne", "koncentracja", "język"],
    topics: ["codzienność", "matematyka"],
    age: [3, 4, 5, 6],
    method: "montessori",
    duration: "5-10 min",
    description: "Dziecko sortuje dostępne przedmioty według wybranego kryterium: od najmniejszego do największego, od najlżejszego do najcięższego, od najjaśniejszego do najciemniejszego.",
    childNeeds: {
      why: "Sortowanie to podstawa myślenia logicznego i matematycznego. Dziecko uczy się porównywać, klasyfikować i porządkować — umiejętności niezbędnych w szkole. Kiedy sortuje przedmioty fizycznie, angażuje zmysły i ciało, co wzmacnia uczenie się.",
      goals: ["Rozwijanie umiejętności porównywania i szeregowania", "Ćwiczenie słownictwa porównawczego (większy, mniejszy, cięższy, lżejszy)", "Budowanie fundamentów myślenia matematycznego"],
      emotions: ["skupienie", "duma", "radość"]
    },
    steps: [
      "Zbierzcie 5-8 przedmiotów z otoczenia (łyżki, kredki, monety, zabawki).",
      "Podaj kryterium: ułóż od najmniejszego do największego.",
      "Dziecko sortuje. Potem sprawdźcie razem — czy kolejność jest poprawna?",
      "Zmieńcie kryterium: a teraz od najcięższego do najlżejszego. Albo po kolorach."
    ],
    tip: "Dla 3-latków: 3-4 przedmioty i jedno proste kryterium (wielkość). Dla 5-6-latków: dodaj kryteria abstrakcyjne (od najmniej do najbardziej lubianego). Pozwól dziecku wymyślić własne kryterium sortowania!",
    whyItWorks: "Montessori opiera matematykę na doświadczeniu sensorycznym — materiał różowy (wieża), brązowe schody, cylindry wymagają dokładnie takiego sortowania. Badania Clements i Sarama (2007) potwierdzają, że manipulowanie przedmiotami buduje intuicje matematyczne.",
    prep: ["5-8 przedmiotów różnej wielkości z otoczenia"],
    phrases: [
      "Ułóż te rzeczy od najmniejszej do największej!",
      "Który jest cięższy? Podnieś i porównaj!",
      "Super! A teraz wymyśl swoje kryterium!",
      "Wow, ułożyłeś po kolorach — od jasnego do ciemnego!"
    ],
    tellChild: "Mamy małe wyzwanie! Ułóż te przedmioty w odpowiedniej kolejności — podam Ci zasadę."
  },
  {
    id: 40,
    name: "Szalone pytania",
    type: "poznawcze",
    place: ["dom", "podróż", "restauracja", "poczekalnia"],
    competencies: ["kreatywność", "język", "myślenie logiczne"],
    topics: ["fantazja", "codzienność"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Bombardowanie się absurdalnymi pytaniami na zmianę: dlaczego niebo nie jest zielone? Co jedzą chmury? Gdybyś był kolorem, jakim byś był? Im dziwniej, tym lepiej!",
    childNeeds: {
      why: "Absurdalne pytania łamią schematy myślenia i otwierają na kreatywność. Kiedy nie ma prawidłowej odpowiedzi, dziecko uczy się, że myślenie jest ważniejsze niż rezultat. To buduje odwagę intelektualną — odwagę do stawiania nietypowych pytań.",
      goals: ["Rozwijanie myślenia dywergencyjnego i łamania schematów", "Ćwiczenie budowania argumentów dla nietypowych pozycji", "Budowanie odwagi intelektualnej i radości z myślenia"],
      emotions: ["śmiech", "ekscytacja", "radość", "flow"]
    },
    steps: [
      "Zacznij od szalonego pytania: dlaczego ryby nie noszą butów?",
      "Dziecko odpowiada — może być poważnie lub absurdalnie.",
      "Dziecko zadaje szalone pytanie Tobie. Odpowiadaj z pełną powagą.",
      "Grasz tak długo, aż któreś pytanie Was tak rozśmieszy, że nie da się odpowiedzieć."
    ],
    tip: "Odpowiadaj poważnym tonem na absurdalne pytania — kontrast między powagą a absurdem jest najśmieszniejszy. Nie mów: to głupie pytanie. Każde pytanie jest świetne.",
    whyItWorks: "Guilford (1967) zdefiniował myślenie dywergencyjne jako zdolność do generowania wielu rozwiązań. Absurdalne pytania są jedną z najskuteczniejszych technik treningu kreatywności u dzieci.",
    prep: ["zero prep"],
    phrases: [
      "Dlaczego księżyc nie spada na ziemię? A może spada, tylko powoli?",
      "To genialne pytanie! Hmm, muszę się poważnie zastanowić...",
      "Gdybyś był dźwiękiem, jakim byś był?",
      "Kto wymyśli dziwniejsze pytanie — Ty czy ja?"
    ],
    tellChild: "Gramy w najdziwniejsze pytania! Pytamy się nawzajem o rzeczy, na które nikt nie zna odpowiedzi — i wymyślamy swoje!"
  },
  {
    id: 41,
    name: "Głupie zakazy w miejscach",
    type: "poznawcze",
    place: ["dom", "podróż", "restauracja", "poczekalnia"],
    competencies: ["kreatywność", "słownictwo", "myślenie logiczne"],
    topics: ["codzienność"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Wymyślamy absurdalne zakazy dla znanych miejsc: w kuchni nie wolno... mówić słów na literę K! W parku zakazane jest... chodzenie do przodu! Im bardziej absurdalny zakaz, tym śmieszniej.",
    childNeeds: {
      why: "Wymyślanie absurdalnych zakazów uczy dziecko myślenia o regułach i ich konsekwencjach. Kiedy dziecko wymyśla zakaz, musi wyobrazić sobie, jak wyglądałoby życie z taką regułą — to ćwiczy myślenie systemowe. Absurd reguł buduje też dystans do prawdziwych zasad i pomaga je lepiej rozumieć.",
      goals: ["Rozwijanie rozumienia zasad i ich konsekwencji", "Ćwiczenie myślenia systemowego i przewidywania skutków", "Wzmacnianie humoru i kreatywności językowej"],
      emotions: ["śmiech", "radość", "ekscytacja"]
    },
    steps: [
      "Wybierz miejsce: kuchnia! Wymyśl absurdalny zakaz: w kuchni nie wolno stać na podłodze!",
      "Dziecko opisuje konsekwencje: a jak wtedy ugotować obiad?",
      "Dziecko wymyśla zakaz dla innego miejsca. Ty opisujesz konsekwencje.",
      "Zbierzcie najśmieszniejsze zakazy i wybierzcie zwycięzcę — najgłupszy zakaz dnia."
    ],
    tip: "Pomagaj dziecku myśleć o konsekwencjach: jeśli w parku nie wolno chodzić do przodu, to jak dotrzesz do huśtawki? Tyłem? Na rękach? To prowadzi do coraz śmieszniejszych scenariuszy.",
    whyItWorks: "Humor absurdalny u dzieci rozwija się równolegle z myśleniem logicznym (McGhee, 1979). Rozumienie, dlaczego coś jest śmieszne, wymaga mentalnego porównania normy z absurdem — to ćwiczenie logiki.",
    prep: ["zero prep"],
    phrases: [
      "W łazience nie wolno... używać wody! Co teraz?",
      "Wymyśl najgłupszy zakaz dla naszego samochodu!",
      "Ha! A jak wtedy byśmy jedli obiad?",
      "To najśmieszniejszy zakaz, jaki słyszałem!"
    ],
    tellChild: "Wymyślamy najgłupsze zakazy na świecie! Ja wymyślam zakaz dla jednego miejsca, a Ty mówisz, co by się wtedy działo!"
  },

  // === Ćwiczenia słuchowe / Poznawcze ===
  {
    id: 42,
    name: "Co mam ci przywieźć z...?",
    type: "poznawcze",
    place: ["dom", "podróż", "poczekalnia", "restauracja"],
    competencies: ["słuchanie", "słownictwo", "koncentracja", "pamięć"],
    topics: ["codzienność", "litery"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Pytasz dziecko: co mam ci przywieźć z Krakowa? Odpowiedź musi zaczynać się na tę samą literę co miasto: kota, kwiaty, kapelusz! Gra rozwija słownictwo i świadomość fonemiczną.",
    childNeeds: {
      why: "Gra łączy geografię, słownictwo i świadomość fonemiczną w jedną zabawę. Dziecko musi usłyszeć pierwszą głoskę miasta i znaleźć słowa zaczynające się tak samo — to kluczowa umiejętność pre-literacka. Presja czasowa (kolejka czekająca) dodaje ekscytacji bez stresu.",
      goals: ["Rozwijanie świadomości fonemicznej i rozpoznawania głosek", "Poszerzanie słownictwa i szybkości przywołania słów", "Ćwiczenie słuchowej analizy słów"],
      emotions: ["ekscytacja", "duma", "radość", "skupienie"]
    },
    steps: [
      "Powiedz: jadę do Warszawy! Co mam ci przywieźć? Odpowiedź musi zaczynać się na W!",
      "Dziecko wymienia: wiatrak, wędkę, wafel! Liczycie odpowiedzi.",
      "Zamieńcie się — dziecko wymyśla miasto, Ty odpowiadasz.",
      "Wariant trudniejszy: odpowiedź musi pasować do miasta (z Gdańska — galeon, z Zakopanego — zagórski ser)."
    ],
    tip: "Dla 4-latków akceptuj dowolne słowa na daną literę. Dla 6-7-latków możesz dodać zasadę, że przedmiot musi mieścić się w walizce. Pomaga, gdy podpowiesz pierwszą głoskę wyraźnie: W-W-Warszawa!",
    whyItWorks: "Świadomość fonemiczna jest najsilniejszym predyktorem sukcesu w nauce czytania (National Reading Panel, 2000). Gry słowne z aliteracją rozwijają tę umiejętność w naturalny, bezstresowy sposób.",
    prep: ["zero prep"],
    phrases: [
      "Jadę do Krakowa! Co ci przywieźć?",
      "Brawo, 5 słów na K! Pobijemy rekord?",
      "Teraz Ty jedziesz — dokąd?",
      "Hmm, trudna litera! Ale dam radę!"
    ],
    tellChild: "Jadę w podróż i chcę ci coś przywieźć! Ale musisz powiedzieć co — i to musi zaczynać się na tę samą literę co miasto!"
  },
  {
    id: 43,
    name: "Wierszyk z zagadką imion",
    type: "poznawcze",
    place: ["dom", "poczekalnia"],
    competencies: ["słuchanie", "koncentracja", "język", "myślenie logiczne"],
    topics: ["litery", "codzienność"],
    age: [5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Rymowane zagadki, w których dziecko odgaduje imiona przez zabawy z dźwiękami: czytanie od tyłu (ALO to OLA), dodawanie liter (J + OLA = JOLA), usuwanie głosek.",
    childNeeds: {
      why: "Manipulowanie dźwiękami w imionach to zaawansowane ćwiczenie świadomości fonologicznej. Dzieci muszą mentalnie rozkładać i składać słowa — ta umiejętność jest bezpośrednio związana z gotowością do nauki czytania i pisania. Imiona są bliskie emocjonalnie, co zwiększa motywację.",
      goals: ["Rozwijanie zaawansowanej świadomości fonologicznej (synteza, analiza, manipulacja)", "Ćwiczenie myślenia odwracalnego i operacji na symbolach", "Przygotowanie do nauki czytania i pisania"],
      emotions: ["duma", "ekscytacja", "radość", "skupienie"]
    },
    steps: [
      "Zacznij od prostej zagadki: mam imię, które od tyłu brzmi ALO. Kto to? (OLA!)",
      "Dodaj trudniejsze: weź głoskę J i dodaj OLA. Jakie imię powstanie? (JOLA!)",
      "Dziecko tworzy zagadki dla Ciebie — z imion rodziny, kolegów.",
      "Wariant: usuń pierwszą głoskę z imienia KASIA. Co zostanie? (ASIA!)"
    ],
    tip: "Zacznij od imion bliskich dziecku — mama, tata, najlepszy kolega. Mów głoski powoli i wyraźnie. Dla dziecka, które się zacina, możesz napisać litery na kartkach i fizycznie je przestawiać.",
    whyItWorks: "Manipulacja fonemami (dodawanie, usuwanie, przestawianie głosek) to najwyższy poziom świadomości fonologicznej i najsilniejszy predyktor sukcesu w czytaniu (Ehri i in., 2001).",
    prep: ["opcjonalnie: karteczki z literami"],
    phrases: [
      "Mam zagadkę! Czytam od tyłu: KERAM. Kto to?",
      "Dodaj M do ARIA. Jakie imię wyjdzie?",
      "Super! Teraz Ty wymyśl zagadkę dla mnie!",
      "Wow, nie wpadłem na to! Świetna zagadka!"
    ],
    tellChild: "Gramy w zagadki z imionami! Będę robił sztuczki z literami, a Ty zgadujesz, jakie imię się ukrywa."
  },
  {
    id: 44,
    name: "Wyścig na głoskę",
    type: "poznawcze",
    place: ["dom", "podróż", "poczekalnia", "restauracja"],
    competencies: ["słuchanie", "słownictwo", "koncentracja", "język"],
    topics: ["litery", "codzienność"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Podajesz głoskę, np. S, i na zmianę wymieniacie słowa, które się na nią zaczynają: słoń, samolot, sok, ser... Kto powie ostatnie słowo — wygrywa!",
    childNeeds: {
      why: "Szybkie przywołanie słów na daną głoskę to ćwiczenie płynności werbalnej — umiejętności kluczowej dla rozwoju językowego. Dziecko musi przeszukiwać swój mentalny słownik pod presją czasu, co aktywuje i wzmacnia połączenia semantyczne. Gra działa jak trening pamięci leksykalnej.",
      goals: ["Rozwijanie płynności werbalnej i szybkości przywołania słów", "Poszerzanie aktywnego słownictwa", "Ćwiczenie rozpoznawania głosek początkowych"],
      emotions: ["ekscytacja", "duma", "skupienie", "radość"]
    },
    steps: [
      "Podaj głoskę: dziś gramy na S! Na zmianę mówimy słowa na S.",
      "Mówicie na zmianę — kto nie wymyśli słowa w 5 sekund, przegrywa rundę.",
      "Nowa runda — dziecko wybiera głoskę.",
      "Wariant trudniejszy: słowa muszą być z jednej kategorii (zwierzęta na K, jedzenie na M)."
    ],
    tip: "Pozwól dziecku wygrywać co drugą rundę — celowo się zacinaj. Dla młodszych daj więcej czasu i podpowiadaj: coś, co jemy na śniadanie na S... Dla starszych wprowadź kategorie.",
    whyItWorks: "Płynność werbalna (verbal fluency) jest ćwiczona w neuropsychologii od dekad. Test FAS (Benton, 1969) pokazuje, że szybkość generowania słów na literę koreluje z rozwojem funkcji wykonawczych.",
    prep: ["zero prep"],
    phrases: [
      "Gramy na literę M! Ja zaczynam: malina!",
      "Hmm, nie mogę wymyślić... masz mnie!",
      "Teraz Ty wybierasz literę!",
      "Wow, 12 słów na K! Nowy rekord!"
    ],
    tellChild: "Wyścig słów! Podam ci literę, a my na zmianę mówimy słowa, które się na nią zaczynają. Kto powie ostatnie — wygrywa!"
  },
  {
    id: 45,
    name: "Łańcuch słów",
    type: "poznawcze",
    place: ["dom", "podróż", "poczekalnia", "restauracja"],
    competencies: ["słuchanie", "słownictwo", "koncentracja", "język", "pamięć"],
    topics: ["litery", "codzienność", "zwierzęta"],
    age: [5, 6, 7],
    method: "klasyczna",
    duration: "5-15 min",
    description: "Łańcuch słów — następne słowo zaczyna się na ostatnią literę poprzedniego. Nos, sowa, abażur, rower, rak... Ile ogniw uda się zbudować?",
    childNeeds: {
      why: "Łańcuch słów wymaga jednoczesnej analizy i syntezy fonemicznej: dziecko musi usłyszeć ostatnią głoskę i znaleźć słowo zaczynające się od niej. To zaawansowane ćwiczenie łączące słuchanie, pamięć roboczą i przywołanie leksykalne. Ciągłość łańcucha motywuje do wysiłku.",
      goals: ["Rozwijanie analizy i syntezy fonemicznej jednocześnie", "Wzmacnianie pamięci roboczej i przywołania słów", "Ćwiczenie rozpoznawania głosek końcowych i początkowych"],
      emotions: ["skupienie", "ekscytacja", "duma", "radość"]
    },
    steps: [
      "Wyjaśnij zasadę: mówię słowo, a Ty mówisz nowe, które zaczyna się na moją ostatnią literę. Nos — S — sowa!",
      "Grajcie na zmianę, budując jak najdłuższy łańcuch.",
      "Liczycie ogniwa — ile uda się zbudować bez zatrzymania?",
      "Próbujecie pobić swój rekord w kolejnych rundach."
    ],
    tip: "Wymawiaj ostatnią głoskę wyraźnie: noSSS, sowaAAA. Dla 5-latków podpowiadaj: szukamy słowa na A... co zaczyna się na A? Unikaj głosek trudnych na start (Ź, Ż) — podpowiedz inne słowo.",
    whyItWorks: "Gry ze świadomością fonologiczną (Bradley i Bryant, 1983) są jednym z najskuteczniejszych sposobów przygotowania do nauki czytania. Łańcuch słów łączy analizę (wyodrębnienie głoski końcowej) z syntezą (budowanie nowego słowa).",
    prep: ["zero prep"],
    phrases: [
      "Nos! Na jaką literę się kończy? Twoja kolej!",
      "Świetnie! 15 ogniw! Bijemy rekord!",
      "Hmm, trudna litera... podpowiem: szukaj czegoś, co jemy...",
      "Nowy rekord — 22 słowa! Brawo!"
    ],
    tellChild: "Budujemy łańcuch ze słów! Każde nowe słowo zaczyna się na ostatnią literę poprzedniego. Zobaczmy, jak długi łańcuch zrobimy!"
  },
  {
    id: 46,
    name: "Powtórz sekwencję",
    type: "poznawcze",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["słuchanie", "pamięć", "koncentracja"],
    topics: ["matematyka", "litery", "codzienność"],
    age: [3, 4, 5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description: "Powtarzanie rosnących sekwencji: liczb, liter, słów lub klaskań. Zaczynacie od 2 elementów i dodajecie po jednym. Ile zapamiętasz?",
    childNeeds: {
      why: "Powtarzanie sekwencji to klasyczne ćwiczenie pamięci roboczej — zdolności, która jest fundamentem nauki szkolnej. Pamięć robocza pozwala utrzymywać informacje w umyśle podczas ich przetwarzania. Im dłuższa sekwencja, tym większe wyzwanie — dziecko widzi swój postęp w realnym czasie.",
      goals: ["Rozwijanie pojemności pamięci roboczej", "Ćwiczenie uwagi słuchowej i sekwencyjnej", "Budowanie wytrwałości i dążenia do pokonywania własnych rekordów"],
      emotions: ["skupienie", "duma", "ekscytacja", "radość"]
    },
    steps: [
      "Zacznij od 2 elementów: powtórz: 3, 7. Dziecko powtarza.",
      "Dodaj element: 3, 7, 1. Potem: 3, 7, 1, 5. I tak dalej.",
      "Gdy dziecko się pomyli — zanotujcie rekord i zacznijcie nową sekwencję.",
      "Zamieńcie się — dziecko dyktuje sekwencje Tobie."
    ],
    tip: "Dla 3-4-latków: 2-3 elementy, używaj kolorów lub zwierząt zamiast liczb. Dla 6-7-latków: liczby dwucyfrowe lub sekwencje od tyłu (powtórz wspak!). Mów powoli, z pauzami między elementami.",
    whyItWorks: "Rozpiętość pamięci (digit span) jest standardowym testem neuropsychologicznym (Wechsler). Badania Gathercole i Alloway (2008) wykazały, że pamięć robocza jest silniejszym predyktorem sukcesu szkolnego niż IQ.",
    prep: ["zero prep"],
    phrases: [
      "Powtórz: czerwony, niebieski, żółty!",
      "Nowy rekord — 6 elementów! Spróbujesz 7?",
      "Teraz Ty dyktuj mi sekwencję!",
      "O nie, pomyliłem się przy 5! A Ty dasz radę?"
    ],
    tellChild: "Gra na pamięć! Powiem ci kilka słów (albo liczb), a Ty powtórzysz dokładnie w tej samej kolejności. Z każdą rundą będzie coraz trudniej!"
  },
  {
    id: 47,
    name: "Rymowankowy karaoke",
    type: "rytm",
    place: ["dom", "park", "podróż"],
    competencies: ["słuchanie", "pamięć", "rytm", "język", "ekspresja"],
    topics: ["muzyka", "codzienność", "zwierzęta"],
    age: [3, 4, 5, 6],
    method: "orff",
    duration: "5-15 min",
    description: "Rodzic recytuje lub śpiewa rymowanki — od krótkich do coraz dłuższych. Dziecko powtarza z rytmem, klaskaniem lub tupaniem. Zabawa łączy pamięć, rytm i radość z mówienia.",
    childNeeds: {
      why: "Rymowanki to najstarsze narzędzie nauki języka. Rytm i rymy pomagają dziecku segmentować mowę na mniejsze jednostki, co jest kluczowe dla nauki czytania. Powtarzanie z rosnącą trudnością buduje pamięć i pewność siebie — dziecko widzi, że zapamiętuje coraz dłuższe fragmenty.",
      goals: ["Rozwijanie pamięci słuchowej i poczucia rytmu", "Wzmacnianie świadomości rymów i struktury języka", "Budowanie pewności siebie w ekspresji werbalnej"],
      emotions: ["radość", "ekscytacja", "śmiech", "duma"]
    },
    steps: [
      "Zacznij od krótkiej, znanej rymowanki (2-4 linijki). Powiedz ją powoli z wyraźnym rytmem.",
      "Dziecko powtarza. Dodaj klaskanie lub tupanie do rytmu.",
      "Stopniowo wprowadzaj dłuższe rymowanki lub wymyślajcie własne.",
      "Wariant: dziecko zmienia jedno słowo w rymowance na śmieszne — i powtarza nową wersję."
    ],
    tip: "Rymowanki znane dziecku z przedszkola działają najlepiej na start — dają poczucie sukcesu. Potem przechodź do nowych. Klaskanie w rytm pomaga zapamiętywać — angażuje ciało.",
    whyItWorks: "Badania Goswami (2002) wykazały, że wrażliwość na rymy w wieku przedszkolnym jest jednym z najlepszych predyktorów późniejszych umiejętności czytania. Metoda Orffa wykorzystuje rymowanki jako naturalny most między mową a muzyką.",
    prep: ["zero prep"],
    phrases: [
      "Posłuchaj uważnie, a potem powtórz z klaskaniem!",
      "Brawo, zapamiętałeś całą rymowankę!",
      "A teraz zmień jedno słowo na śmieszne!",
      "Wymyślmy własną rymowankę o naszym kocie!"
    ],
    tellChild: "Będziemy śpiewać i mówić rymowanki! Ja powiem pierwszą, a Ty powtórzysz — z klaskaniem!"
  },
  {
    id: 48,
    name: "Co rymuje się ze słowem...?",
    type: "poznawcze",
    place: ["dom", "podróż", "poczekalnia", "restauracja"],
    competencies: ["słuchanie", "słownictwo", "kreatywność", "język"],
    topics: ["litery", "codzienność", "fantazja"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Szukanie rymów do podanego słowa: kozy-wozy, noc-koc, woda-broda. Nonsensowne słowa jak najbardziej się liczą! Kto znajdzie więcej rymów?",
    childNeeds: {
      why: "Szukanie rymów to jedno z najważniejszych ćwiczeń pre-literackich. Dziecko uczy się słyszeć podobieństwa dźwiękowe między słowami, co jest fundamentem dekodowania przy czytaniu. Akceptacja nonsensownych słów (kozy-bozy-mozy) uwalnia kreatywność i usuwa lęk przed błędem.",
      goals: ["Rozwijanie wrażliwości na rymy i strukturę fonologiczną słów", "Poszerzanie słownictwa i zachęcanie do eksperymentowania z językiem", "Budowanie radości z zabawy słowami i twórczości językowej"],
      emotions: ["śmiech", "radość", "ekscytacja", "duma"]
    },
    steps: [
      "Podaj słowo: co rymuje się ze słowem KOT?",
      "Na zmianę mówicie rymy: plot, lot, noc... i nonsensowne: mot, brot, flot!",
      "Liczycie rymy — ile uda się wymyślić?",
      "Dziecko podaje słowo — Ty szukasz rymów. Akceptujcie nawet najdziwniejsze słowa!"
    ],
    tip: "Zacznij od słów z łatwymi końcówkami (-ot, -as, -ok). Celebruj nonsensowne słowa — to nie błąd, to kreatywność! Dla starszych dzieci: wymyślcie rymowane zdanie z wymyślonymi słowami.",
    whyItWorks: "Wrażliwość na rymy (rhyme awareness) jest jednym z trzech filarów świadomości fonologicznej (Goswami i Bryant, 1990). Dzieci, które potrafią rymować w wieku 4 lat, mają istotnie lepsze wyniki w czytaniu w wieku 6 lat.",
    prep: ["zero prep"],
    phrases: [
      "Co rymuje się ze słowem NOS?",
      "Sos! Kos! A może... BLOS? Liczy się!",
      "Wow, 10 rymów! Jesteś mistrzem rymowania!",
      "Teraz Ty podaj słowo, a ja szukam rymów!"
    ],
    tellChild: "Gra w rymy! Podam Ci słowo, a Ty wymyślasz jak najwięcej słów, które się z nim rymują — nawet zmyślone!"
  },

  // ─────────────────────────────────────────────────────────────
  //  IDs 49-90: zabawy uzupełniające
  // ─────────────────────────────────────────────────────────────

  {
    id: 49,
    name: "Zgadnij po zapachu",
    type: "zgadywanka",
    place: ["dom", "park"],
    competencies: ["zmysły", "koncentracja", "słownictwo"],
    topics: ["natura", "codzienność", "jedzenie"],
    age: [3, 4, 5, 6],
    method: "montessori",
    duration: "5-10 min",
    description: "Dziecko z zawiązanymi oczami (lub zamkniętymi) wącha różne przedmioty i zgaduje co to. Aktywuje zmysł węchu — często zaniedbywany w zabawach.",
    childNeeds: {
      why: "Integracja sensoryczna wymaga angażowania wszystkich zmysłów. Węch jest bezpośrednio połączony z układem limbicznym — wpływa na emocje i pamięć.",
      goals: ["integracja sensoryczna", "koncentracja", "wzbogacanie słownictwa"],
      emotions: ["ciekawość", "skupienie", "radość odkrycia"]
    },
    steps: [
      "Zbierz 5-6 przedmiotów o wyraźnym zapachu: skórka cytryny, cynamon, kawałek mydła, ziemia z doniczki, świeża mięta.",
      "Dziecko zamyka oczy lub zakładasz mu opaskę.",
      "Dajesz do powąchania kolejne przedmioty — dziecko zgaduje.",
      "Jeśli nie zgaduje, dajesz podpowiedź: 'Rośnie w kuchni w doniczce...' albo 'Mama dodaje to do ciasta...'",
      "Zamieniacie się rolami — Ty zgadujesz, dziecko wybiera i podaje."
    ],
    tip: "Zbieraj zapachy stopniowo — zacznij od tych, które dziecko na pewno zna. Nie używaj substancji drażniących. Dla starszych dzieci: dawaj dwa zapachy na raz i pytaj, który jest mocniejszy.",
    whyItWorks: "Neurologia węchu: receptor węchowy jest jedynym zmysłem z bezpośrednim połączeniem do hipokampu (pamięć) i ciała migdałowatego (emocje) bez pośrednictwa wzgórza. Montessori kładła duży nacisk na zabawy węchowe jako element edukacji sensorycznej.",
    prep: ["skórka cytryny lub pomarańczy", "cynamon", "mydło", "zioła z domu"],
    phrases: [
      "Zamknij oczy i wąchaj... Co to może być?",
      "Tak! To cynamonowy zapach! Skąd go znasz?",
      "To trudne, dam Ci podpowiedź...",
      "Teraz Twoja kolej — ja zamykam oczy!"
    ],
    tellChild: "Zamknij oczy i wąchaj! Ja będę Ci podawać różne rzeczy, a Ty zgaduj co to. Tylko nosem!"
  },

  {
    id: 50,
    name: "Co jest w pudełku?",
    type: "zgadywanka",
    place: ["dom", "podróż"],
    competencies: ["zmysły", "koncentracja", "wnioskowanie"],
    topics: ["codzienność", "sensoryka"],
    age: [3, 4, 5],
    method: "montessori",
    duration: "5-10 min",
    description: "Dziecko wkłada rękę do nieprzezroczystego pudełka lub woreczka i dotykiem zgaduje co tam leży. Klasyczna zabawa sensoryczna aktywująca stereognozję.",
    childNeeds: {
      why: "Stereognozja (rozpoznawanie obiektów dotykiem) to zaawansowana funkcja sensoryczna łącząca dotyk, propriocepcję i pamięć kształtów. Montessori opracowała 'tajemniczą torbę' jako kluczowe narzędzie sensoryczne.",
      goals: ["integracja sensoryczna", "koncentracja", "budowanie pojęć kształtu i faktury"],
      emotions: ["napięcie", "ciekawość", "satysfakcja z rozwiązania"]
    },
    steps: [
      "Wsadź do papierowej torby lub pudełka z dziurą 5-8 codziennych przedmiotów: łyżeczka, guzik, ołówek, korek, klocek.",
      "Dziecko wkłada rękę (bez patrzenia!) i dotyka jednego przedmiotu.",
      "Pyta o wskazówki lub próbuje zgadnąć: 'To jest twarde... okrągłe... małe...'",
      "Wyciąga przedmiot i sprawdza czy zgadło.",
      "Dodajcie trudniejsze przedmioty gdy idzie dobrze."
    ],
    tip: "Dobieraj przedmioty o wyraźnie różnych fakturach: gładkie, szorstkie, miękkie, twarde. Unikaj ostrych krawędzi. Dla młodszych dzieci używaj tylko 3-4 bardzo znanych przedmiotów.",
    whyItWorks: "Stereognozja aktywuje korę somatosensoryczną i wymaga integracji wielu modalności zmysłowych. Badania Ayres (2005) wskazują, że dzieci z dobrą stereognozją mają lepszą grafomotorykę i koordynację rąk.",
    prep: ["papierowa torba lub karton z dziurą", "5-8 małych przedmiotów codziennego użytku"],
    phrases: [
      "Wsuń rączkę i dotknij... Co tam jest?",
      "Twarde czy miękkie? Okrągłe czy kanciaste?",
      "Brawo! Poznałeś po samym dotyku!",
      "Teraz ja próbuję — wybierz coś trudnego dla mnie!"
    ],
    tellChild: "Mam tu tajemnicze pudełko! Wsuniesz rękę i dotykiem zgadniesz co jest w środku? Bez patrzenia!"
  },

  {
    id: 51,
    name: "Ile kroków do?",
    type: "zgadywanka",
    place: ["dom", "park", "podróż"],
    competencies: ["szacowanie", "matematyka", "koncentracja"],
    topics: ["liczby", "przestrzeń", "ruch"],
    age: [4, 5, 6, 7],
    method: "montessori",
    duration: "5-10 min",
    description: "Dziecko szacuje ile kroków dzieli je od wybranego miejsca, potem liczy sprawdzając swój szacunek. Świetna pre-matematyczna zabawa w każdym miejscu.",
    childNeeds: {
      why: "Szacowanie to fundament myślenia matematycznego. Dzieci, które ćwiczą szacowanie w przestrzeni fizycznej, lepiej rozumieją liczby i zakresy liczbowe (Gunderson et al., 2012).",
      goals: ["myślenie matematyczne", "szacowanie odległości", "liczenie"],
      emotions: ["napięcie", "radość z potwierdzenia", "ekscytacja"]
    },
    steps: [
      "Wskazujesz cel: drzewo, ławka, drzwi, narożnik pokoju.",
      "Dziecko szacuje: 'Ile kroków do tamtego drzewa?'",
      "Oboje podajecie szacunki — kto jest bliżej prawdy?",
      "Dziecko liczy kroki głośno idąc do celu.",
      "Porównujecie z szacunkami. Kto był bliżej? O ile się myliliście?"
    ],
    tip: "Zacznij od krótkich odległości (5-15 kroków). Ustal zasadę: normalny krok czy gigantyczny? Dla starszych: szacujcie w metrach i liczcie krokiem ~0,5m.",
    whyItWorks: "Szacowanie przestrzenne aktywuje zarówno obszary ciemieniowe (przetwarzanie przestrzenne) jak i czołowe (planowanie). Jest silnie powiązane z późniejszym rozumieniem wartości liczbowych i wykonywaniem działań pamięciowych.",
    prep: ["zero prep"],
    phrases: [
      "Ile kroków do tamtego drzewa? Ja mówię... 20!",
      "Liczymy razem! Jeden, dwa...",
      "Byłeś bliżej! Miałeś 18, ja 25, a naprawdę 17!",
      "Teraz Ty wybierz cel i powiedz ile kroków!"
    ],
    tellChild: "Patrzysz na tamto drzewo? Jak myślisz, ile kroków do niego? Zakładamy się, potem sprawdzamy liczeniem!"
  },

  {
    id: 52,
    name: "Czego brakuje na obrazku?",
    type: "zgadywanka",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["pamięć wzrokowa", "koncentracja", "spostrzegawczość"],
    topics: ["codzienność", "przedmioty"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Układasz przed dzieckiem kilka przedmiotów, ono zapamiętuje, odwraca wzrok — chowasz jeden — dziecko zgaduje czego brakuje. Klasyczne ćwiczenie pamięci wzrokowej.",
    childNeeds: {
      why: "Pamięć wzrokowa krótkoterminowa jest kluczowa dla nauki czytania i pisania. Ćwiczenie 'kogo brakuje?' aktywuje pętlę wzrokowo-przestrzenną pamięci roboczej (Baddeley, 1986).",
      goals: ["pamięć wzrokowa", "koncentracja", "spostrzegawczość"],
      emotions: ["skupienie", "napięcie", "satysfakcja z odpowiedzi"]
    },
    steps: [
      "Układasz na stoliku 4-6 przedmiotów (klucze, długopis, kubek, łyżka, jabłko).",
      "Dziecko patrzy przez 30 sekund i stara się zapamiętać.",
      "Mówisz: 'Zakryj oczy!' albo dziecko odwraca się.",
      "Szybko chowasz lub zakrywasz jeden przedmiot.",
      "Dziecko otwiera oczy i zgaduje co zniknęło.",
      "Zmieniacie się rolami."
    ],
    tip: "Zacznij od 4 przedmiotów, stopniowo zwiększaj do 8. Dla maluchów: używaj zabawek które dziecko zna. Wariant trudniejszy: zamień dwa przedmioty miejscami zamiast chować.",
    whyItWorks: "Ćwiczenia pamięci wzrokowej wykazują transfer na umiejętności akademickie: dzieci z lepszą pamięcią wzrokowo-przestrzenną mają lepsze wyniki w czytaniu i matematyce (Holmes et al., 2008).",
    prep: ["4-6 małych przedmiotów codziennych", "opcjonalnie ściereczka do zakrycia"],
    phrases: [
      "Zapamiętaj dobrze co tu leży...",
      "Zakryj oczy! ... Gotowe! Co zniknęło?",
      "Brawo! Pamiętasz nawet małe rzeczy!",
      "Teraz Ty chowaj, a ja zgaduję!"
    ],
    tellChild: "Popatrz uważnie na te przedmioty i zapamiętaj je wszystkie. Zaraz zamkniesz oczy, a ja schowam jeden — Twoje zadanie to zgadnąć który zniknął!"
  },

  {
    id: 53,
    name: "Ciepło-zimno, lewy-prawy",
    type: "zgadywanka",
    place: ["dom", "park"],
    competencies: ["orientacja przestrzenna", "słuchanie", "koordynacja"],
    topics: ["przestrzeń", "ruch", "pojęcia"],
    age: [3, 4, 5, 6],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Klasyczna zabawa w chowanie i znajdowanie z naprowadzaniem słownym: ciepło/zimno PLUS kierunki lewo/prawo/przed siebie. Uczy orientacji przestrzennej.",
    childNeeds: {
      why: "Orientacja przestrzenna (lewo/prawo, przed/za, blisko/daleko) to fundament nie tylko matematyki, ale też czytania i pisania. Dzieci mylące lewą i prawą rękę mają często trudności z literami b/d, p/q.",
      goals: ["orientacja przestrzenna", "rozumienie pojęć przestrzennych", "słuchanie ze zrozumieniem"],
      emotions: ["podekscytowanie", "radość z odnalezienia", "skupienie"]
    },
    steps: [
      "Chowasz mały przedmiot (zabawkę, kolorowankę) gdy dziecko jest poza pokojem.",
      "Dziecko wchodzi i szuka, a Ty naprowadzasz: 'Ciepło... zimno... gorąco!'",
      "Dodajesz kierunki: 'Zrób dwa kroki w prawo... teraz przed siebie...'",
      "Gdy znajdzie: radość i oklaski! Zamieniacie się rolami.",
      "Wariant: dziecko naprowadza Cię gestem (ręką wskazuje kierunek bez mówienia)."
    ],
    tip: "Ucz pojęć stopniowo: najpierw ciepło/zimno, potem dodaj lewo/prawo. Nie poprawiaj natychmiast gdy dziecko myli strony — delikatnie: 'To jest prawa ręka... i w tę stronę!'",
    whyItWorks: "Pojęcia przestrzenne rozwijają się stopniowo: przed/za opanowują dzieci ok. 3 lat, lewo/prawo ok. 5-6 lat. Ćwiczenie w ruchu przyspiesza internalizację tych pojęć (Piaget, teoria stadiów).",
    prep: ["mały przedmiot do schowania"],
    phrases: [
      "Gorąco! Bardzo gorąco!",
      "Zimno, zimno... szukaj w inną stronę!",
      "Zrób jeden krok w prawo... tak! Cieplej!",
      "Znalazłeś! Teraz Ty chowasz, a ja szukam!"
    ],
    tellChild: "Schowam coś w pokoju gdy ty wyjdziesz. Potem wchodzisz i szukasz, a ja mówię czy jesteś blisko (gorąco!) czy daleko (zimno!). Gotowy?"
  },

  {
    id: 54,
    name: "Rysowanie oburącz",
    type: "rysowanie",
    place: ["dom"],
    competencies: ["koordynacja", "kreatywność", "koncentracja"],
    topics: ["sensoryka", "ruch", "ciało"],
    age: [4, 5, 6, 7],
    method: "laban",
    duration: "10-15 min",
    description: "Dziecko rysuje jednocześnie obiema rękami — linie lustrzane, spirale, fale. Aktywuje współpracę półkul mózgowych i poprawia koordynację oburącz.",
    childNeeds: {
      why: "Ćwiczenia obustronne (bilateral coordination) aktywują ciało modzelowate łączące półkule mózgowe. Metoda rysowania oburącz stosowana jest w terapii integracji sensorycznej i jako przygotowanie do nauki pisania.",
      goals: ["koordynacja obustronna", "integracja półkul mózgowych", "koncentracja"],
      emotions: ["skupienie", "zaciekawienie", "rozbawienie"]
    },
    steps: [
      "Daj dziecku dwa kredki lub markery w obu rękach.",
      "Połóżcie dużą kartkę (A3 lub gazeta odwrócona).",
      "Zacznijcie razem od prostych linii: oboje rysujecie równolegle proste linie.",
      "Teraz spirale: obie ręce kręcą spirale w przeciwnych kierunkach.",
      "Próbujcie narysować motyla, drzewo, twarz — symetrycznie.",
      "Nie oceniajcie efektów — liczy się ruch, nie wygląd!"
    ],
    tip: "Zacznij od grubych markerów albo kredek — łatwiej trzymać. Niektóre dzieci czują dyskomfort niedominującą ręką — to normalne. Nie namawiaj na perfekcję: chodzi o ruch, nie rysunek.",
    whyItWorks: "Carla Hannaford (Smart Moves, 1995) i Brain Gym popularyzowały obustronne ćwiczenia jako wsparcie integracji neuronalnej. Aktywują ciało modzelowate i poprawiają przetwarzanie informacji w obu półkulach.",
    prep: ["dwie kredki lub markery", "duża kartka papieru"],
    phrases: [
      "Obie ręce naraz! Jak skrzydła motyla!",
      "Czujesz jak jedna ręka 'prowadzi' drugą?",
      "Wow, te spirale wychodzą niesamowicie!",
      "Teraz narysujesz twarz — jedna ręka robi lewą połowę, druga prawą!"
    ],
    tellChild: "Dzisiaj rysujemy obiema rękami naraz! Każda ręka trzyma kredkę i rysuje swoją stronę. Zobaczysz co z tego wyjdzie!"
  },

  {
    id: 55,
    name: "Rysowanie w ciemności",
    type: "rysowanie",
    place: ["dom"],
    competencies: ["kreatywność", "wyobraźnia", "odwaga"],
    topics: ["zmysły", "sensoryka", "emocje"],
    age: [5, 6, 7, 8],
    method: "laban",
    duration: "10-15 min",
    description: "Rysowanie z zamkniętymi oczami lub w zaciemnionym pokoju. Uwalnia od lęku przed 'nieładnym' rysunkiem i aktywuje wyobraźnię przestrzenną.",
    childNeeds: {
      why: "Wielu dzieciom blokuje twórczość strach przed oceną wyglądu pracy. Rysowanie bez patrzenia usuwa ten blok i aktywuje rysunek intuicyjny — prawą półkulę bez ingerencji analitycznej lewej.",
      goals: ["swoboda twórcza", "pokonanie lęku przed oceną", "wyobraźnia przestrzenna"],
      emotions: ["odwaga", "śmiech", "uwolnienie", "zaciekawienie"]
    },
    steps: [
      "Każdy bierze kartkę i kredkę.",
      "Mówisz co narysujecie: 'Narysujemy dom z ogrodem!'",
      "Oboje zamykacie oczy (albo zawiązujecie opaskę) i rysujecie przez 60 sekund.",
      "Otwieracie oczy i patrzycie na efekty — śmiech gwarantowany!",
      "Opowiadacie co widzicie na swoich rysunkach — jak w interpretacji kleksów.",
      "Runda 2: tym razem rysujecie sobie nawzajem portret!"
    ],
    tip: "Zacznij od rysowania figury geometrycznej — kwadratu albo słońca. Potem przechodź do bardziej złożonych tematów. Ważne: celebruj 'dziwne' efekty, nie krytykuj. Tu nie ma złych rysunków.",
    whyItWorks: "Betty Edwards (Drawing on the Right Side of the Brain) dokumentuje jak rysowanie bez wzroku angażuje prawą półkulę i uczy patrzenia na kształty, nie symbole. Technika ta jest szeroko stosowana w edukacji artystycznej.",
    prep: ["kartki", "kredki lub markery", "opcjonalnie opaski"],
    phrases: [
      "Zamknij oczy i rysuj! Nie otwieraj!",
      "Co widzisz na swoim rysunku? Ja widzę... ducha!",
      "Ha! Mój dom wyszedł jak spaghetti!",
      "Rysujemy sobie portrety — kto będzie podobniejszy?"
    ],
    tellChild: "Dzisiaj rysujemy z zamkniętymi oczami! Zamknij je, ja mówię co rysujemy, i kreślisz — nie otwieraj do sygnału!"
  },

  {
    id: 56,
    name: "Dokończ rysunek",
    type: "rysowanie",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["kreatywność", "wyobraźnia", "narracja wizualna"],
    topics: ["twórczość", "fantazja"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Rysujesz prostą niezidentyfikowaną linię lub kształt, dziecko dokańcza i opowiada co narysowało. Albo zamieniacie się — dziecko zaczyna, Ty kończysz.",
    childNeeds: {
      why: "Niedokończony bodziec aktywuje efekt Zeigarnik (mózg 'domaga się' domknięcia) i pobudza wyobraźnię twórczą. Metoda stosowana w arteterapii i terapii narracyjnej.",
      goals: ["wyobraźnia twórcza", "narracja wizualna", "elastyczność myślenia"],
      emotions: ["radość tworzenia", "duma", "ciekawość"]
    },
    steps: [
      "Rysujesz na kartce: linię falistą, kółko, zygzak, spiralę, lub przypadkowy kleks.",
      "Podajesz kartkę: 'Dokończ ten rysunek — może to być cokolwiek!'",
      "Dziecko rysuje i opowiada co z tego zrobiło.",
      "Zamieniacie się: dziecko rysuje 'bazę', Ty kończysz.",
      "Wariant wspólny: rysunek ping-pong — po jednej linii na zmianę."
    ],
    tip: "Nie sugeruj gotowych rozwiązań ('to wygląda jak słońce!'). Poczekaj aż dziecko zdecyduje samo — nawet jeśli trwa to chwilę. Każde rozwiązanie jest dobre. Zbierajcie kartki i twórzcie 'album kreatywnych rysunków'.",
    whyItWorks: "Niedokończone bodźce aktywują Default Mode Network (DMN) — siec domyślna mózgu odpowiedzialna za wyobraźnię i kreatywne myślenie. Jest to fundament treningu twórczości (Kaufman & Gregoire, Wired to Create, 2015).",
    prep: ["kartki", "kredki lub długopis"],
    phrases: [
      "Co to może być? Dokończ jak chcesz!",
      "Wow, z tej linii zrobiłeś smoka? Genialnie!",
      "Teraz Ty narysuj mi cos do dokończenia.",
      "Robimy razem ping-ponga rysunkowego!"
    ],
    tellChild: "Narysuję Ci zagadkowy kształt. Twoim zadaniem jest dokończyć go tak, żeby stał się czymkolwiek! Cokolwiek wymyślisz, jest dobre!"
  },

  {
    id: 57,
    name: "Rysunek na plecach",
    type: "rysowanie",
    place: ["dom"],
    competencies: ["zmysły", "komunikacja", "koncentracja"],
    topics: ["sensoryka", "ciało", "zaufanie"],
    age: [4, 5, 6, 7, 8],
    method: "sherborne",
    duration: "5-10 min",
    description: "Rysujesz palcem na plecach dziecka literę, cyfrę, kształt lub obrazek — ono zgaduje co to. Potem zamiana. Buduje zaufanie i wzmacnia świadomość ciała.",
    childNeeds: {
      why: "Świadomy dotyk na plecach aktywuje receptory proprioceptywne i dotykowe, buduje mapę ciała i wzmacnia więź. Metoda Ruchu Rozwijającego Sherborne podkreśla znaczenie dotyku w budowaniu relacji.",
      goals: ["świadomość ciała", "koncentracja", "relacja i zaufanie"],
      emotions: ["skupienie", "radość", "bliskość", "rozbawienie"]
    },
    steps: [
      "Dziecko siedzi do Ciebie plecami (na podłodze lub krześle).",
      "Zacznij od prostych kształtów: kółko, kwadrat, trójkąt.",
      "Rysujesz powoli palcem na plecach — dziecko zgaduje.",
      "Gdy idzie dobrze: litery, cyfry, a potem proste rysunki (dom, słońce, drzewo).",
      "Zamieniacie się — dziecko rysuje na Twoich plecach.",
      "Wariant: rysujesz całe zdanie liter — dziecko 'czyta' plecami."
    ],
    tip: "Rysuj wolno i wyraźnie — nie za delikatnie (może być łaskotliwe) ale też nie za mocno. Dziecko może prosić o powtórzenie: 'Jeszcze raz!' Stopniuj trudność — nie frustruj.",
    whyItWorks: "Dotyk na plecach aktywuje receptory Meissnera i Ruffiniego w skórze, wysyłając sygnały do kory somatosensorycznej. Bernadette Sherborne (Developmental Movement for Children) dokumentuje jak ruch i dotyk budują poczucie własnego ciała.",
    prep: ["zero prep"],
    phrases: [
      "Co narysuję? Zgaduj po dotyku...",
      "Trójkąt? Tak! Jak to wyczułeś?",
      "Teraz Ty rysujesz na moich plecach. Zrób coś trudnego!",
      "Literkę A? Zgadnij następną! Powoli..."
    ],
    tellChild: "Usiądź do mnie plecami i zamknij oczy. Będę rysował palcem na Twoich plecach — Twoim zadaniem jest zgadnąć co to!"
  },

  {
    id: 58,
    name: "Kalambury z emocjami",
    type: "kalambury",
    place: ["dom", "podróż"],
    competencies: ["emocje", "empatia", "ekspresja ciała"],
    topics: ["emocje", "relacje", "komunikacja"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Kalambury wyłącznie z emocjami i stanami — pokazujesz ciałem i mimiką: strach, duma, zaskoczenie, nuda. Rozwija słownik emocjonalny i empatię.",
    childNeeds: {
      why: "Rozpoznawanie emocji z mimiki i postawy ciała to podstawa inteligencji emocjonalnej (Goleman, 1995). Dzieci, które potrafią nazwać emocje, lepiej radzą sobie z regulacją własnych stanów.",
      goals: ["słownik emocjonalny", "empatia", "ekspresja niewerbalna"],
      emotions: ["śmiech", "ciekawość", "empatia", "zrozumienie"]
    },
    steps: [
      "Piszesz na karteczkach (lub szepcesz) emocje: radość, smutek, strach, złość, nuda, zdziwienie, duma, wstyd, zazdrość, ekscytacja.",
      "Losujecie karteczkę — ta osoba pokazuje emocję ciałem i twarzą, BEZ słów.",
      "Druga osoba zgaduje i proponuje nazwy emocji.",
      "Rozmawiajcie: 'Kiedy Ty tak się czujesz?'",
      "Wariant: pokazuj stopnie emocji — trochę smutny, bardzo smutny, przytłoczony smutkiem."
    ],
    tip: "Używaj pełnego słownika — nie tylko 'smutny/wesoły'. Ucz odcieni: rozczarowanie vs. smutek, zdenerwowanie vs. złość, podniecenie vs. strach. To buduje prawdziwy EQ.",
    whyItWorks: "Paul Ekman zidentyfikował 6 podstawowych i 27 złożonych emocji z ekspresją twarzy. Nauka rozpoznawania emocji z niewerbalnych sygnałów jest kluczowa dla empatii i teorii umysłu (Premack & Woodruff, 1978).",
    prep: ["karteczki z napisanymi emocjami (opcjonalnie)"],
    phrases: [
      "Jaką emocję pokazuję? Patrz na moją twarz i ciało!",
      "Strach? Blisko! To jest zaskoczenie. Czujesz różnicę?",
      "Kiedy Ty tak się czujesz? Powiedz mi kiedy.",
      "Teraz pokaż mi 'dumę'! Co robisz ciałem?"
    ],
    tellChild: "Gram w kalambury z emocjami! Wylosuję emocję i pokażę Ci ją ciałem i twarzą, a Ty zgadujesz jak to uczucie się nazywa. Gotowy?"
  },

  {
    id: 59,
    name: "Kalambury zawodów",
    type: "kalambury",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["słownictwo", "wyobraźnia", "wiedza o świecie"],
    topics: ["zawody", "codzienność", "praca"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Pokazujesz ciałem czynności związane z zawodami — kucharz miesza, strażak gasi pożar, pilot prowadzi samolot. Rozszerza wiedzę o zawodach i ruchową ekspresję.",
    childNeeds: {
      why: "Wiedza o zawodach i rolach społecznych buduje orientację w świecie dorosłych (Erikson, stadium inicjatywy vs. poczucia winy, 3-6 lat). Kalambury dodają elementy symbolicznej zabawy w role.",
      goals: ["wiedza o świecie", "rozumienie ról społecznych", "ekspresja ruchowa"],
      emotions: ["radość", "ekscytacja", "śmiech", "ciekawość"]
    },
    steps: [
      "Przygotuj listę zawodów dopasowanych do wieku: kucharz, lekarz, strażak, nauczyciel, kierowca, fryzjer, piekarz, ogrodnik.",
      "Jedna osoba losuje lub wybiera zawód i pokazuje go ruchem bez słów.",
      "Druga osoba zgaduje: 'To jest... fryzjer? Lekarz?'",
      "Po odgadnięciu: rozmowa o tym zawodzie: 'Co ten zawód robi? Czy lubisz ich pracę?'",
      "Wariant: pokazujesz dwa zawody na raz zmieszane — zgadywanie co to za mieszanka."
    ],
    tip: "Zacznij od zawodów, które dziecko widuje: lekarz, pielęgniarka, kasjerka, fryzjer. Stopniowo dodawaj mniej oczywiste: archeolog, astronauta, dyrygent. Pytaj dziecko 'Czym chcesz być?' — to dobry punkt wyjścia.",
    whyItWorks: "Zabawa w role i kalambury zawodów wspierają rozwój teorii umysłu i rozumienia perspektywy innych osób. Są szczególnie ważne w wieku 4-7 lat gdy dziecko aktywnie konstruuje rozumienie ról społecznych.",
    prep: ["zero prep (lub karteczki z zawodami)"],
    phrases: [
      "Obserwuj uważnie... co robię? Jaki to zawód?",
      "Tak! Strażak! Jak zgadłeś?",
      "Teraz Ty wybierz zawód i pokaż mi!",
      "Co robi ten zawód na co dzień? Opowiedz mi!"
    ],
    tellChild: "Gram kalambury z zawodami! Wybiorę zawód i pokażę Ci co ta osoba robi w pracy — bez słów! Ty zgadujesz który to zawód!"
  },

  {
    id: 60,
    name: "Kalambury w zwolnionym tempie",
    type: "kalambury",
    place: ["dom", "park"],
    competencies: ["kontrola ciała", "koncentracja", "kreatywność"],
    topics: ["ruch", "ciało", "zabawa"],
    age: [5, 6, 7, 8],
    method: "laban",
    duration: "10-15 min",
    description: "Kalambury w ekstremalnie zwolnionym tempie — pokazujesz czynność 10x wolniej niż normalnie. Uczy kontroli ciała i utrzymywania skupienia.",
    childNeeds: {
      why: "Laban Movement Analysis podkreśla znaczenie pracy z czasem (nagłe/stopniowe) jako jednego z czterech wymiarów ruchu. Ruch w zwolnionym tempie wymaga wyjątkowej kontroli motorycznej i propriocepcji.",
      goals: ["kontrola motoryczna", "koncentracja", "świadomość ciała w ruchu"],
      emotions: ["skupienie", "rozbawienie", "satysfakcja z kontroli"]
    },
    steps: [
      "Tłumaczysz zasadę: wszystko robimy w MEGA zwolnionym tempie, jak slow-motion w filmach.",
      "Zaczynasz sam/sama: sięgasz po kubek i pijesz herbatę — bardzo powoli.",
      "Dziecko zgaduje co robisz.",
      "Zamiana: dziecko wybiera czynność i robi ją w slow-motion.",
      "Wariant trudny: scena z dwóch czynności jedna po drugiej — zgadnij historyjkę!"
    ],
    tip: "Naprawdę zwalniaj — pełna klatka co 2-3 sekundy. Dzieci często są tym rozbawione, ale potem chętnie same próbują. Możecie nagrać video slow-motion na telefonie i obejrzeć efekty.",
    whyItWorks: "Ruch w zwolnionym tempie aktywuje kory czuciowo-motoryczne inaczej niż ruch normalny, zmuszając do świadomej kontroli zamiast automatycznej. Stosowany w rehabilitacji ruchowej i aktorstwie fizycznym (metoda Lecoq).",
    prep: ["zero prep"],
    phrases: [
      "Uwaga, super zwolnione tempo... obserwuj!",
      "Ha! Widzę że coś sięgasz... Czy to... jabłko?",
      "Teraz Ty! Rób coś po baaaardzo powoli!",
      "Nagramy to na telefon i obejrzymy — wyglądasz jak film!"
    ],
    tellChild: "Kalambury w super slow-motion! Pokażę Ci czynność ale baaardzo wolno, jak w filmie zatrzymanym. Zgadnij co robię!"
  },

  {
    id: 61,
    name: "Kalambury z bajek",
    type: "kalambury",
    place: ["dom", "podróż"],
    competencies: ["wyobraźnia", "pamięć", "ekspresja"],
    topics: ["bajki", "literatura dziecięca", "fantazja"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Kalambury wyłącznie z postaci i scen z bajek. Pokazujesz ciałem bohatera bajkowego — dziecko zgaduje postać i skąd pochodzi.",
    childNeeds: {
      why: "Bajki są kluczowym narzędziem transmisji wartości kulturowych i emocjonalnych (Bettelheim, The Uses of Enchantment, 1976). Zabawa z postaciami bajek wspiera zabawę symboliczną i identyfikację z archetypami.",
      goals: ["pamięć narracyjna", "zabawa symboliczna", "ekspresja twórcza"],
      emotions: ["radość", "ekscytacja", "rozbawienie", "duma ze znajomości bajek"]
    },
    steps: [
      "Ustalcie repertuar: jakie bajki zna dziecko?",
      "Jedna osoba wybiera postać (lub losuje z karteczek) i pokazuje ją ruchem i mimiką.",
      "Druga zgaduje: postać i z jakiej bajki!",
      "Bonus: odegrajcie razem kluczową scenę z bajki w zwolnionym tempie.",
      "Wariant: mix postaci z różnych bajek — 'Kopciuszek spotyka Hagrida'!"
    ],
    tip: "Używaj bajek znanych dziecku, nie tych co Ty pamiętasz z dzieciństwa. Zapytaj wcześniej: 'Kogo lubisz najbardziej?' — to Twoja lista postaci. Wariant rodzinny: każdy pokazuje swojego ulubionego bohatera.",
    whyItWorks: "Identyfikacja z postaciami bajkowymi i ich odgrywanie jest formą zabwy symbolicznej opisanej przez Piageta jako kluczowej dla rozwoju myślenia abstrakcyjnego w wieku przedoperacyjnym (2-7 lat).",
    prep: ["opcjonalnie karteczki z postaciami"],
    phrases: [
      "Patrzę na bohatera... z jakiej bajki może być?",
      "Elsa! Tak! I jak pokazałeś jej moc lodu?",
      "Teraz pokaż mi ZŁOCZYŃCĘ z bajki!",
      "A gdyby ta postać spotkała Shreka? Co by zrobili?"
    ],
    tellChild: "Gram w kalambury z bajek! Wybiorę postać z bajki i pokażę Ci ją ciałem — Ty zgadujesz kto to i z jakiej bajki pochodzi!"
  },

  {
    id: 62,
    name: "Rzuty do celu",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["koordynacja oko-ręka", "koncentracja", "cierpliwość"],
    topics: ["sport", "ruch", "precyzja"],
    age: [3, 4, 5, 6, 7],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Rzucanie skarpetek, piłeczek lub woreczków do kubka, miski lub narysowanego na podłodze koła. Trenuje koordynację oko-ręka na każdym poziomie trudności.",
    childNeeds: {
      why: "Koordynacja oko-ręka (hand-eye coordination) jest jedną z fundamentalnych umiejętności ruchowych, kluczową dla pisania, rysowania i uprawiania sportu. Trenowanie rzutów do celu aktywuje wzrokowo-ruchowy łańcuch planowania ruchu.",
      goals: ["koordynacja oko-ręka", "planowanie ruchu", "koncentracja"],
      emotions: ["determinacja", "radość z trafienia", "sportowa rywalizacja"]
    },
    steps: [
      "Przygotuj cel: kubek, miska, narysowane kredą koło, kosz na pranie.",
      "Przygotuj 'pociski': skarpetki zwinięte w kulki, woreczki, piłeczki tenisowe.",
      "Zacznijcie blisko (1 metr) i cofajcie się gdy idzie za łatwo.",
      "Prowadźcie wyniki: kto trafi więcej z 5 rzutów?",
      "Wariant: różne style rzutu — z góry, po ziemi, lewą ręką, za plecami!"
    ],
    tip: "Nie poprawiaj techniki rzutu — dziecko naturalnie dostosuje ruch. Dostosowuj odległość do możliwości, nie do wieku. Jeśli frustracja: przybliż się, świętuj każde trafienie.",
    whyItWorks: "Rzuty do celu wymagają sprzężenia zwrotnego wzrokowo-ruchowego: mózg prognozuje trajektorię, koryguje siłę i kąt, ocenia błąd i adaptuje. Ten system uczenia się przez próbę i błąd jest fundamentem neuroplastyczności ruchowej.",
    prep: ["kubek lub miska", "zwinięte skarpetki lub mała piłeczka"],
    phrases: [
      "Wyceluj... i rzucaj!",
      "Trafienie! Jeden punkt dla Ciebie!",
      "Chybienie — spróbuj zmienić siłę rzutu.",
      "Cofamy się o krok — teraz trudniej!"
    ],
    tellChild: "Czas na turniej rzutów! Kto trafi do kubka z 5 prób, wygrywa rundę! Zaczynam od bliska, ale potem cofamy!"
  },

  {
    id: 63,
    name: "Tor przeszkód z poduszek",
    type: "ruch",
    place: ["dom"],
    competencies: ["koordynacja", "równowaga", "planowanie przestrzenne"],
    topics: ["ruch", "przygoda", "kreatywność"],
    age: [3, 4, 5, 6, 7],
    method: "SI",
    duration: "15-20 min",
    description: "Budujesz (razem!) tor przeszkód z poduszek, krzeseł, kocy i klocków. Potem dziecko go pokonuje na różne sposoby. Integracja sensoryczna przez ruch w przestrzeni.",
    childNeeds: {
      why: "Tory przeszkód angażują propriocepcję, układ przedsionkowy (równowaga) i planowanie motoryczne sekwencji ruchów. Ayres (Sensory Integration) dokumentuje ich wartość w terapii SI i naturalnym rozwoju ruchowym.",
      goals: ["planowanie motoryczne", "równowaga", "integracja sensoryczna"],
      emotions: ["ekscytacja", "determinacja", "duma z ukończenia", "przygoda"]
    },
    steps: [
      "Razem planujecie i budujecie tor: poduszki do przeskakiwania, krzesło do ominięcia, koc do przeczołgania, klocki do przejścia po równoważni.",
      "Dziecko próbuje raz w tempie normalnym.",
      "Wyzwania: z zamkniętymi oczami (Ty asekurujesz!), na czas, z woreczkiem na głowie, tyłem.",
      "Zmieniajcie co jakiś czas układ przeszkód.",
      "Ty też pokonujesz tor — dziecko ocenia Twoją technikę!"
    ],
    tip: "Budowanie toru to połowa zabawy — nie pomijaj tego etapu! Pytaj dziecko 'Co jeszcze możemy dodać?' Asekuruj przy trudniejszych przeszkodach. Rób zdjęcia/filmy — dzieci uwielbiają oglądać siebie w akcji.",
    whyItWorks: "Wielozmysłowe tory przeszkód angażują układ przedsionkowy, proprioceptywny i wzrokowy jednocześnie. Jane Ayres wykazała, że aktywności wymagające planowania przestrzennego sekwencji ruchów są szczególnie wartościowe dla integracji neurologicznej.",
    prep: ["poduszki", "koce", "krzesła", "klocki (cokolwiek jest w domu)"],
    phrases: [
      "Budujemy tor — co tutaj wstawimy?",
      "Start! Przeskocz, przejedź, przeleziesz...",
      "Wow, ukończyłeś w 45 sekund! Pobijasz rekord?",
      "Teraz ja próbuję — punktuj moją technikę!"
    ],
    tellChild: "Budujemy mega tor przeszkód! Ty decydujesz co wstawiamy, a potem go pokonujesz na czas. Gotowy na budowniczego i zawodnika?"
  },

  {
    id: 64,
    name: "Taniec bez muzyki",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["ekspresja ciała", "rytm wewnętrzny", "kreatywność"],
    topics: ["ruch", "emocje", "ciało"],
    age: [3, 4, 5, 6, 7],
    method: "laban",
    duration: "10-15 min",
    description: "Tańczycie do muzyki... która jest w głowie. Wymyślamy swój rytm, swoje tempa, swoje ruchy. Uwalnia ekspresję ruchową bez oceniania.",
    childNeeds: {
      why: "Laban Movement Analysis identyfikuje 4 czynniki ruchu: czas, przestrzeń, siłę i przepływ. Taniec bez zewnętrznego rytmu pozwala dziecku odkryć swój własny rytm wewnętrzny — fundament koordynacji i ekspresji.",
      goals: ["swoboda ekspresji ruchowej", "rytm wewnętrzny", "świadomość ciała"],
      emotions: ["wolność", "radość", "swoboda", "ekspresja"]
    },
    steps: [
      "Wyciszcie muzykę/TV. Mówisz: 'Tańczymy do muzyki w głowie!'",
      "Każdy wymyśla swój rytm — możesz klaskaś, nucić, albo po prostu czuć.",
      "Tańczysz razem z dzieckiem — bez instrukcji, bez 'tak się robi'.",
      "Przerywasz i mówisz motyw: 'Teraz tańczymy jak deszcz! Jak ogień! Jak chmura!'",
      "Obserwujecie swoje ruchy — jak wyglądacie? Jak się czujecie?"
    ],
    tip: "Naprawdę tańcz bez muzyki — nie nucz cicho. To niekomfortowe dla dorosłych, ale cenne. Jeśli dziecko prosi o muzykę — możesz włączyć raz, żeby pokazać różnicę, a potem znowu wyłączyć.",
    whyItWorks: "Taniec spontaniczny (Authentic Movement, metoda Mary Whitehouse) uwalnia ekspresję ruchową od zewnętrznych wzorców. Badania nad tańcem terapeutycznym potwierdzają jego wartość dla regulacji emocjonalnej i interocepcji.",
    prep: ["zero prep", "przestrzeń do ruchu"],
    phrases: [
      "Jaka muzyka gra Ci teraz w głowie?",
      "Tańcz jak ogień! Jak wyglada ogień?",
      "Popatrz na swoje ręce — co one mówią?",
      "Zatańczmy razem! Kopiuj moje ruchy, ja kopię Twoje!"
    ],
    tellChild: "Tańczymy bez muzyki! Każdy tańczy do muzyki w swojej głowie. Nie ma złego sposobu — ruszaj się jak chcesz!"
  },

  {
    id: 65,
    name: "Statua i rzeźbiarz",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["kontrola ciała", "współpraca", "wyobraźnia"],
    topics: ["ciało", "sztuka", "relacja"],
    age: [4, 5, 6, 7, 8],
    method: "sherborne",
    duration: "10-15 min",
    description: "Jedno dziecko (lub rodzic) jest rzeźbiarzem — delikatnie ustawia ciało drugiej osoby (statuty) w wymyśloną pozę. Statua zapamiętuje i utrzymuje pozycję.",
    childNeeds: {
      why: "Ustawianie ciała drugiej osoby i utrzymywanie pozy angażuje propriocepcję, świadomość ciała w przestrzeni i zaufanie do partnera. Metoda Sherborne kładzie nacisk na relację przez dotyk i ruch.",
      goals: ["świadomość ciała", "zaufanie", "kontrola motoryczna"],
      emotions: ["skupienie", "bliskość", "rozbawienie", "zaufanie"]
    },
    steps: [
      "Jedno z Was jest 'rzeźbiarzem', drugie 'gliną' (statua).",
      "Rzeźbiarz delikatnie ustawia ramiona, głowę, nogi, tułów w wymyśloną pozę.",
      "Statua 'zamarza' w tej pozycji i stara się utrzymać jak najdłużej.",
      "Rzeźbiarz nadaje rzeźbie tytuł: 'To jest... smok atakujący!' albo 'Superbohater!'",
      "Zamieniacie się rolami.",
      "Wariant: oboje robiecie takie same pozy i porównujecie!"
    ],
    tip: "Rzeźbiarz musi dotykać delikatnie — ustal zasadę 'miotło dotyk' (nie ciągnij). Statua może powiedzieć 'stop' jeśli poza jest niekomfortowa. Rób zdjęcia rzeźb i twórzcie galerię!",
    whyItWorks: "Doświadczenie 'bycia rzeźbiarzem' i 'bycia rzeźbą' angażuje dwie różne perspektywy proprioceptywne. Metoda ta pochodzi z teatru fizycznego (Augusto Boal, Theatre of the Oppressed) i jest używana w dramo-terapii.",
    prep: ["zero prep"],
    phrases: [
      "Ja jestem rzeźbiarzem, Ty jesteś gliną. Ustawiam Cię...",
      "To jest... 'Wojownik walczący z wiatrem'! Utrzymaj!",
      "Teraz zamieniam sie — Ty mnie rzeźbisz!",
      "Robimy galerię rzeźb — zrób mi zdjęcie!"
    ],
    tellChild: "Ty jesteś gliną, a ja rzeźbiarzem! Delikatnie ustawię Twoje ciało w super pozę i nadaję tytuł rzeźbie. Potem zamieniamy się!"
  },

  {
    id: 66,
    name: "Chodzenie po linie",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["równowaga", "koncentracja", "koordynacja"],
    topics: ["ruch", "ciało", "sport"],
    age: [3, 4, 5, 6, 7],
    method: "SI",
    duration: "10-15 min",
    description: "Układasz sznurek, taśmę malarską lub kredową linię i dziecko chodzi po niej na różne sposoby. Doskonały trening równowagi i układu przedsionkowego.",
    childNeeds: {
      why: "Układ przedsionkowy (równowaga i orientacja) jest pierwszym układem zmysłowym, który się rozwija w płodzie. Chodzenie po wąskiej linii intensywnie go stymuluje — kluczowe dla wszystkich późniejszych umiejętności motorycznych.",
      goals: ["równowaga", "integracja przedsionkowa", "koordynacja"],
      emotions: ["skupienie", "determinacja", "duma z opanowania trudności"]
    },
    steps: [
      "Ułóż linię (taśma, sznurek, narysowana kreda) o długości 3-5 metrów.",
      "Zadanie podstawowe: przejdź po linii stopa za stopą (heel-to-toe).",
      "Zwiększaj trudność: z zamkniętymi oczami, z woreczkiem na głowie, tyłem.",
      "Warianty: skaczenie po punktach, chodzenie bokiem, pełzanie pod 'barierką'.",
      "Mierzcie czas — czy możesz przejść szybciej bez zejścia z linii?"
    ],
    tip: "Taśma malarska to idealne rozwiązanie w domu — nie niszczy podłogi. Rób zakręty i pętle — to trudniejsze niż prosta linia. Dla maluchów: linia może być szeroka (10 cm) na początku.",
    whyItWorks: "Chodzenie po linii wymaga ciągłej korekcji środka ciężkości przez układ przedsionkowy i propriocepcję. Ayres (1979) dokumentuje tę aktywność jako fundament jej programu SI — szczególnie ważną dla dzieci z trudnościami w koncentracji.",
    prep: ["taśma malarska lub sznurek", "ewentualnie kredka do rysowania na chodniku"],
    phrases: [
      "Stopa za stopą, jak linoskoczek!",
      "Uwaga, prawie! Utrzymaj równowagę...",
      "Teraz z zamkniętymi oczami — ja asekuruję!",
      "Pobij swój rekord — poprzednio przeszedłeś w 20 sekund!"
    ],
    tellChild: "Jesteś linoskoczkiem w cyrku! Musisz przejść po tej linii nie schodząc z niej. Zaczynam od łatwego, potem trudniejsze wyzwania!"
  },

  {
    id: 67,
    name: "Lustro ruchowe",
    type: "ruch",
    place: ["dom", "park"],
    competencies: ["naśladowanie", "koncentracja", "współpraca"],
    topics: ["ciało", "relacja", "ruch"],
    age: [3, 4, 5, 6, 7, 8],
    method: "sherborne",
    duration: "10-15 min",
    description: "Stajecie naprzeciwko siebie i naśladujecie swoje ruchy jak lustro. Kto prowadzi — może się zmieniać. Buduje uważność, koncentrację i synchronię.",
    childNeeds: {
      why: "Synchronia ruchowa aktywuje neurony lustrzane i wzmacnia więź interpersonalną. Badania Feldmana (2007) pokazują, że synchronia cielesna matka-dziecko koreluje z bezpiecznym przywiązaniem.",
      goals: ["synchronia ruchowa", "uważność", "koncentracja", "relacja"],
      emotions: ["skupienie", "bliskość", "radość", "rozbawienie"]
    },
    steps: [
      "Stańcie naprzeciwko siebie w odległości wyciągniętych rąk.",
      "Jeden z Was jest 'lustrem' — naśladuje wszystkie ruchy drugiej osoby.",
      "Zacznij powoli: podnosisz rękę, głowę, kucasz... lustro kopiuje.",
      "Przyspieszaj stopniowo. Czy lustro nadąża?",
      "Zmień prowadzącego bez zapowiedzi — czy partner wyczuje zmianę?",
      "Wariant ekstremalny: oboje prowadzą i oboje naśladują jednocześnie!"
    ],
    tip: "Naprawdę spowalniaj na początku — 'lustro' musi zdążyć. Zmiana prowadzącego bez sygnału to najtrudniejszy wariant — dla starszych dzieci. Obserwuj kontakt wzrokowy — to klucz do synchronii.",
    whyItWorks: "Badania Lakoff i Johnsona potwierdzają, że naśladowanie ruchów aktywuje te same sieci neuronowe co wykonywanie oryginału. Ćwiczenie lustrzane jest stosowane w terapii autyzmu i terapii par jako narzędzie synchronizacji.",
    prep: ["zero prep", "przestrzeń do ruchu"],
    phrases: [
      "Jesteś moim lustrem — rób dokładnie to co ja!",
      "Zmieniamy prowadzącego... teraz Ty prowadzisz!",
      "Czy wyczułeś kiedy zmieniłem prowadzenie?",
      "Teraz oboje jesteśmy lustrem — kto kogo kopiuje?"
    ],
    tellChild: "Staniemy naprzeciwko siebie i Ty będziesz moim lustrem! Wszystko co ja robię, Ty robisz jednocześnie — jakbyś był moim odbiciem!"
  },

  {
    id: 68,
    name: "Rytm ciała — beatbox",
    type: "rytm",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["rytm", "koordynacja", "kreatywność muzyczna"],
    topics: ["muzyka", "dźwięk", "ciało"],
    age: [4, 5, 6, 7, 8],
    method: "orff",
    duration: "10-15 min",
    description: "Tworzenie muzyki wyłącznie ciałem: klaszczecie, tupiecie, pstrykajcie, cmokajcie, bijecie w uda, dmuchacie. Komponujecie razem beatbox z ciała.",
    childNeeds: {
      why: "Carl Orff podkreślał, że muzyka zaczyna się od ciała — klaśnięcia, uderzenia, głos. Rhythmik Orff-Schulwerk zaczyna od 'mowy ciałem' zanim wprowadza instrumenty.",
      goals: ["poczucie rytmu", "koordynacja rąk i nóg", "kreatywność muzyczna"],
      emotions: ["radość", "ekscytacja", "duma z kompozycji", "śmiech"]
    },
    steps: [
      "Odkryjcie dźwięki ciała: klaśnięcie, tupnięcie, stukanie w uda, pstrykanie, cmokanie, dmuchanie.",
      "Ustalcie prosty beat: klaśnięcie-tupnięcie-klaśnięcie-tupnięcie.",
      "Ćwiczcie razem przez 8 taktów.",
      "Dziecko proponuje własny rytm — naśladujecie razem.",
      "Złożone: Ty robisz jeden pattern (ręce), dziecko nakłada swój (nogi). Jednoczesne!",
      "Nagrywajcie swoje kompozycje na telefon."
    ],
    tip: "Zacznij od wzoru 4/4: klaśnięcie-klaśnięcie-udo-udo. Gdy idzie dobrze, skomplikuj o element nóg. Nie wymagaj perfekcji rytmu — chodzi o eksplorację. Orff podkreślał: nie ma błędów, są wariacje.",
    whyItWorks: "Rytmika ciałem (body percussion) jest centralnym elementem pedagogiki Orffa. Synchronizacja ruchów z rytmem aktywuje móżdżek, zwoje podstawy i korę przedruchową jednocześnie — wzmacniając koordynację na wielu poziomach.",
    prep: ["zero prep"],
    phrases: [
      "Odkryjmy dźwięki naszego ciała — co potrafisz?",
      "Teraz razem: klask-klask-tup-tup! Próbuj!",
      "Ty wymyśl wzór, ja naśladuję!",
      "Nagramy to na telefon — chcę pokazać naszą kompozycję!"
    ],
    tellChild: "Robimy muzykę ciałem! Klaskanie, tupanie, pstrykanie, stukanie — wszystko liczy się. Razem skomponujemy beatbox!"
  },

  {
    id: 69,
    name: "Echo rytmiczne",
    type: "rytm",
    place: ["dom", "podróż", "park"],
    competencies: ["pamięć słuchowa", "rytm", "koncentracja"],
    topics: ["muzyka", "dźwięk", "komunikacja"],
    age: [3, 4, 5, 6, 7],
    method: "orff",
    duration: "5-10 min",
    description: "Klaszczesz lub tupisz krótki rytm — dziecko powtarza dokładnie jako echo. Potem zamiana. Stopniowo zwiększasz złożoność. Ćwiczenie pamięci rytmicznej.",
    childNeeds: {
      why: "Pamięć rytmiczna to jeden z pierwszych rodzajów pamięci muzycznej. Dzieci powtarzające rytmy rozwijają świadomość fonetyczną, która bezpośrednio przekłada się na umiejętność czytania (Anvari et al., 2002).",
      goals: ["pamięć słuchowa", "poczucie rytmu", "koncentracja"],
      emotions: ["skupienie", "radość z powtórzenia", "duma z opanowania trudnych wzorów"]
    },
    steps: [
      "Zacznij od prostego rytmu 4 uderzeń: klask-klask-klask-klask.",
      "Dziecko powtarza: 'Echo!'",
      "Stopniowo komplikuj: klask-klask-przerwa-klask.",
      "Wprowadź różne dynamiki: głośno-cicho-głośno.",
      "Zmiana ról: dziecko wymyśla, Ty powtarzasz.",
      "Wariant: łańcuch echo — jedno powtarza i od razu dodaje nowy element."
    ],
    tip: "Nie śpiesz się — daj dziecku czas na przetworznie i powtórzenie. Jeśli błąd: spokojnie powtórz oryginalny wzór raz, bez komentarza. Dla starszych: echo musi być CICHE nawet jeśli oryginał był głośny.",
    whyItWorks: "Naśladowanie rytmów angażuje pętlę fonologiczną (Baddeley) — ten sam system co zapamiętywanie słów. Badania potwierdzają, że trening rytmiczny poprawia świadomość fonetyczną lepiej niż bezpośredni trening fonetyczny (Bhide et al., 2013).",
    prep: ["zero prep"],
    phrases: [
      "Posłuchaj mojego rytmu, potem powiedz echo!",
      "Klask-przerwa-klask-klask — Echo?",
      "Brawo! Zapamiętałeś dokładnie!",
      "Teraz Ty wymyślasz, a ja jestem echem!"
    ],
    tellChild: "Jestem rytmicznym mistrzem, Ty jesteś moim echem! Klaszcze rytm, Ty go powtarzasz dokładnie tak samo. Potem zamieniamy sie!"
  },

  {
    id: 70,
    name: "Muzyczny stop",
    type: "rytm",
    place: ["dom", "park"],
    competencies: ["kontrola impulsów", "rytm", "koordynacja"],
    topics: ["muzyka", "ruch", "zabawa"],
    age: [3, 4, 5, 6, 7],
    method: "orff",
    duration: "10-15 min",
    description: "Klasyczna zabawa: tańcz/ruszaj się przy muzyce, zamrożenie w bezruchu gdy muzyka staje. Warianty Orffa: zatrzymaj się w rytmie, nie na koniec piosenki.",
    childNeeds: {
      why: "Kontrola impulsów (hamowanie zachowania) to kluczowa funkcja wykonawcza rozwijająca się w wieku przedszkolnym. Zabawy wymagające nagłego zatrzymania trenują korę przedczołową odpowiedzialną za hamowanie.",
      goals: ["kontrola impulsów", "funkcje wykonawcze", "poczucie rytmu"],
      emotions: ["ekscytacja", "napięcie oczekiwania", "rozbawienie"]
    },
    steps: [
      "Włącz muzykę i tańczcie razem dowolnie.",
      "Zatrzymujesz muzykę — wszyscy zamrażają się jak statuy!",
      "Wariant rytmiczny: klaszczesz raz = stop, dwa razy = ruszaj!",
      "Wariant emocjonalny: ruszaj się smutno/radośnie/wolno/szybko — stop!",
      "Wariant bez muzyki: nucisz i zatrzymujesz się — dziecko naśladuje."
    ],
    tip: "Zwlekaj ze stop — buduj napięcie oczekiwania. Jeśli nie ma muzyki: nucenie, klaskanie lub bębnienie w stół działa równie dobrze. Dla starszych: stop na konkretny dźwięk (tylko bęben, nie gitar).",
    whyItWorks: "Inhibition control (hamowanie) jest jedną z trzech core executive functions obok pamięci roboczej i elastyczności (Diamond, 2013). Zabawy stop-and-go wykazują transfer na samoregulację w szkole.",
    prep: ["telefon z muzyką lub bezpośrednie nucenie/klaskanie"],
    phrases: [
      "Tańcz, tańcz... STOP!",
      "Nie ruszaj się! Jak statua!",
      "Ruszamy! Tańcz jak chcesz!",
      "Teraz Ty kontrolujesz muzykę — ja tańczę i zatrzymuję się na Twój sygnał!"
    ],
    tellChild: "Gdy gra muzyka — tańczymy! Gdy muzyka staje — zamrażamy się jak statuy! Sprawdzamy kto jest szybszy!"
  },

  {
    id: 71,
    name: "Rytmiczne opowiadanie",
    type: "rytm",
    place: ["dom", "podróż"],
    competencies: ["rytm", "język", "wyobraźnia"],
    topics: ["muzyka", "narracja", "słowa"],
    age: [4, 5, 6, 7, 8],
    method: "orff",
    duration: "10-15 min",
    description: "Opowiadacie bajkę klepiac rytm. Każda postać ma swój rytm: krasnoludek — trzy szybkie klaśnięcia, smok — dwa wolne uderzenia. Łączy narrację z rytmiką.",
    childNeeds: {
      why: "Orff-Schulwerk łączy słowo, ruch i muzykę jako niepodzielną całość. Nadawanie rytmicznych motywów postaciom bajek buduje poczucie formy muzycznej i pamięć narracyjną jednocześnie.",
      goals: ["pamięć rytmiczna", "narracja", "kreatywność muzyczna"],
      emotions: ["radość", "koncentracja", "ekscytacja twórcza"]
    },
    steps: [
      "Wybieracie bajkę (np. Trzy świnki lub wymyślacie własną).",
      "Każda postać dostaje rytmiczny motyw: świnka = klask-klask, wilk = pow-pow (uda), dom = stuk-stuk (stół).",
      "Opowiadasz bajkę powoli, a gdy pojawia się postać — wszyscy grają jej rytm.",
      "Dziecko przejmuje opowiadanie, Ty grasz rytmy.",
      "Twórzcie własne postacie i własne rytmy!"
    ],
    tip: "Zacznij od bajki z 2-3 postaciami. Ćwicz motywy przed opowiadaniem. Gdy dziecko opanuje, może samo opowiadać i grać jednocześnie — to poziom zaawansowany!",
    whyItWorks: "Kodowanie informacji narracyjnych w rytmiczne motywy angażuje zarówno werbalną jak i muzyczną pamięć długoterminową. Technika muzycznych 'tematów postaci' pochodzi z motywów przewodnich Wagnera i jest stosowana w edukacji muzycznej dzieci.",
    prep: ["zero prep"],
    phrases: [
      "Każda postać w bajce ma swój rytm — słuchaj!",
      "Gdy mówię 'wilk' — wszyscy gramy: pow-pow!",
      "Teraz Ty opowiadasz, a ja gram rytmy postaci!",
      "Wymyslmy nową postać — jaki rytm do niej pasuje?"
    ],
    tellChild: "Opowiemy bajkę z rytmami! Każda postać ma swój rytm — gdy pojawia się w bajce, klaskamy jej rytm. Zaczynam opowiadać!"
  },

  {
    id: 72,
    name: "Instrument z kuchni",
    type: "rytm",
    place: ["dom"],
    competencies: ["kreatywność", "rytm", "odkrywanie dźwięków"],
    topics: ["muzyka", "dźwięk", "dom"],
    age: [3, 4, 5, 6, 7],
    method: "orff",
    duration: "15-20 min",
    description: "Odkrywacie razem jakie dźwięki wydają przedmioty z kuchni: garnki, drewniane łyżki, plastikowe pojemniki, ziarna ryżu w słoiku. Tworzycie orkiestrę domową.",
    childNeeds: {
      why: "Eksploracja dźwięków niemusycznych przedmiotów to centralna zasada pedagogiki Orffa i John Cage'a ('musicircus'). Dzieci naturalnie perkutują wszystko — dajemy temu kontekst i strukturę.",
      goals: ["eksploracja sensoryczna", "kreatywność muzyczna", "poczucie rytmu"],
      emotions: ["ciekawość odkrycia", "radość tworzenia", "ekscytacja"]
    },
    steps: [
      "Zbieracie z kuchni: garnek z pokrywką, drewniana łyżka, plastikowe pudełko, słoik z ryżem lub grochem.",
      "Odkrywacie dźwięki: co brzmi tępo, co ostro, co dzwoni, co szeleszcze?",
      "Każdy wybiera swój 'instrument'.",
      "Razem tworzycie beat — jedna osoba stały rytm, druga go ozdabia.",
      "Nagrywajcie i odsłuchujcie efekty."
    ],
    tip: "Ochrona uszu: nie pozwól bić w metalowe garnki przy samym uchu! Papier do pieczenia w bębnie daje inny brzmienie. Ryż w zamkniętym słoiku = marakasy. Baw się razem — nie bój się hałasu.",
    whyItWorks: "Eksploracja timbru (barwy dźwięku) jest pierwszym etapem edukacji muzycznej Orffa. Dzieci, które bawią się dźwiękami, rozwijają discriminację słuchową — ważną dla nauki czytania i muzyki.",
    prep: ["garnki i pokrywki", "drewniane łyżki", "słoik z ryżem lub grochem"],
    phrases: [
      "Co to za dźwięk? Spróbuj uderzyć mocniej!",
      "Ten słoik brzmi jak marakasy! Potrząsaj!",
      "Razem robimy beat: Ty bęben, ja marakasy!",
      "Nagrajmy naszą orkiestrę na telefon!"
    ],
    tellChild: "Szukamy instrumentów w kuchni! Każdy garnuszek, łyżka i słoik może być instrumentem. Tworzymy własną orkiestrę!"
  },

  {
    id: 73,
    name: "Bajka odwrócona",
    type: "narracja",
    place: ["dom", "podróż"],
    competencies: ["narracja", "wyobraźnia", "elastyczność myślenia"],
    topics: ["bajki", "wartości", "fantazja"],
    age: [5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Opowiadacie znajomą bajkę, ale z odwróconymi rolami: zły wilk jest dobry, Czerwony Kapturek jest zły. Albo opowiadasz bajkę 'z perspektywy złoczyńcy'. Rozwija elastyczność myślenia.",
    childNeeds: {
      why: "Teoria umysłu (zdolność do rozumienia perspektyw innych) dojrzewa od 4. roku życia. Zabawa w opowiadanie z perspektywy antagonisty to zaawansowane ćwiczenie perspective-taking (Premack & Woodruff).",
      goals: ["teoria umysłu", "elastyczność narracyjna", "krytyczne myślenie"],
      emotions: ["zaciekawienie", "śmiech", "intelektualna ciekawość"]
    },
    steps: [
      "Wybieracie znajomą bajkę: Kopciuszek, Czerwony Kapturek, Trzy świnki.",
      "Ustalajcie odwrócenie: 'A co gdyby wilk był dobry i próbował ostrzec świnki?'",
      "Opowiadacie bajkę na zmianę — jeden zaczyna zdanie, drugi kończy.",
      "Zatrzymujcie się i rozmawiajcie: 'Dlaczego ta postać tak zrobiła?'",
      "Narysujcie 'odwróconą bajkę' albo odegrajcie ją jako teatrzyk."
    ],
    tip: "Nie narzucaj interpretacji — pytaj 'A może wilk był głodny, bo...' i pozwól dziecku domyślić resztę. Dla starszych: bajka z perspektywy PRZEDMIOTU (pero Kopciuszka, dom ze słomy).",
    whyItWorks: "Perspective-taking through narrative jest kluczowym mechanizmem rozwoju empatii (Keen, 2007). Dziecko, które potrafi opowiedzieć historię z pozycji 'złoczyńcy' rozumie motywacje innych lepiej niż to, które tylko słucha bajek.",
    prep: ["zero prep"],
    phrases: [
      "Co gdyby wilk był dobry? Jak wyglądałaby bajka?",
      "A dlaczego wilk naprawdę dmuchał? Może miał powód?",
      "Opowiedz mi tę samą bajkę, ale z perspektywy chatki.",
      "Kto jest 'zły' w tej bajce? A może każdy miał rację po swojemu?"
    ],
    tellChild: "Opowiemy bajkę na odwrót! W naszej wersji zły wilk jest dobry, a Czerwony Kapturek... sama zdecyduj! Zaczynamy!"
  },

  {
    id: 74,
    name: "Historyjka łańcuchowa",
    type: "narracja",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["narracja", "słuchanie", "wyobraźnia"],
    topics: ["fantazja", "język", "współpraca"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Każdy dodaje jedno zdanie do wspólnej historyjki. Rzut kostką lub karta losowa określa element, który MUSI się pojawić w następnym zdaniu.",
    childNeeds: {
      why: "Collaborative storytelling wymaga słuchania, planowania narracyjnego i szybkiego generowania kontynuacji. Rozwija pamięć roboczą i elastyczność językową jednocześnie.",
      goals: ["narracja", "słuchanie aktywne", "pamięć robocza", "elastyczność językowa"],
      emotions: ["radość tworzenia", "zaciekawienie co się zdarzy", "duma z pomysłów"]
    },
    steps: [
      "Zaczynacie: 'Dawno dawno temu żył sobie...' (dziecko kończy).",
      "Opowiadacie na zmianę — jedno zdanie każdy.",
      "Co 3-4 zdania losujecie z puli słów: 'Teraz MUSI pojawić się: smok / muzeum / parasol / ciastko!'",
      "Próbujcie zamknąć historię razem: 'I wtedy...'",
      "Nagrywajcie albo rysujcie komiks do bajki!"
    ],
    tip: "Nie poprawiaj logiki historii — wszystko jest możliwe. Gdy dziecko utyka: daj 3 sekundy, potem zaproponuj opcje: 'Może smok mówi... albo smok leci...?' Celebruj nieoczekiwane zwroty.",
    whyItWorks: "Collaborative storytelling angażuje zarówno generowanie jak i integrację narracyjną. Badania Mar & Oatley (2008) pokazują, że ekspozycja na i tworzenie narracji fikocjonalnych wzmacnia teorię umysłu i rozumienie innych ludzi.",
    prep: ["opcjonalnie karteczki ze słowami-niespodziankami"],
    phrases: [
      "Moje zdanie: '...a wtedy pojawił sie kosmita.' Twoja kolej!",
      "Uwaga, losuję słowo — w następnym zdaniu MUSI być: 'banan'!",
      "Jak tu zakończymy? Pomyśl o dobru i złu...",
      "Ta historia jest NIESAMOWITA. Nagramy ją?"
    ],
    tellChild: "Tworzymy razem bajkę! Ja mówię jedno zdanie, Ty następne, ja kolejne... i tak aż wymyślimy całą historię! A co się stanie — nie wiadomo!"
  },

  {
    id: 75,
    name: "Wywiad z zabawką",
    type: "narracja",
    place: ["dom"],
    competencies: ["narracja", "wyobraźnia", "empatia", "język"],
    topics: ["fantazja", "relacje", "emocje"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Dziecko 'przeprowadza wywiad' z ulubioną zabawką, lalką lub pluszakiem (Ty odpowiadasz w imieniu zabawki). Co zabawka lubi? Czego się boi? Co dzisiaj robiła?",
    childNeeds: {
      why: "Rozmowa z obiektem-pośrednikiem (zabawką) obniża barierę ekspresji emocjonalnej. Dzieci często łatwiej mówią o emocjach przez pryzmat bohatera-proxy niż bezpośrednio.",
      goals: ["ekspresja emocjonalna", "narracja", "wyobraźnia symboliczna"],
      emotions: ["radość", "ciepło", "otwartość emocjonalna", "ciekawość"]
    },
    steps: [
      "Dziecko wybiera zabawkę do wywiadu.",
      "Ty 'ożywiasz' zabawkę: trzymasz ją i odpowiadasz w jej imieniu.",
      "Dziecko zadaje pytania jak dziennikarz: 'Co lubisz jeść? Skąd pochodzisz? Czy masz przyjaciół?'",
      "Zabawka może opowiadać o swoich 'przygodach' i 'problemach'.",
      "Dziecko prowadzi notatnik i rysuje 'artykuł' o zabawce.",
      "Zamiana: dziecko jest zabawką, Ty przeprowadzasz wywiad."
    ],
    tip: "Bądź kreatywny w roli zabawki — daj jej specyficzny głos, historię i charakter. Możesz subtelnie przeplatać emocje dziecka: 'Mis powiedział mi, że trochę boi się ciemności — a Ty?'",
    whyItWorks: "Terapia narracyjna (White & Epston) i zabawa projeksyjna używają obiektów-pośredników do bezpiecznej eksploracji emocji. Dziecko mówiące przez zabawkę ma odczucie kontroli nad ekspresją.",
    prep: ["ulubiona zabawka lub pluszak dziecka"],
    phrases: [
      "Mam tu wyjątkowego gościa do wywiadu — powiedz cześć!",
      "Panie Misiu, co Pan lubi najbardziej?",
      "A czego się Pan boi?",
      "Napisz artykuł o swoim gościu — co odkryłeś?"
    ],
    tellChild: "Jesteś dziennikarzem! Masz tu wyjątkowego gościa do wywiadu — Twoją ulubioną zabawkę. Pytaj o wszystko co chcesz wiedzieć!"
  },

  {
    id: 76,
    name: "Mapa skarbu w domu",
    type: "narracja",
    place: ["dom"],
    competencies: ["wyobraźnia", "orientacja przestrzenna", "narracja"],
    topics: ["przygoda", "przestrzeń", "planowanie"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "20-30 min",
    description: "Razem rysujecie mapę domu/pokoju, chowasz skarb i tworzysz wskazówki-zagadki. Dziecko czyta mapę i zagadki i szuka skarbu. Łączy narrację z orientacją przestrzenną.",
    childNeeds: {
      why: "Czytanie map to zaawansowana umiejętność reprezentacji przestrzennej. Dzieci w wieku 5-7 lat zaczynają rozumieć mapy jako reprezentacje przestrzeni (Blades & Spencer, 1994).",
      goals: ["orientacja przestrzenna", "rozumienie map", "narracja przygodowa"],
      emotions: ["ekscytacja", "napięcie", "duma z odkrycia", "przygoda"]
    },
    steps: [
      "Razem rysujecie mapę pokoju lub mieszkania: 'Tu jest łazienka, tu kanapa, tu moje biurko...'",
      "Ty chowasz 'skarb' (naklejki, czekoladka, mała zabawka).",
      "Rysujesz X na mapie i piszesz wskazówki: 'Idz do miejsca gdzie siedzi Teddy. Obejrzyj sie w prawo.'",
      "Dziecko z mapą w reku szuka skarbu.",
      "Zamiana ról: dziecko chowa skarb i rysuje mapę dla Ciebie!"
    ],
    tip: "Zacznij od bardzo prostej mapy pokoju dziecka (3-4 elementy). Wskazówki dostosuj do wieku: proste (zdjęcia) dla 4-latka, zdania dla 6-latka, rebusy dla 8-latka. Skarb zawsze jest warty poszukiwania!",
    whyItWorks: "Badania Uttal et al. (2013) wykazują, że trening umiejętności przestrzennych (mapy, origami, klocki) transfer do matematyki i nauk ścisłych. Orientacja na mapie to wczesny trening myślenia abstrakcyjnego.",
    prep: ["kartka do rysowania mapy", "skarb (naklejki, czekoladka)", "długopis"],
    phrases: [
      "Narysujmy mapę naszego domu! Co tu zaznaczamy?",
      "Skarb jest ukryty — oto mapa i wskazowki!",
      "X na mapie to cel — gdzie to jest w domu?",
      "Znalazłeś! Teraz Ty chowasz skarb dla mnie!"
    ],
    tellChild: "Rysujemy mapę skarbów! Narysujemy nasz dom na kartce, potem schowam skarb i zaznaczę gdzie jest. Twoim zadaniem jest go znaleźć!"
  },

  {
    id: 77,
    name: "Opowiadanie z rekwizytem",
    type: "narracja",
    place: ["dom", "podróż"],
    competencies: ["narracja", "wyobraźnia", "język"],
    topics: ["fantazja", "przedmioty", "twórczość"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Losujecie przedmiot z torby lub szuflady i budujecie wokół niego historię. Przedmiot MUSI być bohaterem albo kluczowym elementem bajki. Uczy tworzenia narracji z ograniczeniami.",
    childNeeds: {
      why: "Twórcze ograniczenia (rekwizyt jako obowiązkowy element) paradoksalnie pobudzają kreatywność. Psycholog Patricia Stokes udowodniła, że ograniczenia wymuszają poszukiwanie nowych rozwiązań.",
      goals: ["twórcza narracja", "elastyczność wyobraźni", "wzbogacanie języka"],
      emotions: ["radość tworzenia", "intelektualne pobudzenie", "duma z oryginalności"]
    },
    steps: [
      "Zbierz do torby 10 różnych przedmiotów: klucz, kamień, guzik, piórko, łyżeczka, korek.",
      "Losujecie bez patrzenia.",
      "Wylosowany przedmiot MUSI być w historii — jako bohater, miejsce, magiczny artefakt.",
      "Opowiadacie historię na zmianę.",
      "Losujecie drugi przedmiot w połowie historii — musi się pojawić!",
      "Zbierajcie ulubione historyjki do 'zeszytu magicznych bajek'."
    ],
    tip: "Nie sugeruj jak użyć przedmiotu — czekaj na pomysł dziecka. Jeśli klucz to Twoja inspiracja do 'magicznego klucza', dziecko może wymyślić że to 'żółta trawa jedzonych przez konia'. Akceptuj wszystkie interpretacje.",
    whyItWorks: "Constrained creativity (twórczość z ograniczeniami) jest paradoksalnie bardziej efektywna niż swobodna. Klasyczne badania Ward (1994) pokazują, że ograniczenia zmuszają do poszukiwania nowatorskich asocjacji.",
    prep: ["torba", "10 małych różnorodnych przedmiotów"],
    phrases: [
      "Losuj — bez patrzenia! Co wyciągnąłeś?",
      "Ten przedmiot MUSI być w naszej historii. Jak go użyjemy?",
      "Losujemy drugi przedmiot — musi sie pojawić!",
      "Ta historyjka jest tak dobra, że zapisuję ją do naszej magicznej księgi!"
    ],
    tellChild: "Losujemy magiczny rekwizyt! Cokolwiek wyciągniesz z torby, musi być w naszej bajce. Zaczynamy tworzyć historię!"
  },

  {
    id: 78,
    name: "Wieża z kart",
    type: "budowanie",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["precyzja", "cierpliwość", "planowanie"],
    topics: ["konstruowanie", "fizyka", "geometria"],
    age: [5, 6, 7, 8],
    method: "montessori",
    duration: "15-20 min",
    description: "Budowanie wieży z kart do gry — klasyczne wyzwanie równowagi i precyzji. Zaczynasz od prostych trójkątów, budujesz coraz wyżej. Uczy cierpliwości i rozumienia fizyki.",
    childNeeds: {
      why: "Budowanie z kart wymaga wyjątkowej kontroli motorycznej precyzyjnej (fine motor) i zrozumienia środka ciężkości. Niepowodzenie jest integralną częścią nauki — każda zawalona wieża to feedback o fizyce.",
      goals: ["motoryka mała", "cierpliwość", "rozumienie równowagi i fizyki"],
      emotions: ["skupienie", "determinacja", "napięcie", "duma z osiągnięcia"]
    },
    steps: [
      "Zacznijcie od podstawy: dwie karty ustawione pionowo, jedna karta poziomo na górze.",
      "Dodajcie kolejne piętra — ostrożnie!",
      "Gdy wieża się przewróci: spokojnie, analizujcie dlaczego: 'Co ją przewróciło?'",
      "Szukajcie sposobów na stabilność: szeroka podstawa, symetria, brak wibracji.",
      "Wyzwanie: czy uda się postawić więcej pięter niż poprzednio?"
    ],
    tip: "Rób to na miękkiej macie albo dywanie — karty tłumiej wibracje. Nie dmuchaj, nie dotykaj stołu gdy budujesz. Dla małych dzieci: zacznij od prostszej struktury (karta + karta bez dachu). Liczy się próba, nie rekord.",
    whyItWorks: "Budowanie z kart aktywuje planowanie przestrzenne, przewidywanie konsekwencji (jeśli tu dodam karte, co sie stanie?) i tolerancje frustracji. Rozumienie fizyki intuicyjnej przez doświadczenie jest efektywniejsze niż przez wyjaśnienie (Piaget).",
    prep: ["talia kart do gry", "stabilna powierzchnia"],
    phrases: [
      "Ostrożnie... powoli... kładziemy dach...",
      "Ups! Rozleciała sie. Dlaczego myślisz? Co poprawimy?",
      "Juz 4 piętra! Bije rekord!",
      "Następny raz szersza podstawa — sprawdzamy czy to pomoże?"
    ],
    tellChild: "Budujemy wieżę z kart! To wymaga super cierpliwości i delikatnych rąk. Każde zawalenie to nauka — see how high we can go!"
  },

  {
    id: 79,
    name: "Budowanie z lodowych patyków",
    type: "budowanie",
    place: ["dom"],
    competencies: ["konstruowanie", "planowanie", "kreatywność"],
    topics: ["geometria", "architektura", "konstruowanie"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "20-30 min",
    description: "Łączenie drewnianych patyczków (patyczki do lodów) plastiliną lub klejem i budowanie 3D-konstrukcji. Dom, most, rama, klatka — co wymyśli dziecko?",
    childNeeds: {
      why: "Budowanie trójwymiarowych struktur z liniowych elementów wymaga wyobraźni przestrzennej, planowania i rozumienia połączeń. Montessori: 'Ręce są narzędziem umysłu.'",
      goals: ["myślenie przestrzenne", "planowanie konstrukcji", "motoryka mała"],
      emotions: ["twórcze skupienie", "duma z konstrukcji", "determinacja"]
    },
    steps: [
      "Przygotuj patyczki i plastelinę lub ciepłe kleju pistoletu (tylko Ty).",
      "Zacznijcie od prostej figury 2D: kwadrat, trójkąt z patyczków.",
      "Przejdźcie do 3D: sześcian, piramida.",
      "Swobodne budowanie: co chcesz zbudować? Dom? Most? Rakietę?",
      "Testuj wytrzymałość: czy konstrukcja utrzyma cięzar monety?"
    ],
    tip: "Plastelina jako 'klejnoty' w narożnikach: ugnij kulkę, wbij patyczki. Dla starszych: klej pistolet (Ty trzymasz). Nie naprowadzaj jak budować — obserwuj jak dziecko samo rozgryza problem połączeń.",
    whyItWorks: "Constructionism (Papert, 1980) podkreśla, że najgłębsza nauka następuje gdy dzieci budują rzeczy, które mogą pokazać innym. Budowanie z patyczków jako aktywność STEM jest dokumentowane w badaniach nad myśleniem inżynierskim dzieci.",
    prep: ["patyczki do lodów (drewniane)", "plastelina lub pistolet do kleju"],
    phrases: [
      "Co chcesz zbudować? Narysuj plan albo zacznij od razu!",
      "Jak złączymy te dwa patyczki w narożniku?",
      "Sprawdzamy wytrzymałość: kładziemy monetę na dachu...",
      "To jest wyjątkowa architektura! Jak ją nazwiemy?"
    ],
    tellChild: "Dzisiaj jesteś architektem! Z patyczków i plasteliny możesz zbudować cokolwiek — dom, most, statek kosmiczny. Co budujesz?"
  },

  {
    id: 80,
    name: "Statek z gazety",
    type: "budowanie",
    place: ["dom"],
    competencies: ["origami", "planowanie", "fizyka"],
    topics: ["konstruowanie", "woda", "fizyka"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "15-20 min",
    description: "Składacie z gazety lub papieru łódkę lub statek metodą origami, a potem testujecie czy pływa. Eksperymentujecie z kształtami i obciążaniem.",
    childNeeds: {
      why: "Łączenie origami (planowanie sekwencji złożenia) z testem pływalności (fizyka) tworzy naturalne doświadczenie STEM: hipoteza ('czy popłynie?') + test + obserwacja + wnioski.",
      goals: ["myślenie sekwencyjne", "fizyka intuicyjna (pływalność)", "motoryka mała"],
      emotions: ["ekscytacja testu", "radość sukcesu", "ciekawość naukowa"]
    },
    steps: [
      "Złóżcie prostą łódkę origami z gazety lub papieru (wspólnie, krok po kroku).",
      "Pytanie: 'Czy ta łódka popłynie? Ile ładunku (monet) wytrzyma?'",
      "Test w misce z wodą: kładziecie monety jedna po drugiej.",
      "Eksperymentujcie z kształtami: jakie dno jest lepsze? Głęboka miska czy płaska?",
      "Budujesz flotę i organizujecie regaty w wannie!"
    ],
    tip: "Gazeta dobrze chłonie wodę — nie graj za długo. Papier do drukarki wytrzyma dłużej. Dla 4-latków: przygotuj już złożoną łódkę, skupcie się na eksperymencie z pływaniem.",
    whyItWorks: "Badania wykazują, że dzieci, które przeprowadzają własne eksperymenty (nawet proste jak tonące/pływające obiekty), rozwijają rozumienie naukowe skuteczniej niż przez obserwację (Gopnik, The Gardener and the Carpenter).",
    prep: ["gazeta lub papier", "miska z wodą", "monety do ładowania"],
    phrases: [
      "Jak myślisz: czy ta łódka popłynie?",
      "Kładziemy pierwszą monetę... trzyma! Dwie... trzy...",
      "Ups, zatonęła przy piątej! Jak zmodyfikujemy łódkę?",
      "Regaty! Czyja łódka dopłynie jako pierwsza?"
    ],
    tellChild: "Budujemy flotę z gazety i testujemy kto wytrzyma więcej ładunku! Najpierw składamy łódkę, potem ją ładujemy monetami — ile uniesie zanim zatonie?"
  },

  {
    id: 81,
    name: "Miasto z pudełek",
    type: "budowanie",
    place: ["dom"],
    competencies: ["konstruowanie", "wyobraźnia", "planowanie przestrzenne"],
    topics: ["architektura", "miasto", "współpraca"],
    age: [3, 4, 5, 6, 7],
    method: "klasyczna",
    duration: "30-40 min",
    description: "Budujecie miasto z kartonowych pudełek (po butach, po płatkach). Ulice, budynki, parki — zabawa trwa kilka dni jeśli chcecie. Mega projekt kreatywny.",
    childNeeds: {
      why: "Duże projekty budowlane (city-building) angażują planowanie przestrzenne, myślenie systemowe (jak działa miasto?) i długofalowe myślenie projektowe. Szczególnie cenne dla dzieci w wieku 5-8 lat.",
      goals: ["myślenie systemowe", "planowanie przestrzenne", "długofalowe zaangażowanie"],
      emotions: ["twórcza ekscytacja", "duma z dziela", "poczucie sprawczości"]
    },
    steps: [
      "Zbierzcie pudełka różnych rozmiarów (kilka dni wcześniej!).",
      "Planujecie miasto: co tu będzie? Sklep, szpital, dom, park, lotnisko?",
      "Budujecie: klejem lub taśmą łączycie pudełka, malujecie, rysujecie okna.",
      "Dodajcie szczegóły: drogi z papieru, drzewa z papierowych rurek, samochody z klocków.",
      "Zabawa w mieście: mieszkańcy (figurki, plastelina) poruszają się po mieście.",
      "Zostawcie miasto na kilka dni — każdego dnia dodajcie coś nowego."
    ],
    tip: "Zrób 'zdjęcie miasta' co dzień i stwórzcie album jego budowy. Włącz dziecko w planowanie od początku: 'Gdzie będzie poczta? Potrzebujemy szpitala?' To nie Twój projekt — asystuj, nie przejmuj inicjatywy.",
    whyItWorks: "Project-based learning (PBL) angażuje dzieci w wielodniowe projekty twórcze. Badania Krajcika & Shin (2014) potwierdzają, że PBL zwiększa zaangażowanie, rozumienie koncepcji i transfer wiedzy do nowych sytuacji.",
    prep: ["pudełka kartonowe różnych rozmiarów", "klej lub taśma", "nożyczki", "kredki lub farby"],
    phrases: [
      "Co chcesz żeby było w naszym mieście?",
      "To jest ratusz — narysujemy na nim okna!",
      "Potrzebujemy parku — jak zrobimy drzewa?",
      "Jutro dodamy lotnisko. Co jeszcze brakuje?"
    ],
    tellChild: "Budujemy własne miasto! Z pudełek zrobimy sklepy, domy, parki i ulice. Ty jesteś burmistrzem — decydujesz co będzie w naszym mieście!"
  },

  {
    id: 82,
    name: "Obserwator natury",
    type: "obserwacja",
    place: ["park"],
    competencies: ["uważność", "kategoryzacja", "wiedza o naturze"],
    topics: ["natura", "środowisko", "nauka"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "20-30 min",
    description: "Spacer z listą obserwacji: zbieracie liście różnych kształtów, szukacie owadów, słuchacie ptaków, liczycie kolory kwiatów. Dziecko prowadzi zeszyt obserwatora.",
    childNeeds: {
      why: "Kontakt z naturą obniża kortyzol i poprawia koncentrację (teoria przywracania uwagi, Kaplan, 1995). Systematyczna obserwacja natury buduje bazę wiedzy przyrodniczej i uczy metody naukowej.",
      goals: ["uważność sensoryczna", "klasyfikacja i kategoryzacja", "wiedza przyrodnicza"],
      emotions: ["spokój", "ciekawość", "skupienie", "radość odkrycia"]
    },
    steps: [
      "Przygotuj 'zeszyt obserwatora' (złożona kartka) i ołówek.",
      "Ustalcie misję: 'Dzisiaj szukamy 5 różnych kształtów liści i 3 rodzajów dźwięków!'",
      "W parku: zatrzymujecie się co kilka minut i obserwujecie.",
      "Dziecko rysuje lub opisuje co widzi/słyszy/dotyka.",
      "Na końcu: przegldacie zeszyt i rozmawiacie o odkryciach."
    ],
    tip: "Nie spieszcie się. Zatrzymaj się gdy dziecko coś odkryje — nawet zwykła biedronka jest warta 5 minut obserwacji. Lupa kieszonkowa zamienia każdy spacer w ekspedycję naukową.",
    whyItWorks: "Metoda Montessori podkreśla obserwację jako pierwsza umiejętność naukową. Kontakt z naturą i jej systematyczna obserwacja wzmacnia nie tylko wiedzę, ale też regulację emocjonalną i koncentrację (Louv, Last Child in the Woods).",
    prep: ["mała kartka złożona na pół jako zeszyt", "ołówek", "opcjonalnie lupa"],
    phrases: [
      "Zatrzymaj sie i posłuchaj — ile różnych dźwięków słyszysz?",
      "Narysuj ten liść! Jaki ma kształt? Co Ci przypomina?",
      "Biedronka! Ile ma kropek? Liczymy razem!",
      "Co dzisiaj odkryłeś czego nie wiedziałeś wcześniej?"
    ],
    tellChild: "Jesteś dzisiaj przyrodnikiem! Masz zeszyt obserwatora. Naszą misją jest znaleźć i zapisać 5 różnych liści, 3 dźwięki i 2 owady. Zaczynamy ekspedycję!"
  },

  {
    id: 83,
    name: "Co się zmieniło?",
    type: "obserwacja",
    place: ["dom", "park"],
    competencies: ["spostrzegawczość", "pamięć wzrokowa", "koncentracja"],
    topics: ["codzienność", "zmiany", "obserwacja"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Zmieniasz coś w pokoju lub na sobie (zamieniasz zegarek na inne ręce, zdejmujesz jeden kolczyk) gdy dziecko nie patrzy — ono szuka co się zmieniło.",
    childNeeds: {
      why: "Wykrywanie zmian wizualnych wymaga aktywnego tworzenia i porównywania reprezentacji umysłowych. Angażuje pamięć wzrokowo-przestrzenną i skanowanie selektywne — kluczowe dla koncentracji.",
      goals: ["pamięć wzrokowa", "koncentracja", "spostrzegawczość"],
      emotions: ["napięcie detektywa", "satysfakcja z odkrycia", "skupienie"]
    },
    steps: [
      "Dziecko patrzy na Ciebie lub na ułożone przedmioty przez 30 sekund.",
      "Odwraca wzrok (liczy do 10).",
      "Zmieniasz 1-3 rzeczy: przekładasz coś, zdejmujesz element, odwracasz obiekt.",
      "Dziecko otwiera oczy i szuka zmian.",
      "Wariant na zewnątrz: wracacie inną drogą — co się zmieniło w otoczeniu?"
    ],
    tip: "Zacznij od 1 zmianę, stopniuj do 3. Dla starszych: zmień 5 rzeczy równocześnie i mierz czas szukania. Wariant ruchowy: w parku — stoisz normalnie, potem zmieniasz pozycję ciała (inna noga do przodu, inne ułożenie rąk).",
    whyItWorks: "Change blindness (ślepota na zmiany) to dobrze udokumentowane zjawisko w psychologii poznawczej (Simons & Levin, 1998). Ćwiczenie uważnej obserwacji trenuje aktywne zapamiętywanie w kontrze do biernego oglądania.",
    prep: ["zero prep (lub kilka przedmiotów)"],
    phrases: [
      "Patrz na mnie przez 30 sekund. Zapamiętaj wszystko!",
      "Odwróć się i licz do 10!",
      "Co się zmieniło? Szukaj, bądź detektywem!",
      "Brawo! Teraz Ty zmieniasz, a ja szukam!"
    ],
    tellChild: "Jesteś detektywem! Patrz na mnie bardzo uważnie i zapamiętaj jak wyglądam. Potem się odwrócisz, ja coś zmienię, a Ty zgadniesz co!"
  },

  {
    id: 84,
    name: "Chmury i kształty",
    type: "obserwacja",
    place: ["park"],
    competencies: ["wyobraźnia", "uważność", "spostrzegawczość"],
    topics: ["natura", "wyobraźnia", "relaks"],
    age: [3, 4, 5, 6, 7, 8],
    method: "montessori",
    duration: "10-15 min",
    description: "Leżycie na trawie i szukacie kształtów w chmurach. Kto widzi smoka? Kto widzi babcię z torebką? Łączy obserwację natury z wyobraźnią twórczą.",
    childNeeds: {
      why: "Pareidolia (widzenie znanych kształtów w przypadkowych formach) jest naturalną funkcją mózgu aktywującą obszary rozpoznawania obiektów. Zabawa chmurami to medytacja aktywna — relaks + wyobraźnia.",
      goals: ["wyobraźnia", "uważność", "relaks", "obserwacja natury"],
      emotions: ["spokój", "radość", "fantazja", "bliskość z rodzicem"]
    },
    steps: [
      "Kładziecie się razem na trawie lub siedzicie z głowami w górę.",
      "Obserwujecie chmury w ciszy przez minutę.",
      "Zaczynasz: 'Ja widzę coś co wygląda jak słoń — o tam!'",
      "Dziecko szuka: 'A ja widzę...'",
      "Opowiadacie wspólną historię o chmurach: 'Słoń płynie do smoka i...'",
      "Obserwujecie jak chmury się zmieniają z wiatrem."
    ],
    tip: "Naprawdę połóż się na trawie — to buduje relaks i bliskość. Nie pośpiesz zabawy. Jeśli nie ma chmur: szukajcie kształtów w drzewach, kamieniach, kałużach. Zróbcie zdjęcia 'najlepszej chmury'.",
    whyItWorks: "Wspólne leżenie i patrzenie w niebo jest jedną z najbardziej relaksujących aktywności dla układu nerwowego. Obniża kortyzol, aktywuje DMN (Default Mode Network — sieć marzeń i wyobraźni) i wzmacnia więź przez wspólne doświadczenie.",
    prep: ["koc lub mata (opcjonalnie)", "czyste niebo z chmurami"],
    phrases: [
      "Połóżmy sie i patrzmy na chmury... Widzisz coś ciekawego?",
      "Ja widzę smoka z wielkim brzuchem! O tam! A Ty?",
      "Co ten smok robi? Co się dzieje w tej chmurowej historii?",
      "Patrz jak ta chmura się zmienia — co teraz z niej wychodzi?"
    ],
    tellChild: "Połóż się obok mnie i patrz na chmury. Razem będziemy szukać ukrytych kształtów — smoków, zamków, zwierząt. Co Ty widzisz tam w górze?"
  },

  {
    id: 85,
    name: "Dżungla w domu",
    type: "obserwacja",
    place: ["dom"],
    competencies: ["spostrzegawczość", "wiedza o naturze", "kategorie"],
    topics: ["zwierzęta", "natura", "wyobraźnia"],
    age: [3, 4, 5, 6, 7],
    method: "montessori",
    duration: "10-15 min",
    description: "Ukrywasz miniaturowe zwierzątka (zabawki) po całym pokoju w trudnych miejscach. Dziecko jest odkrywcą ekspedycji i musi znaleźć wszystkie zwierzęta z listy.",
    childNeeds: {
      why: "Aktywne szukanie obiektów w przestrzeni (visual search) angażuje selektywną uwagę wzrokową i pamięć roboczą (muszę szukać lwa, nie znalazłem jeszcze). To bardziej wymagające niż czytanie ksiązki o zwierzetach.",
      goals: ["uwaga selektywna", "spostrzegawczość", "wiedza o zwierzętach"],
      emotions: ["ekscytacja odkrycia", "skupienie detektywa", "radość z ukończenia misji"]
    },
    steps: [
      "Chowasz 8-10 miniaturowych zwierząt lub kart ze zwierzętami po pokoju (dobrze ukryte!).",
      "Dajesz dziecku 'mapę biodiversity' — listę z obrazkami: znajdź: lwa, węża, słonia, żabę, motyla...",
      "Dziecko z listą szuka kolejnych zwierząt.",
      "Gdy znajdzie: 'Gdzie żyje ten zwierz? Co je?'",
      "Potem zamiana: dziecko chowa, Ty szukasz."
    ],
    tip: "Chowaj na różnych poziomach trudności: niektóre widoczne, inne dobrze ukryte. Dla 3-latka: pokaż skrytki zanim zaczniesz zabawę. Możesz opowiedzieć krótkie 'ciekawostki' o każdym znalezionym zwierzęciu.",
    whyItWorks: "Zabawa w szukanie obiektów angażuje te same sieci uwagi co 'visual search tasks' w psychologii poznawczej. Dodatkowy kontekst narracyjny (ekspedycja!) podnosi motywację i uruchamia zapamiętywanie kontekstualne.",
    prep: ["miniaturowe zwierzątka lub karty ze zwierzętami", "lista do odznaczania"],
    phrases: [
      "Startuje ekspedycja badawcza! Masz listę zwierząt — wszystkie żyją gdzieś w tym pokoju!",
      "Znalazłeś węża! Gdzie wąż normalnie mieszka?",
      "Brakuje jeszcze słonia i motyla — szukaj dalej!",
      "Wszystkie znalezione! Misja wykonana! Teraz Ty chowasz!"
    ],
    tellChild: "Jesteś badaczem w dżungli! W tym pokoju ukryte są zwierzęta z całego świata. Masz listę — znajdź je wszystkie! Uwaga, dobrze się ukryły!"
  },

  {
    id: 86,
    name: "Co by bylo gdyby?",
    type: "poznawcze",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["myślenie hipotetyczne", "wyobraźnia", "język"],
    topics: ["fantazja", "logika", "kreatywność"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Zadajesz pytania 'co by było gdyby?' i rozmawiacie o konsekwencjach. Co by bylo gdyby nie bylo grawitacji? Gdyby słonie latały? Gdyby noc trwała miesiąc?",
    childNeeds: {
      why: "Myślenie kontrfaktyczne ('co by bylo gdyby') to zaawansowana funkcja poznawcza angażująca wyobraźnię, wnioskowanie przyczynowo-skutkowe i elastyczność myślenia. Aristoteles nazwał to 'katharsis wyobraźni'.",
      goals: ["myślenie hipotetyczne", "wnioskowanie przyczynowo-skutkowe", "elastyczność myślenia"],
      emotions: ["intelektualna ekscytacja", "rozbawienie", "ciekawość"]
    },
    steps: [
      "Zadaj pytanie startowe: 'Co by było gdyby ludzie mieli skrzydła?'",
      "Daj dziecku czas na myślenie — nie przerywaj.",
      "Słuchaj i zadaj pytanie pogłębiające: 'A co by się zmieniło w szkole?'",
      "Dodaj swoje nieoczekiwane konsekwencje: 'A co z parasolkami? Czy byłyby potrzebne?'",
      "Kontynuuj łańcuch konsekwencji jak najdalej możecie.",
      "Narysujcie świat z tej hipotezy!"
    ],
    tip: "Dobieraj pytania do ciekawości dziecka: miłośnik dinozaurów dostanie 'co by było gdyby dinozaury nie wyginęły?', miłośnik kosmosa 'gdyby można podróżować z prędkością światła?' Nie oceniaj odpowiedzi — każda jest hipotezą.",
    whyItWorks: "Myślenie kontrfaktyczne jest powiązane z kreatywnością, rozumieniem kauzalności i inteligencją płynną (Byrne, The Rational Imagination, 2005). Dzieci, które bawią się 'co by było gdyby', lepiej radzą sobie z problemami otwartymi.",
    prep: ["zero prep"],
    phrases: [
      "Mam dla Ciebie pytanie! Co by bylo gdyby...?",
      "Ciekawe! A co by to zmieniło w szkole / w jedzeniu / w sporcie?",
      "Świetny pomysł! Nie myślałem o tym. A jakie byłyby problemy?",
      "Narysujmy świat w którym tak jest!"
    ],
    tellChild: "Mam dla Ciebie specjalne pytanie: co by bylo gdyby... [tu wstaw!] Nie ma złych odpowiedzi — fantazjujemy razem!"
  },

  {
    id: 87,
    name: "Klasyfikacja klocków",
    type: "poznawcze",
    place: ["dom"],
    competencies: ["klasyfikacja", "myślenie logiczne", "matematyka"],
    topics: ["kształty", "kolory", "matematyka"],
    age: [3, 4, 5, 6],
    method: "montessori",
    duration: "10-15 min",
    description: "Sortowanie klocków lub innych przedmiotów według różnych kryteriów: koloru, kształtu, rozmiaru, materiału. Jedno kryterium na raz, potem dziecko wymyśla własne.",
    childNeeds: {
      why: "Klasyfikacja jest podstawową operacją myślenia logicznego (Piaget: operacje konkretne, 7-11 lat, ale preludium od 3 roku). Dziecko uczące się sortować według atrybutów rozwija podstawy myślenia abstrakcyjnego.",
      goals: ["myślenie kategoryczne", "pojęcia matematyczne", "logika"],
      emotions: ["porządek", "satysfakcja z kategorii", "skupienie"]
    },
    steps: [
      "Wysypujcie klocki (lub inne obiekty) na dywanie.",
      "Zadanie 1: posortuj według KOLORU. Które kolory mamy?",
      "Zadanie 2: posortuj według KSZTAŁTU. Kwadrat, koło, prostokąt...",
      "Zadanie 3: posortuj według ROZMIARU. Małe, średnie, duże.",
      "Wyzwanie: wymyśl swoje kryterium! Dziecko wybiera według czego sortujemy.",
      "Matematyka: policzcie ile jest w każdej grupie. Która grupa największa?"
    ],
    tip: "Nie poprawiaj decyzji klasyfikacyjnych bez omówienia: 'Dlaczego ten klocek tutaj?' Dziecko może mieć swoją logikę. Dla starszych: dwa kryteria jednocześnie (kolor I kształt) — tabela 2x2.",
    whyItWorks: "Klasyfikacja jest jedną z fundamentalnych operacji matematycznych opisanych przez Piageta. Montessori materiały sensoryczne (różowe wieże, brązowe schody) są zaprojektowane właśnie do systematycznej nauki klasyfikacji według jednego atrybutu na raz.",
    prep: ["klocki, guziki, nakrętki lub inne obiekty do sortowania", "miseczki lub tacki"],
    phrases: [
      "Posortuj wszystkie klocki według koloru!",
      "Ile grup mamy? Policz!",
      "Teraz Ty wymyślasz kryterium — według czego sortujemy?",
      "Która grupa jest najliczniejsza? Policz je!"
    ],
    tellChild: "Dziś jesteś matematycznym sorterem! Wymieszamy wszystkie klocki i Twoim zadaniem jest posortowanie ich — najpierw według koloru, potem wymyślamy nowe zasady!"
  },

  {
    id: 88,
    name: "Pytania Sokratesa",
    type: "poznawcze",
    place: ["dom", "podróż"],
    competencies: ["myślenie krytyczne", "język", "ciekawość"],
    topics: ["filozofia", "wartości", "logika"],
    age: [5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Sokratejski dialog — zadajesz pytania otwarte do każdej odpowiedzi dziecka: 'Dlaczego tak myślisz? Co przez to rozumiesz? Zawsze tak? A co gdyby...?' Filozofowanie dla dzieci.",
    childNeeds: {
      why: "Filozofia dla dzieci (P4C, Lipman, 1969) udowodniła, że dzieci w wieku 5+ potrafią prowadzić sensowne filozoficzne dyskusje. Regularne pytania sokratejskie rozwijają myślenie krytyczne i tolerancję dla niepewności.",
      goals: ["myślenie krytyczne", "metapoznanie", "tolerancja dla pytań otwartych"],
      emotions: ["intelektualna ciekawość", "skupienie", "poczucie ważności swoich myśli"]
    },
    steps: [
      "Zacznij od pytania: 'Czy pies może być szczęśliwy? Skąd wiesz?'",
      "Na każdą odpowiedź zadaj pytanie pogłębiające: 'Co masz na myśli przez szczęście?'",
      "Testuj granice: 'Zawsze? A co gdy...?'",
      "Odwróć pytanie: 'A czy TY możesz być szczęśliwy? Czym to się różni?'",
      "Nie oceniaj ani nie podsumowuj — niech rozmowa 'urwie się' otwarcie.",
      "Dobre pytania startowe: 'Co to jest przyjaźń? Czy roboty mogą myśleć? Skąd wiemy że coś jest prawdą?'"
    ],
    tip: "Twoja rola: pytać, nie tłumaczyć. Powstrzymaj się od dawania odpowiedzi nawet gdy dziecko pyta 'Jak myślisz?' — odwróć: 'A co Ty myślisz?' Akceptuj brak konkluzji — to właśnie filozofia.",
    whyItWorks: "Filozofia dla dzieci (P4C) ma najsilniejszy evidence-base z programow edukacyjnych wspierających myslenie krtytyczne. Meta-analiza Education Endowment Foundation (2015): +4 miesiące postępu edukacyjnego.",
    prep: ["zero prep"],
    phrases: [
      "Co rozumiesz przez 'szczęście'? Jak je opisujesz?",
      "Dlaczego tak myślisz? Skąd wiesz?",
      "Zawsze? A są wyjątki?",
      "Co myslisz teraz po naszej rozmowie — zmieniło się coś?"
    ],
    tellChild: "Mam dla Ciebie filozoficzne pytanie — nie ma tu jednej dobrej odpowiedzi. Chcę wiedzieć co TY myślisz. Gotowy na trudne pytania?"
  },

  {
    id: 89,
    name: "Łamigłówka logiiczna z klocków",
    type: "poznawcze",
    place: ["dom"],
    competencies: ["myślenie logiczne", "wzorce", "sekwencje"],
    topics: ["matematyka", "wzorce", "logika"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "10-15 min",
    description: "Układasz wzorzec z klocków (koło-kwadrat-koło-kwadrat) i pytasz co będzie dalej. Stopniowo komplikujesz: kolory, trzy elementy, dwuwymiarowe wzorce.",
    childNeeds: {
      why: "Rozpoznawanie i kontynuowanie wzorców to fundamentalna umiejętność matematyczna (algebra pattern recognition). Badania Papic et al. (2011) wykazują, że dzieci z silnymi umiejętnościami wzorców mają lepsze wyniki matematyczne w szkole.",
      goals: ["rozpoznawanie wzorców", "myślenie algebraiczne", "sekwencyjność"],
      emotions: ["skupienie", "satysfakcja z rozwiązania", "pewność siebie"]
    },
    steps: [
      "Ułóż prosty wzorzec: czerwony-niebieski-czerwony-niebieski. Pytasz: 'Co dalej?'",
      "Gdy rozumie: wzorzec trzyelementowy — czerwony-niebieski-zielony-czerwony...",
      "Bardziej złożone: wzorce z kształtu I koloru jednocześnie.",
      "Dziecko układa własny wzorzec — Ty go kontynuujesz (możesz celowo popełnić błąd!).",
      "Wariant: wzorzec z gestów — klaśnięcie-tupnięcie-obrót-klaśnięcie... Co dalej?"
    ],
    tip: "Zacznij od absolutnie prostego AB wzorca zanim przejdziesz do ABC. Celowe błędy Twoje są świetne — dziecko z dumą Cię poprawia i tłumaczy zasadę. To głęboka nauka!",
    whyItWorks: "Pattern recognition jest podstawą myślenia algebraicznego i matematyki wyższej. NCTM (National Council of Teachers of Mathematics) identyfikuje wzorce jako jeden z pięciu kluczowych obszarów wczesnej edukacji matematycznej.",
    prep: ["klocki lub kolorowe kapsle/guziki w kilku kolorach"],
    phrases: [
      "Patrz na wzorzec: czerwony-niebieski-czerwony... Co dalej?",
      "Zgadza sie! Kontynuujmy — co za tym?",
      "Teraz Ty ukladasz wzorzec, a ja kontynuuje!",
      "O, chyba popełniłem błąd... sprawdzasz?"
    ],
    tellChild: "Układam tajemniczy wzorzec. Twoim zadaniem jest zgadnąć co bedzie kolejne! Obserwuj uważnie — jest tu ukryta zasada!"
  },

  {
    id: 90,
    name: "Mózgowe gimnastyki",
    type: "poznawcze",
    place: ["dom", "podróż", "restauracja"],
    competencies: ["koncentracja", "koordynacja", "obustronna praca mózgu"],
    topics: ["mózg", "ciało", "ruch"],
    age: [5, 6, 7, 8],
    method: "laban",
    duration: "5-10 min",
    description: "Ćwiczenia Brain Gym: dotykanie prawą ręką lewego kolana i na odwrót, rysowanie ósemek w powietrzu obiema rękami, ruchy naprzemienne. Aktywuje obie półkule jednocześnie.",
    childNeeds: {
      why: "Ruchy naprzemienne (crossing the midline) wymagają jednoczesnej aktywacji obu półkul mózgowych. Dzieci z trudnościami w przekraczaniu linii środkowej ciała często mają trudności z czytaniem i pisaniem.",
      goals: ["integracja półkul mózgowych", "koordynacja obustronna", "koncentracja"],
      emotions: ["skupienie", "rozbawienie", "poczucie aktywności"]
    },
    steps: [
      "Ćwiczenie 1: Dotknij prawą ręką lewego kolana, lewą ręką prawego kolana — naprzemiennie, coraz szybciej.",
      "Ćwiczenie 2: Rysuj w powietrzu ósemkę leżącą (nieskończoność) obiema rękami jednocześnie.",
      "Ćwiczenie 3: Prawa ręka rysuje w powietrzu kwadrat, lewa ręka kółko — jednocześnie!",
      "Ćwiczenie 4: Dotknij prawym łokciem lewego kolana, lewym łokciem prawego kolana — jak marszobiegi.",
      "Ćwiczenie 5: Stój na jednej nodze i rysuj obiema rękami ósemkę."
    ],
    tip: "Zacznij wolno — te ruchy są naprawdę trudne dla mózgu! Śmiejcie się z błędów. Brain Gym rano przed nauką szkolną to dobry nawyk. Ćwiczenie 3 (kwadrat + kółko jednocześnie) jest dla większości dorosłych niemożliwe — spróbuj razem!",
    whyItWorks: "Carla Hannaford (Smart Moves, 1995) i program Brain Gym (Dennison) promują ruchy naprzemienne jako wsparcie integracji neuronalnej. Choć program Brain Gym ma mixed evidence, ruchy naprzemienne są dobrze udokumentowane w kontekście terapii integracji sensorycznej.",
    prep: ["zero prep", "przestrzeń do ruchu"],
    phrases: [
      "Prawa reka, lewe kolano — szybciej!",
      "Teraz rysujemy ósemkę w powietrzu — obiema rękami!",
      "To jest trudne, prawda? Mózg musi mocno pracować!",
      "Kwadrat I kółko jednocześnie? Spróbujmy razem — założę się, że nikomu nie wychodzi!"
    ],
    tellChild: "Robimy gimnastykę dla mózgu! To ruchy, które muszą wykonywać obie strony ciała naraz — mózg musi mocno myśleć! Gotowy na wyzwanie?"
  },

  // ─────────────────────────────────────────────────────────────
  //  IDs 91-120: Hot Wheels — zabawy z autkami
  // ─────────────────────────────────────────────────────────────

  {
    id: 91,
    name: "Rampa — kto dojedzie najdalej?",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["myślenie logiczne", "szacowanie", "koncentracja"],
    topics: ["inżynieria", "matematyka", "przygoda"],
    age: [3, 4, 5, 6, 7, 8],
    method: "montessori",
    duration: "15-20 min",
    description: "Budujesz rampę z deski, kartonu lub twardej teczki i testujesz które autko jedzie najdalej. Zmieniacie kąt nachylenia i obserwujecie efekty. Fizyka przez zabawę!",
    childNeeds: {
      why: "Eksperymenty z rampą i autkami to intuicyjna fizyka (grawitacja, tarcie, pęd) dla dzieci. Piaget: dzieci uczą sie praw fizyki przez aktywne manipulowanie obiektami, nie przez wyjaśnienia.",
      goals: ["rozumienie przyczyna-skutek", "szacowanie", "myślenie naukowe"],
      emotions: ["ekscytacja", "napięcie wyścigu", "ciekawość naukowa"]
    },
    steps: [
      "Zbuduj rampę: oprzesz teczkę lub deskę o krzesło (kąt ok. 30 stopni).",
      "Pytasz: 'Jak myślisz, które autko dojedzie najdalej?'",
      "Wypuszczasz 3 różne autka — mierzysz odległość (sznurkiem lub krokami).",
      "Eksperyment 1: zmień kąt nachylenia — czy wynik się zmienił? Dlaczego?",
      "Eksperyment 2: połóż na rampie ściereczkę — jak zmienił się wynik? To tarcie!",
      "Zapis odkryć: strome = szybciej, ale krócej. Łagodne = wolniej, ale dalej."
    ],
    tip: "Nie dawaj od razu odpowiedzi — pytaj 'dlaczego myślisz, że to autko wygrało?' Mierz odległość monetami lub klockami zamiast linijką — to bardziej angażujące. Notuj wyniki na papierze.",
    whyItWorks: "Swobodne eksperymenty z obiektami fizycznymi angażują intuicyjną fizykę (naive physics). Badania Klahr i Nigam (2004) pokazują, że odkrycie przez eksplorację jest skuteczniejsze w nauce dzieci niż bezpośrednie nauczanie zasad fizyki.",
    prep: ["dwa lub więcej autek Hot Wheels", "deska, teczka lub gruby karton na rampę", "krzesło lub książki jako podpórka"],
    phrases: [
      "Które autko wyjedzie najdalej? Obstawiamy!",
      "Wygrało czerwone! Dlaczego tak myślisz?",
      "Zmieniamy kąt rampy — czy wyniki się zmieniają?",
      "Zapisujemy odkrycie: stromiej równa sie szybciej!"
    ],
    tellChild: "Robimy wyścig naukowy! Które autko dojedzie najdalej z rampy? Obstawiamy, potem sprawdzamy i próbujemy zrozumieć dlaczego!"
  },

  {
    id: 92,
    name: "Parking z cyframi",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["liczenie", "koncentracja", "myślenie logiczne"],
    topics: ["matematyka", "codzienność"],
    age: [3, 4, 5, 6],
    method: "montessori",
    duration: "10-15 min",
    description: "Rysujesz lub naklejasz cyfry na miejscach parkingowych (pudełko, karton). Dziecko parkuje autko numer 1 na miejscu nr 1, itd. Nauka liczb przez ulubione zabawki.",
    childNeeds: {
      why: "Montessori podkreśla uczenie przez manipulowanie konkretnymi obiektami. Parkowanie autka na cyfrowym miejscu tworzy fizyczne powiązanie abstrakcyjnego symbolu (cyfra) z konkretnym działaniem.",
      goals: ["rozpoznawanie cyfr", "przypisanie cyfra-ilość", "koncentracja"],
      emotions: ["skupienie", "radość z dopasowania", "duma z liczenia"]
    },
    steps: [
      "Zrób parking z kartonu: podziel na 5-10 miejsc i napisz cyfry.",
      "Rozłóż autka i ponumeruj je naklejkami lub karteczkami.",
      "Zadanie: zaparkuj autko numer 3 na miejscu numer 3!",
      "Stopniuj trudność: losowe cyfry, potem 'o jedno więcej niż...'",
      "Matematyka: ile aut jest na parkingu? Ile miejsc wolnych?",
      "Gra: Ty jesteś parkingowym — wydajesz polecenia, dziecko parkuje."
    ],
    tip: "Zrób parking trwały z tektury i laminowanymi numerkami — będzie służył długo. Dla 3-latka: tylko cyfry 1-5. Dla 5-latka: wprowadź działania: zaparkuj tyle aut ile to wyrażenie: 2+1.",
    whyItWorks: "Liczenie w kontekście zabawy (embedded numeracy) jest jedną z najefektywniejszych form nauki wczesnomatematycznej. Wygotski podkreślał, że zabawy tematyczne tworzą strefę najbliższego rozwoju dla matematyki.",
    prep: ["karton lub pudełko jako parking", "marker do napisania cyfr", "autka z naklejkami-numerkami"],
    phrases: [
      "Zaparkuj autko numer 4 na miejscu numer 4!",
      "Ile aut stoi na parkingu? Liczymy!",
      "Miejsce numer 2 jest zajęte — znajdź wolne!",
      "Teraz Ty jesteś parkingowym — wydawaj mi polecenia!"
    ],
    tellChild: "Otwieramy parking! Każde autko ma swój numer i musi stać na swoim miejscu. Pomożesz mi wszystko zaparkować we właściwych miejscach?"
  },

  {
    id: 93,
    name: "Myjnia samochodowa",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["sensoryka", "motoryka mała", "koncentracja"],
    topics: ["codzienność"],
    age: [3, 4, 5, 6],
    method: "SI",
    duration: "20-30 min",
    description: "Miska z wodą i mydłem, szczoteczka do zębów lub pędzelek — dziecko myje autka. Pozornie prosta zabawa, bogata w stymulację sensoryczną i naukę porządku.",
    childNeeds: {
      why: "Zabawy z wodą dostarczają intensywnej stymulacji sensorycznej (dotyk, temperatura, faktura). Zmysłowe eksperymenty z wodą są fundamentem terapii integracji sensorycznej (Ayres).",
      goals: ["integracja sensoryczna", "motoryka mała", "poczucie sprawczości"],
      emotions: ["spokój sensoryczny", "skupienie", "satysfakcja z porządku"]
    },
    steps: [
      "Przygotuj myjnię: miska z ciepłą wodą i kilka kropli płynu do mycia naczyń.",
      "Materiały: stara szczoteczka do zębów, pędzelek, ściereczka do wycierania.",
      "Dziecko myje autka: namocz, szczotkuj, spłucz, wytrzyj.",
      "Sekwencja ważna: brudne autka tu, czyste autka tam.",
      "Rozmowa: które autko było najbrudniejsze? Co jest na kołach?",
      "Na koniec: suszarnia — ułóż autka na ręczniku do wyschnięcia."
    ],
    tip: "Połóż ceratę pod miskę. Dodaj do wody kilka kropli barwnika spożywczego — brudna woda robi wrażenie. Dla starszych: znajdź wszystkie brudne i popatrz na wodę na końcu.",
    whyItWorks: "Zabawy z wodą (water play) są jedną z kluczowych aktywności integracji sensorycznej (Ayres 2005) — stymulują receptory dotykowe, regulują układ nerwowy i budują koncentrację. Jednocześnie uczą sekwencji i poczucia odpowiedzialności.",
    prep: ["miska", "ciepła woda", "płyn do naczyń", "stara szczoteczka do zębów", "ściereczka", "ręcznik"],
    phrases: [
      "Te autka są bardzo brudne po wyścigu! Czas na myjnię!",
      "Najpierw namocz, potem szoruj... patrz jakie brudne koła!",
      "Gotowe — połóż na ręczniku do wyschnięcia!",
      "Która część auta była najtrudniejsza do umycia?"
    ],
    tellChild: "Nasze autka wróciły z wyścigu i są bardzo brudne! Otwieramy myjnię samochodową. Twoim zadaniem jest umyć każde autko na błysk!"
  },

  {
    id: 94,
    name: "Malowanie kołami",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["kreatywność", "sensoryka", "motoryka mała"],
    topics: ["sztuka", "kolory"],
    age: [3, 4, 5, 6, 7],
    method: "laban",
    duration: "15-20 min",
    description: "Autka jako pędzle! Zanurzasz koła autka w farbie i toczysz po kartonie — powstają niesamowite wzory z odcisków kół. Ślady wyścigów zamieniają się w sztukę.",
    childNeeds: {
      why: "Eksploracja artystyczna przez niezwykłe narzędzia (koła zamiast pędzel) wyzwala kreatywność i zaskakuje dzieci. Eliminuje strach przed robieniem ładnego obrazka — liczy się eksperyment, nie efekt.",
      goals: ["swoboda twórcza", "eksploracja sensoryczna", "kreatywność artystyczna"],
      emotions: ["radość odkrycia", "swoboda", "ekscytacja niezwykłym efektem"]
    },
    steps: [
      "Przygotuj wielką kartkę (A3 lub gazeta odwrócona) na podłodze.",
      "Farby w małych miseczkach lub na talerzyku papierowym.",
      "Autko zanurza koła w farbie i jedzie przez kartkę!",
      "Różne kolory, różne autka (inne ślady kół!), różne prędkości.",
      "Spróbuj: autko i palce razem — wyścig z kierowcą (palce jako figurki).",
      "Gotowy obraz: suszysz, podpisujesz, wieszasz na lodówce!"
    ],
    tip: "Użyj farb tempera — łatwo zmywalne. Stare autka, które nie szkoda. Jeśli dziecko się wciągnie, zrób tor wyścigów na całej kartce — różne kolory, zakręty. Pamiętaj: farba schnie na kołach — szybka myjnia po zabawie.",
    whyItWorks: "Ekspresja artystyczna przez niekonwencjonalne narzędzia (process art) jest rekomendowana przez pedagogikę Reggio Emilia. Dziecko odkrywa że narzędzie tworzy unikalny ślad — to odkrycie przyczynowości przez tworzenie.",
    prep: ["autka Hot Wheels (stare lub dające się umyć)", "farby tempera", "miseczki na farbę", "duża kartka lub gazeta", "ściereczka do mycia kół"],
    phrases: [
      "Nasze autka zamieniają się w pędzle!",
      "Jakie ślady robi to autko? A to inne — czym się różnią?",
      "Spróbuj szybko i wolno — różne ślady?",
      "To jest dzieło sztuki! Nazywamy go Wielki Wyścig 2026!"
    ],
    tellChild: "Nasze autka dzisiaj nie ścigają się — one malują! Zanurzamy koła w farbie i robimy obrazek śladami kół. Gotowy na artystyczny wyścig?"
  },

  {
    id: 95,
    name: "Garaż piętrowy z pudełek",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["planowanie", "myślenie logiczne", "koordynacja"],
    topics: ["inżynieria", "architektura"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "30-40 min",
    description: "Budujesz razem z dzieckiem wielopiętrowy garaż z kartonowych pudełek. Rampy między piętrami, wjazd, wyjazd. Długotrwały projekt inżynieryjny.",
    childNeeds: {
      why: "Wieloetapowe projekty budowlane (project-based learning) angażują planowanie, przewidywanie problemów i elastyczne myślenie. Papert (constructionism): budowanie przedmiotów jest najgłębszą formą nauki.",
      goals: ["planowanie przestrzenne", "myślenie inżynierskie", "wytrwałość"],
      emotions: ["twórcze skupienie", "duma z budowli", "radość z zabawy gotowym projektem"]
    },
    steps: [
      "Zbierz pudełka różnych rozmiarów — na poszczególne piętra.",
      "Planujecie razem: ile pięter? Gdzie wjazd? Jak zrobimy rampę?",
      "Klejem lub taśmą łączycie poziomy. Wytnij otwory na rampę i wjazd.",
      "Rampy między piętrami: pasek kartonu przyklejony pod kątem.",
      "Detale: pomalujcie, napiszcie P1, P2, zrób bariery z patyczków.",
      "Test: czy autko przejeżdża przez wszystkie piętra bez zatrzymywania?"
    ],
    tip: "Zacznij od 2 pięter — sukces buduje motywację do 3 i 4. Rampa musi być wystarczająco szeroka (min. 5 cm) i nie za stroma. Zostawcie garaż — dziecko będzie się bawić samodzielnie przez tydzień.",
    whyItWorks: "Projekt budowy wielopiętrowego garażu to klasyczny przykład projektowania inżynierskiego dla dzieci. Angażuje iteracyjne myślenie projektowe: projekt, test, modyfikacja, test ponownie.",
    prep: ["pudełka kartonowe różnych rozmiarów", "nożyczki lub nóż (dla dorosłego)", "klej lub taśma", "kredki lub farby do dekoracji"],
    phrases: [
      "Ile pięter będzie nasz garaż? Ja mówię 3!",
      "Jak zrobimy rampę żeby autko samo zjechało?",
      "Testujemy: autko startuje z góry...",
      "Działa! Nasz garaż jest otwarty na gości!"
    ],
    tellChild: "Dzisiaj jesteś architektem i budujesz wielopiętrowy garaż! Nasze autka potrzebują miejsca — ile pięter zbudujemy?"
  },

  {
    id: 96,
    name: "Slalom samochodowy",
    type: "hotwheels",
    place: ["dom", "park"],
    competencies: ["koordynacja", "motoryka mała", "koncentracja"],
    topics: ["sport", "przygoda"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Ustawiasz przeszkody (klocki, zakrętki, monety) jak tyczki slalomowe. Dziecko prowadzi autko ręką omijając je. Wyścig na czas albo precyzję.",
    childNeeds: {
      why: "Prowadzenie autka przez slalom wymaga bardzo precyzyjnej motoryki małej i planowania drogi. To element propriocepcji dłoni — koordynacja oko-ręka w bardzo precyzyjnym formacie.",
      goals: ["motoryka mała", "koordynacja oko-ręka", "planowanie trasy"],
      emotions: ["skupienie", "sportowa rywalizacja", "satysfakcja z precyzji"]
    },
    steps: [
      "Ustaw na podłodze lub stole 6-8 tyczek slalomowych (klocki, zakrętki w równych odstępach).",
      "Dziecko prowadzi autko ręką slalomem omijając każdą tyczkę.",
      "Kara: za każde potrącenie — 2 sekundy kary.",
      "Wariant 1: na czas — kto szybciej?",
      "Wariant 2: na precyzję — kto nie potrąci żadnej tyczki?",
      "Zaprojektuj nowy tor — różne odległości między tyczkami."
    ],
    tip: "Zacznij od szerokich odstępów, potem zwężaj. Zmierz czas telefonem. Dla starszych: tyczki co 8 cm — to naprawdę trudne! Możesz też robić slalom z elementem zmiany kierunku — lewoskrętny i prawoskrętny.",
    whyItWorks: "Precyzyjne prowadzenie obiektów po torze angażuje korę czuciowo-ruchową i móżdżek jednocześnie. Dziecko uczy się regulacji siły nacisku i kierunku w czasie rzeczywistym — to fundament motoryki małej potrzebnej przy pisaniu.",
    prep: ["autko Hot Wheels", "klocki lub zakrętki jako tyczki (6-8 sztuk)", "telefon do mierzenia czasu (opcjonalnie)"],
    phrases: [
      "Slalom! Omijaj każdą tyczkę — nie wolno jej dotknąć!",
      "Start! Gotowy, do startu, start!",
      "Jedno potrącenie — 2 sekundy kary!",
      "Teraz Twój tor — ty ustawiasz tyczki!"
    ],
    tellChild: "Tor slalomowy gotowy! Musisz przejechać autem omijając każdą tyczkę. Im szybciej i bez potrąceń — tym lepiej! Mierzymy czas!"
  },

  {
    id: 97,
    name: "Sortowanie kolekcji",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["klasyfikacja", "myślenie logiczne", "koncentracja"],
    topics: ["kolory", "matematyka"],
    age: [3, 4, 5, 6, 7],
    method: "montessori",
    duration: "10-15 min",
    description: "Wysypujesz całą kolekcję autek i sortujesz według różnych kryteriów: kolor, rozmiar, typ (sportowe, ciężarówki, rajdowe), liczba drzwi. Matematyka przez pasję.",
    childNeeds: {
      why: "Klasyfikacja własnej kolekcji (bliski kontekst emocjonalny) jest jedną z najskuteczniejszych dróg nauki kategoryzacji. Dziecko jest ekspertem od swoich autek — to odwrócona rola, która buduje pewność siebie.",
      goals: ["klasyfikacja i kategoryzacja", "logika", "wzbogacanie słownictwa"],
      emotions: ["duma z kolekcji", "skupienie", "radość z wiedzy eksperckiej"]
    },
    steps: [
      "Wysypcie wszystkie autka na dywan.",
      "Runda 1: posortuj według koloru. Ile grup?",
      "Runda 2: posortuj według typu — sportowe, ciężarówki, motocykle, karetki.",
      "Runda 3: wymyśl własne kryterium — dziecko decyduje według czego.",
      "Matematyka: które grupy mają najwięcej? Policz i porównaj.",
      "Wyzwanie: czy możesz posortować według 2 kryteriów naraz?"
    ],
    tip: "Nie poprawiaj kategorii — dziecko może mieć swoją logikę (np. to jest moje ulubione jako kategoria — to też poprawna klasyfikacja). Fotografuj wyniki sortowania.",
    whyItWorks: "Klasyfikacja obiektów z własnej kolekcji angażuje semantyczną pamięć długoterminową i łączy ją z nowymi strukturami logicznymi. Piaget: operacje konkretne (sortowanie) poprzedzają operacje formalne (algebra).",
    prep: ["kolekcja autek Hot Wheels lub podobnych", "miseczki lub tacki na kategorie"],
    phrases: [
      "Wysypujemy wszystkie autka i sortujemy!",
      "Ile autek jest czerwonych? A niebieskich?",
      "Ty jesteś ekspertem od autek — jak je podzielisz?",
      "Która kategoria ma najwięcej? Policzmy razem!"
    ],
    tellChild: "Dzisiaj robimy przegląd naszej kolekcji! Sortujemy, liczymy i odkrywamy co mamy. Ty jesteś ekspertem — jak podzielimy autka?"
  },

  {
    id: 98,
    name: "Tor z taśmy na podłodze",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["planowanie", "motoryka mała", "wyobraźnia"],
    topics: ["inżynieria", "przygoda"],
    age: [3, 4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "20-30 min",
    description: "Taśma malarska na podłodze tworzy tor wyścigowy: proste, zakręty, tunele pod krzesłem, mosty. Razem projektujesz i kleisz tor, potem wyścigi!",
    childNeeds: {
      why: "Projektowanie własnego toru (design thinking) angażuje wyobraźnię przestrzenną i planowanie. Dziecko tworzy warunki do własnej zabawy — to autonomia i sprawczość, kluczowe dla motywacji wewnętrznej.",
      goals: ["planowanie przestrzenne", "wyobraźnia twórcza", "autonomia zabawy"],
      emotions: ["twórcza ekscytacja", "duma z projektu", "radość z wyścigu"]
    },
    steps: [
      "Razem projektujcie tor na papierze: start, meta, zakręty, tunel.",
      "Kleicie taśmą malarską na podłodze (bezpieczna dla parkietu!).",
      "Elementy: prosta, zakręt 90 stopni, zakręt 180 stopni, tunel pod krzesłem, most na książce.",
      "Test: czy autko mieści się w torze? Korygujcie szerokość.",
      "Wyścigi: dwa autka, czas okrążenia, kilka rund, finalista!",
      "Zostawcie tor na tydzień — codziennie nowe wyścigi."
    ],
    tip: "Taśma malarska nie niszczy podłogi i łatwo się odkleja. Minimalna szerokość toru: 5 cm. Mosty i tunele to najtrudniejsze elementy — zacznij od prostego toru, dodawaj elementy stopniowo.",
    whyItWorks: "Projektowanie przez dziecko własnej przestrzeni zabawy jest jedną z kluczowych idei self-directed play (Panksepp, Gray). Aktywuje układy PLAY i SEEKING — najbardziej satysfakcjonujące stany emocjonalne według neurobiologii.",
    prep: ["taśma malarska (biała lub kolorowa)", "autka Hot Wheels", "meble jako przeszkody"],
    phrases: [
      "Gdzie będzie start? A gdzie meta? Ty projektujesz!",
      "Kleimy tor razem — uważaj żeby zakręt nie był za ostry!",
      "Test! Czy autko mieści się w torze?",
      "Wyścig oficjalny — start, mierzę czas!"
    ],
    tellChild: "Dzisiaj projektujesz własny tor wyścigowy! Najpierw narysujemy plan, potem okleimy podłogę taśmą. Gotowy na wielkie wyścigi?"
  },

  {
    id: 99,
    name: "Historia wyścigu",
    type: "hotwheels",
    place: ["dom", "podróż"],
    competencies: ["narracja", "wyobraźnia", "język"],
    topics: ["fantazja", "przygoda", "sport"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Autka to bohaterowie historyjki! Każde ma imię, charakter, przeszłość. Razem opowiadacie wyścig jak transmisję radiową lub bajkę przygodową.",
    childNeeds: {
      why: "Nadawanie imion i osobowości obiektom (animizm) jest naturalne dla dzieci do ok. 7-8 roku życia. Zabawa narracyjna z autkami łączy symboliczną zabawę z rozwojem językowym i emocjonalnym.",
      goals: ["narracja", "wyobraźnia symboliczna", "wzbogacanie języka"],
      emotions: ["radość tworzenia", "ekscytacja narracyjna", "empatia z postaciami"]
    },
    steps: [
      "Każde autko dostaje imię i osobowość: To jest Błyskawica — jest najszybsza, ale trochę zuchwała. To jest Stary Diesel — wolny, ale zawsze uczciwy.",
      "Wymyślcie wspólnie historię wyścigu: kto chce wygrać i dlaczego?",
      "Razem opowiadacie wyścig jak spiker: I Błyskawica wychodzi na prowadzenie...",
      "Dodajcie przeszkodę: Ale na zakręcie coś się dzieje...",
      "Zakończenie: kto wygrał? Dlaczego? Co powiedziały inne autka?",
      "Nowe pytanie: a następny wyścig — kto będzie faworytem?"
    ],
    tip: "Bierz udział w narracji — bądź komentatorem wyścigu. Im bardziej dramatyczny głos, tym lepsza zabawa. Dla starszych: autka mogą przeżywać moralne dylematy — czy powinienem oszukiwać żeby wygrać?",
    whyItWorks: "Narracja symboliczna (symbolic play with objects) jest jedną z najważniejszych form zabawy dla wieku 4-8 lat. Vygotski: zabawa z wyobraźnią tworzy strefę najbliższego rozwoju — dziecko funkcjonuje powyżej typowego poziomu gdy bawi się narracyjnie.",
    prep: ["2-4 autka Hot Wheels", "opcjonalnie karteczki z imionami postaci"],
    phrases: [
      "To autko jak się nazywa? Jakie ma imię?",
      "I Błyskawica wychodzi na prowadzenie! Ale Stary Diesel...",
      "Co będzie w następnym zakręcie? Nie wiadomo!",
      "Kto wygrał? Co powiedział przegrany?"
    ],
    tellChild: "Nasze autka mają imiona i charaktery! Razem opowiemy historię ich wyścigu — Ty jesteś komentatorem. Co się teraz dzieje na torze?"
  },

  {
    id: 100,
    name: "Serwis i naprawa",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["wyobraźnia", "język", "planowanie"],
    topics: ["praca", "codzienność"],
    age: [4, 5, 6, 7],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Serwis samochodowy — dziecko jest mechanikiem! Autka przyjeżdżają z usterkami, dziecko diagnozuje, naprawia i wysyła. Bogata zabawa tematyczna o pracy.",
    childNeeds: {
      why: "Zabawa tematyczna z rolami zawodowymi buduje rozumienie ról społecznych i języka zawodowego. Erikson: dzieci 4-6 lat są w fazie inicjatywy — potrzebują aktywnych, sprawczych ról.",
      goals: ["zabawa symboliczna", "wiedza o zawodach", "język i komunikacja"],
      emotions: ["poczucie sprawczości", "duma z roli eksperta", "radość z odpowiedzialności"]
    },
    steps: [
      "Otwierasz serwis: Serwis Mistrzowski jest otwarty!",
      "Ty jesteś klientem — przynosisz autko: Dzień dobry, moje auto się psuło. Silnik stuka.",
      "Dziecko jako mechanik: Przyjmuję. Co się stało? Od kiedy? Zostawia Pan auto?",
      "Dziecko diagnozuje i naprawia (patyczek jako śrubokręt, linijka jako klucz).",
      "Wystawia rachunek (kartka z bazgrołami) i wydaje auto.",
      "Kolejny klient — zamieniacie się rolami."
    ],
    tip: "Zrób warsztat z pudełka i prowizorycznych narzędzi. Możesz dać dziecku prawdziwy klucz do nakrętek jako rekwizyt. Wchodź głęboko w roleplay — to zachęca dziecko do eksplorowania języka zawodowego.",
    whyItWorks: "Zabawa socjodramatyczna z rolami zawodowymi angażuje teorię umysłu i rozumienie perspektywy innych. Badania Youngblade i Dunn (1995) pokazują korelację między bogatą zabawą tematyczną a wynikami społeczno-emocjonalnymi w szkole.",
    prep: ["autka Hot Wheels", "pudełko jako warsztat", "prowizoryczne narzędzia (łyżka, patyczek, linijka)", "karteczki jako rachunki"],
    phrases: [
      "Dzień dobry, moje auto dziwnie brzmi. Możecie pomóc?",
      "Przyjmuję. Co Pan słyszy? Od kiedy to?",
      "Diagnoza: pęknięty wał korbowy! Naprawiam!",
      "Auto gotowe! Rachunek: 350 złotych. Zapraszamy ponownie!"
    ],
    tellChild: "Otwieramy serwis samochodowy! Ty jesteś najlepszym mechanikiem w mieście — ja przyjeżdżam z autkiem które się psuło. Pomożesz mi?"
  },

  {
    id: 101,
    name: "Mapa miasta dla autek",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["planowanie", "wyobraźnia", "kreatywność"],
    topics: ["inżynieria", "architektura", "przygoda"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "30-40 min",
    description: "Na dużym kartonie rysujecie razem mapę miasta z ulicami, budynkami, parkiem, lotniskiem. Autka poruszają się po mieście. Projekt na kilka dni.",
    childNeeds: {
      why: "Tworzenie makiety miasta to zaawansowane myślenie przestrzenne — dziecko musi myśleć o skali, relacjach między obiektami i planowaniu infrastruktury. To jeden z najskuteczniejszych treningów myślenia geometrycznego dla dzieci.",
      goals: ["myślenie przestrzenne", "planowanie", "kreatywność architektoniczna"],
      emotions: ["twórcze zaangażowanie", "duma z dzieła", "radość z zabawy gotową makietą"]
    },
    steps: [
      "Weź duży karton (np. po AGD) lub kilka arkuszy papieru sklejonych taśmą.",
      "Razem planujecie: co będzie w naszym mieście? Szpital, sklep, park, lotnisko?",
      "Rysujecie ołówkiem ulice, potem kredkami lub markerami.",
      "Budynki: pudełka od zapałek przyklejone na mapie.",
      "Park: zielona bibuła, drewienka jako drzewa.",
      "Autka bawią się w mieście: dostawa, wyścig, pogotowie!"
    ],
    tip: "Zacznij od ulic — reszta się sama narysuje. Linia środkowa drogi to ważny szczegół. Zostawcie mapę do zabawy przez kilka dni — każdego dnia można dodać nowy element: dzisiaj budujemy szkołę!",
    whyItWorks: "Tworzenie makiet i map angażuje myślenie reprezentacyjne — zdolność do tworzenia modeli rzeczywistości. DeLoache (1987): zdolność rozumienia modelu jako reprezentacji rzeczywistości to kamień milowy, który dzieci osiągają ok. 3. roku życia.",
    prep: ["duży karton lub kilka arkuszy papieru", "markery i kredki", "małe pudełeczka jako budynki", "zielona bibuła lub wata na park"],
    phrases: [
      "Co będzie w naszym mieście? Planujesz — ja rysuję!",
      "Tutaj będzie skrzyżowanie z sygnalizacją!",
      "Autko pogotowia jedzie do szpitala — syrena!",
      "Jutro dobudujemy lotnisko na skraju mapy!"
    ],
    tellChild: "Budujesz własne miasto! Na tej kartce narysujemy ulice, sklepy, park — a potem nasze autka będą po nim jeździć. Ty jesteś burmistrzem — co będzie w Twoim mieście?"
  },

  {
    id: 102,
    name: "Transport ładunku",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["planowanie", "myślenie logiczne", "liczenie"],
    topics: ["praca", "matematyka"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Ciężarówka musi przewieźć ładunek (klocki, guziki) z miejsca A do B. Ile kursów? Ile zmieści na raz? Ile łącznie? Fizyczna logistyka przez zabawę.",
    childNeeds: {
      why: "Zadania logistyczne (transport, optymalizacja) angażują myślenie matematyczne i planowanie. Dziecko intuicyjnie rozwiązuje problemy optymalizacji — jak przewieźć to w jak najmniej kursów? To wstęp do myślenia algorytmicznego.",
      goals: ["myślenie matematyczne", "planowanie", "liczenie"],
      emotions: ["skupienie na zadaniu", "satysfakcja z efektywności", "radość z rozwiązania problemu"]
    },
    steps: [
      "Ustaw start (skrzynka pełna klocków) i meta (puste pole).",
      "Ciężarówka może wziąć tylko 3 klocki na raz.",
      "Ile kursów potrzeba żeby przewieźć wszystkie 12 klocków?",
      "Wariant matematyczny: a gdyby brała 4 na raz?",
      "Wariant trudny: 2 trasy, 2 autka — jak podzielić ładunek?",
      "Rekord: jak najszybciej przewieźć cały ładunek z obu autkami."
    ],
    tip: "Ładunek musi się fizycznie mieścić na ciężarówce — to ograniczenie naturalne. Dla 3-4 latków: przewóz bez liczenia, tylko frajda. Dla 5-7 latków: liczenie kursów i ładunku. Dla 7-8: optymalizacja.",
    whyItWorks: "Zadania transportu i podziału angażują najwcześniejsze formy rozumowania kombinatorycznego i optymalizacyjnego. Badania Nunes i Bryant dokumentują jak dzieci naturalnie odkrywają matematykę w kontekście fizycznych zadań.",
    prep: ["ciężarówka lub autko z przyczepą", "klocki lub guziki jako ładunek", "dwa pudełka — start i meta"],
    phrases: [
      "Ciężarówka może wziąć max 3 klocki. Ile kursów?",
      "Już 2 kursy — ile klocków przewiozłeś?",
      "A jak wzięłaby 4 na raz — ile kursów by się zaoszczędziło?",
      "Rekord: 4 kursy! Spróbujemy pobić z dwoma autkami?"
    ],
    tellChild: "Mamy ważne zlecenie dostawcze! Ciężarówka musi przewieźć wszystkie klocki do magazynu, ale bierze tylko 3 na raz. Ile kursów potrzebujesz?"
  },

  {
    id: 103,
    name: "Zbuduj własne autko",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["kreatywność", "motoryka mała", "planowanie"],
    topics: ["inżynieria", "sztuka"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "20-30 min",
    description: "Z kartonu, zakrętek, zapałek i taśmy budujesz własne autko wyścigowe. Nie musi jeździć — ale musi być wyjątkowe! Pełna twórcza wolność.",
    childNeeds: {
      why: "Konstruowanie własnego obiektu (constructionism, Papert) angażuje planowanie 3D, motorykę małą i twórcze myślenie jednocześnie. Efekt — własnoręcznie zbudowana zabawka — jest silnym wzmocnieniem poczucia sprawczości.",
      goals: ["twórcza konstruktywność", "motoryka mała", "poczucie sprawczości"],
      emotions: ["twórcze skupienie", "duma z własnoręcznego dzieła", "ekscytacja"]
    },
    steps: [
      "Zbierz materiały: tekturowe pudełeczko jako karoseria, 4 zakrętki jako koła, wykałaczki jako oś, taśma klejąca.",
      "Pytasz: jak będzie wyglądać Twoje autko? Rysujesz plan?",
      "Dziecko projektuje i buduje — Ty pomagasz przy kleju pistoletowym dla małych.",
      "Koła: przebij wykałaczką przez pudełko, naklej zakrętki z obu stron.",
      "Dekoracja: pomaluj, naklej naklejki, nadaj imię autku.",
      "Test jazdy: czy toczy się? Porównaj z Hot Wheels — co jest inne?"
    ],
    tip: "Nie poprawiaj projektu — niech autko będzie nieproporcjonalne, nieregularne. Liczy się proces, nie efekt. Zrób wernisaż gotowych aut i zapytaj o ich historię. Dla starszych: próba budowania toczącego się autka (osie muszą być proste).",
    whyItWorks: "Constructionism (Papert, 1980) udowodnił, że budowanie rzeczy tworzy głębsze rozumienie zasad niż samo uczenie. Zbudowanie własnego autka daje wgląd w to jak działają prawdziwe samochody — znacznie skuteczniej niż wyjaśnienie.",
    prep: ["tekturowe pudełka i kartony", "4 zakrętki lub guziki jako koła", "wykałaczki lub patyczki jako osie", "klej lub klej pistoletowy", "nożyczki", "kredki i naklejki"],
    phrases: [
      "Narysuj plan swojego autka — jakie będzie?",
      "Jak zamocujemy koła żeby się kręciły?",
      "Twoje autko ma imię? Jakie?",
      "Porównajmy z Hot Wheels — co jest takie samo, co inne?"
    ],
    tellChild: "Dzisiaj budujesz własne autko wyścigowe od zera! Z kartonu, zakrętek i kleju. Nie musi jeździć — ale musi być Twoje i wyjątkowe!"
  },

  {
    id: 104,
    name: "Zderzenia i prawa fizyki",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["myślenie logiczne", "obserwacja", "wnioskowanie"],
    topics: ["inżynieria", "nauka"],
    age: [5, 6, 7, 8],
    method: "montessori",
    duration: "15-20 min",
    description: "Eksperymenty ze zderzeniami autek: co się dzieje gdy duże uderzy w małe? Gdy jedzie szybko vs wolno? Gdy uderza w rząd autek? Intuicyjna fizyka przez eksplorację.",
    childNeeds: {
      why: "Eksperymenty ze zderzeniami angażują intuicyjną fizykę: rozumienie pędu, masy i transferu energii. McCloskey (1983): dzieci mają wiele błędnych intuicji o zderzeniach — własne eksperymenty je korygują.",
      goals: ["myślenie naukowe", "wnioskowanie przyczynowo-skutkowe", "obserwacja"],
      emotions: ["ciekawość naukowa", "ekscytacja eksperymentu", "satysfakcja z odkrycia"]
    },
    steps: [
      "Eksperyment 1: mała prędkość vs. duża prędkość — co się dalej toczy?",
      "Eksperyment 2: duże autko uderza małe vs. małe uderza duże — co się dzieje?",
      "Eksperyment 3: autko w rząd 3 autek (jak kulki Newtona) — co się dzieje z ostatnim?",
      "Hipoteza przed każdym eksperymentem: jak myślisz, co się stanie?",
      "Obserwacja po: co się stało? Czy tak przewidywałeś?",
      "Wniosek: dlaczego tak się stało?"
    ],
    tip: "Rząd autek stojących tyłem to najbardziej zaskakujący efekt. Nie tłumacz zasad przed eksperymentem — pytaj po, a wtedy dziecko odkrywa samo. Zapisujcie wyniki: H (hipoteza), O (obserwacja), W (wniosek).",
    whyItWorks: "Eksperymenty ze zderzeniami są klasycznym sposobem nauczania zasad zachowania pędu i energii kinetycznej. Gopnik: dzieci są naukowcami od kołyski — naturalnie formułują hipotezy i testują je przez zabawę.",
    prep: ["5-6 autek Hot Wheels różnych rozmiarów", "gładka twarda powierzchnia (podłoga lub stół)"],
    phrases: [
      "Jak myślisz — co się stanie gdy duże autko uderzy małe?",
      "Patrz uważnie! Czy tak przewidywałeś?",
      "A teraz ustawiamy 3 autka w rząd...",
      "Dlaczego ostatnie autko pojechało do przodu?"
    ],
    tellChild: "Robimy eksperymenty ze zderzeniami jak prawdziwi fizycy! Przed każdym eksperymentem — co myślisz że się stanie? Potem sprawdzamy i tłumaczymy dlaczego!"
  },

  {
    id: 105,
    name: "Wyścig z zasadami",
    type: "hotwheels",
    place: ["dom", "park"],
    competencies: ["samokontrola", "współpraca", "koncentracja"],
    topics: ["sport", "wartości"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Wyścig autek z regulaminem: fair play, zakaz blokowania, penały za naruszenia. Uczy sportu z regułami, akceptacji przegranej i fair play — przez autka.",
    childNeeds: {
      why: "Reguły sportowe i fair play to jeden z pierwszych kontekstów gdzie dzieci uczą się regulacji emocji przy przegranej. Vygotski: gry z regułami są zaawansowaną formą zabawy rozwijającą samoregulację.",
      goals: ["fair play", "samoregulacja emocji przy przegranej", "rozumienie reguł"],
      emotions: ["sportowa emocja", "nauka przegrywania", "duma z fair play"]
    },
    steps: [
      "Ustalajcie regulamin razem: zakaz blokowania, kto wypadnie z toru wraca na start.",
      "Wprowadź penały: 2 sekundy za wypadnięcie, 3 sekundy za blokowanie.",
      "Turniej 5 wyścigów — punkty za miejsca (3-2-1 pkt).",
      "Komentuj fair play: udało Ci się nie blokować — to jest trudne!",
      "Po turnieju: ceremonial podium, chwila refleksji.",
      "Rozmowa: jak się czułeś gdy wygrałeś? Gdy przegrałeś?"
    ],
    tip: "Celowo przegraj czasami — pokaż jak reagujesz na przegraną ze spokojem: Och, tym razem nie! Dobra gra! Nie toleruj wyrzucania autek ze złości — zatrzymaj grę i omów zasady fair play.",
    whyItWorks: "Zabawy rywalizacyjne z regułami (rule-based competitive play) są kluczowym narzędziem rozwijania samoregulacji emocjonalnej. Bronson (2000): dzieci uczą się samokontroli przez akceptowanie wyników gier — jeśli reguły są jasne i stosowane konsekwentnie.",
    prep: ["autka Hot Wheels", "tor lub prosta powierzchnia do wyścigów", "kartka do zapisywania punktów"],
    phrases: [
      "Czytamy regulamin razem — każdy musi go znać!",
      "Faul! Blokowanie! 3 sekundy kary!",
      "Brawo — mimo że przegrałeś, grałeś fair. Szanuję to.",
      "Podium: pierwsze miejsce... Dobra gra oboje!"
    ],
    tellChild: "Robimy prawdziwy turniej wyścigowy z regulaminem! Reguły obowiązują nas obu — i Ciebie, i mnie. Fair play jest ważniejsze niż wygranie. Gotowy?"
  },

  {
    id: 106,
    name: "Policja i pościg",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["wyobraźnia", "narracja", "koordynacja"],
    topics: ["fantazja", "przygoda"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Policja goni uciekiniera! Jedno autko to radiowóz, drugie ucieka. Pościg przez miasto (mapę lub tor). Intensywna zabawa narracyjna angażująca wyobraźnię.",
    childNeeds: {
      why: "Zabawy w pościgi i role dobry/zły są uniwersalnym elementem dziecięcej zabawy. Dają bezpieczny kontekst do eksplorowania władzy, reguł i konsekwencji — dzieci które odgrywają pościgi rozumieją reguły społeczne lepiej.",
      goals: ["zabawa narracyjna", "rozumienie reguł społecznych", "koordynacja w zabawie"],
      emotions: ["ekscytacja pościgu", "napięcie", "radość z rozwiązania"]
    },
    steps: [
      "Ustalacie role: Ty jesteś policją — ja uciekam. Mam 5 sekund przewagi.",
      "Pościg po torze lub mieście — uciekinier nie może wyjeżdżać poza teren.",
      "Jeśli policja dotknie uciekiniera: koniec — aresztowany!",
      "Po 3 pościgach zamieniacie role.",
      "Fabularyzacja: policja dostała zgłoszenie o zgubionym dziecku — musi je znaleźć!",
      "Moral story: wszyscy są bezpieczni dzięki policji."
    ],
    tip: "Bądź angażującym uciekinierem: uciekaj dramatycznie, manewruj ostro. Gdy jesteś policją: komentuj z napięciem. Dziecko wciągnie się bardziej przez Twoje zaangażowanie.",
    whyItWorks: "Zabawy narracyjne z rolami autorytetu (policja) są jedną z kluczowych form zabawy społecznej opisanych przez Mead (1934). Dziecko odgrywa role społeczne i internalizuje normy przez zabawę bardziej niż przez tłumaczenie.",
    prep: ["dwa autka Hot Wheels", "tor lub mapa miasta"],
    phrases: [
      "Policja wzywa! Mamy pościg na torze!",
      "Nie dogonisz mnie! Zakręt w prawo!",
      "Mam Cię! Zatrzymaj się!",
      "Pościg zakończony. Zamieniamy się rolami!"
    ],
    tellChild: "Czas na policyjny pościg! Ty jesteś policjantem w radiowozie — ja uciekam. Musisz mnie dogonić i zatrzymać! Pościg zaczyna się za 3, 2, 1..."
  },

  {
    id: 107,
    name: "Wyścig wstecz",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["koordynacja", "koncentracja", "cierpliwość"],
    topics: ["sport", "zabawa"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Prowadzisz autko wyłącznie tyłem — przez slalom, przez tor, do celu. Ekstremalnie trudne dla koordynacji! Świetna zabawa, śmiechy gwarantowane.",
    childNeeds: {
      why: "Ruch odwrócony (reversal) angażuje inne sieci neuronowe niż ruch do przodu — wymaga świadomego planowania zamiast automatycznego. To ćwiczenie propriocepcji dłoni i kontroli ruchowej na zaawansowanym poziomie.",
      goals: ["koordynacja motoryczna", "koncentracja", "samokontrola"],
      emotions: ["rozbawienie", "skupienie", "wyzwanie sportowe"]
    },
    steps: [
      "Prosty tor: linia startu, linia mety, odległość 1,5 metra.",
      "Zasada: autko musi jechać tyłem przez cały czas.",
      "Kto dojedzie do mety nie wypadając z toru?",
      "Wariant trudny: slalom tyłem!",
      "Wariant ultra: cofanie przez tunel z klocków.",
      "Turniej: kto bardziej precyzyjnie cofa autem?"
    ],
    tip: "Naprawdę spróbuj sam — to niesamowicie trudne. Twoje śmiechy i błędy zachęcą dziecko. Możesz nagrać video slow-motion na telefonie i razem obejrzeć jak wygląda cofanie.",
    whyItWorks: "Zadania motoryczne odwrócone (reversed motor tasks) angażują sieć kontroli ruchowej bardziej intensywnie niż ruch normalny, ponieważ wymagają świadomego hamowania nawyku do przodu.",
    prep: ["autko Hot Wheels", "tor z taśmy lub klocków jako ograniczniki"],
    phrases: [
      "Tylko tyłem! Nie wolno obracać auta!",
      "Wyjechałem z toru! Śmiechu nie ma końca!",
      "Ty próbuj! Bardziej skomplikowane niż wygląda!",
      "Kto pokona slalom cofając się?"
    ],
    tellChild: "Nowe wyzwanie: wyścig tyłem! Musisz prowadzić autko cofając się — cały czas. To trudniejsze niż myślisz! Startujemy?"
  },

  {
    id: 108,
    name: "Kto trafi w cel?",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["koordynacja", "szacowanie", "koncentracja"],
    topics: ["sport", "matematyka"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Puszczasz autko z rampy i starasz się trafić w cel (pudełko, klocek). Zmieniasz kąt i pozycję rampy żeby wycelować. Fizyczny targeting przez zabawę.",
    childNeeds: {
      why: "Celowanie w fizycznej przestrzeni angażuje visuo-spatial targeting — wzrokowo-przestrzenną kontrolę precyzji. Dziecko uczy się prognozować trajektorię ruchu i korygować ustawienie — to fundament koordynacji ruchowej.",
      goals: ["koordynacja oko-ręka", "myślenie przestrzenne", "szacowanie"],
      emotions: ["napięcie celowania", "satysfakcja z trafienia", "determinacja"]
    },
    steps: [
      "Ustaw cel: pudełko zapałek lub klocek w odległości ok. 50 cm od końca rampy.",
      "Dziecko ustawia rampę i stara się trafić autkiem w cel.",
      "Modyfikacje: zmień kąt rampy, zmień odległość celu.",
      "Turniej: 5 prób — ile trafień?",
      "Trudniejszy cel: mniejsze pudełko, dalej.",
      "Wymyślcie tor łuczniczy z kilkoma celami o różnych wartościach punktowych."
    ],
    tip: "Zaznaczaj pozycję rampy gdy coś trafia — możesz wrócić do tej samej pozycji. Dla starszych: system punktowy (cel bliski = 1 pkt, daleki = 3 pkt) wymaga strategicznego myślenia.",
    whyItWorks: "Doskonalenie precyzji celowania angażuje głęboką adaptację motoryczną przez próbę i błąd — ten sam mechanizm uczenia się który leży u podstaw wszelkich umiejętności motorycznych.",
    prep: ["rampa", "autko Hot Wheels", "cel (pudełko zapałek, klocek)"],
    phrases: [
      "Cel w pudełku! Ustaw rampę i celuj...",
      "Trafienie! Jeden punkt!",
      "Chybienie — może zmień kąt rampy?",
      "Układamy 3 cele o różnych punktach — strategia!"
    ],
    tellChild: "Czas na zawody celownicze — autkami! Ustawiasz rampę, puszczasz autko i starasz się trafić w cel. 5 prób — ile trafień?"
  },

  {
    id: 109,
    name: "Mierz i porównuj",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["matematyka", "myślenie logiczne", "szacowanie"],
    topics: ["matematyka", "nauka"],
    age: [5, 6, 7, 8],
    method: "montessori",
    duration: "15-20 min",
    description: "Mierzysz odległości które autka przejechały z rampy i zapisujesz wyniki. Budujesz tabelę wyścigową — pierwsze doświadczenie z danymi i pomiarami.",
    childNeeds: {
      why: "Mierzenie odległości i zapisywanie wyników to wejście w świat danych i pomiarów — fundament matematyki i nauk ścisłych. Pierwsze doświadczenia z wykresami i tabelami przez konkretny kontekst.",
      goals: ["mierzenie", "praca z danymi", "matematyka"],
      emotions: ["skupienie", "duma z dokładności", "ciekawość naukowa"]
    },
    steps: [
      "Ustaw stałą rampę o stałym kącie — nie ruszaj między pomiarami!",
      "Puść po kolei 5-6 różnych autek — każde 3 razy.",
      "Mierz odległość sznurkiem lub linijką.",
      "Zapisuj wyniki w tabeli: autko, próba 1, próba 2, próba 3, średnia.",
      "Wspólna analiza: które autko było najszybsze? Czy wyniki były stałe?",
      "Wnioski: dlaczego jedno autko jedzie dalej? Co może na to wpływać?"
    ],
    tip: "Linijka dla 5-latka może być za trudna — zmierz sznurkiem, odtnij sznurek i pokaż długości obok siebie. Który sznurek dłuższy? to wystarczający pomiar. Dla starszych: wprowadź centymetry i tabelę na papierze.",
    whyItWorks: "Wykonywanie pomiarów i rejestrowanie danych jest kluczowym krokiem metody naukowej. Dzieci, które wcześnie doświadczają gromadzenia danych przez zabawę, rozwijają lepsze rozumienie matematyki statystycznej w szkole.",
    prep: ["rampa stabilna", "5-6 różnych autek", "linijka lub sznurek", "kartka do tabeli wyników", "ołówek"],
    phrases: [
      "Notujemy wyniki jak prawdziwi naukowcy!",
      "Mierzę sznurkiem — jak myślisz który sznurek jest dłuższy?",
      "Tabela gotowa — które autko wygrało mistrzostwo odległości?",
      "Dlaczego to autko jeździ dalej? Co myślisz?"
    ],
    tellChild: "Dzisiaj jesteśmy naukowcami! Mierzymy jak daleko jadą autka i zapisujemy wyniki w tabeli. Na końcu odkryjemy które jest rekordzistą!"
  },

  {
    id: 110,
    name: "Autko i emocje",
    type: "hotwheels",
    place: ["dom", "podróż"],
    competencies: ["rozpoznawanie emocji", "empatia", "język"],
    topics: ["emocje", "fantazja"],
    age: [3, 4, 5, 6, 7],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Autka wyrażają emocje przez sposób jazdy i głos. Smutne autko jedzie powoli i cicho. Radosne skacze i brzęczy głośno. Projekcja emocji przez ulubioną zabawkę.",
    childNeeds: {
      why: "Projekcja emocji na obiekty-pośredniki (np. zabawki) obniża barierę ekspresji emocjonalnej. Dziecko może wyrazić smutek przez smutne autko bezpieczniej niż bezpośrednio — to technika arteterapeutyczna.",
      goals: ["słownik emocjonalny", "ekspresja emocji", "empatia"],
      emotions: ["otwartość emocjonalna", "bezpieczna ekspresja", "zabawa symboliczna"]
    },
    steps: [
      "Bierzesz autko i pokazujesz emocję przez ruch: autko radosne jedzie szybko, robi akrobacje, wydaje radosne dźwięki.",
      "Autko smutne: jedzie powoli, ciągnąc za sobą, ciche.",
      "Autko przestraszone: stoi, drżące ruchy, cofanie się.",
      "Dziecko wybiera emocję i pokazuje ją swoim autkiem.",
      "Dialog autek: smutne spotyka radosne — co się dzieje?",
      "Pytanie: kiedy Ty się czujesz jak to autko?"
    ],
    tip: "Naprawdę zagraj emocje ciałem i głosem — im bardziej ekspresywny, tym lepiej dziecko wchodzi w zabawę. Po zabawie możesz zapytać subtelnie: a jak się Ty dzisiaj czujesz? Jak które autko?",
    whyItWorks: "Terapia z obiektem-pośrednikiem jest szeroko stosowana w arteterapii dziecięcej (Oaklander, Windows to Our Children). Zabawka jako avatar emocji daje dziecku dystans i bezpieczeństwo do eksploracji trudnych stanów emocjonalnych.",
    prep: ["2-3 autka Hot Wheels"],
    phrases: [
      "Moje autko jest dziś bardzo szczęśliwe! Patrz jak jedzie!",
      "A Twoje autko jak się dzisiaj czuje?",
      "Smutne autko spotkało radosne — co się dzieje?",
      "A Ty — jesteś dziś jak które autko?"
    ],
    tellChild: "Nasze autka mają dzisiaj emocje! Moje jest radosne — patrz jak skacze! A jakie będzie Twoje? Pokaż mi jak jedzie autko z Twoją emocją!"
  },

  {
    id: 111,
    name: "Tor off-road na zewnątrz",
    type: "hotwheels",
    place: ["park"],
    competencies: ["planowanie", "kreatywność", "motoryka duza"],
    topics: ["przygoda", "natura", "inżynieria"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "20-30 min",
    description: "Budujesz tor dla autek na podwórku lub w parku: ziemne kanały, naturalna rampa (korzeń, kamień), piaszczyste zakręty. Ekstremalne Hot Wheels off-road!",
    childNeeds: {
      why: "Zabawa na zewnątrz z modelowaniem terenu angażuje motorykę dużą (kopanie, budowanie) i małą (precyzja toru), łącząc aktywność fizyczną z myśleniem inżynierskim. Kontakt z naturą jest kluczowy dla zdrowego rozwoju (Louv).",
      goals: ["planowanie terenu", "motoryka duża", "motoryka mała"],
      emotions: ["ekscytacja przygody", "twórcze skupienie", "radość z zabawy outdoorowej"]
    },
    steps: [
      "Znajdźcie naturalne elementy: korzeń jako rampa, piasek jako zakręt, kamień jako przeszkoda.",
      "Zaprojektujcie tor: start na wzniesieniu, zjazd, zakręty, skoki.",
      "Zbudujcie kanał dla auta z gałęzi lub kamieni.",
      "Test: czy autko przejeżdża przez cały tor?",
      "Poprawki inżynieryjne: co nie działa? Jak to naprawić?",
      "Wyścigi na gotowym torze!"
    ],
    tip: "Używaj starszych autek na tor zewnętrzny — mogą się porysować. Glina i mokry piasek są idealne do budowania kanałów. Zrób zdjęcia gotowego toru.",
    whyItWorks: "Loose parts play (zabawa z naturalnymi elementami — Nicholson, 1971) jest opisywana jako jedno z najwartościowszych środowisk zabawy. Naturalne materiały nie mają z góry określonego przeznaczenia — dziecko musi myśleć kreatywnie.",
    prep: ["autka Hot Wheels (starsze lub mniej ważne)", "naturalne materiały: piasek, kamienie, gałęzie"],
    phrases: [
      "Tutaj będzie start! A zakręt zrobimy z tych kamieni!",
      "Testujemy — czy autko przejeżdża przez cały tor?",
      "Zepsute! Co poprawiamy?",
      "Ekstremalne Hot Wheels na żywym terenie!"
    ],
    tellChild: "Dzisiaj wychodzimy z autkami na zewnątrz i budujemy ekstremalny tor off-road! Kamienie, ziemia, gałęzie — wszystko może być częścią toru. Ty projektujesz!"
  },

  {
    id: 112,
    name: "Wyścig z kostką",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["liczenie", "myślenie logiczne", "samokontrola"],
    topics: ["matematyka", "sport"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Gra planszowa z autkami: rzucasz kostką i przesuwasz autko o tyle pól. Plansza to domowy tor z tektury z polami specjalnymi. Matematyka i emocje gry planszowej.",
    childNeeds: {
      why: "Gry planszowe z kostką angażują: liczenie (ile oczek?), dodawanie (ile pól łącznie?), samoregulację (akceptacja niekorzystnego rzutu) i antycypację. To jedno z najbogatszych środowisk matematycznych dla 4-8 latków.",
      goals: ["liczenie i dodawanie", "rozumienie losowości", "samoregulacja"],
      emotions: ["ekscytacja", "napięcie rzutu", "satysfakcja z wygranej", "nauka przegranej"]
    },
    steps: [
      "Narysuj tor wyścigowy na kartonie z polami (ok. 20-30 pól).",
      "Dodaj pola specjalne: Pit-stop — stoisz rundę, Turbo — skocz 3 do przodu, Usterka — cofnij 2.",
      "Każdy gracz ma autko. Rzucacie na zmianę kostką i suwajcie autka.",
      "Kto pierwszy dotrze do mety?",
      "Wariant: dwie kości — suma to liczba pól."
    ],
    tip: "Laminuj planszę jeśli chcesz żeby służyła długo. Pola specjalne stwarzają emocje — dzieci 4-5 lat mogą się denerwować. To okazja do rozmowy o losowości: czy kostka jest niesprawiedliwa?",
    whyItWorks: "Gry z kostką angażują rozumienie losowości i liczenia. Badania pokazują, że regularne granie w gry planszowe z kostką poprawia rozumienie liczb i intuicję matematyczną u dzieci w wieku 4-7 lat.",
    prep: ["karton jako plansza", "marker do narysowania toru i pól", "kostka do gry", "2 autka jako pionki"],
    phrases: [
      "Rzucam — pięć! Autko jedzie 5 pól do przodu!",
      "Oj, pit-stop! Stoję rundę!",
      "Masz szansę mnie dogonić — rzucaj!",
      "Meta! Kto wygrał?"
    ],
    tellChild: "Robimy własną grę planszową z autkami! Ty budujesz planszę, ja rysuję pola specjalne — a potem gramy. Który gracz pierwszy dotrze do mety?"
  },

  {
    id: 113,
    name: "Film autkowy",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["narracja", "kreatywność", "wyobraźnia"],
    topics: ["fantazja", "przygoda", "sztuka"],
    age: [5, 6, 7, 8],
    method: "klasyczna",
    duration: "20-25 min",
    description: "Kręcisz krótkometrażowy film autkowy — narracja, efekty dźwiękowe, dramatyczne zakręty. Telefon jako kamera, autka jako aktorzy, Ty i dziecko jako reżyserzy.",
    childNeeds: {
      why: "Tworzenie filmów (digital storytelling) integruje narrację, planowanie, technikę i ekspresję twórczą. Media-making przez dzieci jest jedną z kluczowych kompetencji XXI wieku.",
      goals: ["narracja wizualna", "kreatywność", "współpraca twórcza"],
      emotions: ["ekscytacja twórcza", "duma z dzieła", "radość z oglądania gotowego filmu"]
    },
    steps: [
      "Razem piszecie scenariusz: kto goni kogo? Co się stanie? Jak się kończy?",
      "Ustawiasz telefon jako kamera: możesz filmować z ręki albo postawić na książce.",
      "Dziecko prowadzi autka, Ty komentujesz lub dodaje efekty dźwiękowe.",
      "Sceny: pogoń, wypadek, ratunek, meta.",
      "Montaż: obejrzyjcie film razem natychmiast.",
      "Premiera: podzielcie się z mamą, dziadkami!"
    ],
    tip: "Nie dąż do perfekcji — spontaniczne sceny są najśmieszniejsze. Dziecko może samo komentować jak spiker podczas filmowania. Muzyka z YouTube jako podkład w tle. Zachowaj film — będzie rodzinną pamiątką.",
    whyItWorks: "Digital storytelling angażuje plan narracyjny, realizację i refleksję nad dziełem. Badania pokazują, że tworzenie filmów przez dzieci rozwija metapoznanie szybciej niż pisanie.",
    prep: ["telefon jako kamera", "autka Hot Wheels", "tor lub mapa jako plan filmowy", "opcjonalnie muzyka jako podkład"],
    phrases: [
      "Jaki będzie nasz film? Kto goni kogo?",
      "Kamera! Akcja!",
      "Dramatyczny zakręt — jedź szybciej!",
      "Premiera! Oglądamy gotowy film — poprosimy mamę też!"
    ],
    tellChild: "Kręcimy film autkowy! Ty jesteś reżyserem i aktorem jednocześnie. Ja trzymam kamerę. Gotowy na plan filmowy?"
  },

  {
    id: 114,
    name: "Co się zepsuło?",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["myślenie logiczne", "wnioskowanie", "kreatywność"],
    topics: ["inżynieria", "codzienność"],
    age: [4, 5, 6, 7, 8],
    method: "montessori",
    duration: "15-20 min",
    description: "Autko nie działa — dziecko jest mechanikiem i musi zdiagnozować problem. Tworzysz narrację usterek, dziecko rozwiązuje problemy. Wzmacnia myślenie diagnostyczne.",
    childNeeds: {
      why: "Myślenie diagnostyczne (co się zepsuło i dlaczego) jest formą wnioskowania przyczynowo-skutkowego. Zabawa w mechanika angażuje tę kompetencję w bezpiecznym, grywalizowanym kontekście.",
      goals: ["wnioskowanie przyczynowo-skutkowe", "myślenie diagnostyczne", "kreatywność"],
      emotions: ["poczucie kompetencji", "ciekawość intelektualna", "satysfakcja z naprawy"]
    },
    steps: [
      "Wchodzisz jako klient: Dzień dobry, moje autko nie chce jeździć.",
      "Dziecko jako mechanik pyta: Co się dzieje dokładnie? Kiedy to się zaczęło?",
      "Ty opisujesz symptomy: Jedzie krzywo, Nie hamuje, Robi dziwny hałas.",
      "Dziecko diagnozuje: Koło jest krzywe! Hamulce się rozluźniły!",
      "Naprawia (udaje naprawę prowizorycznymi narzędziami).",
      "Test jazdy: Działa! Ile płacę?"
    ],
    tip: "Im bardziej dramatyczne objawy, tym lepsza zabawa. Pozwól dziecku wymyślać diagnozę nawet jeśli jest fantastyczna — to przelicencja kreatywna, nie wiedza techniczna.",
    whyItWorks: "Zabawa diagnostyczna angażuje myślenie hipotetyczno-dedukcyjne — ten sam typ rozumowania co w naukach ścisłych. Zabawy diagnostyczne przyspieszają rozwój zdolności do formułowania hipotez.",
    prep: ["autka Hot Wheels", "prowizoryczne narzędzia (łyżka, linijka)", "karteczki jako rachunki"],
    phrases: [
      "Proszę Pana, moje autko robi straszny hałas!",
      "Hmm, proszę opisać dokładnie co się dzieje...",
      "Aha! Diagnoza: pęknięta turbospręzarka! Naprawiam natychmiast.",
      "Test jazdy... Działa! Geniusz z Pana mechanik!"
    ],
    tellChild: "Twój serwis jest najlepszy w mieście! Właśnie przyjeżdża bardzo trudny przypadek — autko które robi dziwne odgłosy. Możesz je naprawić?"
  },

  {
    id: 115,
    name: "Salon wystawowy",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["kreatywność", "ekspresja", "język"],
    topics: ["sztuka", "codzienność"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Organizujesz wystawę autek z opisami i cenami. Dziecko jest sprzedawcą w salonie, Ty klientem. Wzbogaca język, uczy opisu i komunikacji handlowej.",
    childNeeds: {
      why: "Zabawa w sklep jest jedną z kluczowych socjodramatycznych form zabawy rozwijającą kompetencje językowe, matematyczne (ceny) i społeczne (obsługa klienta). Opisana przez Piageta i Vygotskiego.",
      goals: ["język opisu i perswazji", "matematyka (ceny)", "komunikacja"],
      emotions: ["poczucie ważności roli", "radość z opisu ulubionych rzeczy", "twórcze skupienie"]
    },
    steps: [
      "Dziecko ustawia autka na wystawie (na stole na karteczkach) z opisami i cenami.",
      "Dziecko pisze lub dyktuje opisy: Ferrari czerwone, max prędkość 400 km/h, cena 200 zł.",
      "Ty wchodzisz jako klient: Dzień dobry, szukam szybkiego auta na wyścigi...",
      "Dziecko przedstawia ofertę.",
      "Negocjacja ceny, zakup, reszta (zabawkowe pieniądze lub papierowe).",
      "Zamieniacie się rolami."
    ],
    tip: "Użyj papierowych banknotów narysowanych razem — matematyka reszty przez zabawę. Zachęcaj do opisów: powiedz mi więcej o tym aucie — dlaczego jest warte tyle?",
    whyItWorks: "Merchant play angażuje language of persuasion i opis obiektów — kompetencje językowe które są fundamentem pisania i prezentacji. Badania Singer i Singer (2005): dzieci bawiące się w sklep mają bogatsze słownictwo.",
    prep: ["autka Hot Wheels", "karteczki z opisami i cenami", "opcjonalnie papierowe pieniądze", "stół jako wystawa"],
    phrases: [
      "Dzień dobry, szukam szybkiego auta do miasta...",
      "Polecam to Ferrari — ma silnik V8 i kosztuje tylko 250 zł!",
      "Czy jest zniżka? Biorę dwa?",
      "Dziękujemy za zakup. Zapraszamy ponownie!"
    ],
    tellChild: "Otwieramy salon samochodowy! Ty jesteś sprzedawcą — ustaw autka, napisz ceny i opisy. Ja przyjdę jako klient i będę chciał kupić coś wyjątkowego!"
  },

  {
    id: 116,
    name: "Lotniskowiec z kanapy",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["wyobraźnia", "narracja", "planowanie"],
    topics: ["fantazja", "przygoda"],
    age: [4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "15-20 min",
    description: "Kanapa staje się lotniskowcem, dywan oceanem, autka są myśliwcami. Wielka przygoda narracyjna gdzie dom staje się scenografią. Buduje wyobraźnię przestrzenną.",
    childNeeds: {
      why: "Transformacja przestrzeni domowej w narracyjne środowisko jest formą zabawy symbolicznej. Vygotski: zabawa symboliczna jest wiodącą aktywnością wieku przedszkolnego — to tam dokonują się najważniejsze zmiany rozwojowe.",
      goals: ["wyobraźnia symboliczna", "narracja przestrzenna", "swobodna zabawa"],
      emotions: ["ekscytacja przygody", "radość transformacji przestrzeni", "poczucie mocy wyobraźni"]
    },
    steps: [
      "Ogłaszasz misję: Kanapa to lotniskowiec na środku oceanu (dywan)! Autka to myśliwce!",
      "Budujecie razem infrastrukturę: poduszki to wyspy, fotel to baza wroga.",
      "Autka startują z lotniskowca (rampa z kartonu) i lądują na wyspach.",
      "Misja: dotarcie do tajemniczej wyspy omijając niebezpieczne skały.",
      "Fabuła: co tam czeka? Skarb? Zagubiona mapa? Ratunek?",
      "Finał: powrót na lotniskowiec i debrief misji."
    ],
    tip: "Wchodź głęboko w narrację: mów głosem radiooperatora, ogłaszaj alerty. Im bardziej się angażujesz, tym bogatszą zabawę tworzy dziecko. Zrób briefing misji przed startem — to buduje napięcie.",
    whyItWorks: "Makronarracja przestrzenna angażuje wyobraźnię przestrzenną i narracyjną jednocześnie. Pellegrini (2009): zabawy w wieloskalową narrację (cała przestrzeń) są pozytywnie powiązane z kreatywnością i myśleniem abstrakcyjnym.",
    prep: ["autka Hot Wheels", "kanapa i poduszki jako scenografia", "karton lub deska jako rampa startowa"],
    phrases: [
      "Uwaga załoga! Startujemy z lotniskowca za 3, 2, 1!",
      "Alarm! Niebezpieczne skały po prawej! Manewruj!",
      "Lądowanie na wyspie udane! Co tam widzimy?",
      "Misja ukończona! Powracamy na lotniskowiec!"
    ],
    tellChild: "Kanapa to lotniskowiec, dywan to ocean, a nasze autka to myśliwce bojowe! Mamy misję dotarcia do tajemniczej wyspy. Gotowy do startu?"
  },

  {
    id: 117,
    name: "Kolorowy reflex",
    type: "hotwheels",
    place: ["dom", "podróż", "poczekalnia"],
    competencies: ["koncentracja", "refleks", "koordynacja"],
    topics: ["kolory", "sport"],
    age: [3, 4, 5, 6, 7],
    method: "klasyczna",
    duration: "10-15 min",
    description: "Każde autko to kolor. Krzyczysz kolor — dziecko wypycha odpowiednie autko jak najszybciej. Szybkie tempo, coraz szybciej. Wersja: 2 kolory naraz. Refleks i koncentracja.",
    childNeeds: {
      why: "Ćwiczenia szybkiego reagowania na sygnał (choice reaction time) trenują szybkość przetwarzania informacji — koreluje z innymi umiejętnościami poznawczymi i koncentracją uwagi.",
      goals: ["szybkość przetwarzania", "koncentracja", "rozpoznawanie kolorów"],
      emotions: ["ekscytacja", "napięcie reaktywne", "śmiech"]
    },
    steps: [
      "Ustaw 4-5 autek w różnych kolorach w rzędzie przed dzieckiem.",
      "Krzyczysz kolor — dziecko jak najszybciej wypycha to autko.",
      "Zaczynasz wolno, przyspieszasz.",
      "Wariant trudny: mówisz po angielsku — RED!",
      "Wariant ekstremalny: dwa kolory naraz — dziecko obiema rękami wypycha po jednym.",
      "Runda pucharowa: kto szybciej — 10 poprawnych kolorów."
    ],
    tip: "Zrób to w dwóch kierunkach: Ty krzyczysz, dziecko reaguje. Potem zamiana: dziecko krzyczy i Ty reagujesz — ale celowo popełniasz błędy żeby dziecko Cię poprawiało. Buduje pewność siebie.",
    whyItWorks: "Choice reaction time jest mierzalnym wskaźnikiem szybkości przetwarzania poznawczego. Ćwiczenie go przez zabawę go-no-go angażuje korę przedczołową — szczególnie wartościowe u dzieci z trudnościami koncentracji.",
    prep: ["4-5 autek w wyraźnie różnych kolorach ustawionych w rzędzie"],
    phrases: [
      "Niebieski!",
      "Czerwony! Szybciej!",
      "Dwa naraz: zielony i żółty!",
      "Popełniłeś błąd! Zaczynamy rundę od nowa!"
    ],
    tellChild: "Uwaga! Będę krzyczał kolory, a Ty jak najszybciej wypychasz właściwe autko! Zaczynam wolno, potem coraz szybciej. Gotowy?"
  },

  {
    id: 118,
    name: "Katalog kolekcji",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["kreatywność", "język", "klasyfikacja"],
    topics: ["sztuka", "matematyka"],
    age: [5, 6, 7, 8],
    method: "montessori",
    duration: "20-30 min",
    description: "Dziecko robi zdjęcia telefonem swojej kolekcji autek i tworzy katalog. Do każdego autka pisze lub dyktuje opis. Własny album kolekcjonerski.",
    childNeeds: {
      why: "Dokumentowanie własnej kolekcji angażuje kompetencje opisowe, klasyfikacyjne i twórcze. Poczucie autorstwa własnej pracy jest silnym motywatorem wewnętrznym i buduje metapoznanie.",
      goals: ["kompetencje opisowe", "klasyfikacja", "wyrażanie się przez media"],
      emotions: ["duma z kolekcji", "poczucie autorstwa", "radość z tworzenia"]
    },
    steps: [
      "Dziecko wybiera 5-8 ulubionych autek.",
      "Fotografuje każde telefonem — uczy się kadrowania.",
      "Do każdego zdjęcia dyktuje opis: To jest moje najszybsze auto — Ferrari czerwone. Dostałem je na urodziny.",
      "Drukujecie lub wyświetlacie jako album.",
      "Dziecko prezentuje album dziadkom — opowiada o swojej kolekcji.",
      "Regularnie aktualizujcie: nowe autko to nowa strona katalogu."
    ],
    tip: "Pomóż w kadrowaniu: zbliż się bardziej, połóż na białym papierze — tak lepiej widać. Ucz portretu produktowego przez zabawę. Można wydrukować na drukarce i zszyć jako książeczkę.",
    whyItWorks: "Portfolio własnych prac (portfolio-based learning) buduje metakognicję — dziecko reflektuje nad tym co posiada i co umie. Prezentacja albumu przed innymi angażuje ekspresję werbalną i dumę z dokonań.",
    prep: ["telefon z aparatem", "autka Hot Wheels", "biały papier jako tło", "drukarka (opcjonalnie)", "notatnik lub zeszyt"],
    phrases: [
      "Fotografujesz swoje autko — ustaw je na białym papierze!",
      "Co powiesz o tym aucie? Dyktuj mi jego opis.",
      "Nasz katalog ma już 5 stron! Pokażesz go babci?",
      "Kiedy dostaniesz nowe autko — dodamy je do katalogu!"
    ],
    tellChild: "Tworzymy oficjalny katalog Twojej kolekcji! Ty fotografujesz autka telefonem i dyktuj mi opisy — ja zapisuję. Na końcu będziemy mieć własną książkę kolekcjonerską!"
  },

  {
    id: 119,
    name: "Tor wspólny",
    type: "hotwheels",
    place: ["dom"],
    competencies: ["współpraca", "planowanie", "komunikacja"],
    topics: ["inżynieria", "relacja"],
    age: [4, 5, 6, 7, 8],
    method: "sherborne",
    duration: "20-30 min",
    description: "Budujesz tor wyłącznie razem z dzieckiem — każda decyzja musi być uzgodniona. Ćwiczenie komunikacji, negocjacji i wspólnego tworzenia. Wynik: wspólny tor.",
    childNeeds: {
      why: "Wspólne działanie z jasno wyznaczonymi etapami decyzyjnymi angażuje kompetencje komunikacyjne i negocjacyjne. Sherborne: relacja buduje się przez wspólne fizyczne działanie z koordynacją.",
      goals: ["współpraca", "komunikacja", "negocjacja"],
      emotions: ["bliskość", "radość ze wspólnego tworzenia", "duma z partnerstwa"]
    },
    steps: [
      "Ustalcie zasadę: każda decyzja musi być uzgodniona przez obie osoby — tak od obu.",
      "Razem: gdzie będzie start? Ile zakrętów? Dodajemy tunel?",
      "Budujcie taśmą lub klockami — fizycznie razem.",
      "Gdy się nie zgadzacie: może wypróbujemy Twój pomysł, potem mój?",
      "Gotowy tor — wyścig inauguracyjny!",
      "Refleksja: co było trudne w budowaniu razem?"
    ],
    tip: "Naprawdę nie przejmuj inicjatywy — czekaj na zgodę. Celowo zaproponuj coś za czym dziecko nie przepada — ćwicz razem jak negocjować kompromis. Tor wspólny staje się naszym torem — specjalny status!",
    whyItWorks: "Cooperative construction play jest jedną z najbardziej zaawansowanych form zabawy kooperacyjnej (Parten, 1932). Wymaga teorii umysłu, komunikacji i regulacji frustracji gdy plany się różnią.",
    prep: ["taśma malarska lub klocki", "autka Hot Wheels"],
    phrases: [
      "Każda decyzja uzgodniona! Gdzie stawiamy start?",
      "Nie wiem... Twój pomysł był dobry. Spróbujmy go!",
      "Nasz tor jest gotowy! Oboje go zbudowaliśmy!",
      "Co było najtrudniejsze w budowaniu razem?"
    ],
    tellChild: "Budujemy tor razem — ALE każda decyzja musi dostać zgodę od nas obu! Jeśli jeden z nas mówi nie — szukamy kompromisu. Czy zgadzamy się na zasady? To zaczynamy!"
  },

  {
    id: 120,
    name: "Wyścig wyobraźni",
    type: "hotwheels",
    place: ["podróż", "restauracja", "poczekalnia"],
    competencies: ["wyobraźnia", "narracja", "koncentracja"],
    topics: ["fantazja", "przygoda", "sport"],
    age: [3, 4, 5, 6, 7, 8],
    method: "klasyczna",
    duration: "5-10 min",
    description: "Bez autka, bez toru — wyłącznie wyobraźnia. Opowiadacie wyścig głosem: I moje auto skręca w lewo, daje gazu... Idealne na podróż, poczekalnię, wszelkie oczekiwania.",
    childNeeds: {
      why: "Wyobrażony wyścig (mental simulation) aktywuje te same sieci neuronowe co prawdziwa zabawa fizyczna. Dzieci, które potrafią bawić się w głowie mają silniejszą wyobraźnię i lepszą odporność na nudę.",
      goals: ["wyobraźnia mentalna", "narracja", "regulacja nudy i oczekiwania"],
      emotions: ["skupienie przez wyobraźnię", "radość narracyjna", "spokój oczekiwania"]
    },
    steps: [
      "Bez żadnych rekwizytów — tylko głos.",
      "Ustalcie tor: Nasze autka są na Monte Carlo — góry, zakręty, morze po lewej!",
      "Każdy opowiada co robi jego autko — na zmianę, jedno zdanie.",
      "Dodajesz nieoczekiwane elementy: Uwaga, koza na trasie!",
      "Dziecko reaguje: Skręcam ostro w lewo, ominąłem ją!",
      "Finał — kto wygrał? Dlaczego? Co poczuł zwycięzca?"
    ],
    tip: "Używaj bogatego języka: szybkość, temperatury, widoki, dźwięki. To jest ćwiczenie wyobraźni i słownictwa jednocześnie. Świetne na długie podróże — można zrobić wiele edycji: wyścig w Japonii, wyścig na Księżycu.",
    whyItWorks: "Mental imagery (wyobrażanie) aktywuje zbliżone sieci neuronowe do percepcji rzeczywistej (Kosslyn, 1994). Zabawy narracyjne bez rekwizytów są szczególnie cenne bo rozwijają wewnętrzne oko — zdolność do wizualizacji mentalnej.",
    prep: ["zero prep — tylko głos i wyobraźnia"],
    phrases: [
      "Zaczynamy wyścig w głowie! Moje autko właśnie wyjeżdża z garażu...",
      "I skręcam w zakręt przy morzu — niesamowity widok!",
      "Uwaga! Kamień na torze! Co robisz?",
      "Meta! Kto wygrał w Twoim wyobrażeniu?"
    ],
    tellChild: "Wyścig bez autek — tylko naszą wyobraźnią! Zamknij oczy. Nasze autka stoją na starcie w Monaco. Słyszysz silniki? Zaczynamy!"
  },
];
