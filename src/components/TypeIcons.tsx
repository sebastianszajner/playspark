/**
 * Custom hand-drawn style SVG icons for activity types.
 * Replaces emoji with distinctive, premium illustrations.
 */

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

function Svg({ size = 24, children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
}

// Magnifying glass with playful tilt — zgadywanka
export function IconZgadywanka({ size, color = "#F59E0B", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <circle cx="14" cy="13" r="8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="19" x2="27" y2="26" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="11" r="2" fill={color} opacity="0.2" />
      <path d="M10 16c1.5 1.5 5 1.5 7 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

// Pencil with creative spark — rysowanie
export function IconRysowanie({ size, color = "#EC4899", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M5 27L8 18L24 4L28 8L12 24L5 27Z" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M8 18L12 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="4" r="1.5" fill={color} opacity="0.3" />
      <path d="M22 2L24 0M26 2L28 0M24 4L26 2" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </Svg>
  );
}

// Theatre masks — kalambury
export function IconKalambury({ size, color = "#3B82F6", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M6 10C6 6 10 3 15 3C20 3 23 6 23 10C23 16 15 20 15 20C15 20 6 16 6 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="9" r="1.5" fill={color} />
      <circle cx="19" cy="9" r="1.5" fill={color} />
      <path d="M12 14C13 15.5 17 15.5 18 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 22C16 22 22 20 25 23C28 26 25 30 21 29C17 28 16 24 16 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="22" cy="25" r="0.8" fill={color} opacity="0.4" />
      <path d="M21 27.5C21.5 28 23 28 23.5 27" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </Svg>
  );
}

// Running figure with motion lines — ruch
export function IconRuch({ size, color = "#22C55E", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <circle cx="18" cy="5" r="3" stroke={color} strokeWidth="2" />
      <path d="M12 14L16 10L22 12L26 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 10L13 20L17 18L14 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12L27 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 10H8M3 14H7M5 18H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </Svg>
  );
}

// Drum with rhythm waves — rytm
export function IconRytm({ size, color = "#A855F7", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <ellipse cx="16" cy="20" rx="10" ry="5" stroke={color} strokeWidth="2" />
      <path d="M6 14V20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M26 14V20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="16" cy="14" rx="10" ry="5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <path d="M13 4L16 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M19 4L16 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.5" fill={color} />
      <circle cx="20" cy="3" r="1.5" fill={color} />
      <path d="M2 8C3 7 4 9 5 8M27 8C28 7 29 9 30 8" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </Svg>
  );
}

// Open book with sparkle — narracja
export function IconNarracja({ size, color = "#F97316", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 6C4 6 8 4 16 6V28C8 26 4 28 4 28V6Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.08" />
      <path d="M28 6C28 6 24 4 16 6V28C24 26 28 28 28 28V6Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 12H13M8 16H12M19 12H24M19 16H23" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M25 2L26 4L28 3L27 5L29 6L27 6L28 8L26 7L25 9L25 7L23 8L24 6L22 5L24 5L23 3L25 4Z" fill={color} opacity="0.5" />
    </Svg>
  );
}

// Building blocks — budowanie
export function IconBudowanie({ size, color = "#06B6D4", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <rect x="4" y="20" width="10" height="8" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="18" y="20" width="10" height="8" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="11" y="12" width="10" height="8" rx="1.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <rect x="8" y="4" width="8" height="8" rx="1.5" stroke={color} strokeWidth="2" />
      <path d="M22 4L26 8L22 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    </Svg>
  );
}

// Eye with detail iris — obserwacja
export function IconObserwacja({ size, color = "#10B981", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M3 16C3 16 8 6 16 6C24 6 29 16 29 16C29 16 24 26 16 26C8 26 3 16 3 16Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="2" />
      <circle cx="16" cy="16" r="2" fill={color} />
      <circle cx="14.5" cy="14" r="1" fill="white" opacity="0.8" />
      <path d="M6 8L8 10M26 8L24 10M16 3V5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </Svg>
  );
}

// Brain with gears — poznawcze
export function IconPoznawcze({ size, color = "#EA580C", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M16 3C12 3 9 5 9 8C6 8 4 11 4 14C4 18 7 20 10 20C10 24 13 27 16 27C19 27 22 24 22 20C25 20 28 18 28 14C28 11 26 8 23 8C23 5 20 3 16 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 3V27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M10 10C12 12 14 11 16 13C18 11 20 12 22 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M10 17C12 15 14 16 16 14C18 16 20 15 22 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="12" cy="13" r="1" fill={color} opacity="0.5" />
      <circle cx="20" cy="13" r="1" fill={color} opacity="0.5" />
    </Svg>
  );
}

// Hot Wheels racing car — hotwheels
export function IconHotwheels({ size, color = "#E11D48", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      {/* Car body */}
      <path d="M3 21H29L27 17L21 11H11L7 16L3 21Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.08" />
      {/* Windshield */}
      <path d="M12 11L10 16H22L20 11Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill={color} fillOpacity="0.18" />
      {/* Rear spoiler */}
      <path d="M21 11L24 8L27 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Front wheel */}
      <circle cx="9" cy="23" r="3.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <circle cx="9" cy="23" r="1.2" fill={color} opacity="0.5" />
      {/* Rear wheel */}
      <circle cx="23" cy="23" r="3.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <circle cx="23" cy="23" r="1.2" fill={color} opacity="0.5" />
      {/* Speed lines */}
      <path d="M1 15H4M1 19H4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Exhaust spark */}
      <circle cx="29" cy="19" r="1" fill={color} opacity="0.35" />
      <circle cx="31" cy="17" r="0.7" fill={color} opacity="0.2" />
    </Svg>
  );
}

// Leaf with calm wave — relaks
export function IconRelaks({ size, color = "#0D9488", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M16 4C16 4 6 8 6 18C6 24 10 28 16 28C22 28 26 24 26 18C26 8 16 4 16 4Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <path d="M16 4V28" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <path d="M10 16C12 14 14 15 16 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M10 20C12 18 14 19 16 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="24" cy="8" r="1.2" fill={color} opacity="0.4" />
      <circle cx="27" cy="11" r="0.8" fill={color} opacity="0.25" />
    </Svg>
  );
}

// Place icons
export function IconDom({ size, color = "#666", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 16L16 4L28 16V28H4V16Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <rect x="12" y="18" width="8" height="10" rx="1" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="23" r="0.8" fill={color} />
      <path d="M10 11L16 5L22 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </Svg>
  );
}

export function IconPark({ size, color = "#22C55E", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M16 4L8 16H12L6 26H26L20 16H24L16 4Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <line x1="16" y1="26" x2="16" y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </Svg>
  );
}

export function IconPodroz({ size, color = "#3B82F6", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <rect x="4" y="12" width="24" height="12" rx="3" stroke={color} strokeWidth="2" />
      <circle cx="10" cy="26" r="2.5" stroke={color} strokeWidth="2" />
      <circle cx="22" cy="26" r="2.5" stroke={color} strokeWidth="2" />
      <path d="M8 12V8H20V12" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <rect x="22" y="15" width="4" height="3" rx="1" fill={color} opacity="0.3" />
    </Svg>
  );
}

export function IconRestauracja({ size, color = "#F59E0B", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M6 16C6 10 10 6 16 6C22 6 26 10 26 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="18" x2="28" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 18V28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 18V28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 28H22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconPoczekalnia({ size, color = "#8B5CF6", className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2" />
      <path d="M16 8V16L22 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="1.5" fill={color} />
      <path d="M16 4V6M28 16H26M16 26V28M6 16H4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </Svg>
  );
}

// Type icon map
const TYPE_ICON_MAP: Record<string, React.FC<IconProps>> = {
  zgadywanka: IconZgadywanka,
  rysowanie: IconRysowanie,
  kalambury: IconKalambury,
  ruch: IconRuch,
  rytm: IconRytm,
  narracja: IconNarracja,
  budowanie: IconBudowanie,
  obserwacja: IconObserwacja,
  poznawcze: IconPoznawcze,
  hotwheels: IconHotwheels,
  relaks: IconRelaks,
};

const PLACE_ICON_MAP: Record<string, React.FC<IconProps>> = {
  dom: IconDom,
  park: IconPark,
  podróż: IconPodroz,
  restauracja: IconRestauracja,
  poczekalnia: IconPoczekalnia,
};

export function TypeIcon({ type, size = 24, color, className }: { type: string } & IconProps) {
  const Component = TYPE_ICON_MAP[type];
  if (!Component) return null;
  return <Component size={size} color={color} className={className} />;
}

export function PlaceIcon({ place, size = 16, color, className }: { place: string } & IconProps) {
  const Component = PLACE_ICON_MAP[place];
  if (!Component) return null;
  return <Component size={size} color={color} className={className} />;
}
