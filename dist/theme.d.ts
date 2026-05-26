/**
 * make-able theme object
 * Structured JS/TS export of Teachable design tokens.
 * Use these as references in inline styles, CSS-in-JS, or
 * to hint Figma Make about available values.
 */
export declare const colors: {
    readonly primary: {
        readonly lemon: "#e6ff32";
        readonly lightLemon: "#f8ffc6";
        readonly navy: "#112846";
        readonly black: "#000000";
        readonly white: "#ffffff";
    };
    readonly neutrals: {
        readonly charcoal: "#4e4e4e";
        readonly warmGray: "#d1ceb3";
        readonly warmGray50: "#a7a5a2";
        readonly warmGray60: "#7d7c7a";
        readonly warmGray70: "#545251";
        readonly warmGray80: "#2a2929";
        readonly coolBeige: "#f6f2ee";
    };
    readonly lemonScale: {
        readonly tint40: "#f0ffad";
        readonly tint60: "#f5ffca";
        readonly tint80: "#f8ffe4";
        readonly shade20: "#b8cc28";
        readonly shade40: "#8a9920";
        readonly shade60: "#5c6615";
        readonly shade80: "#2e330b";
    };
    readonly secondary: {
        readonly bordeaux: "#651a1a";
        readonly cabernet: "#7f2a23";
        readonly olive: "#466301";
    };
    readonly tertiary: {
        readonly turquoise: "#b6f2e8";
        readonly peach: "#f5a87a";
        readonly violet: "#c9b8f0";
    };
    readonly brand: {
        readonly lemon: "#e6ff32";
        readonly lightLemon: "#f8ffc6";
        readonly yellowLight: "#f8ffc6";
        readonly blueDark: "#1c4774";
        readonly redDark: "#7f2a23";
        readonly blueLight: "#b6f2e8";
        readonly greyMid: "#bfbfbf";
        readonly greyLight: "#f0f0f0";
        readonly coolBeige: "#f6f2ee";
    };
    readonly enterprise: {
        readonly darkNavy: "#112846";
        readonly darkOlive: "#1c2600";
    };
    readonly neutral: {
        readonly black: "#000000";
        readonly white: "#ffffff";
        readonly darkest: "#111111";
        readonly darker: "#222222";
        readonly dark: "#444444";
        readonly mid: "#666666";
        readonly light: "#aaaaaa";
        readonly lighter: "#cccccc";
        readonly lightest: "#eeeeee";
        readonly transparent: "transparent";
    };
    readonly ui: {
        readonly primary: "#a7bc00";
        readonly primaryForeground: "#0d0e05";
        readonly secondary: "#f1fcc7";
        readonly secondaryForeground: "#0d0e07";
        readonly muted: "#f8f8f8";
        readonly mutedForeground: "#7d797a";
        readonly accent: "#e4e4e4";
        readonly accentForeground: "#0d0d0d";
        readonly destructive: "#d5455f";
        readonly ring: "#e7fc7b";
        readonly border: "#000000";
        readonly background: "#ffffff";
        readonly foreground: "#000000";
        readonly card: "#ffffff";
        readonly cardForeground: "#060606";
    };
    readonly dark: {
        readonly primary: "#e6ff32";
        readonly primaryForeground: "#050601";
        readonly background: "#030303";
        readonly foreground: "#f8f8f8";
        readonly card: "#141414";
        readonly cardForeground: "#f8f8f8";
        readonly muted: "#010101";
        readonly mutedForeground: "#868686";
        readonly accent: "#292929";
        readonly accentForeground: "#f8f8f8";
        readonly destructive: "#e3526a";
        readonly border: "rgba(0,0,0,0.1)";
        readonly ring: "#e7fc7b";
    };
};
export declare const typography: {
    readonly fontFamily: {
        readonly heading: "'Merriweather', Georgia, serif";
        readonly body: "'DM Sans', system-ui, sans-serif";
        readonly button: "'DM Sans', system-ui, sans-serif";
    };
    readonly fontWeight: {
        readonly thin: 100;
        readonly xlight: 200;
        readonly light: 300;
        readonly normal: 400;
        readonly medium: 500;
        readonly semiBold: 600;
        readonly bold: 700;
        readonly xbold: 800;
        readonly black: 900;
    };
    readonly fontSize: {
        readonly tiny: "0.75rem";
        readonly small: "0.875rem";
        readonly regular: "1rem";
        readonly medium: "1.15rem";
        readonly large: "1.5rem";
        readonly xlarge: "2.5rem";
        readonly h1: "5rem";
        readonly h2: "4rem";
        readonly h3: "3rem";
        readonly h4: "1.5rem";
        readonly h5: "1.25rem";
        readonly h6: "0.875rem";
        readonly body: "1.3rem";
    };
    readonly lineHeight: {
        readonly small: 1;
        readonly medium: 1.1;
        readonly body: 1.35;
        readonly large: 1.4;
        readonly xlarge: 1.5;
    };
    readonly letterSpacing: {
        readonly tighter: "-0.5px";
        readonly tight: "-0.25px";
        readonly default: "0px";
        readonly wide: "0.25px";
        readonly wider: "0.5px";
    };
};
export declare const spacing: {
    readonly none: "0rem";
    readonly tiny: "0.125rem";
    readonly xxsmall: "0.25rem";
    readonly xsmall: "0.5rem";
    readonly small: "1rem";
    readonly medium: "2rem";
    readonly large: "3rem";
    readonly xlarge: "4rem";
    readonly xxlarge: "5rem";
    readonly huge: "6rem";
    readonly xhuge: "8rem";
    readonly xxhuge: "12rem";
    readonly globalPadding: "2rem";
    readonly heroTopPadding: "14rem";
};
export declare const sectionPadding: {
    readonly small: "2rem";
    readonly medium: "5rem";
    readonly large: "8rem";
};
export declare const gaps: {
    readonly xxsmall: "0.25rem";
    readonly xsmall: "0.5rem";
    readonly small: "1rem";
    readonly regular: "1.5rem";
    readonly medium: "2rem";
    readonly large: "3rem";
    readonly xlarge: "4rem";
};
export declare const sizes: {
    readonly maxWidth: {
        readonly xxsmall: "12rem";
        readonly xsmall: "16rem";
        readonly small: "34rem";
        readonly medium: "40rem";
        readonly large: "52rem";
        readonly xlarge: "64rem";
        readonly xxlarge: "80rem";
    };
    readonly container: {
        readonly small: "48rem";
        readonly medium: "68rem";
        readonly large: "86rem";
    };
    readonly borderWidth: {
        readonly thin: "1px";
        readonly normal: "0.125rem";
        readonly bold: "0.25rem";
    };
    readonly borderRadius: {
        readonly small: "0.25rem";
        readonly medium: "0.6rem";
        readonly large: "1rem";
        readonly xlarge: "1.5rem";
        readonly full: "9999px";
    };
};
export declare const theme: {
    readonly colors: {
        readonly primary: {
            readonly lemon: "#e6ff32";
            readonly lightLemon: "#f8ffc6";
            readonly navy: "#112846";
            readonly black: "#000000";
            readonly white: "#ffffff";
        };
        readonly neutrals: {
            readonly charcoal: "#4e4e4e";
            readonly warmGray: "#d1ceb3";
            readonly warmGray50: "#a7a5a2";
            readonly warmGray60: "#7d7c7a";
            readonly warmGray70: "#545251";
            readonly warmGray80: "#2a2929";
            readonly coolBeige: "#f6f2ee";
        };
        readonly lemonScale: {
            readonly tint40: "#f0ffad";
            readonly tint60: "#f5ffca";
            readonly tint80: "#f8ffe4";
            readonly shade20: "#b8cc28";
            readonly shade40: "#8a9920";
            readonly shade60: "#5c6615";
            readonly shade80: "#2e330b";
        };
        readonly secondary: {
            readonly bordeaux: "#651a1a";
            readonly cabernet: "#7f2a23";
            readonly olive: "#466301";
        };
        readonly tertiary: {
            readonly turquoise: "#b6f2e8";
            readonly peach: "#f5a87a";
            readonly violet: "#c9b8f0";
        };
        readonly brand: {
            readonly lemon: "#e6ff32";
            readonly lightLemon: "#f8ffc6";
            readonly yellowLight: "#f8ffc6";
            readonly blueDark: "#1c4774";
            readonly redDark: "#7f2a23";
            readonly blueLight: "#b6f2e8";
            readonly greyMid: "#bfbfbf";
            readonly greyLight: "#f0f0f0";
            readonly coolBeige: "#f6f2ee";
        };
        readonly enterprise: {
            readonly darkNavy: "#112846";
            readonly darkOlive: "#1c2600";
        };
        readonly neutral: {
            readonly black: "#000000";
            readonly white: "#ffffff";
            readonly darkest: "#111111";
            readonly darker: "#222222";
            readonly dark: "#444444";
            readonly mid: "#666666";
            readonly light: "#aaaaaa";
            readonly lighter: "#cccccc";
            readonly lightest: "#eeeeee";
            readonly transparent: "transparent";
        };
        readonly ui: {
            readonly primary: "#a7bc00";
            readonly primaryForeground: "#0d0e05";
            readonly secondary: "#f1fcc7";
            readonly secondaryForeground: "#0d0e07";
            readonly muted: "#f8f8f8";
            readonly mutedForeground: "#7d797a";
            readonly accent: "#e4e4e4";
            readonly accentForeground: "#0d0d0d";
            readonly destructive: "#d5455f";
            readonly ring: "#e7fc7b";
            readonly border: "#000000";
            readonly background: "#ffffff";
            readonly foreground: "#000000";
            readonly card: "#ffffff";
            readonly cardForeground: "#060606";
        };
        readonly dark: {
            readonly primary: "#e6ff32";
            readonly primaryForeground: "#050601";
            readonly background: "#030303";
            readonly foreground: "#f8f8f8";
            readonly card: "#141414";
            readonly cardForeground: "#f8f8f8";
            readonly muted: "#010101";
            readonly mutedForeground: "#868686";
            readonly accent: "#292929";
            readonly accentForeground: "#f8f8f8";
            readonly destructive: "#e3526a";
            readonly border: "rgba(0,0,0,0.1)";
            readonly ring: "#e7fc7b";
        };
    };
    readonly typography: {
        readonly fontFamily: {
            readonly heading: "'Merriweather', Georgia, serif";
            readonly body: "'DM Sans', system-ui, sans-serif";
            readonly button: "'DM Sans', system-ui, sans-serif";
        };
        readonly fontWeight: {
            readonly thin: 100;
            readonly xlight: 200;
            readonly light: 300;
            readonly normal: 400;
            readonly medium: 500;
            readonly semiBold: 600;
            readonly bold: 700;
            readonly xbold: 800;
            readonly black: 900;
        };
        readonly fontSize: {
            readonly tiny: "0.75rem";
            readonly small: "0.875rem";
            readonly regular: "1rem";
            readonly medium: "1.15rem";
            readonly large: "1.5rem";
            readonly xlarge: "2.5rem";
            readonly h1: "5rem";
            readonly h2: "4rem";
            readonly h3: "3rem";
            readonly h4: "1.5rem";
            readonly h5: "1.25rem";
            readonly h6: "0.875rem";
            readonly body: "1.3rem";
        };
        readonly lineHeight: {
            readonly small: 1;
            readonly medium: 1.1;
            readonly body: 1.35;
            readonly large: 1.4;
            readonly xlarge: 1.5;
        };
        readonly letterSpacing: {
            readonly tighter: "-0.5px";
            readonly tight: "-0.25px";
            readonly default: "0px";
            readonly wide: "0.25px";
            readonly wider: "0.5px";
        };
    };
    readonly spacing: {
        readonly none: "0rem";
        readonly tiny: "0.125rem";
        readonly xxsmall: "0.25rem";
        readonly xsmall: "0.5rem";
        readonly small: "1rem";
        readonly medium: "2rem";
        readonly large: "3rem";
        readonly xlarge: "4rem";
        readonly xxlarge: "5rem";
        readonly huge: "6rem";
        readonly xhuge: "8rem";
        readonly xxhuge: "12rem";
        readonly globalPadding: "2rem";
        readonly heroTopPadding: "14rem";
    };
    readonly sectionPadding: {
        readonly small: "2rem";
        readonly medium: "5rem";
        readonly large: "8rem";
    };
    readonly gaps: {
        readonly xxsmall: "0.25rem";
        readonly xsmall: "0.5rem";
        readonly small: "1rem";
        readonly regular: "1.5rem";
        readonly medium: "2rem";
        readonly large: "3rem";
        readonly xlarge: "4rem";
    };
    readonly sizes: {
        readonly maxWidth: {
            readonly xxsmall: "12rem";
            readonly xsmall: "16rem";
            readonly small: "34rem";
            readonly medium: "40rem";
            readonly large: "52rem";
            readonly xlarge: "64rem";
            readonly xxlarge: "80rem";
        };
        readonly container: {
            readonly small: "48rem";
            readonly medium: "68rem";
            readonly large: "86rem";
        };
        readonly borderWidth: {
            readonly thin: "1px";
            readonly normal: "0.125rem";
            readonly bold: "0.25rem";
        };
        readonly borderRadius: {
            readonly small: "0.25rem";
            readonly medium: "0.6rem";
            readonly large: "1rem";
            readonly xlarge: "1.5rem";
            readonly full: "9999px";
        };
    };
};
export type Theme = typeof theme;
//# sourceMappingURL=theme.d.ts.map