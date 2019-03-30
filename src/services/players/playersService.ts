import Client from 'services/Client';
import { GetPlayersResponse } from 'store/players/playersTypes';
import { AxiosPromise } from 'axios';

const request = new Client('https://football-players-b31f2.firebaseio.com/');

export const getPlayers = (): AxiosPromise => request.get<GetPlayersResponse>('players.json');
