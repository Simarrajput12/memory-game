import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/card';
import styles from './styles';


const cardImage = [

    {
        src: require("../images/girl-1.png"), match: false
    },
    {
        src: require("../images/helmet-1.png"), match: false
    },
    {
        src: require("../images/potion-1.png"), match: false
    },
    {
        src: require("../images/reacticon-1.png"), match: false
    },
    {
        src: require("../images/ring-1.png"), match: false
    },
    {
        src: require("../images/scroll-1.png"), match: false
    },
    {
        src: require("../images/shield-1.png"), match: false
    },
    {
        src: require("../images/sword-1.png"), match: false
    }

]


const MemoryGame = () => {

    const [cards, setCards] = useState([])
    const [turn, setTurn] = useState(0)
    const [chooseOne, setChooseOne] = useState(null)
    const [chooseTwo, setChooseTwo] = useState(null)
    const [matchCount, setMatchCount] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const shuffleCard = () => {
        const newSuffleCard = [...cardImage, ...cardImage]
            .sort(() => Math.random() - 0.5)
            ?.map((item) => ({ ...item, id: Math.random() }))
        setChooseOne(null)
        setChooseTwo(null)
        setCards(newSuffleCard)
        setTurn(0)
        setMatchCount(0)
    }

    const handleChoice = (card) => {
        chooseOne ? setChooseTwo(card) : setChooseOne(card)
    }

    const resetTurn = () => {
        setChooseOne(null)
        setChooseTwo(null)
        setTurn(prevState => prevState + 1)
        setDisabled(false)
    }


    useEffect(() => {
        if (chooseOne && chooseTwo) {
            setDisabled(true)
            if (chooseOne.src === chooseTwo.src) {
                setMatchCount(prevState => prevState + 1)
                setCards(prevState => {
                    return prevState?.map(card => {
                        if (card.src === chooseOne.src) {

                            return { ...card, match: true }

                        }
                        else {
                            return card

                        }
                    })
                })
                resetTurn()
            }
            else {
                setTimeout(() => resetTurn(), 500)
            }
        }

    }, [chooseOne, chooseTwo])

    useEffect(() => {
        shuffleCard()
    }, [])

    const renderSwipeCard = () => {
        return cards?.map((item) => {
            return (
                <Card
                    card={item}
                    handleChoice={handleChoice}
                    key={item.id}
                    flipp={item === chooseOne || item === chooseTwo || item.match}
                    disabled={disabled}
                />
            );
        })
    };

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.textStyle}>Memory Game</Text>
            </View>
            <TouchableOpacity style={styles.newGameButton} onPress={shuffleCard}>
            <Text style={styles.textStyle1}>{"New Game"}</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.wrap}>
                    {renderSwipeCard()}
                </View>
            </ScrollView>
            {matchCount == 8 ? <Text style={styles.winner}>{"Congratulation you win!!"}</Text>: null}
            <Text style={styles.text1}>Turns: {turn}</Text>
            <Text style={styles.text1}>Matches: {matchCount}</Text>
        </View>
        </SafeAreaView>
    )
}

export default MemoryGame;
