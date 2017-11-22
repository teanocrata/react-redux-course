import TaskDetailPage from 'components/pages/TaskDetailPage'
import { shallow } from 'enzyme'
import React from 'react'

describe('Task detail page component', ()=>{
  it('should render without breaking', () =>{
    const componentInstance = shallow(<TaskDetailPage/>);
    expect(componentInstance).not.toBeUndefined();
  });
});
