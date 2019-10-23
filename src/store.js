import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import rootSagas from './sagas/root';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootSagas)

export default store;