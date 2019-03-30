/**
 * An array of numbers which equals the lenght of the provided argument.
 * Imitates _.times from lodash
 */
export function times(amount: number): number[] {
    return Array.from(Array(amount).keys());
}

export function random() {
    return Math.round(Math.random() * 100);
}

/**
 * Gets a random number in between of a given range
 */
export function randomRange(min: number, max: number) {
    return Math.round(Math.random() * (+max - +min) + +min);
}
