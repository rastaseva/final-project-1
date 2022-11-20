import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './pokemonApi';
import { rootReducer } from './rootReducer'

export const store = configureStore({
        reducer: {
            rootReducer,
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