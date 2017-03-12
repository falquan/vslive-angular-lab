export class Vote {
    constructor(public vote: number) {}

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
