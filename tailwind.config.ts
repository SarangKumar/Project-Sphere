import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        "screen-1.5xl": "1408px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        xxs: "12px",
      },
      colors: {
        info: "var(--ds-blue-700)",
        warn: "var(--ds-amber-700)",
        success: "var(--ds-green-700)",
        danger: "var(--ds-red-700)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fade: {
          "0%, 100%": { opacity: "0.2" },
          "10%": { opacity: "0.8" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wave: "wave 2s ease-in-out infinite;",
        fade: "fade 1.44s infinite ease-out both",
      },
      animationDelay: {
        400: "400ms",
        180: "180ms",
        360: "360ms",
      },
      typography: (theme: any) => ({
        xs: {
          css: {
            h1: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
              lineHeight: theme("lineHeight.tight"),
              marginBottom: theme("spacing.4"),
            },
            h2: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.bold"),
              marginBottom: theme("spacing.3"),
            },
            h3: {
              fontSize: theme("fontSize.lg"),
              fontWeight: theme("fontWeight.bold"),
              marginBottom: theme("spacing.2"),
            },
            h4: {
              fontSize: theme("fontSize.base"),
              fontWeight: theme("fontWeight.semibold"),
              marginBottom: theme("spacing.2"),
            },
            h5: {
              fontSize: theme("fontSize.xs"),
              marginBottom: theme("spacing.2"),
            },
            h6: {
              fontSize: theme("fontSize.xxs"),
              marginBottom: theme("spacing.1"),
            },
            p: {
              fontSize: theme("fontSize.base"),
              marginBottom: theme("spacing.4"),
            },
            a: {
              fontSize: theme("fontSize.base"),
              color: theme("colors.primary"),
              "&:hover": { color: theme("colors.primary") },
            },
            blockquote: {
              fontSize: theme("fontSize.base"),
              fontStyle: "italic",
              color: theme("colors.secondary.foreground.500"),
              paddingLeft: theme("spacing.4"),
              borderLeftColor: theme("colors.primary.500"),
              borderLeftWidth: theme("borderWidth.4"),
            },
            figure: { marginBottom: theme("spacing.4") },
            figcaption: {
              fontSize: theme("fontSize.sm"),
              color: theme("colors.gray.500"),
            },
            strong: { fontWeight: theme("fontWeight.semibold") },
            em: { fontStyle: "italic" },
            kbd: {
              padding: theme("spacing.2"),
              fontSize: theme("fontSize.sm"),
              backgroundColor: theme("colors.gray.100"),
              borderRadius: theme("borderRadius.md"),
            },
            code: {
              fontSize: theme("fontSize.sm"),
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.gray.100"),
              padding: theme("spacing.2"),
              borderRadius: theme("borderRadius.md"),
            },
            pre: {
              fontSize: theme("fontSize.sm"),
              backgroundColor: theme("colors.primary"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.md"),
              display: theme("block"),
            },
            ol: {
              fontSize: theme("fontSize.sm"),
              marginBottom: theme("spacing.3"),
            },
            ul: {
              fontSize: theme("fontSize.sm"),
              marginBottom: theme("spacing.3"),
            },
            li: {
              marginBottom: theme("spacing.2"),
            },
            table: {
              fontSize: theme("fontSize.base"),
              marginBottom: theme("spacing.4"),
            },
            thead: { fontWeight: theme("fontWeight.semibold") },
            tr: { borderBottomWidth: theme("borderWidth.2") },
            th: { padding: theme("spacing.4") },
            td: {
              padding: theme("spacing.4"),
              fontSize: theme("fontSize.sm"),
            },
            img: { marginBottom: theme("spacing.4") },
            video: { marginBottom: theme("spacing.4") },
            hr: {
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.8"),
            },
          },
        },
      }),
    },
  },
  safelist: ["prose-xs"],
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
