export class Vote {
    constructor(vote: number) {}

    private vote : number;

    increment() : void {
        this.vote++;
    }

    decrement() : void {
        this.vote--;
    }

    get voteCount() : number {
        return this.vote;
    }
}
