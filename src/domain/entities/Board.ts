export default class Board {
    constructor(readonly id: number, readonly title: string, readonly description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
}