export default class sentenceHistoricalService {

    constructor() {
	    this.sentences = [];
    }

    add(sentence) {
        this.sentences.push(sentence);
    }

    get() {
        return this.sentences;
    }

}