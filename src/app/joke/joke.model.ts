import { Vote } from './vote.model'

export class Joke {
    static JOKE : Joke = new Joke('poop', 'more poop');
    static JOKE_DB : Array<Joke> = [
      new Joke('poop', 'more poop'),
      new Joke('shit', 'more shit')
    ];

    constructor(setup:string, punchline:string) {
        this.setup = setup;
        this.punchline = punchline;
    }

    public setup : string;
    public punchline : string;

    public lols? : Vote;
    public groans? : Vote;
    public source? : string;

    get groanCount() : number {
        if (this.groans) {
            return this.groans.voteCount;
        }

        return 0;
    }

    addGroan() : void {
        if (this.groans) {
            this.groans.increment();
        }
    }

    get lolCount() : number {
        if (this.lols) {
            return this.lols.voteCount;
        }

        return 0;
    }

    addLol() : void {
        if (this.lols) {
            this.lols.increment();
        }
    }

    toString() : string {
        return `${this.setup} ${this.punchline}`;
    }
}
