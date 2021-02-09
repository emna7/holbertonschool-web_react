/// <reference path="crud.d.ts"/>
import {RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
console.log(newRowID);
const updatedRow: RowElement = {'age': 23, ...row};
CRUD.updateRow(newRowID, updatedRow);
console.log(updatedRow);
CRUD.deleteRow(newRowID);
