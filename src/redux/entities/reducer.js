import {normalize} from 'normalizr'
import taskListSchema from 'schemas/task';
import merge from 'lodash/fp/merge'

import {MERGE_ENTITIES, REMOVE_ENTITY} from './constants'

import taskMock from 'mocks/tasks.json';
const normalizedData = normalize(taskMock, taskListSchema);

const INITIAL_STATE = {
  ...normalizedData.entities,
  result: normalizedData.result
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MERGE_ENTITIES:
      return {
        tasks: merge(action.payload, state.tasks),
        result: [...state.result, action.entityId]
      };
    case REMOVE_ENTITY:
      const newState = {...state};
      delete newState[action.payload.entity][action.payload.id]
      newState.result = newState.result.filter(id => id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}

/* Selectors */
export const getTasks = state =>
  state.entities.result.map( id => state.entities.tasks[id])
