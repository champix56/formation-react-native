import {combineReducers, createStore} from 'redux';
import modalReducer from './modalReducer';
import navigationReducer from './navigationReducer';
export const initialState = {
  solde: 0.0,
  transactions: [],
};

const montantDuVol = 100.0;

const comptesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      const p1 = fetch('http://localhost:5679/transactions').then(f =>
        f.json(),
      );
      const p2 = fetch('http://localhost:5679/data').then(f => f.json());
      Promise.all([p1, p2]).then(arr_arr => {
        console.log(arr_arr);
        store.dispatch({
          type: 'INITIAL_DATAS',
          value: {transactions: arr_arr[0], solde: arr_arr[1].solde},
        });
      });
      return state;
    case 'INITIAL_DATAS':
      return {
        ...state,
        transactions: action.value.transactions,
        solde: action.value.solde,
      };
    case 'DEPOT':
      fetch('http://localhost:5679/transactions', {
        method: 'POST',
        body: JSON.stringify(action.value),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(f => store.dispatch({type: 'INIT'}));
      return state;

    case 'RETRAIT':
      return {
        ...state,
        transactions: [...state.transactions, action.value],
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

const store = createStore(
  combineReducers({
    data: comptesReducer,
    modal: modalReducer,
    navigation: navigationReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'INIT'});

// store.dispatch({
//   type: 'RETRAIT',
//   value: {libelle: 'Bar des 2 montargis', price: -100},
// });
// // store.dispatch({
//   type: 'DEPOT',
//   value: {libelle: 'Salaire du black', price: 1200},
// });
// store.dispatch({type: 'RETRAIT', value: {libelle: 'Bar du coin', price: -200}});
// store.dispatch({type: 'DEPOT', value: {libelle: 'Fraude impot', price: -800}});

export default store;
