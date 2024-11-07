import React from 'react'
import Counter from './pembahasan/counter';
import store from '../../app/store'
import { Provider } from 'react-redux';

const Redux = () => {
  return (
    <div>
        <Provider store={store}>
        <Counter/>
        </Provider>
    </div>
  )
}

export default Redux;