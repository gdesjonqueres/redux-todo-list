import { visibilityFilters } from '../actions'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
