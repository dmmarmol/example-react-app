import { getFilteredPlayers, filterByName, filterByPosition, filterByAge } from './../form.selectors';
import { Position, FormFiltersFormData } from 'store/form/filters/formFiltersTypes';
import { Player } from 'store/players/playersTypes';

describe('Form Selectors', () => {
    const getPlayer = (props?: Partial<Player>) => ({ ...props } as Player);

    describe('filter', () => {
        describe('ByName', () => {
            it('Should return TRUE if both filter and value match', () => {
                const player = getPlayer({ name: 'Chris Smalling', position: Position.ATTACKING_MIDFIELD, age: 27 });
                const value = 'Chris Smalling';
                const actual = filterByName(value)(player);
                const expected = true;
                expect(actual).toEqual(expected);
            });
            it('Should return FALSE if the provided filter can`t match with the value', () => {
                const player = getPlayer({ name: 'Romelu Lukaku', position: Position.ATTACKING_MIDFIELD, age: 27 });
                const value = 'Chris Smalling';
                const actual = filterByName(value)(player);
                const expected = false;
                expect(actual).toEqual(expected);
            });
        });
        describe('ByPosition', () => {
            it('Should return TRUE if both filter and value match', () => {
                const player = getPlayer({ name: 'Player 2', position: Position.LEFT_MIDFIELD, age: 33 });
                const value = 'Left Midfield';
                const actual = filterByPosition(value)(player);
                const expected = true;
                expect(actual).toEqual(expected);
            });
            it('Should return FALSE if the provided filter can`t match with the value', () => {
                const player = getPlayer({ name: 'Player 2', position: Position.ATTACKING_MIDFIELD, age: 33 });
                const value = 'Left Midfield';
                const actual = filterByPosition(value)(player);
                const expected = false;
                expect(actual).toEqual(expected);
            });
        });
        describe('ByAge', () => {
            it('Should return TRUE if both filter and value match', () => {
                const player = getPlayer({ name: 'Player 3', position: Position.KEEPER, age: 27 });
                const value = '27';
                const actual = filterByAge(value)(player);
                const expected = true;
                expect(actual).toEqual(expected);
            });
            it('Should return FALSE if the provided filter can`t match with the value', () => {
                const player = getPlayer({ name: 'Player 3', position: Position.ATTACKING_MIDFIELD, age: 24 });
                const value = '27';
                const actual = filterByAge(value)(player);
                const expected = false;
                expect(actual).toEqual(expected);
            });
        });
    });
    describe('getFilteredPlayers', () => {
        const selector = getFilteredPlayers.resultFunc;

        const players: Player[] = [
            getPlayer({ name: 'Player 1', position: Position.ATTACKING_MIDFIELD, age: 27 }),
            getPlayer({ name: 'Player 2', position: Position.CENTRAL_MIDFIELD, age: 22 }),
            getPlayer({ name: 'Player 3', position: Position.CENTRE_BACK, age: 30 }),
            getPlayer({ name: 'Player 4', position: Position.ATTACKING_MIDFIELD, age: 18 }),
        ];
        it('should return a non filtered list of results', () => {
            const filters: Partial<FormFiltersFormData> = {};
            const actual = selector(filters, players);
            const expected = players;
            expect(actual).toEqual(expected);
        });

        it('should return a list of players filtered items by name', () => {
            const filters: Partial<FormFiltersFormData> = {
                name: '2',
            };
            const actual = selector(filters, players);
            const expected = [getPlayer({ name: 'Player 2', position: Position.CENTRAL_MIDFIELD, age: 22 })];
            expect(actual).toEqual(expected);
        });

        it('should return a list of players filtered items by position', () => {
            const filters: Partial<FormFiltersFormData> = {
                position: Position.ATTACKING_MIDFIELD,
            };
            const actual = selector(filters, players);
            const expected = [
                getPlayer({ name: 'Player 1', position: Position.ATTACKING_MIDFIELD, age: 27 }),
                getPlayer({ name: 'Player 4', position: Position.ATTACKING_MIDFIELD, age: 18 }),
            ];
            expect(actual).toEqual(expected);
        });

        it('should return a list of players filtered items by age', () => {
            const filters: Partial<FormFiltersFormData> = {
                age: '2',
            };
            const actual = selector(filters, players);
            const expected = [
                getPlayer({ name: 'Player 1', position: Position.ATTACKING_MIDFIELD, age: 27 }),
                getPlayer({ name: 'Player 2', position: Position.CENTRAL_MIDFIELD, age: 22 }),
            ];
            expect(actual).toEqual(expected);
        });

        it('should return a list of players filtered items by name & position', () => {
            const filters: Partial<FormFiltersFormData> = {
                name: 'Player',
                position: Position.CENTRAL_MIDFIELD,
            };
            const actual = selector(filters, players);
            const expected = [getPlayer({ name: 'Player 2', position: Position.CENTRAL_MIDFIELD, age: 22 })];
            expect(actual).toEqual(expected);
        });

        it('should return a list of players filtered items by name & age', () => {
            const filters: Partial<FormFiltersFormData> = {
                name: 'Player',
                age: '8',
            };
            const actual = selector(filters, players);
            const expected = [getPlayer({ name: 'Player 4', position: Position.ATTACKING_MIDFIELD, age: 18 })];
            expect(actual).toEqual(expected);
        });

        it('should return a list of players filtered items by name, position & age', () => {
            const filters: Partial<FormFiltersFormData> = {
                name: 'Player',
                age: '3',
                position: Position.CENTRE_BACK,
            };
            const actual = selector(filters, players);
            const expected = [getPlayer({ name: 'Player 3', position: Position.CENTRE_BACK, age: 30 })];
            expect(actual).toEqual(expected);
        });
    });
});
