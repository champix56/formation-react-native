import ActionTransact from '../components/ActionTransact/ActionTransact';
import React from 'react';

const initialState = {
  children: null,
};

export const MODAL_ACTIONS = Object.freeze({
  SHOW: 'SHOW_MODAL',
  HIDE: 'HIDE_MODAL',
});
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MODAL_ACTIONS.SHOW:
      return {...state, children: action.value};
    case 'RETRAIT':
    case 'DEPOT':
    case MODAL_ACTIONS.HIDE:
      return {...state, children: null};

    default:
      return state;
  }
};
