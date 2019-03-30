/**
 * Adds horizontal padding
 * @param gap
 */
export function addHorizontalPadding(gap: string) {
    return `
      padding-left: ${gap};
      padding-right: ${gap};
    `;
}

/**
 * Adds vertical padding multipled by 2
 * @param gap
 */
export function addVerticalPadding(gap: string, settings?: { multiply?: boolean }) {
    const multiply = settings && settings.multiply;
    // Remove units
    const value = Number(gap.slice(0, -2));
    return `
      padding-top: ${`${multiply ? value * 2 : value}px`};
      padding-bottom: ${`${multiply ? value * 2 : value}px`};
    `;
}
