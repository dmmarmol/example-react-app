export type IAppColors = 'primary' | 'secondary' | 'dark' | 'light' | 'highlight';
export type IAppSize = 'xs' | 'sm' | 'md' | 'lg';
export type IAppTypes = 'primary' | 'secondary' | 'highlight';

export interface Entity {
    id: string;
    name: string;
}

export enum FetchStatus {
    IDLE = 'idle',
    START = 'start',
    SUCCESS = 'success',
    FAILURE = 'failure',
}
