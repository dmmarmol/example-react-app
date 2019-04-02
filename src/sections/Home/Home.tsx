import * as React from 'react';
import { connect } from 'react-redux';
import { AppBar, Grid, Table, Gap, Shirt } from 'components';
import { Player } from 'store/players/playersTypes';

import { AppState } from 'store/store-types';
import { getPlayers } from 'store/players/actions';

import Filters from './components/Filters';
import { getFilteredPlayers } from 'store/form/filters/selectors';
import { Paper } from '@material-ui/core';
interface IHomeProps {
    players: Player[];
    getPlayers: typeof getPlayers;
}

class Home extends React.Component<IHomeProps> {
    componentDidMount() {
        this.props.getPlayers();
    }

    public render() {
        return (
            <>
                <AppBar position="static" />
                <Grid item>
                    <Gap size="lg" all>
                        <Filters />
                    </Gap>
                    <Paper>
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
                    </Paper>
                </Grid>
            </>
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
)(Home);
