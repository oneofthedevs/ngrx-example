import { Tutorial } from '../models/tutorial.model';
import * as TutorialAddRemove from '../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Hello',
  url: 'https://www.google.com'
};

// tslint:disable-next-line: typedef
export function reducer(state: Tutorial[] = [initialState], action: TutorialAddRemove.Actions) {
  switch (action.type) {
    case TutorialAddRemove.ADD_TUTORIAL:
      return [...state, action.payload];
    default:
      return state;
  }
}
