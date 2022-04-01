import Board from "../../../src/domain/entities/Board";
import Column from "../../../src/domain/entities/Column";

test('Deve criar um board', () => {
    const board = new Board(1, 'Titulo', 'Descricao');
    expect(board.getId()).toBe(1);
    expect(board.getTitle()).toBe('Titulo');
    expect(board.getDescription()).toBe('Descricao');
});

test('Deve criar as colunas do board', () => {
    const board = new Board(1, 'Titulo', 'Descricao');
    const column = new Column(1, 'Titulo', 'Descricao', board);
    expect(column.getId()).toBe(1);
    expect(column.getTitle()).toBe('Titulo');
    expect(column.getDescription()).toBe('Descricao');
    expect(column.getBoard()).toBe(board);
});