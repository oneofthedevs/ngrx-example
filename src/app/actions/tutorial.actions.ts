import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[Tutorial] Add';
export const REMOVE_TUTORIAL = '[Tutorial] Remove';

export class AddTut implements Action {
  readonly type: string = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {

  }
}
export class RemoveTut implements Action {
  readonly type: string = REMOVE_TUTORIAL;

  constructor(public payload: number) {

  }
}

export type Actions = AddTut | RemoveTut;
