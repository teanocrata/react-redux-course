import React from 'react'
import {shallow} from 'enzyme'
import TaskList from 'components/Tasks/TaskList'

describe('Task list component', () => {
  it('should render as many children as its "tasks" prop', () => {
    const tasks = [
      {
        id: 1,
        name: 'bla',
        priority: 0,
        owner: 'pepe'
      },
      {
        id: 2,
        name: 'bla',
        priority: 0,
        owner: 'pepe'
      },
      {
        id: 3,
        name: 'bla',
        priority: 0,
        owner: 'pepe'
      }
    ]
    const wrapper = shallow(<TaskList tasks={tasks}/>)
    expect(wrapper.children().length).toBe(tasks.length)
  })
})
