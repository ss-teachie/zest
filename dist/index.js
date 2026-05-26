const e = {
  // ── PRIMARY ─────────────────────────────────────────────────
  // "Teachable Lemon appears in every single standalone communication"
  primary: {
    lemon: "#e6ff32",
    // "Teachable Lemon" — confirmed
    lightLemon: "#f8ffc6",
    // confirmed — B2B palette (PMS 600 C)
    navy: "#112846",
    // confirmed — B2B palette
    black: "#000000",
    white: "#ffffff"
  },
  // ── NEUTRALS ─────────────────────────────────────────────────
  neutrals: {
    charcoal: "#4e4e4e",
    // confirmed — B2B palette (PMS Cool Gray 10 C)
    warmGray: "#d1ceb3",
    // confirmed — B2B palette (PMS Warm Gray 2 C)
    // Warm grey tonal scale — Figma Marketing Website variables
    warmGray50: "#a7a5a2",
    warmGray60: "#7d7c7a",
    warmGray70: "#545251",
    warmGray80: "#2a2929",
    coolBeige: "#f6f2ee"
    // confirmed — B2B palette (PMS 9181 C)
  },
  // ── LEMON TINTS + SHADES — Figma "Teachable Primary" palette ─
  lemonScale: {
    tint40: "#f0ffad",
    tint60: "#f5ffca",
    tint80: "#f8ffe4",
    shade20: "#b8cc28",
    shade40: "#8a9920",
    shade60: "#5c6615",
    shade80: "#2e330b"
  },
  // ── SECONDARY ────────────────────────────────────────────────
  secondary: {
    bordeaux: "#651a1a",
    // TODO: confirm exact hex
    cabernet: "#7f2a23",
    // TODO: confirm exact hex
    olive: "#466301"
    // confirmed — B2B palette (PMS 7757 C)
  },
  // ── TERTIARY ─────────────────────────────────────────────────
  tertiary: {
    turquoise: "#b6f2e8",
    // TODO: confirm exact hex
    peach: "#f5a87a",
    // TODO: confirm exact hex
    violet: "#c9b8f0"
    // TODO: confirm exact hex
  },
  // ── LEGACY (kept for compatibility) ──────────────────────────
  brand: {
    lemon: "#e6ff32",
    // alias → primary.lemon
    lightLemon: "#f8ffc6",
    // alias → primary.lightLemon
    yellowLight: "#f8ffc6",
    // deprecated alias
    blueDark: "#1c4774",
    // verify if still needed post-rebrand
    redDark: "#7f2a23",
    // deprecated → use secondary.cabernet
    blueLight: "#b6f2e8",
    // deprecated → use tertiary.turquoise
    greyMid: "#bfbfbf",
    greyLight: "#f0f0f0",
    coolBeige: "#f6f2ee"
  },
  enterprise: {
    darkNavy: "#112846",
    // confirmed — B2B palette (was #182a44)
    darkOlive: "#1c2600"
    // confirmed — B2B palette (was #1e2605)
  },
  neutral: {
    black: "#000000",
    white: "#ffffff",
    darkest: "#111111",
    darker: "#222222",
    dark: "#444444",
    mid: "#666666",
    light: "#aaaaaa",
    lighter: "#cccccc",
    lightest: "#eeeeee",
    transparent: "transparent"
  },
  // Semantic UI (Apps collection — shadcn-compatible)
  ui: {
    primary: "#a7bc00",
    primaryForeground: "#0d0e05",
    secondary: "#f1fcc7",
    secondaryForeground: "#0d0e07",
    muted: "#f8f8f8",
    mutedForeground: "#7d797a",
    accent: "#e4e4e4",
    accentForeground: "#0d0d0d",
    destructive: "#d5455f",
    ring: "#e7fc7b",
    border: "#000000",
    background: "#ffffff",
    foreground: "#000000",
    card: "#ffffff",
    cardForeground: "#060606"
  },
  // Dark mode variants
  dark: {
    primary: "#e6ff32",
    primaryForeground: "#050601",
    background: "#030303",
    foreground: "#f8f8f8",
    card: "#141414",
    cardForeground: "#f8f8f8",
    muted: "#010101",
    mutedForeground: "#868686",
    accent: "#292929",
    accentForeground: "#f8f8f8",
    destructive: "#e3526a",
    border: "rgba(0,0,0,0.1)",
    ring: "#e7fc7b"
  }
}, r = {
  fontFamily: {
    // IvyPresto Headline → Merriweather (multiple weights; DM Serif ruled out — single weight)
    heading: "'Merriweather', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
    // Peridot PE Variable → DM Sans (SemiBold 600 for button text)
    button: "'DM Sans', system-ui, sans-serif"
  },
  fontWeight: {
    thin: 100,
    xlight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    xbold: 800,
    black: 900
  },
  fontSize: {
    // Named scale
    tiny: "0.75rem",
    small: "0.875rem",
    regular: "1rem",
    medium: "1.15rem",
    large: "1.5rem",
    xlarge: "2.5rem",
    // Heading scale (desktop)
    h1: "5rem",
    h2: "4rem",
    h3: "3rem",
    h4: "1.5rem",
    h5: "1.25rem",
    h6: "0.875rem",
    body: "1.3rem"
  },
  lineHeight: {
    small: 1,
    medium: 1.1,
    // Merriweather/IvyPresto headings: 100–110%
    body: 1.35,
    // DM Sans: brand spec 135% — eyebrow, body, subtitle B, text
    large: 1.4,
    // kept for compatibility
    xlarge: 1.5
    // kept for compatibility
  },
  letterSpacing: {
    tighter: "-0.5px",
    tight: "-0.25px",
    default: "0px",
    wide: "0.25px",
    wider: "0.5px"
  }
}, a = {
  none: "0rem",
  tiny: "0.125rem",
  xxsmall: "0.25rem",
  xsmall: "0.5rem",
  small: "1rem",
  medium: "2rem",
  large: "3rem",
  xlarge: "4rem",
  xxlarge: "5rem",
  huge: "6rem",
  xhuge: "8rem",
  xxhuge: "12rem",
  globalPadding: "2rem",
  heroTopPadding: "14rem"
}, m = {
  small: "2rem",
  medium: "5rem",
  large: "8rem"
}, f = {
  xxsmall: "0.25rem",
  xsmall: "0.5rem",
  small: "1rem",
  regular: "1.5rem",
  medium: "2rem",
  large: "3rem",
  xlarge: "4rem"
}, l = {
  maxWidth: {
    xxsmall: "12rem",
    xsmall: "16rem",
    small: "34rem",
    medium: "40rem",
    large: "52rem",
    xlarge: "64rem",
    xxlarge: "80rem"
  },
  container: {
    small: "48rem",
    medium: "68rem",
    large: "86rem"
  },
  borderWidth: {
    thin: "1px",
    normal: "0.125rem",
    bold: "0.25rem"
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.6rem",
    large: "1rem",
    xlarge: "1.5rem",
    full: "9999px"
  }
}, d = {
  colors: e,
  typography: r,
  spacing: a,
  sectionPadding: m,
  gaps: f,
  sizes: l
};
export {
  e as colors,
  f as gaps,
  m as sectionPadding,
  l as sizes,
  a as spacing,
  d as theme,
  r as typography
};
