import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './pokemonApi';

export const store = configureStore({
        reducer: {
            [pokemonApi.reducerPath]: pokemonApi.reducer,
        },
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware),
    },
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))


setupListeners(store.dispatch)