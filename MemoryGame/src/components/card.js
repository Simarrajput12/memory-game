
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';

function Card({ card, handleChoice, flipp, disabled }) {


    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <View>
            <View key={card.id}>
                <TouchableOpacity>
                    <Image source={card.src} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClick} style={!flipp ? styles.flippCard : styles.noFlip}>
                    <Image source={require('../images/cover.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card;
