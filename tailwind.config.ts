import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        billman: {
          black: '#121212',
          dark: '#1a1a1a',
          gray: '#333333',
          lightGray: '#8A898C',
          green: '#0D9D58',
          lightGreen: '#27AE60',
          white: '#FFFFFF',
          offWhite: '#F5F5F7',
          tableFelt: '#0b6e3d',
          woodBrown: '#8B4513',
          chalk: '#0092cc',
          cueWood: '#d2b48c',
        },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.8'
          }
        },
        'billiard-roll': {
          '0%, 100%': {
            transform: 'translateX(0) rotate(0deg)'
          },
          '50%': {
            transform: 'translateX(100%) rotate(360deg)'
          }
        },
        'cue-strike': {
          '0%': {
            transform: 'translateX(-20px)'
          },
          '20%': {
            transform: 'translateX(5px)'
          },
          '30%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'pocket-drop': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'slide-in': 'slide-in 0.7s ease-out forwards',
        'zoom-in': 'zoom-in 0.7s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s infinite',
        'billiard-roll': 'billiard-roll 3s infinite ease-in-out',
        'cue-strike': 'cue-strike 1.5s ease-out',
        'pocket-drop': 'pocket-drop 0.8s forwards ease-in-out'
			},
      fontFamily: {
        'sans': ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgba(26, 26, 26, 0.95))',
        'billiard-felt': 'radial-gradient(circle, rgba(13, 157, 88, 0.03) 1px, transparent 1px)',
        'billiard-table': 'linear-gradient(to bottom, rgba(11, 110, 61, 0.8), rgba(13, 157, 88, 0.6))',
        'cue-gradient': 'linear-gradient(90deg, #d2b48c, #e6ccb3, #d2b48c)',
      },
      boxShadow: {
        'glass': '0 4px 24px -2px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 15px rgba(13, 157, 88, 0.5)',
        'pocket': '0 0 10px 3px rgba(0, 0, 0, 0.4) inset',
        'felt': '0 0 30px rgba(13, 157, 88, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundSize: {
        'pattern-sm': '20px 20px',
        'pattern-md': '50px 50px',
        'pattern-lg': '100px 100px',
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
