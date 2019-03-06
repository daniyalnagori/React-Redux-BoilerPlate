import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './Reducers'
import rootEpic from './Epics'

// For initialize in application
const epicMiddleware = createEpicMiddleware()

function configureStore() {
    return createStore(rootReducer, applyMiddleware(epicMiddleware));
}
epicMiddleware.run(rootEpic)
export const store = configureStore();