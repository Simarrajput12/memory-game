
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    flippCard: {
        transform: [
            { rotate: '0deg' },

        ],
        position: 'absolute',
    },
    noFlip: {
        transform: [
            { rotateX: '90deg' },

        ],
        position: 'absolute',
    },
    image: {
        height: 80,
        width: 80,
        margin:2
    },
})

export default styles;