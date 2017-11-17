import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TodoListPage from 'components/pages/TodoListPage'
import TaskDetailPage from 'components/pages/TaskDetailPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TodoListPage}/>
    <Route
      path="/tasks/:id"
      component={TaskDetailPage}
      onEnter={(...args)=>{console.log(args);}}
    />
  </Switch>
)

export default Routes;
