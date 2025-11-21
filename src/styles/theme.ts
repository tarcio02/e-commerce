export const theme = {
  colors: {
    bGround2: 'linear-gradient(135deg, #2C3E50, #34495e)',
    text: '#fff',
  },
  spaces: {
    paddingDesktop: '80px',
    paddingMobile: '24px',
  },
}

// src/styles/theme.ts
export type ColorHSL = `${number} ${number}% ${number}%`;

export interface DesignTokens {
  colors: {
    background: ColorHSL;
    foreground: ColorHSL;

    card: ColorHSL;
    cardForeground: ColorHSL;

    popover: ColorHSL;
    popoverForeground: ColorHSL;

    primary: ColorHSL;
    primaryForeground: ColorHSL;

    secondary: ColorHSL;
    secondaryForeground: ColorHSL;

    muted: ColorHSL;
    mutedForeground: ColorHSL;

    accent: ColorHSL;
    accentForeground: ColorHSL;

    destructive: ColorHSL;
    destructiveForeground: ColorHSL;

    border: ColorHSL;
    input: ColorHSL;
    ring: ColorHSL;

    sidebarBackground: ColorHSL;
    sidebarForeground: ColorHSL;
    sidebarPrimary: ColorHSL;
    sidebarPrimaryForeground: ColorHSL;
    sidebarAccent: ColorHSL;
    sidebarAccentForeground: ColorHSL;
    sidebarBorder: ColorHSL;
    sidebarRing: ColorHSL;
  };
  radius: string;
}

export const lightTheme: DesignTokens = {
  colors: {
    background: "0 0% 100%",
    foreground: "0 0% 15%",

    card: "0 0% 100%",
    cardForeground: "0 0% 15%",

    popover: "0 0% 100%",
    popoverForeground: "0 0% 15%",

    primary: "40 100% 50%",
    primaryForeground: "0 0% 100%",

    secondary: "0 6% 47%",
    secondaryForeground: "0 0% 100%",

    muted: "0 0% 96%",
    mutedForeground: "0 0% 45%",

    accent: "40 100% 50%",
    accentForeground: "0 0% 100%",

    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 100%",

    border: "0 0% 90%",
    input: "0 0% 90%",
    ring: "40 100% 50%",

    sidebarBackground: "0 0% 98%",
    sidebarForeground: "240 5.3% 26.1%",
    sidebarPrimary: "240 5.9% 10%",
    sidebarPrimaryForeground: "0 0% 98%",
    sidebarAccent: "240 4.8% 95.9%",
    sidebarAccentForeground: "240 5.9% 10%",
    sidebarBorder: "220 13% 91%",
    sidebarRing: "217.2 91.2% 59.8%",
  },
  radius: "0.75rem",
};

export const darkTheme: DesignTokens = {
  colors: {
    background: "0 0% 10%",
    foreground: "0 0% 95%",

    card: "0 0% 15%",
    cardForeground: "0 0% 95%",

    popover: "0 0% 15%",
    popoverForeground: "0 0% 95%",

    primary: "40 100% 50%",
    primaryForeground: "0 0% 100%",

    secondary: "0 6% 35%",
    secondaryForeground: "0 0% 100%",

    muted: "0 0% 20%",
    mutedForeground: "0 0% 65%",

    accent: "40 100% 50%",
    accentForeground: "0 0% 100%",

    destructive: "0 62.8% 50%",
    destructiveForeground: "0 0% 100%",

    border: "0 0% 25%",
    input: "0 0% 25%",
    ring: "40 100% 50%",

    sidebarBackground: "240 5.9% 10%",
    sidebarForeground: "240 4.8% 95.9%",
    sidebarPrimary: "224.3 76.3% 48%",
    sidebarPrimaryForeground: "0 0% 100%",
    sidebarAccent: "240 3.7% 15.9%",
    sidebarAccentForeground: "240 4.8% 95.9%",
    sidebarBorder: "240 3.7% 15.9%",
    sidebarRing: "217.2 91.2% 59.8%",
  },
  radius: "0.75rem",
};
