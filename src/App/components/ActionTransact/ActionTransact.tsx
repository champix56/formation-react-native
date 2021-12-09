import {PROPERTY_TYPES} from '@babel/types';
import React, {useEffect, useState} from 'react';
import {Image, Switch, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {MODAL_ACTIONS} from '../../store/modalReducer';
import Button from '../Button/Button';

import {styles} from './ActionTransact.style';

interface ActionTransactProps {
  onCancel: Function;
  onOk: Function;
}

const ActionTransact: React.FC<ActionTransactProps> = props => {
  const [libele, setlibele] = useState('');
  const [price, setprice] = useState('0.0');
  const [actionType, setActionType] = useState(true);

  useEffect(() => {
    const pfprice = parseFloat(price);
    if (pfprice > 0) {
      setprice(pfprice.toFixed(2));
    } else {
      setprice('0');
    }
  }, [price]);

  return (
    <View data-testID="ActionTransact" style={styles.ActionTransact}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginBottom: 5,
        }}>
        <Text>Enregistrer Transaction</Text>
      </View>
      <View
        style={{
          flexGrow: 1,
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginBottom: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flexGrow: 1, textAlign: 'right'}}>Credit</Text>
          <Switch
            value={actionType}
            onValueChange={isCredit => {
              setActionType(isCredit);
            }}
          />
          <Text style={{flexGrow: 1}}>Debit</Text>
        </View>
        <View>
          <Text>Libele</Text>
          <TextInput
            value={libele}
            onChangeText={(inputValue: string) => {
              setlibele(inputValue);
            }}
          />
        </View>
        <View>
          <Text>Montant</Text>
          <TextInput
            keyboardType="decimal-pad"
            value={price}
            onChangeText={(inputValue: string) => {
              setprice(inputValue);
            }}
          />
        </View>
        <Text>
          {libele}/{price}
        </Text>
        <Text>{JSON.stringify(actionType)}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            text="OK"
            bgColor="skyblue"
            onTap={() => {
              props.onOk(actionType ? 'RETRAIT' : 'DEPOT', {
                libelle: libele,
                price: actionType ? -Number(price) : Number(price),
              });
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('./../../../assets/images/cross_icon.png')}
            />
          </Button>
          <Button
            text="Cancel"
            bgColor="tomato"
            onTap={() => {
              props.onCancel();
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('./../../../assets/images/cross_icon.png')}
            />
          </Button>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state: any, own: any) {
  return own;
}
function mapDispatchToProps(dispatch: Function) {
  return {
    onCancel: () => {
      dispatch({type: MODAL_ACTIONS.HIDE});
    },
    onOk: (actionType: string, value: {libele: string; price: number}) => {
      if (value.price !== 0) {
        dispatch({type: actionType, value: value});
      }
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ActionTransact);
