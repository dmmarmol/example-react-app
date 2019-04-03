import { Position } from 'store/form/filters/formFiltersTypes';
import { getPlayersTableRows, getPositionList } from 'store/players/selectors';
import { getPlayersList } from '../getPlayers.selectors';
import { Player } from '../../playersTypes';
import { beautifyString } from 'components/utils';

describe('GetPlayers Selectors', () => {
    const getPlayer = (props?: Partial<Player>) => ({ ...props } as Player);
    describe('getPlayersList', () => {
        const selector = getPlayersList.resultFunc;
        it('should return an array of players', () => {
            const players = {
                'Player #1': getPlayer({ name: 'Player #1' }),
                'Player #2': getPlayer({ name: 'Player #2' }),
            };
            const actual = selector(players);
            const expected = [{ name: 'Player #1' }, { name: 'Player #2' }];

            expect(actual).toEqual(expected);
        });
    });

    describe('getPlayersTableRows', () => {
        const selector = getPlayersTableRows.resultFunc;
        it('should return a list of Players with new properties', () => {
            const players = [
                getPlayer({
                    name: 'Player #1',
                    position: Position.ATTACKING_MIDFIELD,
                    dateOfBirth: '1999-01-01',
                }),
                getPlayer({
                    name: 'Player #2',
                    position: Position.DEFENSIVE_MIDFIELD,
                    dateOfBirth: '1989-01-01',
                }),
            ];
            const actual = selector(players);
            const expected = [
                {
                    ...players[0],
                    id: '0',
                    position: beautifyString(Position.ATTACKING_MIDFIELD),
                    age: 20,
                },
                {
                    ...players[1],
                    id: '1',
                    position: beautifyString(Position.DEFENSIVE_MIDFIELD),
                    age: 30,
                },
            ];
            expect(actual).toEqual(expected);
        });
    });

    describe('getPositionList', () => {
        const selector = getPositionList;
        it('should get a valid list of Position to fill a <Select />', () => {
            enum positions {
                POSITION_NAME_1 = 'Position Name 1',
                POSITION_NAME_2 = 'Position Name 2',
            }

            const expected = [
                { id: 'position-name_1', name: 'Position Name 1' },
                { id: 'position-name_2', name: 'Position Name 2' },
            ];

            const actual = selector(positions);
            expect(actual).toEqual(expected);
        });
    });
});
