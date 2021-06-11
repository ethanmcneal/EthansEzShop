import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator'



const DefaultRootState = combineReducers({
  products: productsReducer
});

const store = createStore(DefaultRootState);

export default function App() {
  return (
    <Provider store={store}>
    <ShopNavigator />
    </Provider>
  );
}
