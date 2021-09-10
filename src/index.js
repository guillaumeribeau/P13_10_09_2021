import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from './reducers'
import { getUser } from './actions/signIn.action';


const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(getUser());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    
  document.getElementById('root')
);


