import actionCreator from '../playersActionCreator';

const ACTION_NAME = 'GET_PLAYERS';

export const getPlayers = actionCreator(ACTION_NAME);
export const getPlayersAsync = actionCreator.async(ACTION_NAME);
