const withOpacity = (rgbVar, fallbackVar) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${rgbVar}), ${opacityValue})`;
    }
    return `var(${fallbackVar})`;
  };
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--text-primary-rgb", "--text-primary"),
        'on-primary': withOpacity("--bg-primary-rgb", "--bg-primary"),
        ink: withOpacity("--text-primary-rgb", "--text-primary"),
        'ink-deep': withOpacity("--text-primary-deep-rgb", "--text-primary-deep"),
        charcoal: withOpacity("--text-primary-rgb", "--text-primary"),
        body: withOpacity("--text-secondary-rgb", "--text-secondary"),
        mute: withOpacity("--text-tertiary-rgb", "--text-tertiary"),
        stone: withOpacity("--text-tertiary-rgb", "--text-tertiary"),
        ash: withOpacity("--text-tertiary-rgb", "--text-tertiary"),
        canvas: withOpacity("--bg-primary-rgb", "--bg-primary"),
        'surface-soft': withOpacity("--bg-tertiary-rgb", "--bg-tertiary"),
        'surface-card': withOpacity("--card-bg-rgb", "--card-bg"),
        'surface-dark': withOpacity("--bg-secondary-rgb", "--bg-secondary"),
        'surface-dark-elevated': withOpacity("--card-bg-elevated-rgb", "--card-bg-elevated"),
        hairline: withOpacity("--border-rgb", "--border"),
        'hairline-strong': withOpacity("--border-strong-rgb", "--border-strong"),
        'on-dark': withOpacity("--bg-primary-rgb", "--bg-primary"),
        'on-dark-mute': withOpacity("--text-tertiary-rgb", "--text-tertiary"),
        accent: withOpacity("--action-primary-rgb", "--action-primary"),
        'accent-hover': withOpacity("--action-hover-rgb", "--action-hover"),
        'accent-active': withOpacity("--action-active-rgb", "--action-active"),
        'accent-signal': withOpacity("--accent-signal-rgb", "--accent-signal"),
        warning: "#ffb020",
        'warning-hover': "#e09400",
        'warning-active': "#c27d00",
        danger: "#fa4b4b",
        'danger-hover': "#d93838",
        'danger-active': "#b82a2a",
        success: "#2ed573",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['38px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-md': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-strong': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-tight': ['16px', { lineHeight: '1', fontWeight: '500' }],
        'link-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'button-md': ['16px', { lineHeight: '2', fontWeight: '500' }],
        'caption-md': ['14px', { lineHeight: '2', fontWeight: '400' }],
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'full': '9999px',
      },
      spacing: {
        'xxs': '1px',
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'xxl': '32px',
        'section': '96px',
      }
    },
  },
  plugins: [],
}
