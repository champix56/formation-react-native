import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import Transaction from '../Transaction/Transaction';
import Button from './../Button/Button';

import {styles} from './HomePage.style';

interface HomePageProps {
  transactions: Array<{
    id?: number;
    type: string;
    libelle: string;
    price: number;
  }>;
  solde: number;
  action: Function;
}
//const initialState = {};

const HomePage: React.FC<HomePageProps> = ({transactions, solde, action}) => {
  //const [state, setstate] = useState(initialState);

  // useEffect(() => {
  //   //didMOunt//didUpdate
  //   setstate({name: 'name'});
  //   return () => {
  //     //willUnmount
  //   };
  // }, [state]);

  return (
    <View data-testID="HomePage" style={styles.HomePage}>
      <View style={styles.header}>
        <View style={styles.imgHeader}>
          <Image
            style={{width: '100%', height: 150}}
            source={require('./../../../assets/images/NoelseAmbassadorDigital.png')}
          />
        </View>
      </View>
      <View style={styles.header2}>
        <View style={styles.containerButtons}>
          <Button
            text="Dépôt"
            bgColor="orange"
            onTap={() =>
              action({type: 'depot', libelle: 'test depot', price: 500})
            }>
            <Image
              style={{width: 25, height: 25}}
              source={require('./../../../assets/images/cross_icon.png')}
            />
          </Button>
          <Button
            text="Retrait"
            bgColor="green"
            onTap={() =>
              action({type: 'retrait', libelle: 'test retrait', price: -500})
            }>
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

export default HomePage;
