import React from 'react';

import HomePage from '../page/HomePage/HomePage';

const initialState = {
  page: <HomePage />,
  name: 'home',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO':
      console.trace(action);
      return {page: action.value, name: action.name};
    default:
      return state;
  }
};
