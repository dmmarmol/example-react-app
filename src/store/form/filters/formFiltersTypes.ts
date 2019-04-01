export enum Position {
    ATTACKING_MIDFIELD = 'Attacking Midfield',
    CENTRAL_MIDFIELD = 'Central Midfield',
    CENTRE_BACK = 'Centre-Back',
    CENTRE_FORWARD = 'Centre-Forward',
    DEFENSIVE_MIDFIELD = 'Defensive Midfield',
    KEEPER = 'Keeper',
    LEFT_MIDFIELD = 'Left Midfield',
    LEFT_WING = 'Left Wing',
    LEFT_BACK = 'Left-Back',
    RIGHT_BACK = 'Right-Back',
}

export interface FormFiltersFormData {
    name: string;
    position: Position;
    age: string;
}
