export interface Value {
    id: number;
    joke: string;
}

export class SentenceModel {
    type: string;
    value: Value;
    categories: string[];
}