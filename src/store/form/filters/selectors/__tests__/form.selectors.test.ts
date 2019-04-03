import { Position } from 'store/form/filters/formFiltersTypes';
import { Player } from 'store/players/playersTypes';
import { FormFiltersFormData } from './../../formFiltersTypes';
import { getFilteredPlayers } from 'store/form/filters/selectors';
describe('Form Selectors', () => {
    describe('getFilteredPlayers', () => {
        const selector = getFilteredPlayers.resultFunc;
        const getPlayer = (props?: Partial<Player>) => ({ ...props } as Player);

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
