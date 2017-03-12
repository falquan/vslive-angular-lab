import { Vote } from './vote.model'

export class Joke {
    static JOKE : Joke = new Joke('poop', 'more poop');

    constructor(setup:string, punchline:string) {
        this.setup = setup;
        this.punchline = punchline;
    }

    private setup : string;
    private punchline : string;

    private lols? : Vote;
    private groans? : Vote;
    private source? : string;

    groanCount() : number {
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

    lolCount() : number {
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
