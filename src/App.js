import React, { Component } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'

// import { visibilityFilters } from './actions'
// const preloadedState = {
//   todos: [],
//   visibilityFilter: visibilityFilters.SHOW_ALL
// }

const store = createStore(
  rootReducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App
