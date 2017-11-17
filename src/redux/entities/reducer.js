import {normalize} from 'normalizr'
import taskListSchema from 'schemas/task';
import merge from 'lodash/fp/merge'

import {MERGE_ENTITIES, REMOVE_TASK} from './constants'

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
    case REMOVE_TASK:
      return {
        list: state.list.filter(task => task.id !== action.payload)
      }
    default:
      return state;
  }
}

/* Selectors */
export const getTasks = state =>
  state.entities.result.map( id => state.entities.tasks[id])
