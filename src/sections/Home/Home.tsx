import * as React from 'react';
import { connect } from 'react-redux';
import { Title, Row, Col, Grid, Form, Button, Input, Table } from 'components';
import SelectPosition from './components/SelectPosition';
import { Player } from 'store/players/playersTypes';
import { getPlayersTableRows } from 'store/players/selectors';
import { AppState } from 'store/store-types';
import { getPlayers } from 'store/players/actions';

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
            <Grid>
                <Row bottom="sm">
                    <Col sm={12}>
                        <Title>Football Player Finder</Title>
                    </Col>
                </Row>
                <Form>
                    <Row bottom="sm">
                        <Col sm={3}>
                            <Input placeholder="Player name" />
                        </Col>
                        <Col sm={3}>
                            <SelectPosition />
                        </Col>
                        <Col sm={3}>
                            <Input placeholder="Age" />
                        </Col>
                        <Col sm={3}>
                            <Button variant="contained" color="primary">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
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
                                        <Table.Cell>{player.age}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default connect(
    (state: AppState) => ({
        players: getPlayersTableRows(state),
    }),
    {
        getPlayers,
    },
)(Home);
