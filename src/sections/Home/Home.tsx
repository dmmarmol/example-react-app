import * as React from 'react';
import { connect } from 'react-redux';
import { AppBar, Row, Col, Grid, Table } from 'components';
import { Player } from 'store/players/playersTypes';

import { AppState } from 'store/store-types';
import { getPlayers } from 'store/players/actions';

import Filters from './components/Filters';
import { getFilteredPlayers } from 'store/form/filters/selectors';
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
                <Grid>
                    <Filters />
                    <Row bottom="sm">
                        <Col sm={12}>
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
                                    {this.props.players.map(player => (
                                        <Table.Row key={player.id}>
                                            <Table.Cell>{player.name}</Table.Cell>
                                            <Table.Cell>{player.position}</Table.Cell>
                                            <Table.Cell>{player.jerseyNumber}</Table.Cell>
                                            <Table.Cell>{player.age} years</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Col>
                    </Row>
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
