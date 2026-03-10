# PlaySpark — Deep Research Brief
### „Wrzuć zdjęcie miejsca → dostań zabawy offline dopasowane do wieku dziecka"
*Dokument dla Claude Code — pełna baza wiedzy do zbudowania aplikacji*

---

## 1. Jeden zdaniem — co robimy

Rodzic w poczekalni, na dworcu, w kawiarni — robi zdjęcie przestrzeni telefonem. System rozpoznaje co jest w pobliżu (krzesła, serwetki, parasole, schody…) i generuje 3–5 konkretnych zabaw rozwojowych bez ekranu, dopasowanych do wieku dziecka.

---

## 2. Kluczowa wiedza: Etapy rozwoju dziecka a typ zabawy

Aplikacja musi dobierać aktywności na podstawie **dwóch wymiarów**:
- **Wiek dziecka** (input od rodzica)
- **Zasoby w przestrzeni** (odczytane z fotek)

### Mapa wiekowa (evidence-based)

| Wiek | Teoria (Piaget/Parten) | Typ zabawy | Co wspierać |
|------|------------------------|------------|-------------|
| 0–12 m | Sensorimotor | Unoccupied / Solitary | Zmysły (dotyk, dźwięk, kontrast), tummy time, peek-a-boo |
| 1–2 l | Sensorimotor → Preoperational | Solitary / Parallel | Przyczynowość (wrzuca, wyciąga, otwiera), naśladowanie, ruch |
| 2–3 l | Preoperational | Parallel | Symbolika (blok = auto), proste sortowanie, zabawa równoległa |
| 3–5 l | Preoperational | Associative / Dramatic | Udawanie, role play, konstruowanie, pytania "dlaczego" |
| 5–7 l | Concrete Operational | Cooperative / Rules | Proste reguły, teamwork, liczby, kategorie, zagadki |
| 7–10 l | Concrete Operational | Cooperative / Games with rules | Strategia, rywalizacja fair-play, projekty, poszukiwania |
| 10–12 l | Formal Operational (wchodzenie) | Complex games / Projects | Hipotezy, kreatywne projekty, gry słowne, role złożone |

### Domeny rozwojowe do targetowania (dla każdej aktywności system powinien oznaczyć co ćwiczy)
- **Motor gruby** — bieganie, balansowanie, skakanie
- **Motor drobny** — układanie, składanie, rysowanie
- **Kognitywny** — sortowanie, liczenie, pamięć, logika
- **Językowy** — opowiadanie historii, gry słowne, pytania
- **Społeczno-emocjonalny** — współpraca, empatia, negocjacja, reguły
- **Kreatywny/wyobraźnia** — drama, udawanie, konstruowanie

---

## 3. Architektura techniczna

### Przepływ danych

```
[Rodzic: wiek dziecka] 
       +
[Zdjęcia (1-3 fotek przestrzeni)]
       ↓
ETAP 1 — Scene Understanding (Claude Vision)
  → identyfikacja obiektów i ich właściwości
  → ocena przestrzeni (otwarta/zamknięta, duża/mała, publiczna)
  → lista "zasobów do zabawy"
       ↓
ETAP 2 — Activity Generation (Claude Text)
  → mapowanie zasobów na aktywności developmentowe
  → filtrowanie przez profil wiekowy
  → generowanie 3-5 konkretnych propozycji z instrukcją
       ↓
ETAP 3 — Output
  → karty aktywności (tytuł, instrukcja krok po kroku, czas, domena)
```

### Prompt Engineering — ETAP 1 (Scene Understanding)

**System prompt:**
```
You are a child development expert analyzing spaces for play potential. 
Look at the provided image(s) and extract:

1. OBJECTS LIST: Every physical object visible that could be used in play 
   (chairs, cups, napkins, bags, floor patterns, steps, pillars, shadows, etc.)
2. SPACE PROPERTIES: 
   - Size estimate (small/medium/large)  
   - Type (indoor/outdoor/semi-outdoor)
   - Public/private
   - Noise level suitability (quiet ok / need quiet activities)
3. SAFETY FLAGS: Any obvious hazards (stairs without rails, traffic, breakables)

Return as JSON:
{
  "objects": ["string"],
  "space": { "size": "", "type": "", "public": true/false, "noise_ok": true/false },
  "safety_flags": ["string"],
  "play_surfaces": ["floor type, walls, etc."]
}
```

### Prompt Engineering — ETAP 2 (Activity Generation)

**System prompt:**
```
You are a child development expert and play therapist. 
Given available objects in a space and a child's age, generate 3-5 offline, 
screen-free play activities that are:
- Age-appropriate (matching developmental stage theory: Piaget + Parten)
- Executable with ONLY objects available in the space
- Safe for public setting
- Genuinely developmentally valuable (tag which domain each targets)
- Concise enough for a tired parent to explain in 30 seconds

For each activity return:
{
  "title": "Catchy name",
  "age_range": "X-Y years",  
  "duration": "5-10 min",
  "domain": ["cognitive", "motor_fine", "motor_gross", "language", "social", "creative"],
  "objects_needed": ["from available list only"],
  "setup": "One sentence",
  "instructions": ["Step 1", "Step 2", "Step 3"],
  "why_it_works": "Brief developmental rationale (1 sentence)",
  "difficulty_variants": { "easier": "", "harder": "" }
}
```

### Kluczowe technikalia dla Claude Code

**Model:** `claude-sonnet-4-20250514`

**Image input (base64 z telefonu):**
```typescript
const imageContent = {
  type: "image",
  source: {
    type: "base64",
    media_type: "image/jpeg",
    data: base64String  // z camera roll / file picker
  }
}
```

**Ograniczenia Claude Vision do uwzględnienia:**
- Nie identyfikuje ludzi/twarzy → OK, tego nie potrzebujemy
- Spatial reasoning ograniczony → prosimy o listę obiektów, nie o układ przestrzenny
- Może liczyć obiekty przybliżone → wystarczy dla naszego use case
- Max rozmiar image: 1568px, ~1600 tokenów per image → resize przed wysłaniem
- Optimal: max 1.15 megapixel per image

**Resize przed API call (React Native / mobile):**
```typescript
// Resize to 1000x1000 max before base64 encoding
// Library: react-native-image-resizer or expo-image-manipulator
```

---

## 4. Baza wiedzy aktywności (seed data dla promptów)

System powinien mieć w prompcie przykłady aktywności per obiekt jako "few-shot" examples, żeby Claude dawał konkretne, praktyczne wyniki.

### Przykłady mapowania obiekt → aktywność

**KRZESŁA / MEBLE:**
- *Labirynt* (3-6 lat): Ustaw krzesła jako przeszkody, dziecko czołga się/przechodzi między nimi
- *Dom/zamek* (2-5 lat): Narzuta z kurtki na krzesła = dom, bawią się w rodzinę
- *Teatrzyk* (4-8 lat): Rząd krzeseł = widownia, dziecko wymyśla i prezentuje show

**SERWETKI / PAPIER:**
- *Origami proste* (4+ lat): Łódka, samolot z serwetki
- *Deszcz konfetti* (2-3 lata): Rwać i rzucać w górę (motor drobny)
- *Mapowanie* (6+ lat): Narysuj mapę skarbu tego miejsca

**MONETY / BILON:**
- *Sortowanie* (2-3 lata): Sortowanie po wielkości lub "błyszczące/nie"
- *Rzut tarczowy* (5+ lat): Linia z kawałka serwetki, rzucasz monetą kto bliżej
- *Sklep* (3-6 lat): Udawany sklep, ceny, płacenie

**SCHODY / PODWYŻSZENIA:**
- *Liczenie* (2+ lata): Licz głośno każdy stopień
- *Slalom* (4+ lat): Wchodzenie naprzemiennie nogami
- *Trampolina wyobraźni* (3-5 lat): Każdy schodek to "inny kraj" — opowiadaj historię

**CIENIE / OKNA / SŁOŃCE:**
- *Teatr cieni* (3+ lata): Ręce przed oknem, opowiadanie historii cieniami
- *Mierzenie cieni* (6+ lat): Czyj cień jest najdłuższy? Dlaczego?

**MENU / NAPISY:**
- *Polowanie na litery* (4-6 lat): Znajdź wszystkie "A" w menu
- *Czytanie ze zrozumieniem* (6+ lat): Stwórz swoją wersję menu
- *Wymyśl potrawy* (4+ lat): Co jadają smoki? Potwory? Astronauci?

---

## 5. UX / Ekrany aplikacji (dla Claude Code)

### Ekran 1 — Onboarding (pierwsze uruchomienie)
- Imię dziecka + wiek (slider lub bubbles: 0-1 / 1-3 / 3-5 / 5-8 / 8-12)
- Opcjonalnie: drugi profil (rodzeństwo)
- Persystowane lokalnie

### Ekran 2 — Główny (Home)
- Przycisk "Zrób zdjęcie" (camera) + "Wybierz z galerii"
- Podgląd wybranego(ych) zdjęć (1-3 max)
- Wyświetlany aktywny profil dziecka z możliwością szybkiej zmiany
- Przycisk "Znajdź zabawy!" → loading z przyjaznym copy

### Ekran 3 — Ładowanie
- Animacja (nie spinner — coś dziecięcego)
- Copy: "Patrzę co tu mamy…", "Wymyślam zabawy dla [imię]…"

### Ekran 4 — Wyniki (karty aktywności)
- Swipeable cards lub lista z expand
- Każda karta:
  - Emoji + tytuł aktywności
  - Czas trwania (5 min / 10 min / 15 min)
  - Ikony domen (🧠 kognitywne, 🏃 ruch, 🗣️ język, 🤝 społeczne, 🎨 kreacja)
  - Rozwijana instrukcja krok po kroku
  - "Dlaczego to działa" — 1 zdanie dla rodzica
  - Warianty: Łatwiej / Trudniej

### Ekran 5 — Historia (opcjonalnie)
- Ostatnie 10 sesji z miniaturą zdjęcia i listą wygenerowanych zabaw
- Ulubione (gwiazdka)

---

## 6. Profil wiekowy — system decyzyjny

```typescript
interface AgeProfile {
  ageMonths: number;
  playStyle: 'solitary' | 'parallel' | 'associative' | 'cooperative';
  cognitiveStage: 'sensorimotor' | 'preoperational' | 'concrete' | 'formal';
  maxInstructionSteps: number;  // złożoność instrukcji
  ruleCapacity: boolean;         // czy rozumie reguły
  symbolPlay: boolean;           // czy bawi się symbolami
  cooperationCapacity: boolean;  // czy może grać z innymi
}

function getAgeProfile(ageMonths: number): AgeProfile {
  if (ageMonths < 12) return { playStyle: 'solitary', cognitiveStage: 'sensorimotor', maxInstructionSteps: 1, ruleCapacity: false, symbolPlay: false, cooperationCapacity: false };
  if (ageMonths < 24) return { playStyle: 'parallel', cognitiveStage: 'sensorimotor', maxInstructionSteps: 2, ruleCapacity: false, symbolPlay: false, cooperationCapacity: false };
  if (ageMonths < 36) return { playStyle: 'parallel', cognitiveStage: 'preoperational', maxInstructionSteps: 2, ruleCapacity: false, symbolPlay: true, cooperationCapacity: false };
  if (ageMonths < 60) return { playStyle: 'associative', cognitiveStage: 'preoperational', maxInstructionSteps: 3, ruleCapacity: false, symbolPlay: true, cooperationCapacity: false };
  if (ageMonths < 84) return { playStyle: 'cooperative', cognitiveStage: 'concrete', maxInstructionSteps: 4, ruleCapacity: true, symbolPlay: true, cooperationCapacity: true };
  if (ageMonths < 120) return { playStyle: 'cooperative', cognitiveStage: 'concrete', maxInstructionSteps: 5, ruleCapacity: true, symbolPlay: true, cooperationCapacity: true };
  return { playStyle: 'cooperative', cognitiveStage: 'formal', maxInstructionSteps: 6, ruleCapacity: true, symbolPlay: true, cooperationCapacity: true };
}
```

---

## 7. Obsługa edge cases

| Sytuacja | Zachowanie systemu |
|----------|--------------------|
| Zdjęcie bardzo ciemne / rozmazane | Poproś o nowe zdjęcie z komunikatem |
| Zdjęcie bez użytecznych obiektów (np. tylko ściana) | Zwróć aktywności "bez rekwizytów" (wyliczanka, kalambury, gry słowne) |
| Wiek 0-6 miesięcy | Tylko aktywności z rodzicem, bez rekwizytów lub z bezpiecznymi |
| Dwie/trzy dzieci (rodzeństwo, różny wiek) | Generuj aktywności wspólne lub "każdy robi coś dla siebie" |
| Brak internetu | Cache 20 ostatnich aktywności per wiek-kategoria, tryb offline |
| API error | Wyświetl 5 "universal" zabaw z wbudowanej bazy |

---

## 8. Dane techniczne stack (sugerowany dla Claude Code)

```
Frontend:    React Native (Expo) — cross-platform iOS + Android
State:       Zustand (prosty, lekki)
Storage:     AsyncStorage (profil) + MMKV (cache aktywności)
Images:      expo-image-picker + expo-image-manipulator (resize)
API:         Anthropic Claude API (bezpośrednio z aplikacji lub przez własne proxy)
Auth:        Brak — lokalna aplikacja, nie ma potrzeby kont
Analytics:   Opcjonalnie Posthog (open source)
```

**WAŻNE — bezpieczeństwo API key:**
Nie hardcode API key w aplikacji mobilnej. Opcje:
1. Własne API proxy (Cloudflare Workers / Next.js serverless) — **zalecane**
2. Użytkownik podaje własny klucz w ustawieniach (power user mode)

---

## 9. Przykładowy kompletny prompt (gotowy do Claude Code)

```typescript
const generateActivities = async (
  images: string[],  // base64 JPEGs
  childAgeMonths: number,
  childName: string
) => {
  const ageProfile = getAgeProfile(childAgeMonths);
  
  // STEP 1: Scene analysis
  const sceneResponse = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 800,
    messages: [{
      role: "user",
      content: [
        ...images.map(img => ({
          type: "image" as const,
          source: { type: "base64" as const, media_type: "image/jpeg" as const, data: img }
        })),
        {
          type: "text",
          text: `Analyze this space for children's play potential. 
          List every physical object that could be used creatively in play.
          Return JSON: { objects: string[], spaceType: string, isSafe: boolean, safetyNotes: string[] }`
        }
      ]
    }]
  });
  
  const sceneData = JSON.parse(sceneResponse.content[0].text);
  
  // STEP 2: Activity generation
  const activitiesResponse = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514", 
    max_tokens: 2000,
    system: `You are a child development expert specializing in screen-free, 
    improvisational play. You know Piaget's cognitive stages and Parten's social play stages deeply.
    Always generate activities appropriate for the exact developmental stage.
    Child profile: ${childName}, ${childAgeMonths} months old.
    Developmental stage: ${ageProfile.cognitiveStage}, ${ageProfile.playStyle} play preferred.
    Rule understanding: ${ageProfile.ruleCapacity}. 
    Max instruction complexity: ${ageProfile.maxInstructionSteps} steps.`,
    messages: [{
      role: "user",
      content: `Available objects in current space: ${sceneData.objects.join(', ')}.
      Space type: ${sceneData.spaceType}.
      
      Generate exactly 4 creative, developmentally-appropriate offline activities for ${childName}.
      Each must use ONLY listed objects. No screen time. Safe for public space.
      
      Return JSON array of activities:
      [{
        "title": string,
        "emoji": string,
        "duration": "5 min" | "10 min" | "15 min",
        "domains": ["cognitive"|"motor_fine"|"motor_gross"|"language"|"social"|"creative"],
        "objectsNeeded": string[],
        "instructions": string[],  // max ${ageProfile.maxInstructionSteps} steps
        "whyItWorks": string,
        "easierVersion": string,
        "harderVersion": string
      }]`
    }]
  });
  
  return JSON.parse(activitiesResponse.content[0].text);
};
```

---

## 10. Monetyzacja i wzrost (do przemyślenia po MVP)

- **Freemium:** 5 sesji/dzień za darmo → Pro bez limitu (~30 PLN/mies)
- **Rodzinna subskrypcja:** do 3 profili dzieci
- **Paczki aktywności offline:** "Zabawy w samolocie", "Zabawy w restauracji" — zakup jednorazowy
- **B2B:** Licencja dla przedszkoli, poczekalń pediatrycznych, salonów beauty
- **Partnerstwo:** Sieć restauracji/kawiarni (branded experience dla rodzin)

---

*Dokument przygotowany dla Claude Code. Zawiera wszystkie kluczowe warstwy wiedzy potrzebne do zbudowania MVP: teorię rozwoju dziecka, architekturę techniczną, prompt engineering, UX flow i przykładowy kod.*
