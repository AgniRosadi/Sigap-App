import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'
import { Logo } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground style={styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009970'
    },

    Logo: {
        width: 222,
        height: 105
    }
})
