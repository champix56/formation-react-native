import {createStore} from 'redux';

export const initialState = {
  solde: 0.0,
  transactions: [],
};

const montantDuVol = 100.0;

const comptesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOT':
      return {
        ...state,
        transactions: [...state, action.value],
        solde: state.solde + action.value.price,
      };

    case 'RETRAIT':
      return {
        ...state,
        transactions: [...state, action.value],
        solde: state.solde + action.value.price,
      };

    case 'VOL_TENUE_COMPTE':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {libelle: "J'aime mon client, ton conseiller", price: montantDuVol},
        ],
        solde: state.solde - montantDuVol,
      };

    default:
      return state;
  }
};

const store = createStore(comptesReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'DEPOT', value: {libelle: 'Salaire', price: 2400}});
store.dispatch({
  type: 'RETRAIT',
  value: {libelle: 'Bar des 2 montargis', price: -100},
});
store.dispatch({
  type: 'DEPOT',
  value: {libelle: 'Salaire du black', price: 1200},
});
store.dispatch({type: 'RETRAIT', value: {libelle: 'Bar du coin', price: -200}});
store.dispatch({type: 'DEPOT', value: {libelle: 'Fraude impot', price: -800}});

export default store;
