import * as types from 'redux/entities/constants'
import * as actions from 'redux/entities/actions'
import reducer from 'redux/entities/reducer'

const previousState = {
  result: [0],
  tasks: {"0": {}}
}

describe('Entities reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      "result": [
        0,
        1,
        2
      ],
      "tasks": {
        "0": {
          "id": 0,
          "name": "Task 0",
          "owner": "Pablo Escobar",
          "priority": 0
        },
        "1":  {
          "id": 1,
          "name": "Task 1",
          "owner": "Pablo Escobar",
          "priority": 1
        },
        "2":  {
          "id": 2,
          "name": "Task 1",
          "owner": "Pablo Escobar",
          "priority": 2
        }
      }
    };
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle MEREGE_ENTITIES action', () => {

    const expectedState = {
      result: [0, 1],
      tasks: {"0": {}, "1": {}}
    }

    const action = {
      type: types.MERGE_ENTITIES,
      entityId: 1,
      payload: {"1": {}}
    }
    expect(reducer(previousState, action)).toEqual(expectedState)
  })
})
