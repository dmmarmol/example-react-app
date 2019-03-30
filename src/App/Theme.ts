import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const appTheme = {
    // primary: '#91F9E5',
    primary: 'rgb(26, 177, 203)',
    light: 'rgba(245, 245, 245, 1)',
    superLight: '#CCFCFF',
    secondary: 'rgba(62, 105, 144, 1)',
    dark: 'rgba(11, 12, 12, 1)',
    highlight: 'rgb(17, 167, 212)',
    gray: '#F5F5F5',
    // Background
    // bgLight: 'rgba(145, 249, 229, 1)',
    // Base
    baseFontSize: '15px',
    // Gutter
    gap: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
    },
    // Viewport Breakpoints
    breakpoints: {
        xs: 0,
        sm: 48,
        md: 64,
        lg: 75,
    },
    // Icons
    icon: {
        xs: '0.9rem',
        sm: '1.7rem',
        md: '2.25rem',
        lg: '3rem',
    },
    // Transition / Animation
    animation: {
        slow: '900ms',
        normal: '400ms',
        fast: '200ms',
    },
};

export type Theme = typeof appTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default styled;

/**
 * Get Gap value based on current window width
 */
type IGetGapProps = (settings?: { asNumber?: boolean }) => number;

export const getGap: IGetGapProps = () => {
    const viewportWidth = window.innerWidth;

    const lg = appTheme.breakpoints.lg;
    const md = appTheme.breakpoints.md;
    const sm = appTheme.breakpoints.sm;

    let result = appTheme.gap.xs;
    if (viewportWidth <= lg) {
        result = appTheme.gap.lg;
    }
    if (viewportWidth <= md) {
        result = appTheme.gap.md;
    }
    if (viewportWidth <= sm) {
        result = appTheme.gap.sm;
    }

    return Number(result.slice(0, -2));
};

/**
 * Set of ready-to-go functions to specify a CSS breakpoint
 */
export const breakpoint = {
    xs: (content: string): string => `
  @media only screen and (min-width: ${`${appTheme.breakpoints.xs}em`}) {
    ${content}
  }`,
    sm: (content: string): string => `
      @media only screen and (min-width: ${`${appTheme.breakpoints.sm}em`}) {
        ${content}
      }`,
    md: (content: string): string => `
      @media only screen and (min-width: ${`${appTheme.breakpoints.md}em`}) {
        ${content}
      }`,
    lg: (content: string): string => `
      @media only screen and (min-width: ${`${appTheme.breakpoints.lg}em`}) {
        ${content}
      }`,
    xsOnly: (content: string): string => `
      @media only screen and (max-width: ${`${appTheme.breakpoints.sm}em`}) {
        ${content}
      }`,
    smOnly: (content: string): string => `
      @media only screen and (min-width: ${`${appTheme.breakpoints.sm}em`}) (max-width: ${`${
        appTheme.breakpoints.md
    }em`}) {
        ${content}
      }`,
    mdOnly: (content: string): string => `
      @media only screen and (min-width: ${`${appTheme.breakpoints.md}em`}) (max-width: ${`${
        appTheme.breakpoints.lg
    }em`}) {
        ${content}
      }`,
};
