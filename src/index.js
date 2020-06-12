import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './static/css/common.less'
import './static/css/font.css'
import './static/css/iconfont.css'
import AppRouter from './router/AppRouter'
import configureStore from './store'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)

