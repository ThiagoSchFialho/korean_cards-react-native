import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/cardsStyles';

function CardsScreen( {route} ) {

    const { lista } = route.params;

    return(
        <View style={styles.view}>
            <Text style={styles.text}>
                {lista}
            </Text>
        </View>
    );
};

export default CardsScreen;