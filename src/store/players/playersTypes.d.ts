export interface ResponsePlayer {
    contractUntil: string;
    dateOfBirth: string;
    jerseyNumber: number;
    name: string;
    nationality: string;
    position: string;
}

export interface Player extends ResponsePlayer {
    id: string;
    age: string;
}

export interface GetPlayersResponse extends Array<ResponsePlayer> {}