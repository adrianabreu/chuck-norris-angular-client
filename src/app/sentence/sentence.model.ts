export interface Value {
    id: number;
    joke: string;
}

export class SentenceModel {
    type: string;
    value: Value;
    categories: string[];
}

export interface IJoke {
    id?: number,
    joke?: string,
    categories?: string[],
}

export interface IRandomJoke {
    type?: string,
    value?: IJoke
}