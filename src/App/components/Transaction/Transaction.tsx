import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './Transaction.style';

interface TransactionProps {
  type: string;
  libelle: string;
  price: number;
}

const Transaction: React.FC<TransactionProps> = ({type, libelle, price}) => {
  return (
    <View data-testID="Transaction" style={styles.Transaction}>
      {type === 'retrait' ? (
        <Image
          style={{width: 25, height: 25}}
          source={require('./../../../assets/images/arrow_down_go_two_up_icon.png')}
        />
      ) : (
        <Image
          style={{width: 25, height: 25}}
          source={require('./../../../assets/images/share_icon.png')}
        />
      )}
      <Text style={styles.libelle}>{libelle}</Text>
      <Text style={styles.price}>{Math.abs(price)}€</Text>
    </View>
  );
};

export default Transaction;
