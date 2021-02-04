import { AppProps } from 'next/app'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer, { RootState } from '../reducers'
import rootSaga from '../sagas'

interface Props extends AppProps {
  store: Store<RootState>
}

interface IStore extends Store {
  sagaTask?: Task
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  const store: IStore = createStore(reducer, enhancer)
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
})

export default wrapper
