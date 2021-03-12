// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER
// } from "redux-persist";
// import { composeWithDevTools } from 'redux-devtools-extension';

import contactsReducer from './phoneBook/phoneBook-reducer';

// const store = configureStore(rootReducer, composeWithDevTools());

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter']
// }

// const myMiddleware = store => next => action => {


//   next(action);
// }

const store = configureStore({
  reducer:
  {
    // contacts: persistReducer(contactsPersistConfig, contactsReducer)
    contacts: contactsReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  //   }
  // })
  middleware: [...getDefaultMiddleware(),]
});

// const persistor = persistStore(store);

// export  { store, persistor };
export  { store };
