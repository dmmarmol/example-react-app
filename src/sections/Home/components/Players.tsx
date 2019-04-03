import * as React from 'react';
import { Table, Shirt, Gap } from 'components';
import { getFilteredPlayers } from 'store/form/filters/selectors';
import { connect } from 'react-redux';
import { AppState } from 'store/store-types';
import { Player } from 'store/players/playersTypes';
import { getPlayers } from 'store/players/actions';

interface PlayersProps {
    players: Player[];
    getPlayers: typeof getPlayers;
}

class Players extends React.Component<PlayersProps> {
    componentDidMount() {
        this.props.getPlayers();
    }
    render() {
        return (
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell>Player</Table.Cell>
                        <Table.Cell>Position</Table.Cell>
                        <Table.Cell>Jersey #</Table.Cell>
                        <Table.Cell>Age</Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {this.props.players.length ? (
                        this.props.players.map(player => (
                            <Table.Row key={player.id}>
                                <Table.Cell>{player.name}</Table.Cell>
                                <Table.Cell>{player.position}</Table.Cell>
                                <Table.Cell>
                                    <Shirt number={player.jerseyNumber} />
                                </Table.Cell>
                                <Table.Cell>{player.age} years</Table.Cell>
                            </Table.Row>
                        ))
                    ) : (
                        <Table.Row>
                            <Table.Cell>
                                <Gap all size="lg">
                                    <p>No Players Found</p>
                                </Gap>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        );
    }
}

export default connect(
    (state: AppState) => ({
        players: getFilteredPlayers(state),
    }),
    {
        getPlayers,
    },
)(Players);
