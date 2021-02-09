import { RowID, RowElement } from './interface';

expport type insertRow = (row: RowElement) => number;
export type deleteRow = (rowId: RowID) => void;
export type updateRow = (rowId: RowID, row: RowElement) => number;
