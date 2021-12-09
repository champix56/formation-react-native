import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {MODAL_ACTIONS} from '../../store/modalReducer';
import store from '../../store/store';
import ActionTransact from '../../components/ActionTransact/ActionTransact';
import Transaction from '../../components/Transaction/Transaction';
import Button from '../../components/Button/Button';

import {styles} from './HomePage.style';

interface HomePageProps {
  transactions: Array<{
    id?: number;
    type: string;
    libelle: string;
    price: number;
  }>;
  solde: number;
  makeTransact: Function;
}
//const initialState = {};

const HomePage: React.FC<HomePageProps> = ({
  transactions,
  solde,
  makeTransact,
}) => {
  return (
    <View data-testID="HomePage" style={styles.HomePage}>
      <View style={styles.header}>
        <View style={styles.imgHeader}>
          <Image
            style={{width: '100%', height: 150}}
            source={require('../../../assets/images/NoelseAmbassadorDigital.png')}
          />
        </View>
      </View>
      <View style={styles.header2}>
        <View style={styles.containerButtons}>
          {/* <Button
            text="Dépôt"
            bgColor="orange"
            onTap={() =>
              action({type: 'depot', libelle: 'test depot', price: 500})
            }>
            <Image
              style={{width: 25, height: 25}}
              source={require('./../../../assets/images/cross_icon.png')}
            />
          </Button> */}
          <Button
            text="Transaction"
            bgColor="green"
            onTap={() => {
              // store.dispatch({
              //   type: MODAL_ACTIONS.SHOW,
              //   value: <ActionTransact />,
              // });
              makeTransact();
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('./../../../assets/images/cross_icon.png')}
            />
          </Button>
        </View>
        <Text style={styles.solde}>Solde : {solde}€</Text>
      </View>
      <ScrollView contentContainerStyle={{}}>
        {transactions.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            libelle={item.libelle}
            price={item.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};
function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state.data,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {
    makeTransact: () =>
      dispatch({type: MODAL_ACTIONS.SHOW, value: <ActionTransact />}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
