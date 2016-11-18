import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TodoApp from './container/todoapp.js'
import combine_reducer from './reducer/'

const store = createStore(combine_reducer);

render(
  <Provider store={store}>
  <TodoApp/>
</Provider>, document.getElementById('app'))
