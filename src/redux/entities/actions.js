import {MERGE_ENTITIES, REMOVE_ENTITY} from './constants'

let taskId = 3;

// const generatedId = ((first) => () => first++)(0)

export const addTask = (task) => {
  const id = ('id' in task) ? task.id : taskId++;
  return {
    type: MERGE_ENTITIES,
    entityId: id,
    payload: {
      [id]: {
        id,
        ...task
      }
    }
  }
};

export const removeTask = (taskId) => ({
  type: REMOVE_ENTITY,
  payload: {
    id: taskId, entity: 'tasks'
  }
});
