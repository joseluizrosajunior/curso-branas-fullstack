import Board from "./Board";

export default class Column {
    constructor(readonly id: number, readonly title: string, readonly description: string, readonly board: Board) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.board = board;
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

    getBoard() {
        return this.board;
    }
}